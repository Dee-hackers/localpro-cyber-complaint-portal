
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ModulesList from '@/components/learning/ModulesList';
import QuizQuestion from '@/components/learning/QuizQuestion';
import QuizResults from '@/components/learning/QuizResults';
import { initialModules } from '@/components/learning/moduleData';
import { Module } from '@/components/learning/types';

const LearningPage = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [modules, setModules] = useState<Module[]>(initialModules);

  const calculateProgress = () => {
    const completedModules = modules.filter(module => module.completed).length;
    return (completedModules / modules.length) * 100;
  };

  const startModule = (moduleId: number) => {
    setActiveModule(moduleId);
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answerIndex
    });
  };

  const nextQuestion = () => {
    const currentModule = modules.find(m => m.id === activeModule);
    if (!currentModule) return;

    if (currentQuestion < currentModule.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      calculateScore();
    }
  };

  const calculateScore = () => {
    const currentModule = modules.find(m => m.id === activeModule);
    if (!currentModule) return 0;

    let correctAnswers = 0;
    currentModule.questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const scorePercentage = (correctAnswers / currentModule.questions.length) * 100;
    
    if (scorePercentage >= 70) {
      const updatedModules = modules.map(module => 
        module.id === activeModule ? { ...module, completed: true } : module
      );
      setModules(updatedModules);
    }

    return scorePercentage;
  };

  const returnToModules = () => {
    setActiveModule(null);
    setShowResults(false);
  };

  const viewCertificate = () => {
    navigate('/certificate', { 
      state: { 
        modules: modules.filter(m => m.completed).map(m => m.title),
        completionDate: new Date().toLocaleDateString(),
        score: calculateProgress()
      } 
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      <div className="pt-32 pb-16 px-6 md:px-10 flex-1">
        <div className="max-w-6xl mx-auto">
          {activeModule === null ? (
            <ModulesList 
              modules={modules}
              onStartModule={startModule}
              onViewCertificate={viewCertificate}
              progress={calculateProgress()}
            />
          ) : showResults ? (
            <QuizResults
              currentModule={modules.find(m => m.id === activeModule)!}
              userAnswers={userAnswers}
              score={calculateScore()}
              onReturnToModules={returnToModules}
              onViewCertificate={viewCertificate}
              showCertificateButton={calculateProgress() === 100}
            />
          ) : (
            <QuizQuestion
              currentModule={modules.find(m => m.id === activeModule)!}
              currentQuestion={currentQuestion}
              userAnswers={userAnswers}
              onAnswerSelect={handleAnswerSelect}
              onNextQuestion={nextQuestion}
              onReturnToModules={returnToModules}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningPage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronRight, BookOpen, Award, CheckCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Module {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: Question[];
  completed: boolean;
}

const LearningPage = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: "Cybersecurity Basics",
      description: "Learn the fundamental concepts of cybersecurity",
      difficulty: "beginner",
      completed: false,
      questions: [
        {
          id: 1,
          text: "What is phishing?",
          options: [
            "A fishing technique used by hackers",
            "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity",
            "A software used to protect computers",
            "A method to recover lost passwords"
          ],
          correctAnswer: 1,
          explanation: "Phishing is a cybercrime where attackers disguise themselves as trustworthy entities to trick individuals into providing sensitive data such as passwords and credit card details."
        },
        {
          id: 2,
          text: "Which of the following is a strong password?",
          options: [
            "123456",
            "password",
            "myname",
            "T%r7!K@p9$zB"
          ],
          correctAnswer: 3,
          explanation: "Strong passwords contain a mix of uppercase and lowercase letters, numbers, and special characters, making them harder to guess or crack."
        },
        {
          id: 3,
          text: "What should you do if you receive an email from an unknown sender with an attachment?",
          options: [
            "Open it immediately to see what it contains",
            "Delete it without opening",
            "Forward it to all your friends",
            "Reply asking who they are"
          ],
          correctAnswer: 1,
          explanation: "Emails from unknown senders may contain malware. It's best to delete suspicious emails without opening them or their attachments."
        }
      ]
    },
    {
      id: 2,
      title: "Online Privacy Protection",
      description: "Understand how to protect your digital privacy",
      difficulty: "beginner",
      completed: false,
      questions: [
        {
          id: 1,
          text: "What is two-factor authentication?",
          options: [
            "Having two passwords for one account",
            "A security process requiring two different forms of identification",
            "Using two different browsers",
            "Logging in from two different devices"
          ],
          correctAnswer: 1,
          explanation: "Two-factor authentication adds an extra layer of security by requiring a second form of verification beyond just a password."
        },
        {
          id: 2,
          text: "Which of these is NOT recommended for protecting your privacy online?",
          options: [
            "Using a VPN",
            "Sharing your location on social media",
            "Regularly clearing your browser history",
            "Using unique passwords for different accounts"
          ],
          correctAnswer: 1,
          explanation: "Publicly sharing your location can compromise your privacy and potentially your physical security."
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Threat Protection",
      description: "Learn advanced techniques to protect against sophisticated threats",
      difficulty: "advanced",
      completed: false,
      questions: [
        {
          id: 1,
          text: "What is a zero-day vulnerability?",
          options: [
            "A software bug that has existed since day zero of a program's life",
            "A security flaw unknown to the software vendor that hackers can exploit",
            "A virus that destroys all data in zero days",
            "A password that can be cracked in zero days"
          ],
          correctAnswer: 1,
          explanation: "Zero-day vulnerabilities are unknown to the software vendor and therefore have no patches available, making them particularly dangerous."
        },
        {
          id: 2,
          text: "Which of these is a common method used in ransomware attacks?",
          options: [
            "Social engineering",
            "Physical theft of devices",
            "Power surges",
            "Hardware failures"
          ],
          correctAnswer: 0,
          explanation: "Social engineering involves manipulating people into breaking security protocols or revealing confidential information, often used to initiate ransomware attacks."
        }
      ]
    }
  ]);

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
    
    // Mark module as completed if score is 70% or higher
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

  // Display the current module's quiz
  const renderQuiz = () => {
    const currentModule = modules.find(m => m.id === activeModule);
    if (!currentModule) return null;

    const question = currentModule.questions[currentQuestion];

    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            {currentModule.title}
          </CardTitle>
          <CardDescription>
            Question {currentQuestion + 1} of {currentModule.questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-lg font-medium">{question.text}</div>
            <RadioGroup 
              value={userAnswers[question.id]?.toString()} 
              onValueChange={(value) => handleAnswerSelect(question.id, parseInt(value))}
              className="space-y-3"
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={returnToModules}>Back to Modules</Button>
          <Button onClick={nextQuestion} disabled={userAnswers[question.id] === undefined}>
            {currentQuestion < currentModule.questions.length - 1 ? 'Next Question' : 'View Results'}
          </Button>
        </CardFooter>
      </Card>
    );
  };

  // Display quiz results
  const renderResults = () => {
    const currentModule = modules.find(m => m.id === activeModule);
    if (!currentModule) return null;

    const score = calculateScore();
    const passed = score >= 70;

    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {passed ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <BookOpen className="h-5 w-5 text-primary" />
            )}
            Quiz Results: {currentModule.title}
          </CardTitle>
          <CardDescription>
            You scored {score.toFixed(0)}%
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {passed ? (
              <div className="bg-green-500/10 text-green-700 p-4 rounded-md">
                <h3 className="font-medium">Congratulations!</h3>
                <p>You've successfully completed this module.</p>
              </div>
            ) : (
              <div className="bg-orange-500/10 text-orange-700 p-4 rounded-md">
                <h3 className="font-medium">Almost there!</h3>
                <p>You need 70% to pass this module. Try reviewing the material and attempt the quiz again.</p>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-medium">Review Your Answers:</h3>
              {currentModule.questions.map((question, index) => {
                const userAnswerIndex = userAnswers[question.id];
                const isCorrect = userAnswerIndex === question.correctAnswer;
                
                return (
                  <div 
                    key={question.id} 
                    className={`p-4 rounded-md ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'}`}
                  >
                    <p className="font-medium">{index + 1}. {question.text}</p>
                    <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                      Your answer: {question.options[userAnswerIndex]} {isCorrect ? '✓' : '✗'}
                    </p>
                    {!isCorrect && (
                      <p className="text-green-700">
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                    )}
                    <p className="text-sm mt-2 text-gray-600">{question.explanation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={returnToModules}>Back to Modules</Button>
          {calculateProgress() === 100 && (
            <Button onClick={viewCertificate} className="gap-2">
              <Award className="h-4 w-4" />
              View Certificate
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="pt-32 pb-16 px-6 md:px-10 flex-1">
        <div className="max-w-6xl mx-auto">
          {activeModule === null ? (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Cyber Security Learning Center</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Improve your knowledge of cybersecurity with our interactive courses.
                  Complete all modules to earn your certificate.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-medium">Your Progress</h2>
                  <span className="text-sm text-muted-foreground">{calculateProgress().toFixed(0)}% Complete</span>
                </div>
                <Progress value={calculateProgress()} className="h-2" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => (
                  <Card 
                    key={module.id} 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      module.completed ? 'border-green-500/50' : ''
                    }`}
                    onClick={() => startModule(module.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                        {module.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                      </div>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          module.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                          module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {module.questions.length} questions
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center justify-between w-full">
                        <Button variant="outline" className="gap-1" size="sm">
                          Start {module.completed ? 'Again' : 'Module'}
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {calculateProgress() === 100 && (
                <div className="mt-8 text-center">
                  <Button onClick={viewCertificate} size="lg" className="gap-2">
                    <Award className="h-5 w-5" />
                    View Your Certificate
                  </Button>
                </div>
              )}
            </>
          ) : showResults ? (
            renderResults()
          ) : (
            renderQuiz()
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningPage;

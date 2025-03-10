
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award } from 'lucide-react';
import { Module } from './types';

interface QuizResultsProps {
  currentModule: Module;
  userAnswers: Record<number, number>;
  score: number;
  onReturnToModules: () => void;
  onViewCertificate: () => void;
  showCertificateButton: boolean;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  currentModule,
  userAnswers,
  score,
  onReturnToModules,
  onViewCertificate,
  showCertificateButton
}) => {
  const passed = score >= 70;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-3xl mx-auto shadow-lg">
        <CardHeader className={`${passed ? 'bg-green-500/10' : 'bg-orange-500/10'} border-b`}>
          <CardTitle className="flex items-center gap-2">
            {passed ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <currentModule.icon className="h-5 w-5 text-orange-500" />
            )}
            Quiz Results: {currentModule.title}
          </CardTitle>
          <CardDescription className={passed ? 'text-green-700' : 'text-orange-700'}>
            You scored {score.toFixed(0)}%
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {passed ? (
              <motion.div 
                className="bg-green-500/10 text-green-700 p-4 rounded-md"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <h3 className="font-medium flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Congratulations!
                </h3>
                <p>You've successfully completed this module and earned knowledge points.</p>
              </motion.div>
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
                  <motion.div 
                    key={question.id} 
                    className={`p-4 rounded-md ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button variant="outline" onClick={onReturnToModules}>Back to Modules</Button>
          {showCertificateButton && (
            <Button onClick={onViewCertificate} className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Award className="h-4 w-4" />
              View Certificate
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default QuizResults;


import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronRight } from 'lucide-react';

const QuizQuestion = ({
  currentModule,
  currentQuestion,
  userAnswers,
  onAnswerSelect,
  onNextQuestion,
  onReturnToModules
}) => {
  const question = currentModule.questions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-3xl mx-auto shadow-lg border-primary/20">
        <CardHeader className="bg-primary/5 border-b border-primary/10">
          <CardTitle className="flex items-center gap-2">
            <currentModule.icon className="h-5 w-5 text-primary" />
            {currentModule.title}
          </CardTitle>
          <CardDescription>
            Question {currentQuestion + 1} of {currentModule.questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="text-lg font-medium">{question.text}</div>
            <RadioGroup 
              value={userAnswers[question.id]?.toString()} 
              onValueChange={(value) => onAnswerSelect(question.id, parseInt(value))}
              className="space-y-3"
            >
              {question.options.map((option, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-2 p-3 rounded-md border border-muted hover:border-primary/20 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer w-full">{option}</Label>
                </motion.div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2 border-t">
          <Button variant="outline" onClick={onReturnToModules}>Back to Modules</Button>
          <Button 
            onClick={onNextQuestion} 
            disabled={userAnswers[question.id] === undefined}
            className="gap-2"
          >
            {currentQuestion < currentModule.questions.length - 1 ? 'Next Question' : 'View Results'}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default QuizQuestion;

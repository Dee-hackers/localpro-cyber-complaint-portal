
export const QuestionType = {
  id: 'number',
  text: 'string',
  options: 'array',
  correctAnswer: 'number',
  explanation: 'string'
};

export const ModuleType = {
  id: 'number',
  title: 'string',
  description: 'string',
  difficulty: 'string', // 'beginner' | 'intermediate' | 'advanced'
  completed: 'boolean',
  icon: 'function',
  estimatedTime: 'string',
  questions: 'array'
};

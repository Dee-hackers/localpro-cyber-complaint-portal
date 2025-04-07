import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Progress } from '../components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { ChevronRight, Award, CheckCircle, Shield, AlertTriangle, Zap, Database, Lock, Globe, FileCode, MonitorSmartphone, Laptop, ServerOff } from 'lucide-react';
import { motion as Motion} from 'framer-motion';

const LearningPage = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Cybersecurity Fundamentals",
      description: "Learn the essential concepts and terminology of cybersecurity",
      difficulty: "beginner",
      completed: false,
      icon: Shield,
      estimatedTime: "3 hours",
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
            "T%r7!K..p9$zB"
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
        },
        {
          id: 4,
          text: "What is malware?",
          options: [
            "Software designed to help manage your passwords",
            "Hardware that protects your computer",
            "Software designed to damage or gain unauthorized access to a computer system",
            "A type of firewall"
          ],
          correctAnswer: 2,
          explanation: "Malware (malicious software) is any program or file that is harmful to a computer user. It includes computer viruses, worms, Trojan horses, ransomware, and spyware."
        },
        {
          id: 5,
          text: "What is a firewall?",
          options: [
            "A physical barrier that prevents computer theft",
            "A system designed to prevent unauthorized access to or from a private network",
            "A cooling system for computers",
            "An antivirus program"
          ],
          correctAnswer: 1,
          explanation: "A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules."
        }
      ]
    },
    {
      id: 2,
      title: "Online Privacy Protection",
      description: "Understand how to protect your digital privacy and personal information",
      difficulty: "beginner",
      completed: false,
      icon: Lock,
      estimatedTime: "4 hours",
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
        },
        {
          id: 3,
          text: "What is a VPN used for?",
          options: [
            "Increasing internet speed",
            "Creating a private connection over a public network",
            "Storing personal files securely",
            "Backing up your computer"
          ],
          correctAnswer: 1,
          explanation: "A Virtual Private Network (VPN) creates an encrypted connection over a less secure network, providing privacy and anonymity."
        },
        {
          id: 4,
          text: "Which is a best practice for protecting your personal information online?",
          options: [
            "Using the same password for all accounts",
            "Sharing your full birth date on social media",
            "Regularly updating privacy settings on social media accounts",
            "Accepting all cookies on websites you visit"
          ],
          correctAnswer: 2,
          explanation: "Regularly reviewing and updating privacy settings helps control who can see your information and how it's used."
        }
      ]
    },
    {
      id: 3,
      title: "Secure Web Browsing",
      description: "Learn how to browse the internet safely and recognize threats",
      difficulty: "beginner",
      completed: false,
      icon: MonitorSmartphone,
      estimatedTime: "3 hours",
      questions: [
        {
          id: 1,
          text: "What does HTTPS indicate about a website?",
          options: [
            "The website loads faster",
            "The connection to the website is encrypted",
            "The website has more features",
            "The website is owned by a government"
          ],
          correctAnswer: 1,
          explanation: "HTTPS (Hypertext Transfer Protocol Secure) indicates that communications between your browser and the website are encrypted and secure."
        },
        {
          id: 2,
          text: "What is a browser cookie?",
          options: [
            "A virus that affects web browsers",
            "A small text file stored on your computer that contains website data",
            "A program that speeds up web browsing",
            "A type of web browser"
          ],
          correctAnswer: 1,
          explanation: "Cookies are small text files that websites place on your device to store information about your preferences or login status."
        }
      ]
    },
    {
      id: 4,
      title: "Social Engineering Awareness",
      description: "Identify and prevent manipulation techniques used by attackers",
      difficulty: "intermediate",
      completed: false,
      icon: AlertTriangle,
      estimatedTime: "5 hours",
      questions: [
        {
          id: 1,
          text: "What is social engineering in cybersecurity?",
          options: [
            "Using social media for marketing",
            "Building social networks securely",
            "Psychological manipulation to trick users into making security mistakes",
            "Engineering social platforms"
          ],
          correctAnswer: 2,
          explanation: "Social engineering involves manipulating people into breaking normal security procedures or divulging confidential information through psychological manipulation."
        },
        {
          id: 2,
          text: "Which of these is an example of social engineering?",
          options: [
            "A hacker using a program to guess your password",
            "A phishing email claiming to be from your bank",
            "A virus corrupting your files",
            "A firewall blocking a connection"
          ],
          correctAnswer: 1,
          explanation: "Phishing emails that impersonate trusted organizations are a common form of social engineering aimed at tricking users into revealing sensitive information."
        }
      ]
    },
    {
      id: 5,
      title: "Mobile Device Security",
      description: "Protect your smartphones and tablets from cyber threats",
      difficulty: "intermediate",
      completed: false,
      icon: Laptop,
      estimatedTime: "4 hours",
      questions: [
        {
          id: 1,
          text: "What is the best way to secure your mobile device?",
          options: [
            "Never install updates",
            "Use public Wi-Fi whenever possible",
            "Use a strong passcode or biometric authentication",
            "Download apps from any source"
          ],
          correctAnswer: 2,
          explanation: "Using strong authentication methods like passcodes, fingerprint scans, or facial recognition helps prevent unauthorized access to your device."
        },
        {
          id: 2,
          text: "Why should you be cautious about public Wi-Fi?",
          options: [
            "It's always slower than private networks",
            "It's expensive to use",
            "Attackers can potentially intercept your data",
            "It uses more battery power"
          ],
          correctAnswer: 2,
          explanation: "Public Wi-Fi networks are often unsecured, making it possible for attackers to intercept data transmitted between your device and the internet."
        }
      ]
    },
    {
      id: 6,
      title: "Data Protection Strategies",
      description: "Learn techniques for securing sensitive data and preventing breaches",
      difficulty: "intermediate",
      completed: false,
      icon: Database,
      estimatedTime: "6 hours",
      questions: [
        {
          id: 1,
          text: "What is data encryption?",
          options: [
            "Compressing data to save space",
            "Converting data into a code to prevent unauthorized access",
            "Backing up data to multiple locations",
            "Permanently deleting data"
          ],
          correctAnswer: 1,
          explanation: "Encryption is the process of converting information into a code to prevent unauthorized access, ensuring that only authorized parties can read the data."
        },
        {
          id: 2,
          text: "What is the 3-2-1 backup rule?",
          options: [
            "Delete 3 files, save 2, backup 1",
            "Keep 3 copies of data, on 2 different media types, with 1 copy off-site",
            "Backup 3 times a day, 2 times a week, 1 time a month",
            "Use 3 passwords, 2 authentication methods, 1 recovery email"
          ],
          correctAnswer: 1,
          explanation: "The 3-2-1 backup rule recommends keeping at least three copies of your data, storing two backup copies on different storage media, and keeping one copy off-site."
        }
      ]
    },
    {
      id: 7,
      title: "Advanced Threat Protection",
      description: "Learn advanced techniques to protect against sophisticated threats",
      difficulty: "advanced",
      completed: false,
      icon: Zap,
      estimatedTime: "8 hours",
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
        },
        {
          id: 3,
          text: "What is a DDoS attack?",
          options: [
            "Data Deletion on Operating Systems",
            "Distributed Denial of Service",
            "Direct Download of Secure files",
            "Digital Disruption of Software"
          ],
          correctAnswer: 1,
          explanation: "A Distributed Denial of Service attack attempts to disrupt normal traffic to a server by overwhelming it with a flood of internet traffic from multiple sources."
        }
      ]
    },
    {
      id: 8,
      title: "Network Security",
      description: "Understand how to secure networks and prevent unauthorized access",
      difficulty: "advanced",
      completed: false,
      icon: Globe,
      estimatedTime: "7 hours",
      questions: [
        {
          id: 1,
          text: "What is a DMZ in network security?",
          options: [
            "Demilitarized Zone - a physical area where computers are stored",
            "Direct Management Zone - where network administrators work",
            "Demilitarized Zone - a subnet that separates internal networks from untrusted external networks",
            "Digital Management Zone - a virtual space for storing sensitive data"
          ],
          correctAnswer: 2,
          explanation: "In network security, a DMZ (demilitarized zone) is a perimeter network that protects an organization's internal local-area network from untrusted traffic."
        },
        {
          id: 2,
          text: "What is port scanning?",
          options: [
            "A technique to find open doors and windows in a building",
            "Checking which USB ports are available on a computer",
            "A technique to discover which services are running on a network",
            "Scanning documents at a port facility"
          ],
          correctAnswer: 2,
          explanation: "Port scanning is a technique used to identify open ports and services on a network, often used by attackers to find potential vulnerabilities."
        }
      ]
    },
    {
      id: 9,
      title: "Incident Response",
      description: "Learn how to handle and recover from security incidents effectively",
      difficulty: "advanced",
      completed: false,
      icon: ServerOff,
      estimatedTime: "6 hours",
      questions: [
        {
          id: 1,
          text: "What is the first step in incident response?",
          options: [
            "Containment",
            "Eradication",
            "Identification",
            "Recovery"
          ],
          correctAnswer: 2,
          explanation: "Identification is the first phase of incident response, where the security team determines whether an incident has occurred and assesses its scope and impact."
        },
        {
          id: 2,
          text: "What is a security incident post-mortem?",
          options: [
            "A medical examination after a security breach",
            "A detailed analysis conducted after an incident to prevent future occurrences",
            "A report sent to law enforcement",
            "A financial assessment of damages"
          ],
          correctAnswer: 1,
          explanation: "A post-mortem is a detailed analysis conducted after resolving an incident to learn from it, improve processes, and prevent similar incidents in the future."
        }
      ]
    },
    {
      id: 10,
      title: "Secure Coding Practices",
      description: "Learn how to write secure code and avoid common vulnerabilities",
      difficulty: "advanced",
      completed: false,
      icon: FileCode,
      estimatedTime: "10 hours",
      questions: [
        {
          id: 1,
          text: "What is SQL injection?",
          options: [
            "Injecting SQL databases with performance-enhancing code",
            "A technique where attackers insert malicious SQL code into database queries",
            "A method for quickly adding data to SQL databases",
            "A tool used by database administrators"
          ],
          correctAnswer: 1,
          explanation: "SQL injection is a code injection technique where an attacker inserts malicious SQL statements into entry fields for execution by the backend database."
        },
        {
          id: 2,
          text: "What is input validation?",
          options: [
            "Checking user credentials during login",
            "Validating software licenses",
            "Ensuring that input data meets certain criteria before processing it",
            "Testing keyboard functionality"
          ],
          correctAnswer: 2,
          explanation: "Input validation is the proper checking of any input to a program to ensure it's the correct type, length, format, and range before processing it, helping prevent security vulnerabilities."
        }
      ]
    }
  ]);

  const calculateProgress = () => {
    const completedModules = modules.filter(module => module.completed).length;
    return (completedModules / modules.length) * 100;
  };

  const startModule = (moduleId) => {
    setActiveModule(moduleId);
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
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

  const renderQuiz = () => {
    const currentModule = modules.find(m => m.id === activeModule);
    if (!currentModule) return null;

    const question = currentModule.questions[currentQuestion];

    return (
      <Motion.div
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
                onValueChange={(value) => handleAnswerSelect(question.id, parseInt(value))}
                className="space-y-3"
              >
                {question.options.map((option, index) => (
                  <Motion.div 
                    key={index} 
                    className="flex items-start space-x-2 p-3 rounded-md border border-muted hover:border-primary/20 transition-colors"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer w-full">{option}</Label>
                  </Motion.div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between pt-2 border-t">
            <Button variant="outline" onClick={returnToModules}>Back to Modules</Button>
            <Button 
              onClick={nextQuestion} 
              disabled={userAnswers[question.id] === undefined}
              className="gap-2"
            >
              {currentQuestion < currentModule.questions.length - 1 ? 'Next Question' : 'View Results'}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </Motion.div>
    );
  };

  const renderResults = () => {
    const currentModule = modules.find(m => m.id === activeModule);
    if (!currentModule) return null;

    const score = calculateScore();
    const passed = score >= 70;

    return (
      <Motion.div
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
                <Motion.div 
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
                </Motion.div>
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
                    <Motion.div 
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
                    </Motion.div>
                  );
                })}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" onClick={returnToModules}>Back to Modules</Button>
            {calculateProgress() === 100 && (
              <Button onClick={viewCertificate} className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                <Award className="h-4 w-4" />
                View Certificate
              </Button>
            )}
          </CardFooter>
        </Card>
      </Motion.div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      <div className="pt-32 pb-16 px-6 md:px-10 flex-1">
        <div className="max-w-6xl mx-auto">
          {activeModule === null ? (
            <>
              <Motion.div 
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Cyber Security Learning Center</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Enhance your cybersecurity knowledge with our comprehensive one-month course.
                  Complete all modules to earn your professional certificate.
                </p>
              </Motion.div>
              
              <Motion.div 
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-medium">Your Progress</h2>
                  <span className="text-sm text-muted-foreground">{calculateProgress().toFixed(0)}% Complete</span>
                </div>
                <Progress value={calculateProgress()} className="h-3" />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                </div>
              </Motion.div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((module, index) => (
                  <Motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        module.completed ? 'border-green-500/50' : ''
                      } h-full flex flex-col`}
                      onClick={() => startModule(module.id)}
                    >
                      <CardHeader className={`pb-2 ${
                        module.difficulty === 'beginner' ? 'bg-green-500/5' :
                        module.difficulty === 'intermediate' ? 'bg-yellow-500/5' :
                        'bg-red-500/5'
                      }`}>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl flex items-center gap-2">
                            <module.icon className={`h-5 w-5 ${
                              module.difficulty === 'beginner' ? 'text-green-500' :
                              module.difficulty === 'intermediate' ? 'text-yellow-600' :
                              'text-red-500'
                            }`} />
                            {module.title}
                          </CardTitle>
                          {module.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                        </div>
                        <CardDescription>{module.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
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
                          <span className="text-xs text-muted-foreground ml-auto">
                            {module.estimatedTime}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-3">
                        <div className="flex items-center justify-between w-full">
                          <Button variant="outline" className="gap-1" size="sm">
                            Start {module.completed ? 'Again' : 'Module'}
                            <ChevronRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </Motion.div>
                ))}
              </div>
              
              {calculateProgress() === 100 && (
                <Motion.div 
                  className="mt-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-lg border border-primary/10 mb-6">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Congratulations, Security Expert!</h3>
                    <p className="text-muted-foreground mb-6">
                      You've completed all modules of our cybersecurity program. 
                      You're now ready to claim your certificate.
                    </p>
                    <Button 
                      onClick={viewCertificate} 
                      size="lg" 
                      className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    >
                      <Award className="h-5 w-5" />
                      View Your Certificate
                    </Button>
                  </div>
                </Motion.div>
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
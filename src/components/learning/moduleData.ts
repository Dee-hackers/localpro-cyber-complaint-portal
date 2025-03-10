
import { Module } from './types';
import { 
  Shield, 
  AlertTriangle, 
  Zap, 
  Database, 
  Lock, 
  Globe, 
  ServerOff, 
  FileCode, 
  MonitorSmartphone, 
  Laptop 
} from 'lucide-react';

export const initialModules: Module[] = [
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
];

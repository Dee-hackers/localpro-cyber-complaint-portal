
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

export const initialModules = [
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
      },
      {
        id: 6,
        text: "What does VPN stand for?",
        options: [
          "Virtual Private Network",
          "Very Protected Network",
          "Visible Private Network",
          "Verified Personal Network"
        ],
        correctAnswer: 0,
        explanation: "VPN stands for Virtual Private Network, which creates a secure, encrypted connection over a less secure network like the public internet."
      },
      {
        id: 7,
        text: "Which of these is an example of multi-factor authentication?",
        options: [
          "Using a very strong password",
          "Using different passwords for different accounts",
          "Using a password and a fingerprint scan",
          "Changing your password every month"
        ],
        correctAnswer: 2,
        explanation: "Multi-factor authentication combines two or more independent credentials, such as something you know (password) with something you have (security token) or something you are (biometric verification)."
      },
      {
        id: 8,
        text: "Which of the following is NOT a type of malware?",
        options: [
          "Virus",
          "Trojan horse",
          "Firewall",
          "Ransomware"
        ],
        correctAnswer: 2,
        explanation: "A firewall is a network security system, not a type of malware. The other options are all different types of malicious software."
      },
      {
        id: 9,
        text: "What is social engineering in the context of cybersecurity?",
        options: [
          "Using social media to connect with security professionals",
          "Psychological manipulation to trick users into making security mistakes",
          "Programming computers to be more social",
          "Engineering social platforms to be more secure"
        ],
        correctAnswer: 1,
        explanation: "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information. It relies on human error rather than technical hacking techniques."
      },
      {
        id: 10,
        text: "What should you do regularly to protect your important data?",
        options: [
          "Share it with trusted friends",
          "Back it up to multiple locations",
          "Post it on social media",
          "Delete it when no longer needed"
        ],
        correctAnswer: 1,
        explanation: "Regular backups to multiple locations ensure that your important data can be recovered in case of hardware failure, theft, ransomware, or other disasters."
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
      },
      {
        id: 5,
        text: "What is 'incognito mode' or 'private browsing' in web browsers primarily designed to do?",
        options: [
          "Hide your activity from websites you visit",
          "Make you completely anonymous online",
          "Prevent your browsing history from being saved on your device",
          "Encrypt all your internet traffic"
        ],
        correctAnswer: 2,
        explanation: "Private browsing primarily prevents your local browsing history from being stored on your device. It doesn't make you anonymous to websites or your ISP."
      },
      {
        id: 6,
        text: "What is data minimization?",
        options: [
          "Using minimal internet data to save on costs",
          "Collecting and sharing only the necessary personal data",
          "Minimizing the size of data files",
          "Deleting all personal data regularly"
        ],
        correctAnswer: 1,
        explanation: "Data minimization is the practice of limiting the collection and retention of personal information to what is directly relevant and necessary for a specific purpose."
      },
      {
        id: 7,
        text: "Which of these can help protect your privacy when using public Wi-Fi?",
        options: [
          "Sharing your location",
          "Logging in to all your accounts",
          "Using a VPN",
          "Turning off your device's password"
        ],
        correctAnswer: 2,
        explanation: "A VPN encrypts your internet connection on public Wi-Fi, protecting your data from potential eavesdroppers on the same network."
      },
      {
        id: 8,
        text: "What is browser fingerprinting?",
        options: [
          "Using your fingerprint to log in to websites",
          "A technique websites use to identify and track your browser based on its configuration",
          "A way to secure your browser with a password",
          "Scanning your browser for viruses"
        ],
        correctAnswer: 1,
        explanation: "Browser fingerprinting is a tracking technique that collects information about your browser type and version, operating system, plugins, time zone, language, screen resolution, and other settings to create a unique profile."
      },
      {
        id: 9,
        text: "What should you check before providing personal information to a website?",
        options: [
          "The website's color scheme",
          "How many visitors the site has",
          "The website's privacy policy",
          "Whether the site has advertisements"
        ],
        correctAnswer: 2,
        explanation: "A website's privacy policy should explain how they collect, use, share, and protect your personal information, allowing you to make informed decisions."
      },
      {
        id: 10,
        text: "What does 'HTTPS' in a website URL indicate?",
        options: [
          "The website is popular",
          "The connection to the website is encrypted",
          "The website is free to use",
          "The website is government-approved"
        ],
        correctAnswer: 1,
        explanation: "HTTPS (Hypertext Transfer Protocol Secure) indicates that the communication between your browser and the website is encrypted, helping protect the information you send and receive."
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
      },
      {
        id: 3,
        text: "Which of these is a sign that a website might not be secure?",
        options: [
          "It has a privacy policy",
          "It uses HTTPS",
          "It has a 'Not Secure' warning in the address bar",
          "It has a search function"
        ],
        correctAnswer: 2,
        explanation: "A 'Not Secure' warning in your browser's address bar indicates that the website is using HTTP instead of HTTPS, meaning data transmitted is not encrypted."
      },
      {
        id: 4,
        text: "What is the main purpose of an ad blocker?",
        options: [
          "To speed up internet connection",
          "To block advertisements and potentially malicious content",
          "To track your browsing habits",
          "To improve website design"
        ],
        correctAnswer: 1,
        explanation: "Ad blockers prevent advertisements from displaying on websites, which can also help protect against malvertising (malicious advertising) that can distribute malware."
      },
      {
        id: 5,
        text: "Which of these browser features helps protect against phishing websites?",
        options: [
          "Pop-up blocker",
          "Password manager",
          "Safe browsing warnings",
          "Private browsing mode"
        ],
        correctAnswer: 2,
        explanation: "Safe browsing features in modern browsers check websites against databases of known phishing and malware sites and warn users before they visit dangerous pages."
      },
      {
        id: 6,
        text: "What is a URL shortener, and what potential risk does it pose?",
        options: [
          "A tool that makes long URLs shorter; it can hide the actual destination website",
          "A browser extension that speeds up loading times; it can slow down your computer",
          "A website that improves internet speed; it can use too much bandwidth",
          "A service that checks website security; it can provide false security information"
        ],
        correctAnswer: 0,
        explanation: "URL shorteners convert long URLs into shorter ones, but this can hide the actual destination, potentially leading users to malicious websites without knowing it beforehand."
      },
      {
        id: 7,
        text: "What is browser compartmentalization?",
        options: [
          "Organizing bookmarks into folders",
          "Using different browsers or browser profiles for different online activities",
          "Splitting your screen to view multiple websites at once",
          "Breaking down webpages into smaller parts for faster loading"
        ],
        correctAnswer: 1,
        explanation: "Browser compartmentalization involves using different browsers or browser profiles for different activities (e.g., one for banking, another for social media) to limit tracking and contain potential security breaches."
      },
      {
        id: 8,
        text: "What should you do if your browser warns you about an insecure website?",
        options: [
          "Ignore the warning and proceed anyway",
          "Turn off your security settings",
          "Leave the website immediately",
          "Enter your personal information more carefully"
        ],
        correctAnswer: 2,
        explanation: "Browser security warnings should be taken seriously. It's best to leave potentially insecure websites to protect your personal information and device."
      },
      {
        id: 9,
        text: "What is a browser extension?",
        options: [
          "An extended warranty for your browser",
          "Software that adds functionality to your web browser",
          "A larger browser window",
          "A tool that extends your internet connection range"
        ],
        correctAnswer: 1,
        explanation: "Browser extensions are software modules that add functionality to your web browser, such as ad blocking, password management, or productivity tools."
      },
      {
        id: 10,
        text: "Why should you be cautious when installing browser extensions?",
        options: [
          "They might slow down your browser",
          "They could have access to sensitive data and browsing activity",
          "They take up too much storage space",
          "They might change your browser's appearance"
        ],
        correctAnswer: 1,
        explanation: "Browser extensions often request permissions to access your data on websites you visit. Malicious extensions could potentially access sensitive information or track your browsing."
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
      },
      {
        id: 3,
        text: "What is pretexting in social engineering?",
        options: [
          "Creating a fabricated scenario to obtain information",
          "Sending text messages before an attack",
          "Testing security systems before implementing them",
          "Preparing text for phishing emails"
        ],
        correctAnswer: 0,
        explanation: "Pretexting involves creating a fabricated scenario (pretext) to engage a victim and gain their trust in order to obtain information or access to something valuable."
      },
      {
        id: 4,
        text: "What is baiting in social engineering?",
        options: [
          "Using fishing analogies to explain cybersecurity",
          "Offering something enticing to users in exchange for information or access",
          "Setting traps for hackers",
          "Arguing with users online to provoke reactions"
        ],
        correctAnswer: 1,
        explanation: "Baiting involves offering something enticing (like a free download) to entice users to take an action that will compromise their security, such as downloading malware."
      },
      {
        id: 5,
        text: "Which of these is a sign of a potential vishing attack?",
        options: [
          "Receiving a scheduled call from your bank",
          "Getting an email with links from a known colleague",
          "Receiving an unexpected call creating urgency to provide personal information",
          "Finding a USB drive with your name on it"
        ],
        correctAnswer: 2,
        explanation: "Vishing (voice phishing) often involves unexpected calls creating a sense of urgency to trick victims into providing sensitive information over the phone."
      },
      {
        id: 6,
        text: "What is tailgating in physical security?",
        options: [
          "Following someone closely while driving",
          "Following someone through a secure door without using credentials",
          "Monitoring someone's internet usage",
          "Sending repeated emails to someone"
        ],
        correctAnswer: 1,
        explanation: "Tailgating (or piggybacking) is when an unauthorized person follows an authorized person through a secure access point without using their own credentials."
      },
      {
        id: 7,
        text: "What is the primary goal of most social engineering attacks?",
        options: [
          "To damage computer hardware",
          "To disrupt network services",
          "To gain unauthorized access to systems or information",
          "To demonstrate technical skills"
        ],
        correctAnswer: 2,
        explanation: "The primary goal of social engineering is typically to gain unauthorized access to systems, networks, or physical locations, or to obtain sensitive information, by manipulating people rather than by technical hacking means."
      },
      {
        id: 8,
        text: "What is quid pro quo in social engineering?",
        options: [
          "A Latin term for computer viruses",
          "Offering a service in exchange for information or access",
          "A type of encryption",
          "A security testing methodology"
        ],
        correctAnswer: 1,
        explanation: "Quid pro quo attacks involve offering a service or benefit in exchange for information or access. For example, an attacker might pose as IT support and offer help in exchange for login credentials."
      },
      {
        id: 9,
        text: "Which social engineering technique involves creating a false sense of urgency?",
        options: [
          "Phishing",
          "Scareware",
          "Baiting",
          "Tailgating"
        ],
        correctAnswer: 1,
        explanation: "Scareware creates a false sense of urgency by making users believe they're at risk (e.g., fake virus warnings) to pressure them into taking actions that compromise security."
      },
      {
        id: 10,
        text: "What is the best defense against social engineering attacks?",
        options: [
          "Installing antivirus software",
          "Using complex passwords",
          "Education, awareness, and healthy skepticism",
          "Encrypting all data"
        ],
        correctAnswer: 2,
        explanation: "While technical controls are important, education, awareness, and a skeptical mindset are the most effective defenses against social engineering, as these attacks exploit human psychology rather than technical vulnerabilities."
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
      },
      {
        id: 3,
        text: "What is mobile device management (MDM)?",
        options: [
          "A feature that manages battery consumption",
          "Software that tracks lost or stolen devices",
          "A system for managing and securing mobile devices across an organization",
          "An app that improves device performance"
        ],
        correctAnswer: 2,
        explanation: "Mobile Device Management (MDM) is software that allows IT administrators to control, secure, and enforce policies on smartphones, tablets, and other devices."
      },
      {
        id: 4,
        text: "What does 'jailbreaking' or 'rooting' a mobile device refer to?",
        options: [
          "Freeing up storage space",
          "Breaking a device so it needs repair",
          "Bypassing manufacturer restrictions to gain full access to the operating system",
          "Extending battery life"
        ],
        correctAnswer: 2,
        explanation: "Jailbreaking (iOS) or rooting (Android) refers to bypassing manufacturer restrictions to gain elevated privileges and full access to the operating system, which can compromise security."
      },
      {
        id: 5,
        text: "Why is it important to keep your mobile device's operating system updated?",
        options: [
          "To get new features only",
          "To keep your warranty valid",
          "To fix security vulnerabilities and bugs",
          "To increase storage capacity"
        ],
        correctAnswer: 2,
        explanation: "Operating system updates often include security patches that fix vulnerabilities that could be exploited by attackers."
      },
      {
        id: 6,
        text: "What should you check before installing a mobile app?",
        options: [
          "Only the app's rating",
          "The app's permissions, reviews, and developer",
          "Only the app's download count",
          "Only the app's size"
        ],
        correctAnswer: 1,
        explanation: "Before installing an app, you should review what permissions it requests, check user reviews for concerns, and verify the developer's reputation to avoid potentially malicious apps."
      },
      {
        id: 7,
        text: "What is SIM swapping?",
        options: [
          "Exchanging SIM cards between devices",
          "A fraud where attackers transfer your phone number to their SIM card",
          "Upgrading from a physical SIM to an eSIM",
          "Using multiple SIM cards in one phone"
        ],
        correctAnswer: 1,
        explanation: "SIM swapping is a fraud where attackers convince your mobile carrier to transfer your phone number to a SIM card they control, allowing them to receive your calls, texts, and potentially bypass 2FA."
      },
      {
        id: 8,
        text: "What is the safest source for downloading mobile apps?",
        options: [
          "Third-party app stores",
          "Direct downloads from random websites",
          "Official app stores (Google Play Store, Apple App Store)",
          "Apps shared by friends"
        ],
        correctAnswer: 2,
        explanation: "Official app stores like Google Play and Apple App Store review apps for security issues and malware, making them generally safer than third-party sources."
      },
      {
        id: 9,
        text: "What should you do before selling or disposing of your mobile device?",
        options: [
          "Just remove the SIM card",
          "Delete a few personal files",
          "Perform a factory reset after backing up important data",
          "Nothing special is required"
        ],
        correctAnswer: 2,
        explanation: "Before selling or disposing of a device, you should back up important data and perform a factory reset to remove all personal information and accounts from the device."
      },
      {
        id: 10,
        text: "What is mobile phishing?",
        options: [
          "Using a mobile device to go fishing",
          "Phishing attacks specifically targeting mobile device users",
          "A mobile app for fishermen",
          "A secure mobile payment method"
        ],
        correctAnswer: 1,
        explanation: "Mobile phishing targets users on mobile devices through SMS, messaging apps, emails, or malicious apps, often exploiting the smaller screen size and limited security information visible on mobile devices."
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
      },
      {
        id: 3,
        text: "What is data loss prevention (DLP)?",
        options: [
          "A backup system that prevents server crashes",
          "An insurance policy for lost devices",
          "A strategy and tools designed to prevent sensitive data from being lost, misused, or accessed by unauthorized users",
          "A method to compress data to save storage space"
        ],
        correctAnswer: 2,
        explanation: "Data Loss Prevention (DLP) refers to strategies and tools that ensure sensitive data is not lost, misused, or accessed by unauthorized users, through monitoring, detecting, and blocking sensitive data."
      },
      {
        id: 4,
        text: "What is the difference between symmetric and asymmetric encryption?",
        options: [
          "Symmetric encryption is stronger; asymmetric encryption is faster",
          "Symmetric uses one key for encryption and decryption; asymmetric uses a key pair",
          "Symmetric is for text; asymmetric is for images",
          "Symmetric is outdated; asymmetric is modern"
        ],
        correctAnswer: 1,
        explanation: "In symmetric encryption, the same key is used for both encryption and decryption. In asymmetric encryption, a public key encrypts data and a related private key decrypts it."
      },
      {
        id: 5,
        text: "What is data classification?",
        options: [
          "Organizing data by file size",
          "Categorizing data based on its sensitivity and importance",
          "Converting data from one format to another",
          "Scanning data for viruses"
        ],
        correctAnswer: 1,
        explanation: "Data classification involves categorizing data based on sensitivity levels (e.g., public, internal, confidential, restricted) to ensure appropriate security controls are applied based on data value and risk."
      },
      {
        id: 6,
        text: "What is a data breach?",
        options: [
          "When data is accidentally deleted",
          "A server malfunction that corrupts data",
          "An incident where data is accessed, stolen, or released without authorization",
          "When too much data is collected"
        ],
        correctAnswer: 2,
        explanation: "A data breach is a security incident in which sensitive, protected, or confidential data is accessed, viewed, stolen, or used by an individual unauthorized to do so."
      },
      {
        id: 7,
        text: "What is data masking?",
        options: [
          "Hiding data by making it invisible on screen",
          "Disguising sensitive data with modified content while preserving its format",
          "Encrypting data during transmission",
          "Compressing data to save space"
        ],
        correctAnswer: 1,
        explanation: "Data masking replaces sensitive data with realistic but fictional data while maintaining the format, often used in testing environments to protect production data."
      },
      {
        id: 8,
        text: "What is the purpose of a data retention policy?",
        options: [
          "To increase storage capacity",
          "To define how long data should be kept before deletion",
          "To prevent employees from stealing data",
          "To compress data more efficiently"
        ],
        correctAnswer: 1,
        explanation: "A data retention policy establishes how long organizations need to keep data for business, legal, or regulatory purposes, and when that data should be securely deleted."
      },
      {
        id: 9,
        text: "What is end-to-end encryption?",
        options: [
          "Encryption that works on all devices",
          "Encryption that only applies to the beginning and end of a message",
          "A system where only the communicating users can read the messages",
          "Encryption that requires multiple passwords"
        ],
        correctAnswer: 2,
        explanation: "End-to-end encryption ensures that data is encrypted from the sender's device and can only be decrypted by the intended recipient, preventing anyone in between (including service providers) from accessing the content."
      },
      {
        id: 10,
        text: "What is a secure erase or secure wipe?",
        options: [
          "Using a special cloth to clean a device",
          "A method to permanently delete data so it cannot be recovered",
          "Backing up data before deleting it",
          "Encryption of deleted files"
        ],
        correctAnswer: 1,
        explanation: "Secure erase or secure wipe is a data sanitization method that overwrites data multiple times to ensure it cannot be recovered using data recovery tools, often used before disposing of storage devices."
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
      },
      {
        id: 4,
        text: "What is an advanced persistent threat (APT)?",
        options: [
          "A virus that persists after system reboots",
          "A prolonged and targeted cyberattack where an attacker gains and maintains unauthorized access",
          "A type of secure encryption that's difficult to break",
          "A sophisticated firewall configuration"
        ],
        correctAnswer: 1,
        explanation: "An Advanced Persistent Threat (APT) is a prolonged, targeted attack where an attacker gains access to a network and remains undetected for an extended period, often with sophisticated techniques."
      },
      {
        id: 5,
        text: "What is a security information and event management (SIEM) system?",
        options: [
          "A physical security system with cameras and alarms",
          "A software solution that provides real-time analysis of security alerts and log data",
          "A framework for managing employee security training",
          "A type of encryption protocol"
        ],
        correctAnswer: 1,
        explanation: "SIEM systems collect, analyze, and correlate security event information and alerts from various sources across an organization's IT infrastructure to provide real-time analysis and threat detection."
      },
      {
        id: 6,
        text: "What is the concept of 'defense in depth'?",
        options: [
          "Focusing all security resources on protecting the most valuable asset",
          "Using multiple layers of security controls throughout an IT system",
          "Deeply analyzing attacks after they occur",
          "Defending only the most critical systems"
        ],
        correctAnswer: 1,
        explanation: "Defense in depth is a cybersecurity strategy that employs multiple layers of security controls throughout an IT system, so if one layer fails, others still provide protection."
      },
      {
        id: 7,
        text: "What is a threat hunting?",
        options: [
          "Searching the internet for mentions of threats against your organization",
          "Proactively searching networks for threats that evade existing security solutions",
          "Training security personnel to identify threats",
          "Sending threatening messages to potential attackers"
        ],
        correctAnswer: 1,
        explanation: "Threat hunting is the proactive search for threats that are lurking undetected in a network, focusing on advanced threats that have evaded existing security solutions."
      },
      {
        id: 8,
        text: "What is a security orchestration, automation, and response (SOAR) platform?",
        options: [
          "A type of antivirus software",
          "A technology that enables organizations to collect security data and respond to security events with automated workflows",
          "A physical security system for buildings",
          "A framework for organizing security personnel"
        ],
        correctAnswer: 1,
        explanation: "SOAR platforms help organizations streamline security operations by collecting data from various sources and using automated workflows to execute security actions without human intervention."
      },
      {
        id: 9,
        text: "What is fileless malware?",
        options: [
          "Malware that doesn't create any files on the infected system",
          "Malware that destroys files on the infected system",
          "Malware that creates extremely small files",
          "Malware that only targets file servers"
        ],
        correctAnswer: 0,
        explanation: "Fileless malware operates entirely in memory without writing files to disk, making it difficult to detect with traditional antivirus solutions that scan for malicious files."
      },
      {
        id: 10,
        text: "What is a cyber threat intelligence (CTI)?",
        options: [
          "A government agency that tracks cyber criminals",
          "Information about threats and threat actors that helps organizations make better security decisions",
          "Artificial intelligence used to detect cyber threats",
          "A type of malware that collects intelligence data"
        ],
        correctAnswer: 1,
        explanation: "Cyber Threat Intelligence is evidence-based knowledge about threats, including context, mechanisms, indicators, implications, and actionable advice, that helps organizations make informed security decisions."
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
      },
      {
        id: 3,
        text: "What is network segmentation?",
        options: [
          "Breaking a network cable into segments",
          "Dividing a network into multiple sub-networks to improve performance and security",
          "The process of monitoring network traffic",
          "Using multiple internet service providers"
        ],
        correctAnswer: 1,
        explanation: "Network segmentation divides a network into isolated segments or subnets, allowing organizations to apply different security controls, contain breaches, and separate sensitive systems from the general network."
      },
      {
        id: 4,
        text: "What is a VLAN?",
        options: [
          "Very Large Area Network",
          "Virtual Local Area Network",
          "Variable Length Authentication Number",
          "Verified Login Access Node"
        ],
        correctAnswer: 1,
        explanation: "A Virtual Local Area Network (VLAN) is a logical subgroup within a network that isolates a group of devices, allowing them to communicate as if they were on the same physical LAN regardless of their physical location."
      },
      {
        id: 5,
        text: "What is an intrusion detection system (IDS)?",
        options: [
          "A system that detects unauthorized physical entry into a building",
          "A device or software that monitors network traffic for suspicious activity and policy violations",
          "A system that blocks all external connections",
          "A backup system that detects data loss"
        ],
        correctAnswer: 1,
        explanation: "An intrusion detection system (IDS) monitors network traffic for suspicious activity and policy violations, alerting administrators when potential threats are detected."
      },
      {
        id: 6,
        text: "What is the difference between an IDS and an IPS?",
        options: [
          "IDS is for internal networks, IPS is for external networks",
          "IDS only detects threats, IPS can detect and prevent threats",
          "IDS is hardware-based, IPS is software-based",
          "IDS is newer technology, IPS is older"
        ],
        correctAnswer: 1,
        explanation: "An Intrusion Detection System (IDS) only monitors and alerts about suspicious activity, while an Intrusion Prevention System (IPS) can take automated actions to prevent or block detected threats."
      },
      {
        id: 7,
        text: "What is ARP spoofing?",
        options: [
          "A technique to speed up Address Resolution Protocol",
          "An attack where false ARP messages are sent to associate an attacker's MAC address with a legitimate IP address",
          "A method for backing up ARP tables",
          "A protocol for secure ARP communication"
        ],
        correctAnswer: 1,
        explanation: "ARP spoofing is an attack where an attacker sends falsified ARP messages to link their MAC address with a legitimate IP address, allowing them to intercept, modify, or stop network traffic."
      },
      {
        id: 8,
        text: "What is the purpose of a honeypot in network security?",
        options: [
          "To attract and distract attackers from real targets",
          "To store sweet data that everyone can access",
          "To improve network performance",
          "To provide WiFi in areas with poor coverage"
        ],
        correctAnswer: 0,
        explanation: "A honeypot is a decoy system designed to attract attackers, study their methods, detect attacks, and divert them from legitimate targets while providing security researchers with information about attack techniques."
      },
      {
        id: 9,
        text: "What is a man-in-the-middle (MITM) attack?",
        options: [
          "An attack by someone physically located between two computers",
          "An attack where someone secretly relays and possibly alters communication between two parties",
          "An attack targeting middle management in companies",
          "An attack from a nation located in the middle of a continent"
        ],
        correctAnswer: 1,
        explanation: "In a man-in-the-middle attack, an attacker secretly intercepts and relays communications between two parties who believe they are directly communicating with each other, allowing the attacker to eavesdrop or modify the traffic."
      },
      {
        id: 10,
        text: "What is the purpose of Network Access Control (NAC)?",
        options: [
          "To restrict internet access for employees",
          "To enforce security policy on devices before they're granted network access",
          "To track how much bandwidth each device uses",
          "To prioritize certain types of network traffic"
        ],
        correctAnswer: 1,
        explanation: "Network Access Control (NAC) enforces security policies by restricting network access to devices that meet defined security criteria, like having up-to-date antivirus, patches, and security configurations."
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
      },
      {
        id: 3,
        text: "What is the primary goal of the containment phase in incident response?",
        options: [
          "To identify how the incident occurred",
          "To limit the damage and prevent further damage",
          "To restore systems to normal operation",
          "To punish those responsible"
        ],
        correctAnswer: 1,
        explanation: "The containment phase aims to limit the scope and magnitude of an incident by isolating affected systems to prevent further damage or unauthorized access."
      },
      {
        id: 4,
        text: "What is an incident response plan?",
        options: [
          "A plan to prevent incidents from occurring",
          "A documented set of procedures for identifying, responding to, and limiting the effects of security incidents",
          "A training schedule for security personnel",
          "A list of emergency contacts"
        ],
        correctAnswer: 1,
        explanation: "An incident response plan is a documented, organized approach to addressing and managing security incidents, outlining specific procedures, roles, and steps to take when an incident occurs."
      },
      {
        id: 5,
        text: "What is forensic evidence collection in incident response?",
        options: [
          "Gathering physical evidence like fingerprints",
          "Taking photographs of damaged equipment",
          "Methodically collecting and preserving digital evidence for analysis or legal proceedings",
          "Interviewing witnesses after an incident"
        ],
        correctAnswer: 2,
        explanation: "Forensic evidence collection involves gathering and preserving digital evidence in a way that maintains its integrity and chain of custody, allowing for detailed analysis and potential use in legal proceedings."
      },
      {
        id: 6,
        text: "What is the purpose of the 'lessons learned' phase in incident response?",
        options: [
          "To assign blame for the incident",
          "To improve future incident response through analysis and documentation",
          "To calculate the cost of the incident",
          "To develop new security products"
        ],
        correctAnswer: 1,
        explanation: "The 'lessons learned' phase involves analyzing the incident and response efforts to identify improvements, update documentation and procedures, and enhance overall security posture to better prepare for future incidents."
      },
      {
        id: 7,
        text: "What is an incident response team (IRT)?",
        options: [
          "A group of external consultants hired after a breach",
          "A group of designated individuals responsible for responding to security incidents",
          "The IT department of a company",
          "Law enforcement officers specializing in cybercrime"
        ],
        correctAnswer: 1,
        explanation: "An incident response team (IRT) is a group of skilled individuals with defined roles and responsibilities who work together to address and manage security incidents within an organization."
      },
      {
        id: 8,
        text: "What is meant by 'chain of custody' in incident response?",
        options: [
          "The order in which systems were infected",
          "The sequential documentation showing who collected, handled, and controlled evidence",
          "The chain of command during an incident",
          "The process of installing security patches"
        ],
        correctAnswer: 1,
        explanation: "Chain of custody is the chronological documentation that records the sequence of custody, control, transfer, analysis, and disposition of physical or electronic evidence, ensuring its integrity for potential legal proceedings."
      },
      {
        id: 9,
        text: "What is the difference between an 'event' and an 'incident' in cybersecurity?",
        options: [
          "Events are more severe than incidents",
          "Events happen on networks; incidents happen on individual devices",
          "An event is any observable occurrence; an incident is an event that negatively impacts security",
          "Events are intentional; incidents are accidental"
        ],
        correctAnswer: 2,
        explanation: "An event is any observable occurrence in a system or network, while an incident is an event that actually or potentially jeopardizes the confidentiality, integrity, or availability of information systems or data."
      },
      {
        id: 10,
        text: "What should be included in an incident response communication plan?",
        options: [
          "Only technical details of the incident",
          "Defined roles, notification procedures, and communication templates for various stakeholders",
          "A list of all company employees",
          "Passwords for emergency access"
        ],
        correctAnswer: 1,
        explanation: "An incident response communication plan should outline who needs to be notified during an incident, when and how they should be contacted, what information should be shared, and may include pre-approved message templates for different scenarios and stakeholders."
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
      },
      {
        id: 3,
        text: "What is Cross-Site Scripting (XSS)?",
        options: [
          "Writing code that works across different websites",
          "A vulnerability allowing attackers to inject client-side scripts into web pages viewed by others",
          "A technique for sharing code between different websites",
          "A method for optimizing website performance"
        ],
        correctAnswer: 1,
        explanation: "Cross-Site Scripting (XSS) is a vulnerability that allows attackers to inject malicious scripts into content from trusted websites, which then execute in users' browsers, potentially stealing data or performing actions on their behalf."
      },
      {
        id: 4,
        text: "What is the principle of least privilege in secure coding?",
        options: [
          "Using the minimum amount of code possible",
          "Making all code private and inaccessible",
          "Giving users and programs only the access rights they need to perform their functions",
          "Restricting all users to the same access level"
        ],
        correctAnswer: 2,
        explanation: "The principle of least privilege states that users, processes, and programs should be given only the minimum access rights necessary to perform their required functions, reducing the potential impact of breaches or errors."
      },
      {
        id: 5,
        text: "What is a buffer overflow vulnerability?",
        options: [
          "When a program tries to store too much data in a buffer, overwriting adjacent memory",
          "When a database has too many records",
          "When network traffic exceeds capacity",
          "When too many users access a system simultaneously"
        ],
        correctAnswer: 0,
        explanation: "A buffer overflow occurs when a program writes more data to a buffer (temporary storage area) than it can hold, potentially overwriting adjacent memory locations and leading to crashes or code execution vulnerabilities."
      },
      {
        id: 6,
        text: "What is Cross-Site Request Forgery (CSRF)?",
        options: [
          "Requesting resources from multiple websites simultaneously",
          "An attack that forces users to execute unwanted actions on websites they're authenticated to",
          "Forging website certificates",
          "Creating fake websites that look like legitimate ones"
        ],
        correctAnswer: 1,
        explanation: "Cross-Site Request Forgery (CSRF) is an attack that tricks users into performing unwanted actions on websites where they're currently authenticated, by leveraging their active session to execute commands without their knowledge."
      },
      {
        id: 7,
        text: "What is code signing?",
        options: [
          "Adding a developer's signature as a comment in code",
          "Digitally signing code to verify its origin and integrity",
          "Encrypting source code to prevent copying",
          "The process of approving code during review"
        ],
        correctAnswer: 1,
        explanation: "Code signing uses a digital signature created with a private key to verify who published software and ensure it hasn't been altered since it was signed, helping users and systems trust legitimate code and avoid malware."
      },
      {
        id: 8,
        text: "What is static application security testing (SAST)?",
        options: [
          "Testing applications without user interaction",
          "Analyzing source code or compiled versions for security vulnerabilities without executing it",
          "Testing applications that don't change frequently",
          "Testing applications in a staging environment"
        ],
        correctAnswer: 1,
        explanation: "Static Application Security Testing (SAST) analyzes source code or compiled applications from the inside out, without executing them, to identify potential security vulnerabilities early in the development process."
      },
      {
        id: 9,
        text: "What is secure by design?",
        options: [
          "Using visually secure-looking interfaces",
          "An approach to software development that integrates security considerations throughout the entire development lifecycle",
          "Designing software that only works on secure networks",
          "Creating systems that automatically update security features"
        ],
        correctAnswer: 1,
        explanation: "Secure by design is an approach where security is considered an integral part of system design from the beginning, rather than being added later, leading to more robust and resilient systems."
      },
      {
        id: 10,
        text: "What is sanitization in secure coding?",
        options: [
          "Cleaning up messy code",
          "Removing sensitive data before disposal",
          "Processing untrusted input to remove potentially malicious content",
          "Using clean coding standards"
        ],
        correctAnswer: 2,
        explanation: "Sanitization is the process of cleaning or filtering untrusted input to remove potentially dangerous content before using it in operations, helping prevent injection attacks like XSS or SQL injection."
      }
    ]
  }
];

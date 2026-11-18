export const days = [
  {
    id: 1, title: "Cybersecurity foundations", short: "Understand the digital world",
    time: "75–90 min", level: "Beginner", icon: "◈",
    intro: "Learn what cybersecurity protects, who works in the field, and how to think about digital risk.",
    lessons: [
      ["What is cybersecurity?", "Cybersecurity is the practice of protecting devices, networks, applications and information from unauthorized access, damage or disruption. It combines people, processes and technology. Think of it like securing a home: locks, alarms, visitor rules and knowing what to do when something goes wrong."],
      ["Ethical hacking and hacker types", "An ethical hacker tests systems with clear permission and an agreed scope, then reports weaknesses so they can be fixed. Security work must be authorized. The labels white-hat, black-hat and grey-hat describe different intentions and permissions; permission is essential, not optional."],
      ["The CIA triad", "Confidentiality means only authorized people can see information. Integrity means information remains accurate and is changed only in approved ways. Availability means systems and information are accessible when needed. Example: a college portal needs private student records, correct marks and reliable access during registration."],
      ["Threats, vulnerabilities and risk", "A threat is something that could cause harm, such as a phishing attempt. A vulnerability is a weakness, such as an outdated application. Risk combines the likelihood of a threat using a vulnerability with the impact it could cause. Security teams reduce risk rather than promise zero risk."],
      ["Cybersecurity domains", "Network security protects data moving between systems. Application security reduces software weaknesses. Cloud security protects hosted services and configurations. Digital forensics examines digital evidence after an incident. Governance and risk work helps organizations make sensible security decisions."]
    ],
    tasks: ["Write the CIA triad in your own words and give one example for each part.", "For a fictional college portal, list one asset, one threat, one vulnerability and one possible impact."],
    quiz: [
      ["What does the C in CIA stand for?", ["Control", "Confidentiality", "Connectivity", "Compliance"], 1, "Confidentiality means information is available only to authorized people."],
      ["A software weakness that could be exploited is a…", ["Threat", "Asset", "Vulnerability", "Backup"], 2, "A vulnerability is a weakness; a threat may take advantage of it."],
      ["Which principle is about keeping information accurate?", ["Integrity", "Availability", "Confidentiality", "Authentication"], 0, "Integrity protects correctness and prevents unauthorized changes."],
      ["What must an ethical security tester have?", ["A public IP", "Permission and scope", "A powerful laptop", "A social account"], 1, "Testing must be explicitly authorized and stay within agreed scope."],
      ["A phishing email is an example of a…", ["Threat", "Patch", "Protocol", "Backup"], 0, "Phishing is a deceptive attempt to obtain information or trigger an unsafe action."]
    ]
  },
  {
    id: 2, title: "Networking fundamentals", short: "How devices communicate",
    time: "90 min", level: "Beginner", icon: "⌁",
    intro: "Understand the basic language of networks, addresses, protocols and the OSI model.",
    lessons: [
      ["What is a network?", "A network connects devices so they can exchange data and share resources. A LAN usually covers a small area such as a home, lab or office. A WAN connects networks across larger distances. A MAN generally spans a city or metropolitan area."],
      ["IP and MAC addresses", "An IP address is a logical address used to move packets between networks. IPv4 uses 32 bits, often written as four decimal numbers. IPv6 uses 128 bits. A MAC address identifies a network interface on a local network. Public IPs are reachable across the internet; private IP ranges are used inside local networks."],
      ["DNS and DHCP", "DNS translates human-friendly domain names into IP addresses, much like a contacts list. DHCP automatically provides network settings such as an IP address, gateway and DNS server to a device joining a network."],
      ["TCP, UDP, HTTP and HTTPS", "TCP provides an ordered, reliable connection. UDP has less connection overhead and is useful when speed or timing matters. HTTP is used to transfer web content. HTTPS protects HTTP traffic using TLS encryption and server authentication."],
      ["Ports and the OSI model", "A port helps a device direct network traffic to the right application. Common examples include 80 for HTTP, 443 for HTTPS and 53 for DNS. The OSI model is a seven-layer learning framework: Physical, Data Link, Network, Transport, Session, Presentation and Application."]
    ],
    tasks: ["Draw a simple path: laptop → Wi-Fi router → internet → website server.", "On your own Windows computer, run ipconfig, hostname and nslookup example.com. Read the output; do not share private network details publicly."],
    quiz: [
      ["What does DNS do?", ["Encrypts files", "Maps domain names to IP addresses", "Assigns MAC addresses", "Blocks malware"], 1, "DNS resolves names such as example.com to IP addresses."],
      ["Which protocol is connection-oriented and reliable?", ["UDP", "TCP", "DNS", "DHCP"], 1, "TCP provides ordered, reliable delivery."],
      ["Which is the usual HTTPS port?", ["21", "25", "53", "443"], 3, "HTTPS commonly uses TCP port 443."],
      ["Which OSI layer handles logical addressing and routing?", ["Physical", "Network", "Presentation", "Session"], 1, "The Network layer is associated with logical addressing and routing."],
      ["What does DHCP commonly provide?", ["A device's network configuration", "Website HTML", "A password hash", "A browser cookie"], 0, "DHCP can assign IP configuration automatically."]
    ]
  },
  {
    id: 3, title: "Linux essentials", short: "Get comfortable with the terminal",
    time: "75–90 min", level: "Beginner", icon: "⌘",
    intro: "Learn the Linux filesystem, terminal vocabulary, users and permissions using a safe simulated lab.",
    lessons: [
      ["Linux and distributions", "Linux is an open-source operating system kernel used in servers, cloud systems, embedded devices and desktops. A distribution packages the kernel with tools and software. Ubuntu is a popular general-purpose distribution. Kali Linux is a specialized distribution for authorized security testing and learning."],
      ["Filesystem basics", "Linux organizes files in a tree that begins at /. Your home directory stores your personal files. Paths can be absolute, starting at /, or relative to your current directory. The terminal lets you interact with the system by entering commands."],
      ["Files, folders and navigation", "pwd prints the current directory. ls lists items. cd changes directory. mkdir creates a directory. touch creates an empty file. cat displays file contents. cp copies and mv moves or renames files."],
      ["Users and permissions", "Linux systems use users and groups to manage access. Permissions commonly describe read, write and execute access for the owner, group and others. Use the principle of least privilege: give each account only the access it needs."],
      ["Searching and identity", "whoami displays the current username. grep searches text for a matching pattern. Learn commands in a practice environment first and understand what a command does before running it on a real system."]
    ],
    tasks: ["Use the simulated terminal in Cyber Lab to create a folder called practice and a file called notes.txt.", "Explain the difference between read, write and execute permissions."],
    quiz: [
      ["Which command prints the current directory?", ["ls", "pwd", "cd", "cat"], 1, "pwd means print working directory."],
      ["Which command lists files?", ["ls", "mv", "touch", "grep"], 0, "ls lists directory contents."],
      ["Which command changes directory?", ["cat", "whoami", "cd", "cp"], 2, "cd changes your current directory."],
      ["What does least privilege mean?", ["Give everyone admin access", "Give only necessary access", "Disable all accounts", "Share one account"], 1, "Least privilege limits access to what is needed for a task."],
      ["Which command searches text for a pattern?", ["grep", "mkdir", "pwd", "touch"], 0, "grep searches input for matching text patterns."]
    ]
  },
  {
    id: 4, title: "Security principles & threats", short: "Protect accounts and information",
    time: "90 min", level: "Beginner", icon: "⬡",
    intro: "Explore practical defensive habits, common threats and the controls that reduce risk.",
    lessons: [
      ["Authentication vs authorization", "Authentication answers 'Who are you?' Authorization answers 'What are you allowed to do?' Logging in verifies identity; permissions determine which records or features that account can access."],
      ["MFA, passwords and passphrases", "Multi-factor authentication combines different factor types, such as something you know and something you have. A long, unique passphrase is generally easier to remember and harder to guess than a short predictable password. A password manager can help create and store unique passwords."],
      ["Encryption vs hashing", "Encryption is designed to be reversible with the correct key. Hashing creates a fixed-length digest and is designed to be one-way. Systems should store passwords using a purpose-built password hashing algorithm with salts, not plain text or a fast general-purpose hash."],
      ["Common threats", "Malware is software designed to perform unwanted or harmful actions. Ransomware may deny access to data. Phishing uses deceptive messages to trick people. Social engineering manipulates people rather than relying only on technical weaknesses."],
      ["Defensive controls", "Firewalls control network traffic according to rules. Antivirus and endpoint protection help detect suspicious activity. Updates fix known weaknesses. Backups help recover from data loss. Least privilege limits the damage if an account is misused."]
    ],
    tasks: ["Review the security settings of your own accounts and enable MFA where available.", "Use the phishing challenge in Cyber Lab to identify warning signs in fictional messages."],
    quiz: [
      ["Authentication verifies…", ["What you can access", "Who you are", "How fast a network is", "Whether a file is backed up"], 1, "Authentication verifies identity."],
      ["Which statement about encryption is correct?", ["It is always one-way", "It can be reversed with the right key", "It is the same as compression", "It removes metadata"], 1, "Encryption is reversible when the correct key is available."],
      ["What is phishing?", ["A backup strategy", "A deceptive attempt to obtain information or cause an unsafe action", "A network cable", "A Linux distribution"], 1, "Phishing uses deceptive communication to manipulate recipients."],
      ["Why are backups useful?", ["They replace MFA", "They help recover data", "They stop all phishing", "They make passwords longer"], 1, "Backups support recovery after accidental deletion, failures or incidents."],
      ["MFA means…", ["Multiple file access", "Multi-factor authentication", "Managed firewall application", "Mainframe access"], 1, "MFA requires more than one authentication factor."]
    ]
  },
  {
    id: 5, title: "Web security basics", short: "Understand how websites stay safe",
    time: "90 min", level: "Beginner", icon: "⌘",
    intro: "Learn the browser-server relationship and recognize common web application security risks.",
    lessons: [
      ["How websites work", "A browser is a client. It sends requests to a server, which may return HTML, CSS, JavaScript or data. The frontend is the part people interact with. The backend handles application logic, data access and server-side operations."],
      ["APIs, cookies and sessions", "An API defines how software components communicate. Cookies are small pieces of data stored by a browser. Sessions help a server remember a user's authenticated state across requests. Secure session design uses appropriate cookie settings and protects session identifiers."],
      ["Authentication and access control", "A secure application checks identity and then checks authorization for every protected action. Hiding a button in the interface is not access control; the server must enforce permissions."],
      ["SQL injection and XSS", "SQL injection can occur when untrusted input is incorrectly included in database queries. Use parameterized queries and safe data access patterns. Cross-Site Scripting (XSS) occurs when untrusted content is treated as executable script in a user's browser. Context-aware output encoding and safe frameworks help prevent it."],
      ["OWASP and secure development", "OWASP publishes guidance and resources for application security. Learn to validate inputs, handle errors safely, protect sensitive data, update dependencies and enforce access control. Practice only in intentionally vulnerable training labs or systems you own and are authorized to test."]
    ],
    tasks: ["Inspect a fictional website scenario and identify where server-side authorization is needed.", "Write down two prevention methods for SQL injection and two for XSS."],
    quiz: [
      ["What is the frontend?", ["The user-facing part of an application", "A database backup", "A firewall rule", "A network cable"], 0, "The frontend is the interface users interact with."],
      ["Where should access permissions be enforced?", ["Only by hiding UI buttons", "On the server for protected actions", "Only in CSS", "In a page title"], 1, "The server must enforce authorization because client-side UI can be changed."],
      ["Which practice helps prevent SQL injection?", ["String concatenation", "Parameterized queries", "Sharing database passwords", "Disabling updates"], 1, "Parameterized queries separate data from SQL instructions."],
      ["XSS affects which environment?", ["A user's browser", "A power supply", "A router's casing", "A printer cartridge"], 0, "XSS causes untrusted content to execute in a browser context."],
      ["What is an API?", ["A communication interface between software components", "A type of monitor", "A password format", "A Linux permission"], 0, "APIs define how software components exchange requests and data."]
    ]
  },
  {
    id: 6, title: "Python for cybersecurity", short: "Use code to understand security data",
    time: "90 min", level: "Beginner", icon: "⌁",
    intro: "Use basic Python concepts to process harmless sample data and understand simple automation.",
    lessons: [
      ["Python building blocks", "Python is a readable general-purpose programming language. Variables hold values. Common types include strings, integers, floats, booleans, lists and dictionaries. Indentation defines blocks of code."],
      ["Conditions and loops", "An if statement chooses what to do based on a condition. A for loop repeats an action for each item. A while loop repeats while a condition remains true. Use loops to process lists of sample events."],
      ["Functions and collections", "A function groups reusable instructions. Lists store ordered collections. Dictionaries store key-value pairs, which are useful for structured records such as a sample event with a timestamp, username and status."],
      ["Files and exceptions", "File handling lets a program read or write information. Use context managers such as with open(...) so files are closed correctly. Exceptions let a program handle errors without crashing unexpectedly."],
      ["Log analysis", "Logs are records of events. A simple learning script can count event types or summarize fictional failed-login entries. Real security monitoring requires context and careful validation; a count alone does not prove an attack."]
    ],
    tasks: ["Create a simple word counter using a short paragraph you wrote.", "Review the sample log in Cyber Lab and count how many entries have status FAILED."],
    quiz: [
      ["Which Python type stores an ordered collection?", ["list", "bool", "float", "None"], 0, "A list stores an ordered sequence of items."],
      ["Which keyword defines a function?", ["loop", "def", "make", "function"], 1, "Python uses def to define a function."],
      ["What does an if statement do?", ["Repeats forever", "Makes a decision based on a condition", "Creates a file", "Imports a package"], 1, "if runs a block when its condition is true."],
      ["What is a log?", ["A record of events", "A type of password", "A network port", "A CSS property"], 0, "Logs record events that can help with troubleshooting and security review."],
      ["Why use exception handling?", ["To hide all errors", "To handle expected errors safely", "To speed up Wi-Fi", "To encrypt every variable"], 1, "Exception handling lets programs respond to errors in a controlled way."]
    ]
  },
  {
    id: 7, title: "Revision & final project", short: "Bring your learning together",
    time: "90 min", level: "Beginner", icon: "✧",
    intro: "Review the foundations and create a practical personal cybersecurity audit report.",
    lessons: [
      ["Review the foundations", "Revisit the CIA triad, threats and vulnerabilities, networking, Linux, account security, web security and Python. Focus on explaining concepts in your own words rather than memorizing definitions."],
      ["Think like a defender", "Start with the asset: what are you protecting? Identify possible threats and weaknesses, estimate impact, and choose sensible controls. Prioritize actions that reduce meaningful risk."],
      ["Personal cybersecurity audit", "Review your own device and accounts at a high level. Check whether updates are enabled, MFA is available, passwords are unique, backups exist and account recovery details are current. Do not write passwords or private recovery codes into this report."],
      ["Write recommendations", "For each issue, describe the observation, why it matters and a practical recommendation. Use clear language. Separate facts from assumptions and avoid claiming that a device is completely secure."],
      ["Next steps", "After this week, continue with structured networking and Linux practice, beginner programming, and authorized defensive labs. Build a small portfolio of notes, diagrams and safe projects that demonstrate what you understand."]
    ],
    tasks: ["Complete the final mixed quiz.", "Create your personal cybersecurity audit using the report builder in this app. Never enter passwords, recovery codes or other secrets."],
    quiz: [
      ["Which is the best first step in a security review?", ["Buy tools immediately", "Identify the assets to protect", "Publish passwords", "Disable updates"], 1, "You need to understand what matters before assessing risk and choosing controls."],
      ["A good recommendation should be…", ["Vague", "Practical and linked to a risk", "A guarantee of perfect security", "Based on guesses only"], 1, "Useful recommendations address an identified risk and can be acted upon."],
      ["Should you put passwords in your audit report?", ["Yes", "Only short ones", "No", "Only school passwords"], 2, "Never include passwords or recovery codes in a report."],
      ["What is a sensible next step after this course?", ["Test random websites", "Continue structured learning and authorized labs", "Stop updating devices", "Share account credentials"], 1, "Continue with structured learning and safe, authorized practice."],
      ["Does a security audit guarantee zero risk?", ["Yes", "No"], 1, "A review helps identify and reduce risk; it cannot guarantee zero risk."]
    ]
  }
];

export const glossary = [
  ["Asset", "Something valuable that needs protection, such as data, a device or an account."],
  ["Threat", "A possible cause of harm to a system or information."],
  ["Vulnerability", "A weakness that could be misused."],
  ["Risk", "The possibility and impact of harm occurring."],
  ["Protocol", "A set of rules that devices use to communicate."],
  ["Firewall", "A control that allows or blocks network traffic based on rules."],
  ["MFA", "Multi-factor authentication; using more than one type of proof to sign in."],
  ["Hashing", "A one-way transformation that produces a fixed-length digest."],
  ["Encryption", "A reversible transformation that protects data using a key."],
  ["API", "A defined interface that lets software components communicate."]
];

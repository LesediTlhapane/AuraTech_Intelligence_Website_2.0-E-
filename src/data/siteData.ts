export interface BusinessProblem {
  id: string;
  title: string;
  symptom: string;
  consequence: string;
  auraSolution: string;
  icon: string;
  solutionTag: string;
}

export interface MethodStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface IndustryVertical {
  id: string;
  title: string;
  icon: string;
  headline: string;
  challenges: string[];
  solutions: string[];
  verifiedCapabilities: string[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  keyCapabilities: string[];
  startingPrice: string;
  useCases: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientType: string;
  industry: string;
  capabilityCategory: 'agents' | 'workflows' | 'hr' | 'healthcare' | 'compliance' | 'education' | 'web';
  statusBadge: 'Verified Project' | 'Production Client' | 'Live Demo' | 'Full-Stack System' | 'Incubation Prototype';
  challenge: string;
  solution: string;
  intelligence: string;
  result: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  mobileUrl?: string;
  adminUrl?: string;
  isFeatured?: boolean;
}

export interface Differentiator {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
}

export interface PricingEngagement {
  id: string;
  tier: string;
  title: string;
  subtitle: string;
  price: string;
  timeline: string;
  popular?: boolean;
  idealFor: string;
  deliverables: string[];
  ctaText: string;
  ctaAction: string;
}

export interface FAQItem {
  id: string;
  category: 'Strategy & Scoping' | 'Technical & Integration' | 'Security & Ownership' | 'Delivery';
  question: string;
  answer: string;
}

// -------------------------------------------------------------
// BUSINESS PROBLEMS ("Where Is Your Business Losing Time?")
// -------------------------------------------------------------
export const BUSINESS_PROBLEMS: BusinessProblem[] = [
  {
    id: 'admin-overload',
    title: 'Repetitive Administration & Data Entry',
    symptom: 'Staff spending hours copying information between emails, spreadsheets, CRMs, and accounting tools.',
    consequence: 'Costly human data entry errors, employee fatigue, and delayed operational turnaround.',
    auraSolution: 'Autonomous Operations Agents that extract structured data from emails, invoices, and forms directly into your databases.',
    icon: 'FileSpreadsheet',
    solutionTag: 'Operations & Admin Agent',
  },
  {
    id: 'slow-response',
    title: 'Slow Inbound Response & Missed Leads',
    symptom: 'Prospects and clients waiting hours or days for quotes, basic answers, or appointment bookings.',
    consequence: 'Lost revenue to faster competitors and degraded customer satisfaction ratings.',
    auraSolution: '24/7 Multi-Channel Customer Agents on WhatsApp and Web that qualify leads and book appointments in seconds.',
    icon: 'Headset',
    solutionTag: 'Customer Experience Agent',
  },
  {
    id: 'disconnected-systems',
    title: 'Fragmented Software & Siloed Tools',
    symptom: 'Your CRM, email client, accounting software, and operational databases do not communicate with each other.',
    consequence: 'Bottlenecks where human handoffs cause dropped tasks, duplicate work, and zero operational visibility.',
    auraSolution: 'End-to-End Intelligent Workflows that orchestrate data flows seamlessly across your existing software stack.',
    icon: 'GitBranch',
    solutionTag: 'System Integration Workflow',
  },
  {
    id: 'knowledge-silos',
    title: 'Trapped Knowledge & Repeated Questions',
    symptom: 'Senior employees constantly interrupted to answer routine policy, compliance, or operational questions.',
    consequence: 'Severe knowledge loss during staff turnover and slower execution for junior team members.',
    auraSolution: 'Private Knowledge Base Brains trained on company SOPs, manuals, and internal documentation.',
    icon: 'Brain',
    solutionTag: 'Knowledge Base Brain',
  },
  {
    id: 'recruitment-friction',
    title: 'Recruitment & Onboarding Bottlenecks',
    symptom: 'HR teams buried under hundreds of unfiltered CVs, manual interview scheduling, and paper checklists.',
    consequence: 'Prolonged hiring cycles, candidate drop-off, and inconsistent new-hire training experiences.',
    auraSolution: 'Aura Recruitment & HR Flow to parse resumes, rank applicants against job criteria, and automate onboarding.',
    icon: 'Users',
    solutionTag: 'HR & Recruitment Agent',
  },
  {
    id: 'compliance-reporting',
    title: 'Manual Compliance & Report Generation',
    symptom: 'Hours wasted every month collating spreadsheets for tax, B-BBEE verification, or performance reports.',
    consequence: 'Late filings, compliance risks, and reactive business decision-making without real-time data.',
    auraSolution: 'Automated Compliance Intelligence & OCR Document Parsers that validate data and generate instant reports.',
    icon: 'ShieldCheck',
    solutionTag: 'Compliance Intelligence',
  },
];

// -------------------------------------------------------------
// THE AURA INTELLIGENCE METHOD (6-STAGE CONSULTING FRAMEWORK)
// -------------------------------------------------------------
export const METHOD_STAGES: MethodStage[] = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Business & Process Deep Dive',
    description: 'We analyze your core operations, existing software stack, team structure, and identify high-friction manual tasks.',
    deliverables: ['Operational workflow map', 'Stakeholder interviews', 'Data asset inventory'],
    icon: 'Search',
  },
  {
    step: '02',
    title: 'DIAGNOSE',
    subtitle: 'Bottleneck & ROI Opportunity Audit',
    description: 'We calculate the specific time and financial cost of repetitive tasks, prioritizing highest-ROI automation vectors.',
    deliverables: ['AI Opportunity Assessment', 'ROI projection model', 'Risk & feasibility scorecard'],
    icon: 'Activity',
  },
  {
    step: '03',
    title: 'ARCHITECT',
    subtitle: 'System Blueprint & AI Design',
    description: 'We design custom agent personas, knowledge retrieval graphs, API data pipelines, and human-in-the-loop validation checkpoints.',
    deliverables: ['Technical architecture blueprint', 'Prompt & logic specification', 'Security & POPIA compliance framework'],
    icon: 'Layers',
  },
  {
    step: '04',
    title: 'BUILD',
    subtitle: 'Engineering & System Integration',
    description: 'We build the AI agents, connect APIs to your CRMs and tools, tune foundational models, and run rigorous edge-case testing.',
    deliverables: ['Custom agent codebase', 'API & webhook integrations', 'Test suite validation'],
    icon: 'Code',
  },
  {
    step: '05',
    title: 'DEPLOY',
    subtitle: 'Phased Launch & Team Enablement',
    description: 'We roll out the system in a controlled staging environment, provide team onboarding, and activate live monitoring.',
    deliverables: ['Production deployment', 'Staff training & documentation', 'Real-time telemetry dashboard'],
    icon: 'Sparkles',
  },
  {
    step: '06',
    title: 'OPTIMISE',
    subtitle: 'Continuous Tuning & Scaling',
    description: 'We monitor agent decisions, review analytics, fine-tune accuracy, and expand capabilities as your business grows.',
    deliverables: ['Monthly performance reviews', 'Prompt & model accuracy updates', 'Priority SLA support'],
    icon: 'TrendingUp',
  },
];

// -------------------------------------------------------------
// WHAT WE BUILD (CORE SOLUTIONS)
// -------------------------------------------------------------
export const SOLUTIONS: SolutionCategory[] = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    subtitle: 'Specialised Digital Workers',
    description: 'Autonomous AI agents engineered to perform specific operational roles with high precision, context awareness, and zero fatigue.',
    icon: 'Bot',
    badge: 'Core Solution',
    startingPrice: 'From R3,850',
    keyCapabilities: [
      'Multi-channel customer engagement (WhatsApp, Web, Email)',
      'Intelligent document reading & OCR extraction',
      'Automated appointment scheduling & calendar management',
      'Contextual sentiment analysis and smart escalation',
    ],
    useCases: ['Customer Support', 'Operations & Admin', 'Candidate Screening', 'Front-Desk Reception'],
  },
  {
    id: 'intelligent-workflows',
    title: 'Intelligent Workflows',
    subtitle: 'End-to-End Process Automation',
    description: 'Multi-system pipelines connecting human decisions, software tools, and AI agents into a single synchronized workflow.',
    icon: 'GitBranch',
    badge: 'High Impact',
    startingPrice: 'From R4,800',
    keyCapabilities: [
      'Lead-to-customer qualification and CRM synchronization',
      'Automated invoice-to-accounting reconciliation',
      'Support ticket categorization, prioritization & auto-reply',
      'Multi-tier employee approval chains with audit logs',
    ],
    useCases: ['Sales Pipelines', 'Finance & Billing', 'HR Onboarding', 'Ticketing Operations'],
  },
  {
    id: 'knowledge-systems',
    title: 'Enterprise Knowledge Systems',
    subtitle: 'Private Company Brains',
    description: 'Secure, retrieval-augmented generation (RAG) platforms that turn company manuals, policies, and contracts into instant answers.',
    icon: 'Brain',
    badge: 'Enterprise',
    startingPrice: 'From R4,750',
    keyCapabilities: [
      'Document Q&A across PDF, DOCX, Spreadsheets, and databases',
      'Strict source attribution with clickable references',
      'Role-based access control and data security',
      'Zero training on public models (data remains 100% private)',
    ],
    useCases: ['SOP Guidance', 'Legal & Compliance Lookup', 'Internal IT Support', 'Employee Training'],
  },
  {
    id: 'strategy-discovery',
    title: 'AI Strategy & Discovery',
    subtitle: 'Roadmap & Opportunity Blueprint',
    description: 'A structured consulting engagement that audits your workflows, pinpoints high-value AI opportunities, and provides an actionable blueprint.',
    icon: 'Search',
    badge: 'Discovery Phase',
    startingPrice: 'From R2,500',
    keyCapabilities: [
      'Full operational audit and bottleneck identification',
      '15–25 page bespoke architecture & implementation blueprint',
      'ROI and payback horizon calculations',
      'Interactive prototype / Proof of Concept demo',
    ],
    useCases: ['Executive Strategy', 'Tech Feasibility', 'Digital Transformation', 'Budget Scoping'],
  },
  {
    id: 'system-integration',
    title: 'System & API Integration',
    subtitle: 'Connecting Fragmented Tools',
    description: 'Bridging your existing CRMs (HubSpot, Salesforce), ERPs, accounting software (Sage, Xero), and communication channels.',
    icon: 'RefreshCw',
    badge: 'Integration-First',
    startingPrice: 'From R4,400',
    keyCapabilities: [
      'Custom webhook listeners and REST API middleware',
      'Two-way synchronization between legacy systems and AI',
      'Automated error handling, logging, and retry queues',
      'Zero disruption to existing legacy software setups',
    ],
    useCases: ['CRM Sync', 'Accounting Integration', 'WhatsApp Business API', 'Database Webhooks'],
  },
  {
    id: 'custom-applications',
    title: 'Custom AI Applications & Web',
    subtitle: 'Purpose-Built Business Software',
    description: 'High-performance web and mobile platforms with embedded AI intelligence, sleek modern UX, and robust backend logic.',
    icon: 'Globe',
    badge: 'Bespoke Development',
    startingPrice: 'From R4,450',
    keyCapabilities: [
      'Custom responsive web applications with modern design',
      'Embedded conversational agents and dynamic lead capture',
      'Full-stack architecture with real-time state management',
      'Built for fast load speeds, security, and mobile users',
    ],
    useCases: ['Smart Company Portals', 'Client Dashboards', 'E-Commerce AI', 'Workflow Mobile Apps'],
  },
];

// -------------------------------------------------------------
// INDUSTRY VERTICALS
// -------------------------------------------------------------
export const INDUSTRY_SOLUTIONS: IndustryVertical[] = [
  {
    id: 'healthcare',
    title: 'Healthcare & Clinics',
    icon: 'Stethoscope',
    headline: 'Streamline patient intake, reduce front-desk overwhelm, and coordinate care.',
    challenges: [
      'Front-desk staff overwhelmed by repetitive booking calls',
      'Patient drop-off due to after-hours booking unavailability',
      'Manual triage notes and paper record transcription',
    ],
    solutions: [
      '24/7 WhatsApp & Web patient appointment booking assistant',
      'Pre-consultation symptom and intake questionnaire parsing',
      'Automated appointment reminders reducing no-show rates',
    ],
    verifiedCapabilities: ['Aura Clinic Management', 'Aura Reception AI Agent'],
  },
  {
    id: 'recruitment-hr',
    title: 'Recruitment & HR',
    icon: 'Users',
    headline: 'Accelerate candidate screening and automate employee request lifecycles.',
    challenges: [
      'HR teams manually reviewing hundreds of unqualified CVs',
      'Time-consuming back-and-forth interview scheduling',
      'Manual leave request approvals and policy questions',
    ],
    solutions: [
      'Automated resume parsing and skills matrix scoring',
      'Interactive candidate pre-qualification workflows',
      'Aura-Sage HRIS assistant for instant policy lookup and leave routing',
    ],
    verifiedCapabilities: ['AuraTech Recruitment Flow', 'Aura-Sage HRIS Agent', 'Leave Management System'],
  },
  {
    id: 'compliance-finance',
    title: 'Compliance, Tax & Admin',
    icon: 'Scale',
    headline: 'Eliminate manual document checking and ensure strict regulatory adherence.',
    challenges: [
      'Manual verification of supplier tax certificates and B-BBEE scorecards',
      'Time-consuming invoice extraction and double-entry in accounting software',
      'Risk of human oversight on regulatory compliance filings',
    ],
    solutions: [
      'OCR-based tax document parsing and compliance verification',
      'Automated B-BBEE scorecard level calculations and recommendations',
      'Invoice-to-payment matching with multi-step approval routing',
    ],
    verifiedCapabilities: ['B-BBEE Compass', 'Aura TaxSnap Agent', 'Aura Assessor Intelligence'],
  },
  {
    id: 'education-training',
    title: 'Education & Training',
    icon: 'GraduationCap',
    headline: 'Orchestrate course curriculums and empower students with 24/7 tutoring.',
    challenges: [
      'Curriculum coordinators struggling with fragmented course material',
      'Instructors flooded with repetitive foundational student queries',
      'Manual grading of standard modular assessments',
    ],
    solutions: [
      'Automated course orchestration and syllabus generation',
      'Student study companion answering queries based on course materials',
      'Automated assessment generation and instant feedback loops',
    ],
    verifiedCapabilities: ['eStudy Course Orchestrator', 'eStudy South Africa Hub'],
  },
  {
    id: 'lead-sales',
    title: 'Sales & Lead Intelligence',
    icon: 'TrendingUp',
    headline: 'Engage incoming prospects within seconds and keep your pipeline active.',
    challenges: [
      'Leads going cold because sales reps take hours to follow up',
      'Manual lead qualification wasting senior sales team time',
      'Inconsistent CRM data updates and dropped follow-up tasks',
    ],
    solutions: [
      'Instant conversational lead qualification on web and WhatsApp',
      'Automated CRM enrichment with company details and buyer intent',
      'Multi-touch follow-up triggers based on buyer interaction',
    ],
    verifiedCapabilities: ['Aura Lead Intelligence', 'Aura Tech Automates', 'Orbit-AI'],
  },
  {
    id: 'professional-smb',
    title: 'Operations-Heavy SMBs',
    icon: 'Building2',
    headline: 'Eliminate operational chaos and scale capacity without ballooning headcount.',
    challenges: [
      'Founders and key operators trapped in daily administrative trivia',
      'Processes dependent on key individuals with no written SOPs',
      'Disconnected spreadsheets causing communication breakdowns',
    ],
    solutions: [
      'Custom digital workers handling back-office admin tasks',
      'Centralized knowledge base answering operational questions',
      'Automated client reporting and milestone updates',
    ],
    verifiedCapabilities: ['Aura Discovery Stack', 'Clean Sole Haven Portal', 'Trolie Forward Platform'],
  },
];

// -------------------------------------------------------------
// VERIFIED CASE STUDIES & CAPABILITY HIGHLIGHTS (from 18 Repos)
// -------------------------------------------------------------
export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-recruitment-flow',
    title: 'AuraTech Recruitment Flow',
    clientType: 'Talent & HR Operations',
    industry: 'Recruitment & Staffing',
    capabilityCategory: 'hr',
    statusBadge: 'Verified Project',
    isFeatured: true,
    challenge: 'HR teams spend dozens of hours reviewing high-volume applicant CVs, manually matching candidate skills to job specifications, and managing tedious scheduling emails.',
    solution: 'Engineered an end-to-end recruitment intelligence pipeline with structured candidate intake, automated resume parsing, criterion-based candidate scoring, and automated status notifications.',
    intelligence: 'Employs NLP extraction to extract structured skills, work histories, and qualifications from unstructured PDF/Word documents, matching them against job specifications.',
    result: 'Demonstrated automated parsing and ranking pipeline capability, eliminating manual resume data entry and standardizing candidate evaluation.',
    techStack: ['TypeScript', 'React', 'Python', 'NLP Extraction', 'Tailwind CSS'],
    githubUrl: 'https://github.com/LesediTlhapane/AuraTech_Recruitment_Flow',
  },
  {
    id: 'case-sage-hris',
    title: 'Aura-Sage HRIS Agent',
    clientType: 'Enterprise HR Operations',
    industry: 'Human Resources',
    capabilityCategory: 'agents',
    statusBadge: 'Verified Project',
    isFeatured: true,
    challenge: 'Employees repeatedly interrupt HR managers with routine policy questions, leave allowance queries, and onboarding requirements, causing severe administrative drag.',
    solution: 'Developed an intelligent HR conversational agent that connects to company HR policies and Sage workflows to answer employee questions and guide onboarding autonomously.',
    intelligence: 'Retrieval-Augmented Generation (RAG) mapped over corporate HR documentation and employee query intent classification with role-aware privacy boundaries.',
    result: 'Demonstrates a digital worker prototype for HR policy analysis, compliance checks, and audit-oriented reporting.',
    techStack: ['Python', 'LangChain', 'FastAPI', 'Vector Embeddings', 'Sage Integration'],
    githubUrl: 'https://github.com/LesediTlhapane/aura-sage-hris-agent',
  },
  {
    id: 'case-clinic-reception',
    title: 'Aura Clinic & Reception Intelligence',
    clientType: 'Clinical & Healthcare Practices',
    industry: 'Healthcare',
    capabilityCategory: 'healthcare',
    statusBadge: 'Verified Project',
    isFeatured: true,
    challenge: 'Medical clinics experience constant phone traffic for routine bookings, patient check-ins, and basic inquiries, resulting in long waiting queues and missed after-hours appointments.',
    solution: 'Designed a dual-layer healthcare administration suite comprising an autonomous front-desk reception agent and a clinical appointment coordination dashboard.',
    intelligence: 'Smart conversational calendar management with emergency triage detection that routes urgent clinical requests to human medical staff immediately.',
    result: 'Demonstrates patient booking, automated confirmations, slot conflict handling, and escalation paths for urgent requests.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Conversational AI', 'Calendar APIs'],
    githubUrl: 'https://github.com/LesediTlhapane/aura-clinic',
  },
  {
    id: 'case-bbbee-compass',
    title: 'B-BBEE Compass Intelligence',
    clientType: 'South African Corporate Compliance',
    industry: 'Compliance & Legal',
    capabilityCategory: 'compliance',
    statusBadge: 'Verified Project',
    isFeatured: true,
    challenge: 'South African businesses struggle to navigate complex B-BBEE scorecard legislation, calculate point allocations, and identify compliant supplier procurement strategies.',
    solution: 'Built an intelligent compliance calculation and recommendation platform that analyzes business ownership, management control, and procurement spend to provide B-BBEE level roadmaps.',
    intelligence: 'Rule-based compliance engine combined with AI decision-support logic that models different procurement scenarios to maximize statutory points.',
    result: 'Functional decision-support system demonstrating automated scorecard calculation and optimization advice for local South African enterprises.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Decision Logic Engine'],
    githubUrl: 'https://github.com/LesediTlhapane/b-bbee-compass',
  },
  {
    id: 'case-leave-management',
    title: 'Full-Stack Leave Management System',
    clientType: 'Workforce Operations',
    industry: 'Operations & Enterprise',
    capabilityCategory: 'workflows',
    statusBadge: 'Full-Stack System',
    isFeatured: true,
    challenge: 'Paper-based and email-driven employee leave requests caused approval delays, lost records, and lack of visibility for department managers planning project rosters.',
    solution: 'Engineered a complete multi-platform ecosystem with a React Native mobile application for employees, an executive web admin portal, and an automated multi-tier approval workflow.',
    intelligence: 'Automated policy rule verification (leave balance validation, blackout periods, overlapping team leaves) with instant push alerts to team leads.',
    result: 'Full-stack cross-platform production build demonstrating complete database synchronization, mobile-to-web state management, and role-based permissions.',
    techStack: ['React Native', 'React.js', 'Python', 'REST API', 'PostgreSQL/SQLite'],
    mobileUrl: 'https://github.com/LesediTlhapane/Leave-Management-System-Mobile-Application',
    adminUrl: 'https://github.com/LesediTlhapane/Leave_Management_system-',
  },
  {
    id: 'case-lead-intelligence',
    title: 'Aura Lead Intelligence & Automation',
    clientType: 'B2B Sales Organizations',
    industry: 'Sales & Growth',
    capabilityCategory: 'workflows',
    statusBadge: 'Verified Project',
    isFeatured: false,
    challenge: 'Inbound sales inquiries across multiple touchpoints took hours to receive replies, leading to low conversion rates and unorganized sales pipelines.',
    solution: 'Deployed an automated lead ingestion and qualification workflow that captures leads, scores prospect intent, enriches contact records, and triggers automated follow-ups.',
    intelligence: 'Intent scoring models that prioritize high-value leads and automatically draft personalized outreach responses based on specific client inquiries.',
    result: 'Demonstrated automated lead-to-CRM pipeline architecture with instant notification dispatching to account executives.',
    techStack: ['Python', 'n8n Workflow Automation', 'Webhook Middleware', 'CRM APIs'],
    githubUrl: 'https://github.com/LesediTlhapane/Aura-Lead-Intelligence-',
  },
  {
    id: 'case-course-orchestrator',
    title: 'eStudy Course Orchestrator',
    clientType: 'Education & Training Providers',
    industry: 'Education & EdTech',
    capabilityCategory: 'education',
    statusBadge: 'Incubation Prototype',
    isFeatured: false,
    challenge: 'Educational institutions face extensive manual effort when designing structured modular curricula, assessment questions, and learning path milestones.',
    solution: 'Created an intelligent course generation and curriculum mapping system that structures educational content into sequential, outcome-aligned modules.',
    intelligence: 'Prompt engineering and document synthesis pipelines that align source materials into pedagogical competency frameworks with automated assessment generation.',
    result: 'Incubation prototype built within the eStudy entrepreneurship cohort demonstrating automated syllabus and assessment design.',
    techStack: ['TypeScript', 'React', 'LLM Prompt Engineering', 'EdTech Standards'],
    githubUrl: 'https://github.com/LesediTlhapane/estudy-course-orchestrator',
  },
  {
    id: 'case-taxsnap-agent',
    title: 'Aura TaxSnap Document Agent',
    clientType: 'Accounting & Small Business',
    industry: 'Finance & Tax',
    capabilityCategory: 'compliance',
    statusBadge: 'Verified Project',
    isFeatured: false,
    challenge: 'Small businesses and bookkeepers spend hours manually extracting expense details, VAT numbers, and dates from crumpled receipts and PDF invoices.',
    solution: 'Developed an intelligent OCR and data extraction agent that parses tax receipts, validates VAT registration numbers, and organizes expense line items.',
    intelligence: 'Computer vision OCR paired with structured JSON schema extraction to eliminate manual data entry in accounting spreadsheets.',
    result: 'Functional document processing tool capable of transforming diverse invoice formats into clean, structured accounting data.',
    techStack: ['Python', 'OCR', 'Regex Parsing', 'JSON Schema Validation'],
    githubUrl: 'https://github.com/LesediTlhapane/aura-taxsnap-agent',
  },
  {
    id: 'case-orbit-ai',
    title: 'Orbit-AI Project Intelligence',
    clientType: 'Software & Technology Teams',
    industry: 'Project Management',
    capabilityCategory: 'agents',
    statusBadge: 'Verified Project',
    isFeatured: false,
    challenge: 'Project managers struggle to anticipate task blockers, balance developer workloads, and identify slippage in complex sprint schedules.',
    solution: 'Designed an intelligent task prioritization platform that analyzes team velocity, predicts delivery bottlenecks, and suggests workflow optimizations.',
    intelligence: 'Predictive timeline analysis and dependency graphing to detect critical path risks before deadlines are missed.',
    result: 'Modern interactive platform prototype demonstrating AI-assisted project tracking and automated workload distribution.',
    techStack: ['React', 'Python', 'LangChain', 'Tailwind CSS'],
    githubUrl: 'https://github.com/LesediTlhapane/Orbit-Ai-',
  },
  {
    id: 'case-wellness-n8n',
    title: 'Wellness Conversational Agent',
    clientType: 'Health & Wellness Sector',
    industry: 'Healthcare & Wellness',
    capabilityCategory: 'healthcare',
    statusBadge: 'Live Demo',
    isFeatured: false,
    challenge: 'Wellness organizations require empathetic, 24/7 conversational support capable of guiding users through self-care routines without high operational overhead.',
    solution: 'Engineered an interactive conversational agent integrated with n8n backend workflows and intelligent dialogue trees.',
    intelligence: 'Natural language dialogue management with empathetic sentiment detection and structured webhook escalation.',
    result: 'Live cloud-hosted interactive demo on n8n demonstrating real-time response generation and webhook integration.',
    techStack: ['Python', 'n8n Cloud', 'AI APIs', 'Webhooks'],
    demoUrl: 'https://supatechintel.app.n8n.cloud/webhook/e64d38c2-7bfb-41a2-8c23-3cc036b1f036/chat',
  },
  {
    id: 'case-trolie-forward',
    title: 'Trolie Forward Movement E-Commerce',
    clientType: 'Commercial Client',
    industry: 'E-Commerce & Retail',
    capabilityCategory: 'web',
    statusBadge: 'Production Client',
    isFeatured: false,
    challenge: 'Client needed a full-stack digital commerce platform with secure payments, responsive catalog browsing, and real-time inventory management.',
    solution: 'Built and delivered a custom e-commerce web platform with integrated Stripe payment processing, product filtering, and order management.',
    intelligence: 'Automated order notification pipelines and inventory threshold alerts.',
    result: 'Demonstrates a production-oriented e-commerce build with payments, catalogue browsing, and operational order tooling.',
    techStack: ['React', 'Node.js', 'Stripe API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/LesediTlhapane/trolie-forward-movement',
  },
  {
    id: 'case-clean-sole',
    title: 'Clean Sole Haven Business Portal',
    clientType: 'Commercial Client',
    industry: 'Service Business',
    capabilityCategory: 'web',
    statusBadge: 'Production Client',
    isFeatured: false,
    challenge: 'Client required a high-converting web presence to capture local customer bookings and establish brand authority in their service area.',
    solution: 'Designed and deployed a responsive, fast-loading business website with direct WhatsApp lead capture and service package showcase.',
    intelligence: 'Optimized conversion funnel with click-to-chat routing and mobile-first design.',
    result: 'Demonstrates a mobile-first service-business website with direct WhatsApp enquiry routing.',
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'WhatsApp API'],
    githubUrl: 'https://github.com/LesediTlhapane/clean-sole-haven',
  },
];

// -------------------------------------------------------------
// WHY AURA? (STRATEGIC DIFFERENTIATORS)
// -------------------------------------------------------------
export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 'business-first',
    title: 'Business-First, Not Tech for Tech\'s Sake',
    badge: 'Strategic Alignment',
    description: 'We start with your operational bottlenecks, unit economics, and team structure. AI is only deployed where it produces a clear, measurable business outcome.',
    icon: 'Briefcase',
  },
  {
    id: 'purpose-built',
    title: 'Purpose-Built Around Your Workflows',
    badge: 'No Generic Templates',
    description: 'We don\'t push generic SaaS chatbots. Every agent, prompt, and automation pipeline is custom-architected to match your exact business rules and terminology.',
    icon: 'Sliders',
  },
  {
    id: 'integration-first',
    title: 'Integration-First Architecture',
    badge: 'Zero Disruption',
    description: 'Our solutions connect directly into the tools your team already uses (WhatsApp, Gmail, Outlook, Sage, Xero, HubSpot, PostgreSQL), avoiding costly software replacements.',
    icon: 'RefreshCw',
  },
  {
    id: 'human-governance',
    title: 'Human + AI Governance',
    badge: 'Safeguarded Control',
    description: 'We build strict confidence thresholds and human-in-the-loop checkpoints. High-risk decisions always route to human operators, keeping your team firmly in control.',
    icon: 'ShieldCheck',
  },
  {
    id: 'full-ip-ownership',
    title: '100% Intellectual Property Ownership',
    badge: 'Your Assets',
    description: 'You own all custom prompts, workflows, and code built for your organization. No vendor lock-in, no hostage code, and complete transparency.',
    icon: 'Lock',
  },
  {
    id: 'south-africa-context',
    title: 'South African Context & POPIA-Conscious Design',
    badge: 'Local & Secure',
    description: 'Based in Pretoria and attentive to local business realities, WhatsApp-led communication, and privacy requirements informed by POPIA principles.',
    icon: 'MapPin',
  },
];

// -------------------------------------------------------------
// PRICING & ENGAGEMENT MODELS
// -------------------------------------------------------------
export const ENGAGEMENT_MODELS: PricingEngagement[] = [
  {
    id: 'discover',
    tier: 'STAGE 01 — DISCOVERY',
    title: 'AI Scoping & Blueprint',
    subtitle: 'Identify high-impact opportunities with zero risk',
    price: 'From R2,500',
    timeline: '3–5 Business Days',
    idealFor: 'Businesses wanting a structured roadmap before investing in custom builds',
    deliverables: [
      'Comprehensive operational process audit',
      '15–25 page customized AI & automation blueprint',
      'ROI projection & payback timeframe model',
      'Interactive proof-of-concept / sandbox demo',
      'Security & POPIA compliance recommendations',
      'Credit 100% of audit fee toward subsequent build',
    ],
    ctaText: 'Book AI Strategy Call',
    ctaAction: '#contact',
  },
  {
    id: 'build',
    tier: 'STAGE 02 — BUILD & DEPLOY',
    title: 'Custom Agent or Workflow',
    subtitle: 'Deploy a dedicated digital worker or automated pipeline',
    price: 'From R4,850',
    timeline: '1–2 Weeks',
    popular: true,
    idealFor: 'Businesses with a clear bottleneck ready for immediate automation',
    deliverables: [
      'Custom AI Agent OR multi-step intelligent workflow',
      'Integration with existing tools (WhatsApp, Email, CRM)',
      'Prompt engineering & guardrail tuning',
      'Human-in-the-loop escalation rules',
      'Full staff training session & documentation',
      '30-day post-launch warranty & tuning support',
    ],
    ctaText: 'Discuss Your Build',
    ctaAction: '#contact',
  },
  {
    id: 'transform',
    tier: 'STAGE 03 — FULL TRANSFORMATION',
    title: 'End-to-End System',
    subtitle: 'Multi-agent orchestration & custom business platform',
    price: 'Custom Scope (From R8,500)',
    timeline: '3–4 Weeks',
    idealFor: 'Companies seeking end-to-end digital transformation across departments',
    deliverables: [
      'Multiple coordinated AI agents & workflows',
      'Custom web/portal interface with role permissions',
      'Deep ERP/CRM/Database two-way synchronization',
      'Private enterprise RAG knowledge base',
      'Executive performance analytics dashboard',
      '60-day priority warranty & optimization period',
    ],
    ctaText: 'Request Enterprise Scoping',
    ctaAction: '#contact',
  },
  {
    id: 'scale',
    tier: 'STAGE 04 — CONTINUOUS SCALE',
    title: 'AI-as-a-Service Retainer',
    subtitle: 'Dedicated AI engineering partner for your business',
    price: 'From R3,850/mo',
    timeline: 'Monthly Rolling',
    idealFor: 'Growing companies needing continuous AI optimization & feature additions',
    deliverables: [
      'Dedicated AI Technical Specialist allocated to your team',
      'Continuous prompt tuning & model upgrades',
      'Priority development hours for new automations',
      'Agreed response targets for ongoing support',
      'Monthly strategic AI review & performance reporting',
      'Cancel or adjust tiers anytime with 30 days notice',
    ],
    ctaText: 'Explore Retainer Partnership',
    ctaAction: '#contact',
  },
];

// -------------------------------------------------------------
// FAQ LIST
// -------------------------------------------------------------
export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Strategy & Scoping',
    question: 'How do I know if my business is ready for AI and intelligent automation?',
    answer: 'If your team spends more than 5 hours a week on repetitive data entry, email triage, lead follow-ups, or searching for internal information, your business is a prime candidate. Our AI Scoping & Blueprint (from R2,500) will calculate your exact potential time and cost savings before you write a single line of code.',
  },
  {
    id: 'faq-2',
    category: 'Technical & Integration',
    question: 'What is the operational difference between an AI Agent and an Intelligent Workflow?',
    answer: 'An AI Agent is a specialised digital worker capable of reasoning, reading unstructured text (emails, PDFs), and making contextual decisions (e.g. answering customer queries). An Intelligent Workflow is the end-to-end multi-system pipeline that connects agents to your databases, CRMs, and accounting tools so complete business processes execute automatically.',
  },
  {
    id: 'faq-3',
    category: 'Technical & Integration',
    question: 'Will our team need to replace our current software (CRMs, accounting, spreadsheets)?',
    answer: 'No. Aura operates on an "Integration-First" philosophy. We build AI agents and automations that connect into the software you already use (WhatsApp Business, Gmail, Outlook, Sage, Xero, HubSpot, custom databases). Your team continues working in familiar environments.',
  },
  {
    id: 'faq-4',
    category: 'Security & Ownership',
    question: 'Who owns the intellectual property and data generated by the AI systems?',
    answer: 'You retain 100% full intellectual property ownership of all custom agents, prompt templates, workflows, and code built for your business. We do not lock you into proprietary closed platforms.',
  },
  {
    id: 'faq-5',
    category: 'Security & Ownership',
    question: 'How does Aura handle data privacy and POPIA compliance in South Africa?',
    answer: 'We design all solutions with strict data segregation and POPIA principles. Customer and internal company data is never used to train public foundational models. Private knowledge bases use isolated vector stores with role-based access control.',
  },
  {
    id: 'faq-6',
    category: 'Delivery',
    question: 'How long does a typical project take from scoping to live deployment?',
    answer: 'The initial AI Scoping & Blueprint takes 3–5 business days. A focused AI Agent or single workflow build typically deploys within 1–2 weeks. Comprehensive multi-agent enterprise systems take 3–4 weeks from kick-off to production launch.',
  },
  {
    id: 'faq-7',
    category: 'Delivery',
    question: 'What support is provided after the system goes live?',
    answer: 'Every custom build includes a complimentary 30-day warranty and optimization period to monitor accuracy and tune edge cases. Ongoing maintenance, priority feature requests, and model updates are available via our flexible AI-as-a-Service Retainer.',
  },
  {
    id: 'faq-8',
    category: 'Strategy & Scoping',
    question: 'What is the eStudy AI Incubation Programme mentioned across the site?',
    answer: 'The eStudy AI Incubation Programme is a South African founder programme focused on developing commercially useful technology. Aura Tech Intelligence was developed through this programme.',
  },
];

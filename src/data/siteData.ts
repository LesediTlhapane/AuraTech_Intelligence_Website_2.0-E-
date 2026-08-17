export interface AIAgent {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  price: string;
  tags: string[];
  isPopular?: boolean;
}

export interface WorkflowItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  price: string;
  tags: string[];
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  category: 'Discovery' | 'AI Agents' | 'Workflows' | 'Web' | 'Scale';
  title: string;
  description: string;
  price: string;
  categoryColor: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  adminUrl?: string;
  mobileUrl?: string;
  type: 'agent' | 'platform' | 'workflow' | 'web';
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const AI_AGENTS: AIAgent[] = [
  {
    id: 'cx-agent',
    title: 'Customer Experience Agent',
    description: '24/7 intelligent support that answers complex queries, resolves issues, and books appointments autonomously.',
    icon: 'Headset',
    badge: 'Ready',
    price: 'From R3,850',
    tags: ['Multi-channel', 'Sentiment', 'Booking'],
  },
  {
    id: 'ops-agent',
    title: 'Operations & Admin Agent',
    description: 'Monitors emails, extracts data from PDFs/invoices, updates CRMs, and eliminates manual back-office errors.',
    icon: 'FileSpreadsheet',
    badge: 'Ready',
    price: 'From R4,450',
    tags: ['Email Parsing', 'Extraction', 'CRM'],
  },
  {
    id: 'knowledge-agent',
    title: 'Knowledge Base Brain',
    description: 'Train an AI on your manuals, compliance files, and company data. Your team gets instant answers from internal knowledge.',
    icon: 'Brain',
    badge: 'Ready',
    price: 'From R4,750',
    tags: ['Document Q&A', 'Policy', 'Search'],
  },
  {
    id: 'hr-agent',
    title: 'HR & Recruitment Agent',
    description: 'Automates resume screening, interview scheduling, onboarding checklists, and employee queries.',
    icon: 'Users',
    badge: 'Ready',
    price: 'From R4,450',
    tags: ['Resume Parsing', 'Scheduling', 'Onboarding'],
  },
  {
    id: 'custom-agent',
    title: 'Custom AI Agent',
    description: 'A bespoke AI agent built specifically for your business need. We design it from the ground up to solve your unique challenge.',
    icon: 'Cpu',
    badge: 'Popular',
    price: 'From R5,650',
    tags: ['Fully Custom', 'Any Industry'],
    isPopular: true,
  },
  {
    id: 'bespoke-idea',
    title: 'Custom Agent (Your Idea)',
    description: "Have a specific AI agent in mind? Tell us your idea and we'll build it. No challenge is too unique.",
    icon: 'Sparkles',
    badge: 'Coming Soon',
    price: 'Custom Quote',
    tags: ['Bespoke', 'Scalable'],
  },
];

export const WORKFLOWS: WorkflowItem[] = [
  {
    id: 'lead-workflow',
    title: 'Lead-to-Customer Workflow',
    description: 'Automatically capture leads, qualify them, send follow-ups, and update your CRM — all without human intervention.',
    icon: 'Filter',
    badge: 'End-to-End',
    price: 'From R4,800',
    tags: ['Lead Capture', 'CRM Sync'],
  },
  {
    id: 'invoice-workflow',
    title: 'Invoice-to-Payment Workflow',
    description: 'Incoming invoices are read by AI, validated against POs, routed for approval, and synced with accounting software.',
    icon: 'Receipt',
    badge: 'End-to-End',
    price: 'From R5,800',
    tags: ['Invoice Parsing', 'Approval'],
  },
  {
    id: 'support-workflow',
    title: 'Support Ticket Workflow',
    description: 'Customer support emails are read by AI, categorized, prioritized, and either resolved automatically or routed to the right human agent.',
    icon: 'Ticket',
    badge: 'End-to-End',
    price: 'From R5,200',
    tags: ['Classification', 'Auto-Resolution'],
  },
  {
    id: 'onboarding-workflow',
    title: 'Employee Onboarding Workflow',
    description: 'New hires are automatically given access to systems, assigned training, and walked through onboarding checklists by an AI assistant.',
    icon: 'UserPlus',
    badge: 'End-to-End',
    price: 'From R4,600',
    tags: ['Access Provisioning', 'Training'],
  },
  {
    id: 'custom-workflow',
    title: 'Custom Workflow',
    description: 'We design and build an end-to-end automation for your specific business process. No workflow is too complex.',
    icon: 'GitBranch',
    badge: 'Popular',
    price: 'From R5,900',
    tags: ['Bespoke', 'Multi-System'],
    isPopular: true,
  },
  {
    id: 'integration-workflow',
    title: 'System Integration Workflow',
    description: 'Connect your existing tools (CRM, ERP, accounting, email) into a seamless automated workflow with AI at the center.',
    icon: 'RefreshCw',
    badge: 'Integration',
    price: 'From R4,400',
    tags: ['API', 'Data Sync'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'consultation',
    category: 'Discovery',
    title: 'AI Scoping & Consultation',
    description: 'Comprehensive audit of your business processes. Delivers a 20+ page blueprint with ROI projections and proof-of-concept demo.',
    price: 'From R2,500',
    categoryColor: 'purple',
    icon: 'Search',
  },
  {
    id: 'data-prep',
    category: 'Discovery',
    title: 'Data Preparation',
    description: 'Clean, structure, and prepare your data for AI applications. Many AI projects fail because of "dirty" data.',
    price: 'From R2,800',
    categoryColor: 'purple',
    icon: 'Layers',
  },
  {
    id: 'upskilling',
    category: 'Discovery',
    title: 'AI Upskilling Workshops',
    description: 'Half-day or full-day sessions teaching your team how to use AI tools effectively in their specific roles.',
    price: 'From R2,850/session',
    categoryColor: 'purple',
    icon: 'GraduationCap',
  },
  {
    id: 'agent-build',
    category: 'AI Agents',
    title: 'Custom AI Agent Build',
    description: 'Build a specific "Digital Worker" for your business: Customer Experience, Operations & Admin, Knowledge Base, or HR.',
    price: 'From R3,850',
    categoryColor: 'cyan',
    icon: 'Bot',
  },
  {
    id: 'automation-build',
    category: 'Workflows',
    title: 'End-to-End Automation',
    description: 'Complete workflow automation—from lead capture to CRM update, from invoice to payment, from ticket to resolution.',
    price: 'Custom Quote (from R4,800)',
    categoryColor: 'pink',
    icon: 'Workflow',
  },
  {
    id: 'web-dev',
    category: 'Web',
    title: 'Smart Website Development',
    description: 'Custom, responsive websites with modern design, AI-powered features, lead generation, and seamless user experience.',
    price: 'From R4,450',
    categoryColor: 'emerald',
    icon: 'Globe',
  },
  {
    id: 'retainer',
    category: 'Scale',
    title: 'AI-as-a-Service Retainer',
    description: 'Dedicated AI specialist, continuous optimization, priority feature development, and SLA-backed support.',
    price: 'From R3,850/mo',
    categoryColor: 'amber',
    icon: 'Handshake',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'orbit-ai',
    title: 'Orbit-AI',
    category: 'AI Platform',
    badge: 'Prototype',
    type: 'platform',
    description: 'AI-powered project management platform with intelligent task prioritization, predictive timeline analysis, and smart workflow automation.',
    techStack: ['React', 'Python', 'LangChain'],
    githubUrl: 'https://github.com/LesediTlhapane/Orbit-Ai-',
  },
  {
    id: 'leave-management',
    title: 'Leave Management System',
    category: 'AI Agent & Workflow',
    badge: 'Full-Stack',
    type: 'workflow',
    description: 'Full-stack HR solution with AI-driven request processing, automated approval workflows, mobile app, and admin portal.',
    techStack: ['React Native', 'React.js', 'Python'],
    mobileUrl: 'https://github.com/LesediTlhapane/Leave-Management-System-Mobile-Application',
    adminUrl: 'https://github.com/LesediTlhapane/Leave_Management_system-',
  },
  {
    id: 'wellness-chatbot',
    title: 'Wellness Chatbot',
    category: 'AI Agent',
    badge: 'Live Demo',
    type: 'agent',
    description: 'Interactive conversational AI focused on wellness, featuring natural language understanding and empathetic response generation.',
    techStack: ['Python', 'n8n', 'AI APIs'],
    demoUrl: 'https://supatechintel.app.n8n.cloud/webhook/e64d38c2-7bfb-41a2-8c23-3cc036b1f036/chat',
  },
  {
    id: 'ai-discovery-stack',
    title: 'AI Discovery Stack',
    category: 'AI Platform',
    badge: 'Live Demo',
    type: 'platform',
    description: 'Comprehensive platform demonstrating AI capabilities built with modern TypeScript frameworks. Live demo available.',
    techStack: ['TypeScript', 'React', 'Vercel'],
    githubUrl: 'https://github.com/LesediTlhapane/ai-discovery-stack',
  },
  {
    id: 'trolie-forward',
    title: 'Trolie Forward Movement',
    category: 'E-commerce',
    badge: 'Client Project',
    type: 'web',
    description: 'Fully functional e-commerce platform with payment processing (Stripe) and inventory management — delivered for a client.',
    techStack: ['React', 'Node.js', 'Stripe'],
    githubUrl: 'https://github.com/LesediTlhapane/trolie-forward-movement',
  },
  {
    id: 'clean-sole',
    title: 'Clean Sole Haven',
    category: 'Business Website',
    badge: 'Client Project',
    type: 'web',
    description: 'Professional lead generation website optimised for brand presence and user experience — client delivery.',
    techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/LesediTlhapane/clean-sole-haven',
  },
  {
    id: 'aura-sage-hris',
    title: 'Aura-Sage HRIS Agent',
    category: 'HR AI Agent',
    badge: 'Live',
    type: 'agent',
    description: 'Intelligent HR agent that automates employee queries, onboarding, and policy retrieval.',
    techStack: ['Python', 'LangChain'],
    githubUrl: 'https://github.com/LesediTlhapane/aura-sage-hris-agent',
  },
  {
    id: 'aura-assessor',
    title: 'Aura Assessor Intelligence',
    category: 'AI Agent',
    badge: 'Prototype',
    type: 'agent',
    description: 'Intelligent assessment agent for automated evaluation and feedback generation.',
    techStack: ['Python', 'NLP'],
    githubUrl: 'https://github.com/LesediTlhapane/aura-assessor-intelligence',
  },
  {
    id: 'aura-taxsnap',
    title: 'Aura TaxSnap Agent',
    category: 'AI Agent',
    badge: 'Prototype',
    type: 'agent',
    description: 'AI agent for tax document parsing, compliance checking, and filing assistance.',
    techStack: ['Python', 'OCR'],
    githubUrl: 'https://github.com/LesediTlhapane/aura-taxsnap-agent',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'scoping',
    title: 'AI Scoping & Consultation',
    price: 'From R2,500',
    features: [
      'Audit current business processes',
      'Identify immediate automation ROI',
      'Deliverable: 15+ page blueprint',
      'Interactive proof-of-concept demo',
    ],
    ctaText: 'Book Scoping Call',
  },
  {
    id: 'custom-package',
    title: 'Custom Agent + Workflow',
    price: 'From R4,850',
    popular: true,
    features: [
      'Custom AI agent development',
      'Intelligent workflow automation',
      'Integration with your existing tools',
      '30-day post-launch support & tuning',
    ],
    ctaText: 'Discuss Your Project',
  },
  {
    id: 'retainer-plan',
    title: 'AI-as-a-Service Retainer',
    price: 'From R3,850/mo',
    features: [
      'Dedicated AI specialist partner',
      'Continuous model optimization',
      'Priority feature development',
      'Monthly strategic AI review',
    ],
    ctaText: 'Start Retainer',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: "What's the difference between an AI Agent and a Workflow?",
    answer: "An AI Agent is an autonomous digital worker that handles a specific role—like answering customer questions or extracting data from invoices. A Workflow connects multiple agents, applications, and databases together to automate an entire business process end-to-end.",
  },
  {
    id: 'faq-2',
    question: "Do I need technical knowledge to use AI agents or workflows?",
    answer: "Not at all. Once deployed, your team interacts with the AI through familiar tools (WhatsApp, Email, Slack, web dashboards). We handle all technical configuration, integrations, model tuning, and ongoing maintenance.",
  },
  {
    id: 'faq-3',
    question: "Who owns the AI agent and workflow after I pay?",
    answer: "You retain 100% intellectual property and full ownership of any custom AI agent, prompt template, or workflow created for your business.",
  },
  {
    id: 'faq-4',
    question: "How long does it take to build an AI agent or workflow?",
    answer: "Simple agents take 1-2 weeks. Complex custom workflows with multiple system integrations take approximately 2-3 weeks from scoping to production deployment.",
  },
  {
    id: 'faq-5',
    question: "Can I try an agent or workflow before committing?",
    answer: "Yes! The AI Scoping & Consultation package includes an interactive proof-of-concept demo tailored to your specific business data and use case.",
  },
  {
    id: 'faq-6',
    question: "What industries do you work with?",
    answer: "We work across professional services, e-commerce, education, HR & staffing, legal/compliance, logistics, and healthcare throughout South Africa and Africa.",
  },
  {
    id: 'faq-7',
    question: "What is the eStudy AI Incubation Programme?",
    answer: "It is a prestigious 12-month sponsored programme supporting emerging tech entrepreneurs in engineering commercially viable AI agents. Lesedi is a current participant, and Aura Tech Intelligence is a direct outcome of this incubation.",
  },
  {
    id: 'faq-8',
    question: "Do you offer ongoing support after deployment?",
    answer: "Yes. All custom builds include a 30-day post-launch support and warranty period. Ongoing maintenance, prompt tuning, and priority updates are available through our AI-as-a-Service Retainer.",
  },
  {
    id: 'faq-9',
    question: "Do you build websites too?",
    answer: "Yes! We build modern, high-converting 'Smart Websites' equipped with built-in AI chat agents, lead capture workflows, fast loading speeds, and responsive design starting from R4,450.",
  },
];

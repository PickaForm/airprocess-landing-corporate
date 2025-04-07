
type TranslationKey = 
  | 'header.challenges'
  | 'header.aiFeatures'
  | 'header.integration'
  | 'header.pricing'
  | 'header.makers'
  | 'header.security'
  | 'header.testimonials'
  | 'header.demo'
  
  | 'hero.title'
  | 'hero.subtitle'
  
  | 'aiFeatures.title'
  | 'aiFeatures.subtitle'
  | 'aiFeatures.generateApps.title'
  | 'aiFeatures.generateApps.subtitle'
  | 'aiFeatures.generateApps.step1.title'
  | 'aiFeatures.generateApps.step1.description'
  | 'aiFeatures.generateApps.step2.title'
  | 'aiFeatures.generateApps.step2.description'
  | 'aiFeatures.generateApps.step3.title'
  | 'aiFeatures.generateApps.step3.description'
  | 'aiFeatures.generateApps.step4.title'
  | 'aiFeatures.generateApps.step4.description'
  | 'aiFeatures.generateApps.conclusion'
  
  | 'aiFeatures.intelligence.title'
  | 'aiFeatures.intelligence.subtitle'
  | 'aiFeatures.intelligence.summaries'
  | 'aiFeatures.intelligence.briefs'
  | 'aiFeatures.intelligence.reports'
  | 'aiFeatures.intelligence.textAnalysis'
  | 'aiFeatures.intelligence.emails'
  | 'aiFeatures.intelligence.visuals'
  | 'aiFeatures.intelligence.possibilities'
  
  | 'aiFeatures.question.title'
  | 'aiFeatures.question.description';

type Translations = {
  [key in TranslationKey]: {
    fr: string;
    en: string;
  };
};

export const translations: Translations = {
  'header.challenges': {
    fr: 'Challenges',
    en: 'Challenges'
  },
  'header.aiFeatures': {
    fr: 'IA Intégrée',
    en: 'Built-in AI'
  },
  'header.integration': {
    fr: 'Intégrations',
    en: 'Integrations'
  },
  'header.pricing': {
    fr: 'Nos offres',
    en: 'Pricing'
  },
  'header.makers': {
    fr: 'Makers',
    en: 'Makers'
  },
  'header.security': {
    fr: 'Sécurité',
    en: 'Security'
  },
  'header.testimonials': {
    fr: 'Témoignages',
    en: 'Testimonials'
  },
  'header.demo': {
    fr: 'Demander une démo',
    en: 'Request a demo'
  },
  
  'hero.title': {
    fr: 'Pickaform : le no-code conçu pour les grands comptes',
    en: 'Pickaform: no-code designed for enterprise'
  },
  'hero.subtitle': {
    fr: '25 ans d\'expertise en optimisation des process métiers condensée en un outil puissant et intuitif. Automatisez, systématisez et optimisez la gestion de vos processus.',
    en: '25 years of business process optimization expertise condensed into a powerful and intuitive tool. Automate, systematize and optimize your process management.'
  },
  
  'aiFeatures.title': {
    fr: 'Décuplez votre productivité avec notre IA intégrée !',
    en: 'Boost your productivity with our built-in AI!'
  },
  'aiFeatures.subtitle': {
    fr: 'Créez des applications fonctionnelles en quelques minutes et améliorez le contenu de vos process métiers grâce à l\'intelligence artificielle.',
    en: 'Create functional applications in minutes and enhance your business processes with artificial intelligence.'
  },
  
  'aiFeatures.generateApps.title': {
    fr: 'Générez des applications en quelques clics',
    en: 'Generate applications with a few clicks'
  },
  'aiFeatures.generateApps.subtitle': {
    fr: 'Ne perdez plus de temps à concevoir vos applications ! Avec notre IA intégrée, créez une app fonctionnelle en quelques minutes.',
    en: 'Stop wasting time designing your applications! With our built-in AI, create a functional app in minutes.'
  },
  'aiFeatures.generateApps.step1.title': {
    fr: 'Briefez l\'IA en quelques lignes',
    en: 'Brief the AI in a few lines'
  },
  'aiFeatures.generateApps.step1.description': {
    fr: 'Décrivez simplement votre besoin à notre assistant intelligent.',
    en: 'Simply describe your needs to our intelligent assistant.'
  },
  'aiFeatures.generateApps.step2.title': {
    fr: 'Cliquez sur "Générer l\'application"',
    en: 'Click on "Generate application"'
  },
  'aiFeatures.generateApps.step2.description': {
    fr: 'Notre IA crée la structure, les champs et le workflow adaptés.',
    en: 'Our AI creates the appropriate structure, fields and workflow.'
  },
  'aiFeatures.generateApps.step3.title': {
    fr: 'Testez et affinez le résultat',
    en: 'Test and refine the result'
  },
  'aiFeatures.generateApps.step3.description': {
    fr: 'Avec des données automatiquement générées pour tester votre app.',
    en: 'With automatically generated data to test your app.'
  },
  'aiFeatures.generateApps.step4.title': {
    fr: 'Validez votre app',
    en: 'Validate your app'
  },
  'aiFeatures.generateApps.step4.description': {
    fr: 'Déployez rapidement et commencez à l\'utiliser immédiatement.',
    en: 'Deploy quickly and start using it immediately.'
  },
  'aiFeatures.generateApps.conclusion': {
    fr: 'Difficile de faire plus rapide et intuitif !',
    en: 'Hard to make it faster and more intuitive!'
  },
  
  'aiFeatures.intelligence.title': {
    fr: 'Ajoutez une touche d\'intelligence à vos applications !',
    en: 'Add a touch of intelligence to your applications!'
  },
  'aiFeatures.intelligence.subtitle': {
    fr: 'Grâce aux champs IA, générez automatiquement du contenu pertinent et contextuel directement dans vos applications.',
    en: 'Thanks to AI fields, automatically generate relevant and contextual content directly in your applications.'
  },
  'aiFeatures.intelligence.summaries': {
    fr: 'Résumés',
    en: 'Summaries'
  },
  'aiFeatures.intelligence.briefs': {
    fr: 'Briefs',
    en: 'Briefs'
  },
  'aiFeatures.intelligence.reports': {
    fr: 'Rapports',
    en: 'Reports'
  },
  'aiFeatures.intelligence.textAnalysis': {
    fr: 'Analyses de texte',
    en: 'Text Analysis'
  },
  'aiFeatures.intelligence.emails': {
    fr: 'Emails',
    en: 'Emails'
  },
  'aiFeatures.intelligence.visuals': {
    fr: 'Visuels',
    en: 'Visuals'
  },
  'aiFeatures.intelligence.possibilities': {
    fr: 'Les possibilités sont infinies ! Notre assistant IA est là pour vous aider, en temps réel, à maximiser l\'usage de Pickaform !',
    en: 'The possibilities are endless! Our AI assistant is here to help you, in real time, to maximize the use of Pickaform!'
  },
  
  'aiFeatures.question.title': {
    fr: 'Une question sur Pickaform ?',
    en: 'A question about Pickaform?'
  },
  'aiFeatures.question.description': {
    fr: 'Ne restez pas bloqué ! Notre assistant IA répond à toutes vos questions et vous guide étape par étape pour exploiter pleinement notre outil.',
    en: 'Don\'t get stuck! Our AI assistant answers all your questions and guides you step by step to fully leverage our tool.'
  }
};

export const getTranslation = (key: TranslationKey, language: 'fr' | 'en'): string => {
  return translations[key][language];
};

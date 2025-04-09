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
  | 'aiFeatures.question.description'
  
  | 'challenges.title'
  | 'challenges.subtitle'
  | 'challenges.dispersed.title'
  | 'challenges.dispersed.description'
  | 'challenges.lost.title'
  | 'challenges.lost.description'
  | 'challenges.lostInfo.title'
  | 'challenges.lostInfo.description'
  | 'challenges.inefficient.title'
  | 'challenges.inefficient.description'
  | 'challenges.solutionsTitle'
  | 'challenges.solutionsSubtitle'
  | 'challenges.solution1.title'
  | 'challenges.solution1.description'
  | 'challenges.solution2.title'
  | 'challenges.solution2.description'
  | 'challenges.solution3.title'
  | 'challenges.solution3.description'
  | 'challenges.solution4.title'
  | 'challenges.solution4.description'
  | 'challenges.conclusion'
  | 'challenges.callToAction'
  
  | 'integration.title'
  | 'integration.subtitle'
  | 'integration.connect.title'
  | 'integration.connect.subtitle'
  | 'integration.feature1'
  | 'integration.feature2'
  | 'integration.feature3'
  | 'integration.buttonText'
  
  | 'security.title'
  | 'security.subtitle'
  | 'security.feature1.title'
  | 'security.feature1.description'
  | 'security.feature2.title'
  | 'security.feature2.description'
  | 'security.feature3.title'
  | 'security.feature3.description'
  | 'security.feature4.title'
  | 'security.feature4.description'
  | 'security.conclusion'
  | 'security.callToAction'
  
  | 'pricing.title'
  | 'pricing.cloud.title'
  | 'pricing.silver.title'
  | 'pricing.gold.title'
  | 'pricing.platinum.title'
  | 'pricing.enterprise.title'
  | 'pricing.silver.price'
  | 'pricing.gold.price'
  | 'pricing.platinum.price'
  | 'pricing.enterprise.price'
  | 'pricing.perUser'
  | 'pricing.feature1'
  | 'pricing.feature2'
  | 'pricing.feature3'
  | 'pricing.feature4'
  | 'pricing.feature5'
  | 'pricing.enterprise.feature1'
  | 'pricing.enterprise.feature2'
  | 'pricing.enterprise.feature3'
  | 'pricing.onpremise.title'
  | 'pricing.onpremise.subtitle'
  | 'pricing.onpremise.feature1'
  | 'pricing.onpremise.feature2'
  | 'pricing.onpremise.feature3'
  | 'pricing.onpremise.feature4'
  | 'pricing.volume.info'
  
  | 'makers.title'
  | 'makers.subtitle'
  | 'makers.benefit1.title'
  | 'makers.benefit1.description'
  | 'makers.benefit2.title'
  | 'makers.benefit2.description'
  | 'makers.benefit3.title'
  | 'makers.benefit3.description'
  | 'makers.benefit4.title'
  | 'makers.benefit4.description'
  | 'makers.conclusion'
  | 'makers.callToAction'
  | 'makers.callToActionButton'
  
  | 'testimonials.title'
  | 'testimonials.subtitle'
  | 'testimonials.user1.text'
  | 'testimonials.user1.name'
  | 'testimonials.user1.position'
  | 'testimonials.user1.company'
  | 'testimonials.user2.text'
  | 'testimonials.user2.name'
  | 'testimonials.user2.position'
  | 'testimonials.user2.company'
  | 'testimonials.user3.text'
  | 'testimonials.user3.name'
  | 'testimonials.user3.position'
  | 'testimonials.user3.company'
  
  | 'trustedBy.title'
  | 'trustedBy.imageAlt'
  
  | 'footer.description'
  | 'footer.solutions'
  | 'footer.forEnterprise'
  | 'footer.forSMB'
  | 'footer.forIT'
  | 'footer.forBusiness'
  | 'footer.resources'
  | 'footer.documentation'
  | 'footer.blog'
  | 'footer.caseStudies'
  | 'footer.support'
  | 'footer.contact'
  | 'footer.contactText'
  | 'footer.copyright'
  | 'footer.legal'
  | 'footer.privacy'
  | 'footer.terms';

export const translations: {
  [key in TranslationKey]: {
    fr: string;
    en: string;
  };
} = {
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
  },
  
  'challenges.title': {
    fr: 'Le défi des grandes entreprises',
    en: 'The enterprise challenge'
  },
  'challenges.subtitle': {
    fr: 'Le monde corporate fait face à des défis qui sont propres à son échelle. Résultat ? Un temps gaspillé, des erreurs humaines, des décisions retardées et des opportunités perdues.',
    en: 'The corporate world faces challenges specific to its scale. The result? Wasted time, human errors, delayed decisions, and lost opportunities.'
  },
  'challenges.dispersed.title': {
    fr: 'Process dispersés',
    en: 'Scattered processes'
  },
  'challenges.dispersed.description': {
    fr: 'Les informations critiques sont éparpillées dans différents systèmes.',
    en: 'Critical information is scattered across different systems.'
  },
  'challenges.lost.title': {
    fr: 'Fichiers égarés',
    en: 'Misplaced files'
  },
  'challenges.lost.description': {
    fr: 'Les documents importants se perdent dans des dossiers partagés mal organisés.',
    en: 'Important documents get lost in poorly organized shared folders.'
  },
  'challenges.lostInfo.title': {
    fr: 'Informations perdues',
    en: 'Lost information'
  },
  'challenges.lostInfo.description': {
    fr: 'Des notes internes cruciales qui restent non lues et inaccessibles.',
    en: 'Crucial internal notes remain unread and inaccessible.'
  },
  'challenges.inefficient.title': {
    fr: 'Échanges inefficaces',
    en: 'Inefficient exchanges'
  },
  'challenges.inefficient.description': {
    fr: 'Communication par emails sans traçabilité ni suivi structuré.',
    en: 'Email communication without traceability or structured follow-up.'
  },
  'challenges.solutionsTitle': {
    fr: 'Pourquoi les solutions classiques ne suffisent pas ?',
    en: 'Why traditional solutions are not enough?'
  },
  'challenges.solutionsSubtitle': {
    fr: 'Les grandes entreprises ont besoin de solutions qui vont bien au-delà des outils classiques. Elles nécessitent des systèmes sur mesure qui s\'adaptent à des exigences de sécurité, de flexibilité et d\'efficacité strictes.',
    en: 'Large companies need solutions that go well beyond traditional tools. They require custom systems that adapt to strict security, flexibility, and efficiency requirements.'
  },
  'challenges.solution1.title': {
    fr: 'Gestion de process métiers complexes',
    en: 'Complex business process management'
  },
  'challenges.solution1.description': {
    fr: 'Des process qui évoluent avec les données et favorisent la collaboration fluide entre services.',
    en: 'Processes that evolve with data and promote smooth collaboration between departments.'
  },
  'challenges.solution2.title': {
    fr: 'Audit et traçabilité',
    en: 'Audit and traceability'
  },
  'challenges.solution2.description': {
    fr: 'Chaque décision prise est suivie et documentée pour garantir une transparence totale.',
    en: 'Every decision is tracked and documented to ensure complete transparency.'
  },
  'challenges.solution3.title': {
    fr: 'Gestion fine des droits d\'accès',
    en: 'Fine-grained access rights management'
  },
  'challenges.solution3.description': {
    fr: 'Un contrôle strict des utilisateurs et groupes d\'utilisateurs pour garantir la sécurité sans contrainte.',
    en: 'Strict control of users and user groups to ensure security without constraints.'
  },
  'challenges.solution4.title': {
    fr: 'UI/UX intuitive',
    en: 'Intuitive UI/UX'
  },
  'challenges.solution4.description': {
    fr: 'Une interface simple pour une adoption rapide, même par les collaborateurs non-techniques.',
    en: 'A simple interface for quick adoption, even by non-technical employees.'
  },
  'challenges.conclusion': {
    fr: 'Automatiser, systématiser et optimiser la gestion des process métier : la solution gagnante pour les grandes entreprises !',
    en: 'Automate, systematize, and optimize business process management: the winning solution for large companies!'
  },
  'challenges.callToAction': {
    fr: 'Demander une démo',
    en: 'Request a demo'
  },
  
  'integration.title': {
    fr: 'Boostez votre stack no-code : Pickaform est compatible avec Make !',
    en: 'Boost your no-code stack: Pickaform is compatible with Make!'
  },
  'integration.subtitle': {
    fr: 'Intégrez Pickaform à votre stack no-code en quelques clics. Créez des solutions sur mesure pour répondre aux défis complexes du monde corporate.',
    en: 'Integrate Pickaform into your no-code stack in a few clicks. Create custom solutions to address the complex challenges of the corporate world.'
  },
  'integration.connect.title': {
    fr: 'Connectez vos outils préférés',
    en: 'Connect your favorite tools'
  },
  'integration.connect.subtitle': {
    fr: 'Grâce à l\'intégration avec Make, Pickaform peut communiquer avec plus de 2000 applications et services. Automatisez des flux de travail complexes sans écrire une seule ligne de code.',
    en: 'Thanks to integration with Make, Pickaform can communicate with more than 2000 applications and services. Automate complex workflows without writing a single line of code.'
  },
  'integration.feature1': {
    fr: 'Connectez Pickaform avec vos outils existants',
    en: 'Connect Pickaform with your existing tools'
  },
  'integration.feature2': {
    fr: 'Automatisez des processus entre plusieurs plateformes',
    en: 'Automate processes across multiple platforms'
  },
  'integration.feature3': {
    fr: 'Créez des scenarios d\'automatisation personnalisés',
    en: 'Create custom automation scenarios'
  },
  'integration.buttonText': {
    fr: 'Découvrir les intégrations possibles',
    en: 'Discover possible integrations'
  },
  
  'security.title': {
    fr: 'Le no-code : un cauchemar pour les DSI ?',
    en: 'No-code: a nightmare for CIOs?'
  },
  'security.subtitle': {
    fr: 'Le no-code peut être un casse-tête pour les DSI… mais avec Pickaform, les données restent sous contrôle.',
    en: 'No-code can be a headache for CIOs... but with Pickaform, data remains under control.'
  },
  'security.feature1.title': {
    fr: 'Solution On-Premise pour les grands comptes',
    en: 'On-Premise solution for enterprise accounts'
  },
  'security.feature1.description': {
    fr: 'Tout reste sous contrôle. La sécurité et la gouvernance des données sont garanties.',
    en: 'Everything remains under control. Data security and governance are guaranteed.'
  },
  'security.feature2.title': {
    fr: 'Gestion avancée des droits d\'accès',
    en: 'Advanced access rights management'
  },
  'security.feature2.description': {
    fr: 'Une sécurité flexible et optimale pour chaque utilisateur et groupe.',
    en: 'Flexible and optimal security for each user and group.'
  },
  'security.feature3.title': {
    fr: 'Capacité d\'audit des décisions',
    en: 'Decision audit capability'
  },
  'security.feature3.description': {
    fr: 'Suivez et analysez toutes les actions prises par les collaborateurs pour une transparence totale.',
    en: 'Track and analyze all actions taken by employees for complete transparency.'
  },
  'security.feature4.title': {
    fr: 'Sécurité conforme aux normes',
    en: 'Compliance with standards'
  },
  'security.feature4.description': {
    fr: 'Respectez les exigences réglementaires les plus strictes de votre secteur.',
    en: 'Meet the strictest regulatory requirements in your industry.'
  },
  'security.conclusion': {
    fr: 'Pickaform offre une combinaison parfaite pour répondre aux exigences les plus strictes des DSI.',
    en: 'Pickaform offers a perfect combination to meet the strictest requirements of CIOs.'
  },
  'security.callToAction': {
    fr: 'Sécurisez votre transformation digitale dès maintenant !',
    en: 'Secure your digital transformation now!'
  },
  
  'pricing.title': {
    fr: 'Nos offres',
    en: 'Our Pricing'
  },
  'pricing.cloud.title': {
    fr: 'Cloud',
    en: 'Cloud'
  },
  'pricing.silver.title': {
    fr: 'Silver',
    en: 'Silver'
  },
  'pricing.gold.title': {
    fr: 'Gold',
    en: 'Gold'
  },
  'pricing.platinum.title': {
    fr: 'Platinum',
    en: 'Platinum'
  },
  'pricing.enterprise.title': {
    fr: 'Entreprise',
    en: 'Enterprise'
  },
  'pricing.silver.price': {
    fr: '15,00€',
    en: '€15.00'
  },
  'pricing.gold.price': {
    fr: '12,50€',
    en: '€12.50'
  },
  'pricing.platinum.price': {
    fr: '11,00€',
    en: '€11.00'
  },
  'pricing.enterprise.price': {
    fr: '8,00€',
    en: '€8.00'
  },
  'pricing.perUser': {
    fr: 'Utilisateur / mois',
    en: 'User / month'
  },
  'pricing.feature1': {
    fr: '10 Users',
    en: '10 Users'
  },
  'pricing.feature2': {
    fr: '3 Applications',
    en: '3 Applications'
  },
  'pricing.feature3': {
    fr: '10 GB Storage',
    en: '10 GB Storage'
  },
  'pricing.feature4': {
    fr: 'Formulaires illimités',
    en: 'Unlimited forms'
  },
  'pricing.feature5': {
    fr: 'Workflows illimités',
    en: 'Unlimited workflows'
  },
  'pricing.enterprise.feature1': {
    fr: '100 Users',
    en: '100 Users'
  },
  'pricing.enterprise.feature2': {
    fr: '20 Applications',
    en: '20 Applications'
  },
  'pricing.enterprise.feature3': {
    fr: '100 GB Storage',
    en: '100 GB Storage'
  },
  'pricing.volume.info': {
    fr: 'Nous proposons des offres au-delà de 100 utilisateurs et à des tarifs dégressifs jusqu\'à 0,6€ après 5000 utilisateurs. Nous contacter à contact@pickaform.com',
    en: 'We offer packages beyond 100 users with decreasing rates down to €0.6 after 5000 users. Contact us at contact@pickaform.com'
  },
  'pricing.onpremise.title': {
    fr: 'Solution Entreprise',
    en: 'Enterprise Solution'
  },
  'pricing.onpremise.subtitle': {
    fr: 'Déployez Pickaform dans votre infrastructure pour un contrôle total',
    en: 'Deploy Pickaform in your infrastructure for total control'
  },
  'pricing.onpremise.feature1': {
    fr: 'Sécurité et conformité maximales',
    en: 'Maximum security and compliance'
  },
  'pricing.onpremise.feature2': {
    fr: 'Intégration avec votre infrastructure existante',
    en: 'Integration with your existing infrastructure'
  },
  'pricing.onpremise.feature3': {
    fr: 'Support dédié et personnalisé',
    en: 'Dedicated and personalized support'
  },
  'pricing.onpremise.feature4': {
    fr: 'Licences adaptées à vos besoins',
    en: 'Licenses adapted to your needs'
  },
  
  'makers.title': {
    fr: 'Offre makers / No-coders',
    en: 'Makers / No-coders offer'
  },
  'makers.subtitle': {
    fr: 'Pourquoi les makers/no-coders devraient se tourner vers les grandes entreprises ?',
    en: 'Why should makers/no-coders turn to large companies?'
  },
  'makers.benefit1.title': {
    fr: 'Valorisez votre expertise métier',
    en: 'Showcase your business expertise'
  },
  'makers.benefit1.description': {
    fr: 'Accédez à un marché en pleine expansion tout en mettant en avant vos compétences spécifiques.',
    en: 'Access a growing market while highlighting your specific skills.'
  },
  'makers.benefit2.title': {
    fr: 'Réduisez vos risques d\'impayés',
    en: 'Reduce your risk of non-payment'
  },
  'makers.benefit2.description': {
    fr: 'Offrez des solutions robustes aux grandes entreprises avec des processus de paiement fiables.',
    en: 'Offer robust solutions to large companies with reliable payment processes.'
  },
  'makers.benefit3.title': {
    fr: 'Construisez des relations pérennes',
    en: 'Build lasting relationships'
  },
  'makers.benefit3.description': {
    fr: 'Développez des partenariats durables avec des clients de confiance, prêts à investir dans l\'innovation.',
    en: 'Develop sustainable partnerships with trusted clients ready to invest in innovation.'
  },
  'makers.benefit4.title': {
    fr: 'Ayez un impact durable',
    en: 'Have a lasting impact'
  },
  'makers.benefit4.description': {
    fr: 'Touchez des milliers de collaborateurs à travers des solutions à fort potentiel de transformation.',
    en: 'Reach thousands of employees through solutions with high transformation potential.'
  },
  'makers.conclusion': {
    fr: 'En vous tournant vers les grandes entreprises, vous ne vous contentez pas de créer des applications, vous façonnez l\'avenir des process d\'entreprise.',
    en: 'By turning to large companies, you are not just creating applications, you are shaping the future of business processes.'
  },
  'makers.callToAction': {
    fr: 'Ne vous cantonnez plus aux petites structures. Créez des solutions adaptées aux grands comptes en quelques minutes, faites-les évoluer pendant des décennies !',
    en: 'Don\'t limit yourself to small structures anymore. Create solutions adapted to large accounts in minutes, evolve them for decades!'
  },
  'makers.callToActionButton': {
    fr: 'Passez à l\'action !',
    en: 'Take action!'
  },
  
  'testimonials.title': {
    fr: 'Témoignages clients',
    en: 'Customer testimonials'
  },
  'testimonials.subtitle': {
    fr: 'Nos clients l\'ont adopté… découvrez pourquoi ils font confiance à Pickaform !',
    en: 'Our customers have adopted it... find out why they trust Pickaform!'
  },
  'testimonials.user1.text': {
    fr: 'Pickaform nous a permis de digitaliser nos processus d\'approbation en un temps record. Ce qui prenait auparavant des semaines ne prend plus que quelques minutes. L\'interface est intuitive même pour nos collaborateurs les moins techniques.',
    en: 'Pickaform allowed us to digitize our approval processes in record time. What previously took weeks now takes only a few minutes. The interface is intuitive even for our least technical employees.'
  },
  'testimonials.user1.name': {
    fr: 'Sophie Laurent',
    en: 'Sophie Laurent'
  },
  'testimonials.user1.position': {
    fr: 'Directrice des Opérations',
    en: 'Operations Director'
  },
  'testimonials.user1.company': {
    fr: 'Finance Plus',
    en: 'Finance Plus'
  },
  'testimonials.user2.text': {
    fr: 'En tant que DSI, la sécurité est ma priorité absolue. Pickaform est la seule solution no-code qui a répondu à toutes nos exigences en matière de contrôle d\'accès et de gestion des données. L\'option on-premise est un vrai plus.',
    en: 'As a CIO, security is my top priority. Pickaform is the only no-code solution that met all our requirements for access control and data management. The on-premise option is a real plus.'
  },
  'testimonials.user2.name': {
    fr: 'Thomas Moreau',
    en: 'Thomas Moreau'
  },
  'testimonials.user2.position': {
    fr: 'Responsable IT',
    en: 'IT Manager'
  },
  'testimonials.user2.company': {
    fr: 'GroupeSoft',
    en: 'GroupeSoft'
  },
  'testimonials.user3.text': {
    fr: 'J\'ai créé plus de 15 applications avec Pickaform en seulement quelques mois. L\'outil est incroyablement flexible et la nouvelle fonctionnalité IA nous a fait gagner un temps considérable dans la conception et le développement.',
    en: 'I created more than 15 applications with Pickaform in just a few months. The tool is incredibly flexible and the new AI feature has saved us considerable time in design and development.'
  },
  'testimonials.user3.name': {
    fr: 'Marie Dubois',
    en: 'Marie Dubois'
  },
  'testimonials.user3.position': {
    fr: 'Chef de Projet Digital',
    en: 'Digital Project Manager'
  },
  'testimonials.user3.company': {
    fr: 'ConseilCorp',
    en: 'ConseilCorp'
  },
  
  'trustedBy.title': {
    fr: 'Ils nous ont fait confiance',
    en: 'They Trust Us'
  },
  'trustedBy.imageAlt': {
    fr: 'Logos de nos clients',
    en: 'Our client logos'
  },
  
  'footer.description': {
    fr: 'Le no-code conçu pour les grands comptes. Automatisez vos processus métier avec une solution puissante et intuitive.',
    en: 'No-code designed for enterprise accounts. Automate your business processes with a powerful and intuitive solution.'
  },
  'footer.solutions': {
    fr: 'Solutions',
    en: 'Solutions'
  },
  'footer.forEnterprise': {
    fr: 'Pour les grands comptes',
    en: 'For enterprise'
  },
  'footer.forSMB': {
    fr: 'Pour les PME',
    en: 'For SMBs'
  },
  'footer.forIT': {
    fr: 'Pour les DSI',
    en: 'For CIOs'
  },
  'footer.forBusiness': {
    fr: 'Pour les métiers',
    en: 'For business teams'
  },
  'footer.resources': {
    fr: 'Ressources',
    en: 'Resources'
  },
  'footer.documentation': {
    fr: 'Documentation',
    en: 'Documentation'
  },
  'footer.blog': {
    fr: 'Blog',
    en: 'Blog'
  },
  'footer.caseStudies': {
    fr: 'Cas clients',
    en: 'Case studies'
  },
  'footer.support': {
    fr: 'Assistance',
    en: 'Support'
  },
  'footer.contact': {
    fr: 'Contactez-nous',
    en: 'Contact us'
  },
  'footer.contactText': {
    fr: 'Vous souhaitez en savoir plus sur Pickaform ? N\'hésitez pas à prendre contact avec notre équipe.',
    en: 'Want to know more about Pickaform? Feel free to contact our team.'
  },
  'footer.copyright': {
    fr: 'Tous droits réservés.',
    en: 'All rights reserved.'
  },
  'footer.legal': {
    fr: 'Mentions légales',
    en: 'Legal notice'
  },
  'footer.privacy': {
    fr: 'Politique de confidentialité',
    en: 'Privacy policy'
  },
  'footer.terms': {
    fr: 'CGU',
    en: 'Terms of use'
  }
};

export const getTranslation = (key: TranslationKey, language: 'fr' | 'en'): string => {
  return translations[key][language];
};

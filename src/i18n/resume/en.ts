 export const resumeEn = {
  title: 'Skills',
  softSkills: {
    title: 'Soft Skills',
    feedback: "Structured Feedback",
    responsability: "Strong Responsabilit Sense",
    comunication: "Transparent Comunication",
    knowledge: "Knowledge lover",
    agile: "Agile, Scrum and kanban",
  },
  langs: {
    title: 'Languages',
    portuguese: {
      label: 'Portuguese: ',
      level: 'Native Speaker'
    },
    english: {
      label: 'English: ',
      level: 'I have an intermediate to advanced proficiency level in English with strong written and conversational skills.'
    }
  },
  stack: {
    title: 'Hard Skills',
    label: {
      level: 'Knowledgement level',
      years: 'Years worked'
    },
    developer: {
      label: 'Developer Skills',
      aws: {
        label: 'Amazon Web Service',
        level: 6,
        years: 5,
        sub: {
          cloudformation: 'Cloudformation',
          apiGateway: 'API Gateway',
          amplify: 'Amplify',
          cloudfront: 'Cloudfront',
          cloudwatch: 'cloudwatch',
          cognito: 'Cognito',
          route53: 'Route53',
          lambda: 'Lambda',
          ec2: 'EC2',
          s3: 'S3',
          eventBridge: 'Event Bridge',
          stepFunctions: 'Step Functions'
        }
      },
      firebase: {
        label: 'Firebase',
        level: 6,
        years: 2,
        sub: {
          Functions: 'Firebase Functions',
          realtimeDB: 'Real Time Database',
          auth: 'Firebase Auth',
          hosting: 'Firebase hosting',
        }
      },
      linux: {
        label: 'Linux',
        level: 7,
        years: 14,
      },
      docker: {
        label: 'Docker',
        level: 7,
        years: 5,
      },
      git: {
        label: 'git',
        level: 8,
        years: 12,
      },
      tdd: {
        label: 'TDD (Testing Driven Development)',
        level: 8,
        years: 6,
      },
      newRelic: {
        label: 'New Relic',
        level: 6,
        years: 3,
      },
      sentry: {
        label: 'Sentry',
        level: 7,
        years: 3,
      },
      elk: {
        label: 'Elastic Stack (ELK)',
        level: 6,
        years: 5,
      },
      workflow: {
        label: 'Gitflow and Forked Flow',
        level: 8,
        years: 7,
      },
      cicd: {
        label: 'Continuous integration, delivery',
        level: 8,
        years: 8,
        sub: {
          bitbucket: 'Bitbucket Pipelines',
          circleCi: 'Circle CI',
          githubActions: 'Github Actions',
          jenkins: 'Jenkins',
        }
      },
      ddd: {
        label: 'DDD (Domain Driven Design)',
        level: 6,
        years: 8,
      },
      bdd: {
        label: 'BDD (Behavior Driven Development)',
        level: 5,
        years: 4,
      },
      graphQL: {
        label: 'GraphQL APIs',
        level: 7,
      years: 5,
      },
      rest: {
        label: 'Rest APIs',
        level: 8,
        years: 10,
      },
      fp: {
        label: 'Functional Programing',
        level: 8,
        years: 9,
      },
      oop: {
        label: 'OOP (Object Oriented Programing)',
        level: 8,
        years: 14,
      },
      microservices: {
        label: 'Micro Services',
        level: 6,
        years: 7,
      },
      microfrontends: {
        label: 'Micro Front-ends',
        level: 8,
        years: 7,
      },
    },
    frontend: {
      label: 'Front-end Skills',
      js: {
        label: 'Javascript ES2015++',
        level: 10,
        years: 16,
      },
      html: {      
        label: 'HTML (Hyper Text Markup Language)',
        level: 10,
        years: 16,
        sub: {
          html5: 'HTML5',
          semanticHtml: 'Semantic HTML',
        }
      },
      css: {
        label: 'CSS (Cascade Style Sheet)',
        level: 10,
        years: 16,
        sub: {
          css3: 'CSS3',
          flexbox: 'Flexbox',
          grid: 'Native Layout Grid',
          postCSS: 'PostCSS',
          cssModules: 'CSS Modules',
          sass: 'SASS',
          cssJs: 'CSS in Js',
          styledComponents: 'Styled components',
          stitches: 'Stitches',
        }
      },
      typescript: {
        label: 'Typescript',
        level: 9,
        years: 5,
      },
      shopify: {
        label: 'Shopify Liquid',
        level: 8,
        years: 4,
      },
      astro: {
        label: 'Astro SSG (Static Site Generator)',
        level: 8,
        years: 2,
      },
      nextJS: {
        label: 'NextJS (Server Side Rendering)',
        level: 8,
        years: 7,
      },
      elm: {
        label: 'Elm Template Engine Language',
        level: 7,
        years: 3,
      },
      wasm: {
        label: 'Web Assembly (WASM)',
        level: 6,
        years: 4,
      },
      angular: {
        label: 'Angular',
        level: 7,
        years: 6,
      },
      i18n: {
        label: 'i18n and FormatJs',
        level: 9,
        years: 8,
      },
      reactJs: {
        label: 'ReactJs',
        level: 10,
        years: 10,
        sub: {
          hooks: 'React Hooks',
          intl: 'React Intl and React i18n',
          mobx: 'Mobx',
          redux: 'Redux',
          rtk: 'Redux ToolKit RTK (State manange and data fetch)',
          reduxThunks: 'Redux thunks',
          reduxSagas: 'Redux Sagas',
        }
      },
      tests: {
        label: 'Tests Automation',
        level: 9,
        years: 8,
        sub: {
          jest: 'Jest',
          testingLibrary: 'Testing Library',
          enzyme: 'Enzyme',
          sinon: 'Sinon',
          cypres: 'Cypres',
        }
      },
      engineering: {
        label: 'Front-end Engineering',
        level: 8,
        years: 12,
        sub: {
          webpack: 'Webpack',
          moduleFederation: 'webpack module Federation',
          npm: 'npm and npm workspace',
          yarn: 'Yarn and Yarn workspace',
          lerna: 'Lerna monorepo orchestry',
          turboPack: 'Turbo pack',
          turboRepo: 'Turbo Repo',
          eslint: 'ESLint',
          prettier: 'Prettier',
          rome: 'Rome',
          grunt: 'Grunt',
          yeoman: 'Yeoman',
          bower: 'Bower'
        }
      },
      designSystems: {
        label: 'Design Systems',
        level: 9,
        years: 10,
        sub: {
          responsive: 'Responsive Design',
          atomic: 'Atomic Design',
          materialUI: 'Material UI',
          tailwind: 'Tailwind',
          bootstrap: 'Bootstrap',
          chackraUI: 'Chackra UI'
        }
      },
      dataFetch: {
        label: 'Data Fetch',
        level: 9,
        years: 12,
        sub: {
          mqtt: 'MQTT',
          socketIo: 'Socket.io',
          webSockets: 'Web Sockets',
          rest: 'Rest APIs',
          graphQL: 'GraphQL APIs',
        },
      },
      workers: {
        label: 'Web Workers',
        level: 6,
        years: 4,
      },
      chromeExtension: {
        label: 'Chrome Extension',
        level: 5,
        years: 2,
      },
      firefoxAddon: {
        label: 'Firefox Addon',
        level: 5,
        years: 2,
      },
    },
    backend: {
      label: 'Back-end Skills',
      node: {
        label: 'NodeJS and NodeTs',
        level: 9,
        years: 12,
        sub: {
          apollo: 'Apollo Server',
          nest: 'NestJS',
          loopback: 'Loopback',
          express: 'Express',
          typeORM: 'TypeORM',
          sequelize: 'Sequelize',
          sails: 'Sails',
          waterlime: 'Waterlime',
          serverless: 'Serverless',
        }
      },
      deno: {
        label: 'Deno Typescript Runtime',
        level: 8,
        years: 2,
        sub: {
          oak: 'Oak',
          fresh: 'Fresh',
          lume: 'Lume',
          cac: 'cac'
        }
      },
      Rust: {
        label:  'Rust Programing Language',
        level: 6,
        years: 4,
        sub: {
          rocket: 'Rocket',
          actix: 'Actix',
          tokio: 'Tokio',
          juniper: 'Juniper',
          diesel: 'Diesel ORM',
          sea: 'Sea ORM',
          yew: 'Yew',
          clap: 'Clap',
          ratatui: 'Ratatui',
        }
      },
      java: {
        label: 'Java 8++',
        level: 6,
        years: 8,
        sub: {
          jboss: 'Jboss Enterprise Application',
          jUnit: 'JUnit',
          spring: 'Spring boot MVC Framework',
          hHibernate: 'Hibernate',
        }
      },
      postgreSQL: {
        label: 'PostgreSQL Database',
        level: 7,
        years: 8,
      },
      dynamoDB: {
        label: 'DynamoDB',
        level: 6,
        years: 2,
      },
      mongoDB: {
        label: 'MongoDB',
        level: 7,
        years: 4,
      },
      redis: {
        label: 'Redis in Memory Database',
        level: 5,
        years: 4,
      },
      kafka: {
        label: 'Apache Kafka',
        level: 6,
        years: 3,
      },
      rabbitMq: {
        label: 'Rabbit Mq',
        level: 6,
        years: 3,
      },
    }
  },
  jobs: {
    title: 'Jobs',
    label: {
      company: 'Company name',
      employ: 'Ocupation: ',
      date: 'Worked Date: ',
      finished: 'Finished in: ',
      describe: 'Description: '
    },
    vnator: {
      company: 'VNATOR',
      employ: 'Software Archtect and Founder',
      started: 'from 11/2018',
      finished: ' present',
      describe: "I designed and built an eCommerce platform for dingles using AWS cloud services, Node.js Lambda functions, Apollo Server for GraphQL, Aurora RDS PostgreSQL, and AWS S3 for dynamic content storage. We managed resources with CloudFormation and handled user authentication through Cognito. I maintain this project and collaborate on other confidential projects for my company's future.",
    },
    pagarme: {
      company: 'PAGAR.ME',
      employ: 'Staff Front-End Software Engineer',
      started: 'from 12/2022',
      finished: ' at 07/2023.',
      describe: "I analyzed, architected, and developed the PAGAR.ME finance dashboard microfrontend platform. I was responsible for implementing new features and maintaining existing solutions, including the migration of products to a microfrontend development pattern. This was achieved using TypeScript, React, and Redux, with the consumption of BFF APIs.",
    },
    kovi: {
      company: 'KOVI',
      employ: 'Back-end Software Engineer Senior',
      started: 'from 05/2022',
      finished: ' at 12/2022.',
      describe: "As a Back-end Node.js developer specializing in TypeScript, I contributed to the analysis and development of serverless Lambda and pipeline functions within the NestJS and Express frameworks. These functions were instrumental in the creation of a product centered around remote vehicle rental and purchase.",
    },
    pedePronto: {
      company: 'PEDE PRONTO',
      employ: 'Software Engineer Senior',
      started: 'from 06/2020',
      finished: ' at 06/2022.',
      describe: "I actively contributed to the development of the PedePronto application, guiding its transition from a monolithic architecture to a microservices-based framework. Additionally, I played a key role in crafting a web client for B2C (Business to Business) interactions, making use of React, TypeScript, and GraphQL. In another capacity, I served as a Full Stack developer for the B2B (Business to Business) Onboarding service, designed to assist new clients. In this role, I utilized React, TypeScript, Restful APIs, and Python backend services."
    },
    agrotis: {
      company: 'AGROTIS',
      employ: 'Front-end Software Architect',
      started: 'from 07/2016',
      finished: ' at 07/2019.',
      describe: "I was involved in the development of tools and automation processes, all while diving into the analysis, architecture, and development of microservices and multi-tenancy platforms. This meant working with various programming languages, like Erlang, Python, Node.js, Java, and shell scripting, mainly to manage server routines and integration tools."
    },
    polvo: {
      company: 'Polvo Digital',
      employ: 'Lead Front-end Developer',
      started: 'from 07/2015',
      finished: ' at 06/2016.',
      describe: "I held the position of Front-end lead developer, where my responsibilities included the development and maintenance of client applications. Additionally, I played a key role in implementing design systems for e-commerce and marketplace platforms like Shopify, WordPress, and various custom headless CMS solutions."
    },
    freelance: {
      company: 'Freelancer Developer',
      employ: 'fullstack developer',
      started: 'between 01/2011',
      finished: ' at 11/2018.',
      describe: "As a Front-end developer, I was heavily involved in crafting user interfaces using technologies like React, JavaScript, Angular, and jQuery. On the Back-end, I took on the responsibility of building the server-side infrastructure, utilizing languages such as Java (Spring), Haskell, and Node.js."
    },
  },
  interests: {
    title: 'My Hobies',
    Basktball: 'Basketball',
    survivalist: 'Survivalist',
    book: 'Books <3',
    hq: 'HQs',
    videoGame: 'Video Games',
    movie: 'Movies',
    ranch: 'Ranch and Horses',
    cook: 'Cook and Barbecue',
  },
}

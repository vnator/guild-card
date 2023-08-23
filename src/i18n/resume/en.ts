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
      label: 'Portuguese',
      level: 'Native Speaker'
    },
    english: {
      label: 'English',
      level: 'Intermedited to advenced Level with good writen and conversation'
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
      started: 'between 11/2018',
      finished: ' and today',
      describe: 'I did analysis, architecture, and implementation of an eCommerce platform for dingles, using the AWS cloud, with lambda service in NodeJS, exposing a Graphql API using Apollo Server, Aurora RDS PostgreSQL, CloudFormation for management and control, Cognito, AWS S3 for dynamic storage of platform contents, SPA React development, AWS EventBridge for event flow management, development of lambda layers for dependencies and ORM (Object Relation Model). Today i maintain this project and work with another secret projects to the future of my company.',
    },
    pagarme: {
      company: 'PAGAR.ME',
      employ: 'Staff Front-End Software Engineer',
      started: 'between 12/2022',
      finished: ' and today.',
      describe: 'Analysis, architecture and development of PAGAR.ME(finance) dashboard microfrontend platform. Development of new features and maintenance of existing solutions, migrating products to a development pattern based on microfronends with Typescript, React and Redux, consuming BFF APIs.',
    },
    kovi: {
      company: 'KOVI',
      employ: 'Back-end Software Engineer Senior',
      started: 'between 05/2022',
      finished: ' and 12/2022.',
      describe: 'Back-end NodeJS(typescript) developer, Analysis and development of serverless lambda and pipeline functions in NestJS and Express for a product focused on renting and purchasing vehicles remotely.Backend NodeJS(typescript) developer, Analysis and development of serverless lambda and pipeline functions in NestJS and Express for a product focused on renting and purchasing vehicles remotely.'
    },
    pedePronto: {
      company: 'PEDE PRONTO',
      employ: 'Software Engineer Senior',
      started: 'between 06/2020',
      finished: ' and 06/2022.',
      describe: 'I worked with the analysis, architecture, and development of the PedePronto application. I did the migration from a monolithic architecture to a microservice and develop web client B2C (Business to Business) with React, Typescript, and GraphQL. I worked as the Full stack developer of OnBoarding service B2B (Business to Business) for new clients with React, Typescript, RestFull, and Python backend services.'
    },
    iesde: {
      company: 'IESDE',
      employ: 'Senior Software Engineer',
      started: 'between 09/2019',
      finished: ' and 06/2020.',
      describe: 'I work Architect in a monolith migration project for multi-tenancy-based microservices. With services in step functions with AWS lambda, Kineses, authentication/Authorization control with AWS Cognito, and identity provider. I work with React, Typescript, and Redux for state management and NodeJs backend.'
    },
    agrotis: {
      company: 'AGROTIS',
      employ: 'Front-end Software Architect',
      started: 'between 07/2016',
      finished: ' and 07/2019.',
      describe: 'I Developed tools and automation processes. And I work in the analysis, architecture, and development of microservices and multi-tenancy platforms. I worked with several languages such as Erlang, Python, NodeJs, Java, and shell script when there was a need to manage server routines or integration tools.'
    },
    nayp: {
      company: 'Nayp CO.',
      employ: 'Full Stack Developer',
      started: 'between 11/2015',
      finished: ' and 12/2019.',
      describe: 'I worked with the web development and maintain of a ecommerce plataform developed with React and Shopify liquid template.'
    },
    polvo: {
      company: 'Polvo Digital',
      employ: 'Lead Front-end Developer',
      started: 'between 07/2015',
      finished: ' and 06/2016.',
      describe: 'I was the Front-end lead developer. I worked with the development and maintain client applications and Design system implementation, in e-commerces and marketplaces plataform like shopify, wordpress, and some custom headless CMS.'
    },
    freelance: {
      company: 'Freelancer Developer',
      employ: 'fullstack developer',
      started: 'between 01/2011',
      finished: ' and 11/2018.',
      describe: 'Front-end development with React, Javascript, Angular and Jquery. Back-end development with Java (spring), Haskell, and NodeJS.'
    },
  },
  interests: {
    title: 'My Hobies (interests)',
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

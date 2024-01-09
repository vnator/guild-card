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
      level: "I have an advanced level of proficiency in English with strong written and conversational skills."
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
      describe: "As a skilled software engineer, I specialize in analyzing, designing, and implementing eCommerce platforms tailored for dingles. Leveraging AWS cloud services, I use Lambda functions in Node.js to build scalable solutions. The platform includes a GraphQL API with Apollo Server, backed by Aurora RDS PostgreSQL for reliable database management. CloudFormation handles infrastructure, Cognito ensures secure authentication, and AWS S3 stores dynamic content. The frontend is a Single Page Application (SPA) in React. I seamlessly manage event flows with AWS EventBridge and handle dependencies and ORM using lambda layers. This holistic approach delivers a robust, scalable, and feature-rich eCommerce platform for dingles.",
    },
    nzn: {
      company: 'NZN',
      employ: 'Tech Lead',
      started: 'from 10/2023',
      finished: ' pressent.',
      describe: "In the Architect and Tech Leader position with Node.js, LoopBack, Strapi, and Next.js in our stack, running above a Kubernetes server, I spearhead the strategic design and management of developer teams focused on editorial products. I am responsible for crafting architectural patterns, designing scalable systems, and providing leadership in technology adoption. My role involves overseeing team dynamics, enforcing high development standards, and implementing automation strategies to optimize workflows. I prioritize documentation for architectural decisions and development processes, ensuring clarity and knowledge sharing. Additionally, I evaluate and integrate emerging technologies within the Node.js ecosystem and related frameworks, driving innovation. My commitment lies in delivering high-quality, scalable solutions through effective team collaboration and continuous improvement.",
    },
    pagarme: {
      company: 'PAGAR.ME',
      employ: 'Staff Front-End Software Engineer',
      started: 'from 12/2022',
      finished: ' at 07/2023.',
      describe: "At Pagar.me I my responsabilites as a Staff software engineer, I played a pivotal role in analyzing, architecting, and developing the PAGAR.ME finance dashboard microfrontend platform. My responsibilities included implementing new features, maintaining existing solutions, and successfully migrating products to a microfrontend development pattern. This involved extensive use of TypeScript, React, and Redux, with seamless integration and consumption of BFF APIs.",
    },
    kovi: {
      company: 'KOVI',
      employ: 'Back-end Software Engineer Senior',
      started: 'from 05/2022',
      finished: ' at 12/2022.',
      describe: "As a Senior Backend Software Engineer At Kovi with expertise in Node.js and TypeScript, I played a key role in analyzing and developing serverless Lambda and pipeline functions using NestJS and Express frameworks. These functions played a crucial role in crafting a product focused on remote vehicle rental and purchase, showcasing my proficiency in building robust and scalable backend solutions.",
    },
    pedePronto: {
      company: 'PEDE PRONTO',
      employ: 'Software Engineer Senior',
      started: 'from 06/2020',
      finished: ' at 06/2022.',
      describe: "As a Senior Fullstack Software Engineer Pede Pronto (we start like Onyo =D), I played a pivotal role in the evolution of the PedePronto application, leading its transition from a monolithic architecture to a dynamic microservices-based framework. My significant contributions extended to crafting an innovative web client tailored for B2C interactions, employing React, TypeScript, and GraphQL to enhance user experiences. Concurrently, I served as the Full Stack developer for the B2B Onboarding service, providing essential support for new clients through the seamless integration of React, TypeScript, Restful APIs, and Python backend services. These multifaceted endeavors showcase my proficiency in driving architectural transformations and delivering comprehensive solutions across the entire software stack"
    },
    agrotis: {
      company: 'AGROTIS',
      employ: 'Front-end Software Architect',
      started: 'from 07/2016',
      finished: ' at 07/2019.',
      describe: "In Agrotis I worked as software developer and Software Architect, I actively contributed to developing tools and automation processes. This involved deep engagement in the analysis, architecture, and development of microservices and multi-tenancy platforms. Utilizing a range of programming languages such as Erlang, Python, Node.js, Java, and shell scripting, my primary focus was on managing server routines and integration tools, showcasing versatility and expertise in crafting robust and scalable software solutions."
    },
    polvo: {
      company: 'Polvo Digital',
      employ: 'Lead Front-end Developer',
      started: 'from 07/2015',
      finished: ' at 06/2016.',
      describe: "I held the position of Front-end lead developer, I specialize in crafting visually appealing and responsive user interfaces. My proficiency extends to developing and maintaining style guides, ensuring consistent and cohesive designs across projects. Leveraging my skills in React and Vue, I bring dynamic and interactive elements to the forefront of user experiences. Through collaborative efforts, I contribute to creating seamless and engaging frontend solutions, showcasing my dedication to delivering high-quality, aesthetically pleasing applications."
    },
    freelance: {
      company: 'Freelancer Developer',
      employ: 'fullstack developer',
      started: 'between 01/2011',
      finished: ' at 11/2018.',
      describe: "Throughout my extensive freelance career, I have thrived in part-time positions as a Full Stack Developer, showcasing proficiency in a diverse set of technologies. On the frontend, I specialized in crafting dynamic user interfaces using React, JavaScript, Angular, and jQuery. Simultaneously, I played a pivotal role in developing robust server-side infrastructures, leveraging languages such as Java (Spring), Haskell, and Node.js. This multifaceted experience reflects my adaptability and long-standing commitment to delivering comprehensive solutions across the entire development stack"
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

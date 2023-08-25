import {
  COMPANY_NAME as companyName,
  COMPANY_RESPONSABLE as companyResponsable,
  COMPANY_POSITION as companyPosition
} from '../../helpers/constants'

export const coverLetterEn = {
  title: `Cover Letter`,
  hi: `Hi ${companyResponsable ?? companyName}`,
  presentation: `I am writing to express my interest in this position, as ${companyPosition} at ${companyName}, I believe that my experience in several languages and technologies can be a great acquisition for the company`,
  paragraphs: {
    first: 'I am a generalist web developer with experience in back-end and DevOps, but my expertise is in front-end and functional programming. I started programming before college between 2008 and 2012 where I obtained, my System Integration Degree at the University of Central Paraná (UCP) and today I work in a Financial Group as a Front-end Staff Engineer. At this moment, my focus is Front-end and WASM, I think that web assembly and Rust are good mediums to improve my skills.',
    second: 'I`ve worked in many industries, like agro-business companies, rental cars, delivery food apps, e-commerce companies, and marketplaces. I spent a lot of time working with Style-guides, Microservices, micro frontends, SPAs, BFF, and many other technologies.',
    third: 'About me, I can say that my curiosity, my passion for acknowledgment, and my responsibility sense are my Trivet. I love to learn new things and work with different stuff, but the better choice for any project is the necessary technology and not the most hyped.',
  },
  by: `By ${companyResponsable ?? companyName} and have a good day.`
}

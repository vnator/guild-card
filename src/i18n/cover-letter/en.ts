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
    first: "I'm a well-rounded web developer with experience in back-end and DevOps, but my true expertise lies in front-end development and functional programming. My journey in programming began way back in 2006 when I started tinkering with RPG Maker, using tools like Ruby, alongside HTML, CSS, and JavaScript, to update my MySpace page. Between 2008 and 2012, I earned my System Integration Degree from the University of Central Paraná (UCP). Presently, I hold the position of Front-end Staff Engineer at a Financial Group. At this point in my career, my primary focus is Front-end development and WebAssembly (WASM). I firmly believe that WebAssembly and Rust present excellent opportunities for skill enhancement.",
    second: "Over the years, I've had the privilege of working across various industries, spanning agro-business companies, car rental services, food delivery apps, e-commerce businesses, and marketplaces. My experience has exposed me to a diverse set of technologies, including Style-guides, Microservices, micro frontends, Single Page Applications (SPAs), Backends for Frontends (BFF), and many more.",
    third: "In terms of personal traits, I consider my curiosity, unquenchable thirst for knowledge, and unwavering sense of responsibility as the driving forces behind my success. I thrive on the excitement of learning new things and thrive on the challenges of working on diverse projects. Above all, I hold the belief that the most crucial aspect of any project is choosing the right technology based on its requirements, rather than blindly following the latest trends.",
  },
  by: "Thank you for taking the time to read this, and I wish you all a fantastic day."
}

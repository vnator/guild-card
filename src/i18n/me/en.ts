import {
  ME_EMAIL as email,
  ME_GITHUB as github,
  ME_LINKEDIN as linkedin,
  ME_PHONE as phone,
  ME_EXERCISM as exercism,
} from '../../helpers/constants'


export const meEn = {
  name: "Joao Henrique Serodio",
  employ: "Software Engineer",
  about: {
    title: "About me",
    bio: "I am a software developer with a broad skill set. My proficiency extends to JavaScript and Functional Programming, and I have a strong foundation in backend development, particularly with Node.js, Java, and Rust. My journey in programming commenced in 2006, and I completed my System Integration Degree at the University of Central Paraná between 2008 and 2012. Throughout my career, I have assumed various roles in the field of development, but my core expertise remains in Front-end development. At present, I am fully committed to Rust and WebAssembly for my upcoming projects."
  },
  contact: {
    title: "My Contacts and profiles",
    email:  {
      label: 'E-mail',
      value: email
    },
    github: {
      label: "Github",
      value: github
    },
    linkedin: {
      label: "Linkedin",
      value: linkedin
    },
    numberPhone: {
      label: 'Number phone',
      value: phone
    },
    exercism: {
      label: 'Exercism',
      value: exercism
    }
  },
  education: {
    title: "Formal Education",
    bachelor: "I pursued a System Information Degree at UCP (University of Central Parana), situated in the city of Pitanga in the state of Parana, Brazil, from 2008 to 2012."
  }
}

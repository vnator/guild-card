import {
  ME_EMAIL as email,
  ME_GITHUB as github,
  ME_LINKEDIN as linkedin,
  ME_PHONE as phone,
} from '../../helpers/constants'


export const meEn = {
  name: "Joao Henrique Serodio",
  employ: "Software Engineer",
  about: {
    title: "About me",
    bio: "I'm a software developer generalist/specialist (Pi Shaped), with hard knowledge in Javascript and Functional Programming, and generalist skills in backend Nodejs, Java,  and Rust. I started programming in 2007, and between 2008 and 2012 I did my System Integration Degree at the University of Central Paraná. I've worked as Front-end, Back-end, or FullStack developer but my main Area ever is Front-end, and today Rust and WebAssembly are my focus for the future."
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
  },
  education: {
    title: "Formal Education",
    bachelor: "System Information Degree College at UCP(University of Central Parana), Located at Pitanga City in State of Parana Brazil, between 2008 and 2012."
  }
}

import {
  ME_EMAIL as email,
  ME_GITHUB as github,
  ME_LINKEDIN as linkedin,
  ME_PHONE as phone,
  LEET_CODE as leetcode
} from '../../helpers/constants'


export const mePt = {
  name: "Joao Henrique Serodio",
  employ: "Frontend Staff Engineer",
  about: {
    title: "Sobre mim",
    bio: "Sou um desenvolvedor de software generalista/especialista (Pi Shaped), com conhecimento sólido em Javascript e Programação Funcional, já minhas habilidades generalistas em backend são com Nodejs, Java e Rust. Comecei a programar em 2006 e entre 2008 e 2012 fiz minha graduação em Sistemas de Informação na Universidade do Centro do Paraná (UCP - Pitanga). Venho desde então trabalhando como desenvolvedor Front-end, Back-end ou FullStack, mas minha principal área sempre foi e será Front-end, hoje Rust e WebAssembly são meu foco para estudos futuros."
  },
  contact: {
    title: "Meus Contatos",
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
      label: 'Número de telefone',
      value: phone
    },
    leetcode: {
      label: 'LeetCode',
      value: leetcode
    }
  },
  education: {
    title: "Formação Acadêmica",
    bachelor: "Bacharel em Sistemas de Informação pela UCP - Pitanga (Univerdade do Centro do Paraná), entre 2008 e 2012."
  }
}

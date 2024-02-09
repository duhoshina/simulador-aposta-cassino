import { FaBookOpen, FaCalculator, FaCode, FaGithub, FaInfo, FaLinkedin, FaYoutube } from "react-icons/fa";

const sizeIcon = 20;

export const Menus = [
  { 
    title: "Fazer Simulação Agora", 
    src: <FaCalculator size={sizeIcon} />, 
    link: '/',
  },
  {
    title: "Como é nosso algoritmo?",
    src: <FaCode size={sizeIcon} />, 
    link: '/', 
  },
  { 
    title: "Informações sobre o projeto", 
    src: <FaInfo size={sizeIcon} />, 
    link: '/',
  },
  { 
    title: "Lei dos Grandes Números", 
    src: <FaBookOpen size={sizeIcon} />, 
    link: 'https://www.infoescola.com/matematica/probabilidade-em-estatistica-e-lei-dos-grandes-numeros/',
    target: "_blank",
    gap: true,
  },
  { 
    title: "Como funcionam os cassinos?", 
    src: <FaYoutube size={sizeIcon} />, 
    link: 'https://youtu.be/2jQuuCMRpZk',
    target: "_blank",
  },
  { 
    title: "Repositório Github", 
    src: <FaGithub size={sizeIcon} />, 
    link: 'https://github.com/duhoshina/simulador-aposta-cassino', 
    target: "_blank", 
    gap: true,
  },
  { 
    title: "Visitar LinkedIn", 
    src: <FaLinkedin size={sizeIcon} />, 
    link: 'https://www.linkedin.com/in/luishoshina/',
    target: "_blank", 
  },
]
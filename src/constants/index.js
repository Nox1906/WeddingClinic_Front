import logo from '../assets/logo.png';
import wedding from '../assets/wedding.mp4';
import frontCard from '../assets/FrontCard.jpg'

export const images = {
  logo,
  frontCard, 
};

export const videos = {
  wedding
};

export const  navDropDownLinks = [
  {
    id: "Dresses",
    title: "Vestidos de Noiva",
    link: "/vestidos-noiva", 
  },
  {
    id: "Accessories",
    title: "Acessorios",
    link: "/acessorios"
  },
];

export const privacyPolicyLink = "/politica-de-privacidade"

export const navLinks = [
  {
    id: "Collections",
    title: "Coleções",
    link: "/vestidos-noiva",
    DropdownItems: [
      {
        id: "Dresses",
        title: "Vestidos de Noiva",
        link: "/vestidos-noiva", 
      },
      {
        id: "Accessories",
        title: "Acessorios",
        link: "/acessorios"
      },
    ]
  },
  {
    id: "Appointments",
    title: "AGENDE UMA VISITA",
    link: "/marcacoes",
    DropdownItems: [
      
    ]
  },
  {
    id: "Partners",
    title: "PARCEIROS",
    link: "/parceiros",
    DropdownItems: [
      
    ]
  },
  // {
  //   id: "WeddingBlog",
  //   title: "BLOG",
  //   link: "/blog",
  //   DropdownItems: [
      
  //   ]
  // },
  {
    id: "Location",
    title: "LOCALIZAÇÃO",
    link: "/localizacao",
    DropdownItems: [
      
    ]
  },
  {
    id: "Test",
    title: "Test",
    link: "/test",
    DropdownItems: [
      
    ]
  },
];
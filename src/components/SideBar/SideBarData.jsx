import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {FaRegBuilding} from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai";
import {BiBookOpen} from "react-icons/bi";
import { HiOutlineNewspaper, HiOutlineIdentification} from "react-icons/hi";
import  { PiGraduationCap, PiCalculator} from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Institucional",
    path: "/home",
    icon:  <FaRegBuilding />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subNav: [
      {
        title: "Sobre",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "Localização",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "Corpo docente",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "Formas de ingresso",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "Publicações",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
    ],
  },
  {
    title: "Pesquisa",
    path: "/home",
    icon:  <BiBookOpen />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subNav: [
      {
        title: "LSE",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "LSI",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "Samsung OCEAN",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "FEMTOLAB",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "ThinkTED",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "LUDUS Lab",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "Academia STEM",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
    ],
  },
  {
    title: "Notícias",
    path: "/home",
    icon:  <HiOutlineNewspaper />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />
  },
  {
    title: "Estágio",
    path: "/home",
    icon:  <HiOutlineIdentification />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subNav: [
      {
        title: "Orientação",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "Documentos",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "Calculadora",
        path: "/calculator",
        icon: <AiOutlineClose />,
      },
    ],
  },
  {
    title: "Cursos",
    path: "/home",
    icon:  <PiGraduationCap />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subNav: [
      {
        title: "Graduações",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
    ],
  },
  {
    title: "Serviços",
    path: "/home",
    icon:  <PiCalculator />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
    subNav: [
      {
        title: "Calculadora de Horas complementares",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
      {
        title: "Match Aluno x Orientador",
        path: "/about-us/aim",
        icon: <AiOutlineClose />,
      },
    ],
  },
  {
    title: "Fale conosco",
    path: "/home",
    icon:  <BsTelephone />,
    iconClosed: <FiChevronDown />,
    iconOpened: <FiChevronUp />,
  },

];
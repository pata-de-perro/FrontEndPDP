import {
  AiOutlineHome,
  AiOutlineUser,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { GrGroup } from "react-icons/gr";

export const navigationItems = [
  { icon: <AiOutlineHome />, label: "Inicio", href: "/pdp" },
  { icon: <AiOutlineUser />, label: "Tu perfil", href: "/pdp/profile" },
  { icon: <AiTwotoneCalendar />, label: "Tus eventos", href: "/pdp/plans" },
];

export const placesList = [
  // {
  //   Hotel: "Hotel",
  //   Places: [
  //     Top1 = "Hotel1",
  //     Top2 = "Hotel2",
  //     Top3 = "Hotel3",
  //     Top4 = "Hotel4",
  //     Top5 = "Hotel5",
  //     Top6 = "Hotel6",
  //   ]
  // },
  {
    Title: "Hotel",
    Top1: "Hotel1",
    Top2: "Hotel2",
    Top3: "Hotel3",
    Top4: "Hotel4",
    Top5: "Hotel5",
    Top6: "Hotel6",
  },
  {
    Title: "Restaurantes",
    Top1: "Restaurante 1",
    Top2: "Restaurante 2",
    Top3: "Restaurante 3",
    Top4: "Restaurante 4",
    Top5: "Restaurante 5",
    Top6: "Restaurante 6",
  },
  {
    Title: "Vida Noctura",
    Top1: "Vida Nocturna 1",
    Top2: "Vida Nocturna 2",
    Top3: "Vida Nocturna 3",
    Top4: "Vida Nocturna 4",
    Top5: "Vida Nocturna 5",
    Top6: "Vida Nocturna 6",
  },
  {
    Title: "Atracciones turísticas",
    Top1: "Atraccion 1",
    Top2: "Atraccion 2",
    Top3: "Atraccion 3",
    Top4: "Atraccion 4",
    Top5: "Atraccion 5",
    Top6: "Atraccion 6",
  },
  {
    Title: "Museos y Arte",
    Top1: "Museo y Arte 1",
    Top2: "Museo y Arte 2",
    Top3: "Museo y Arte 3",
    Top4: "Museo y Arte 4",
    Top5: "Museo y Arte 5",
    Top6: "Museo y Arte 6",
  },
  {
    Title: "Actividades al aire libre",
    Top1: "Actividad 1",
    Top2: "Actividad 2",
    Top3: "Actividad 3",
    Top4: "Actividad 4",
    Top5: "Actividad 5",
    Top6: "Actividad 6",
  },
];

export const friends = ["Paco", "Sonia", "Estevan"];

export const placesOfInterestMenu = [
  {
    key: "01",
    title: "Hospedaje",
    pinUrl: "/location_lodging.svg",
    typePlace: ["lodging"],
  },
  {
    key: "02",
    title: "Spa",
    pinUrl: "/location_spa.svg",
    typePlace: ["spa"],
  },
  {
    key: "03",
    title: "Atracciones Turísticas",
    pinUrl: "/location_tourist.svg",
    typePlace: ["tourist_attraction"],
  },
  {
    key: "04",
    title: "Restaurantes",
    pinUrl: "/location_restaurant_pdp.svg",
    typePlace: ["restaurant"],
  },
  {
    key: "05",
    title: "Vida Nocturna",
    pinUrl: "/location_pdp.svg",
    typePlace: ["night_club"],
  },
  {
    key: "06",
    title: "Bares",
    pinUrl: "/location_bar.svg",
    typePlace: ["bar"],
  },
];

export const pinColors = {
  lodging: {
    background: "#C92CE5",
    borderColor: "#fff",
    glyphColor: "#fff",
  },
  spa: {
    background: "#EDB3F8",
    borderColor: "#fff",
    glyphColor: "#87549F",
  },
  tourist_attraction: {
    background: "#253A74",
    borderColor: "#fff",
    glyphColor: "#fff",
  },
  restaurant: {
    background: "#FE9401",
    borderColor: "#fff",
    glyphColor: "#87549F",
  },
  night_club: {
    background: "#7ECDCE",
    borderColor: "#fff",
    glyphColor: "#87549F",
  },
  bar: {
    background: "#87549F",
    borderColor: "#fff",
    glyphColor: "#fff",
  },
  default: {
    background: "#B6EAA4",
    borderColor: "#87549F",
    glyphColor: "#87549F",
  },
};

import simples from "../ItemData/simples.jpg";
import triples from "../ItemData/triples.jpg";
import combos from "../ItemData/combos.jpg";
import muffin from "../ItemData/muffin.png";
import alfajor from "../ItemData/alfajor.png";
import Malfajor from "../ItemData/alfajor-de-maicena.png";
//Sabores
import jamonCrudoYqueso from "../ItemData/jamonCrudoYqueso.jpg";
import jamonYchoclo from "../ItemData/jamonYchoclo.jpg";
import jamonYhuevo from "../ItemData/jamonYhuevo.jpg";
import jamonYlechuga from "../ItemData/jamonYlechuga.jpg";
import jamonYqueso from "../ItemData/jamonYqueso.jpg";
import jamonYtomate from "../ItemData/jamonYtomate.jpg";
import jamonYzanahoria from "../ItemData/jamonYzanahoria.jpg";
import quesoYcantinpalo from "../ItemData/quesoYcantinpalo.jpg";
import quesoYmortadela from "../ItemData/quesoYmortadela.jpg";
import quesoYpate from "../ItemData/quesoYpate.jpg";

const ItemData=[

  {
    id: "SS1",
    title: "Sanguches Simples",
    descripcion: "24 x Jamón y Queso",
    price: "2200",
    cantidad: "20",
    destacado: true,
    imagen: simples,
    tag: "Simples",
  },
  {
    id: "SS2",
    title: "Sanguches Triples",
    descripcion: "24 x Surtidos Triples",
    price: "2800",
    cantidad: "13",
    destacado: true,
    imagen: triples,
    tag: "Triples",
  },
  {
    id: "ST1",
    title: "Sanguches Triples",
    descripcion: "48 x Surtidos Triples",
    price: "5000",
    cantidad: "13",
    destacado: true,
    imagen: triples,
    tag: "Triples",
  },
  {
    id: "ST2",
    title: "Sanguche Triple",
    descripcion: "100 x Surtidos Triples",
    price: "7000",
    cantidad: "6",
    destacado: false,
    imagen: triples,
    tag:"Triples",
  },
  {
    id: "C1",
    title: "Combo nº1",
    descripcion: "24 Triples Surtidos + gaseosa",
    price: "2350",
    cantidad: "10",
    destacado: false,
    imagen: combos,
    tag: "Combos",
  },
  {
    id: "C2",
    title: "Combo nº2",
    descripcion: "50 Triples Surtidos + gaseosa",
    price: "5200",
    cantidad: "10",
    destacado: false,
    imagen: combos,
    tag: "Combos",
  },
  {
    id: "C3",
    title: "Combo nº3",
    descripcion: "100 Triples Surtidos + 2 gaseosas + 1 docena de muffins",
    price: "8500",
    cantidad: "10",
    destacado: true,
    imagen: combos,
    tag: "Combos",
  },
  {
    id: "P1",
    title: "Postre nº1",
    descripcion: "Media docena de Muffins",
    price: "1000",
    cantidad: "7",
    destacado: false,
    imagen: muffin,
    tag: "Postres",
  },
  {
    id: "P2",
    title: "Postre nº2",
    descripcion: "Alfajores de maicena x6",
    price: "600",
    cantidad: "20",
    destacado: false,
    imagen: Malfajor,
    tag: "Postres",
  },
  {
    id: "P3",
    title: "Postre nº3",
    descripcion: "Alfajores de chocolate x4",
    price: "200",
    cantidad: "16",
    destacado: false,
    imagen: alfajor,
    tag: "Postres",
  },
  {
    id: "jCyQ",
    title: "Jamón Crudo y Queso",
    imagen: jamonCrudoYqueso,
    sabor: true,
  },
  {
    id: "jYc",
    title: "Jamón y Choclo",
    imagen: jamonYchoclo,
    sabor: true,
  },
  {
    id: "jYh",
    title: "Jamón y Huevo",
    imagen: jamonYhuevo,
    sabor: true,
  },
  {
    id: "jYl",
    title: "Jamón y Lechuga",
    imagen: jamonYlechuga,
    sabor: true,
  },
  {
    id: "jYq",
    title: "Jamón y Queso",
    imagen: jamonYqueso,
    sabor: true,
  },
  {
    id: "jYt",
    title: "Jamón y Tomate",
    imagen: jamonYtomate,
    sabor: true,
  },
  {
    id: "jYz",
    title: "Jamón y Zanahoria",
    imagen: jamonYzanahoria,
    sabor: true,
  },
  {
    id: "qYc",
    title: "Queso y Cantinpalo",
    imagen: quesoYcantinpalo,
    sabor: true,
  },
  {
    id: "qYm",
    title: "Queso y Mortadela",
    imagen: quesoYmortadela,
    sabor: true,
  },
  {
    id: "qYp",
    title: "Queso y Pate",
    imagen: quesoYpate,
    sabor: true,
  },
];

export default ItemData;
 
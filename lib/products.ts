export interface Product {
  id: number;
  name: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  image: string;
  features: string[];
  price: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Matafuego ABC 1kg",
    slug: "matafuego-1kg",
    shortDesc: "Compacto y liviano, ideal para vehiculos y espacios reducidos.",
    fullDesc:
      "Matafuego de polvo quimico ABC de 1kg, perfecto para vehiculos, motos y espacios pequenos. Cumple con todas las normativas vigentes. Marcas Drago y Norbeo disponibles.",
    category: "Vehicular",
    image: "/images/matafuego-1kg.jpg",
    features: [
      "Capacidad: 1kg",
      "Tipo: Polvo quimico ABC",
      "Ideal para vehiculos",
      "Certificado IRAM",
      "Incluye soporte",
      "Garantia de fabrica",
    ],
    price: "Consultar",
  },
  {
    id: 2,
    name: "Inflador de Neumaticos CO2",
    slug: "inflador-co2",
    shortDesc: "Inflador portatil de CO2 marca Drago para emergencias.",
    fullDesc:
      "Inflador de neumaticos a base de CO2 marca Drago. Compacto y facil de usar, ideal para llevar en el vehiculo ante emergencias de pinchadura.",
    category: "Accesorios",
    image: "/images/inflador-co2.jpg",
    features: [
      "Gas: CO2",
      "Marca: Drago",
      "Portatil y compacto",
      "Facil de usar",
      "Ideal para emergencias",
      "Industria argentina",
    ],
    price: "Consultar",
  },
  {
    id: 3,
    name: "Funda Soporte para Matafuego 1kg",
    slug: "funda-soporte",
    shortDesc: "Soporte de alta gama para matafuego de 1kg modelo balon.",
    fullDesc:
      "Funda soporte linea alta gama modelo balon para matafuegos de 1kg. Producto patentado de industria argentina. Facil instalacion y maxima seguridad.",
    category: "Accesorios",
    image: "/images/funda-soporte.jpg",
    features: [
      "Para matafuegos de 1kg",
      "Modelo balon",
      "Linea alta gama",
      "Producto patentado",
      "Facil instalacion",
      "Industria argentina",
    ],
    price: "Consultar",
  },
  {
    id: 4,
    name: "Chapa Baliza de Alto Impacto",
    slug: "chapa-baliza",
    shortDesc: "Senalizacion reglamentaria para ubicacion de matafuegos.",
    fullDesc:
      "Chapa baliza de alto impacto con senalizacion ABC para indicar ubicacion de matafuegos. Incluye espacio para numero de puesto de incendio. Apta para instalaciones electricas.",
    category: "Senaletica",
    image: "/images/chapa-baliza.jpg",
    features: [
      "Alto impacto",
      "Senalizacion ABC",
      "Incluye numero de puesto",
      "Apta instalaciones electricas",
      "Segun normativa vigente",
      "Facil instalacion",
    ],
    price: "Consultar",
  },
  {
    id: 5,
    name: "Matafuego Aluminio ABC 5kg",
    slug: "matafuego-aluminio-5kg",
    shortDesc: "Matafuego de aluminio liviano con maxima capacidad extintora.",
    fullDesc:
      "Matafuego de polvo quimico ABC de 5kg en cuerpo de aluminio marca Drago. Mas liviano que el convencional, ideal para comercios y oficinas. Certificado IRAM.",
    category: "Comercial",
    image: "/images/matafuego-aluminio-5kg.jpg",
    features: [
      "Capacidad: 5kg",
      "Cuerpo de aluminio",
      "Tipo: Polvo quimico ABC",
      "Marca: Drago",
      "Certificado IRAM",
      "Mas liviano",
    ],
    price: "Consultar",
  },
  {
    id: 6,
    name: "Matafuego ABC 5kg",
    slug: "matafuego-5kg",
    shortDesc: "Matafuego estandar de 5kg para comercios y hogares.",
    fullDesc:
      "Matafuego de polvo quimico ABC de 5kg marca Norbeo. El mas utilizado en comercios, oficinas y hogares. Cumple normativa IRAM y certificacion vigente.",
    category: "Comercial",
    image: "/images/matafuego-5kg.jpg",
    features: [
      "Capacidad: 5kg",
      "Tipo: Polvo quimico ABC",
      "Marca: Norbeo",
      "Certificado IRAM",
      "Ideal comercios",
      "Garantia de fabrica",
    ],
    price: "Consultar",
  },
  {
    id: 7,
    name: "Matafuego ABC 10kg",
    slug: "matafuego-10kg",
    shortDesc: "Maxima capacidad para industrias y grandes superficies.",
    fullDesc:
      "Matafuego de polvo quimico ABC de 10kg marca Norbeo. Ideal para industrias, depositos y grandes superficies comerciales. Maxima capacidad extintora con certificacion IRAM.",
    category: "Industrial",
    image: "/images/matafuego-10kg.jpg",
    features: [
      "Capacidad: 10kg",
      "Tipo: Polvo quimico ABC",
      "Marca: Norbeo",
      "Certificado IRAM",
      "Uso industrial",
      "Maxima capacidad",
    ],
    price: "Consultar",
  },
  {
    id: 8,
    name: "Matafuegos Polvo Quimico",
    slug: "matafuegos-polvo-quimico",
    shortDesc: "Variedad de matafuegos ABC en diferentes capacidades.",
    fullDesc:
      "Linea completa de matafuegos de polvo quimico ABC en capacidades de 2.5kg, 5kg y 10kg. Marcas Drago y Norbeo. Todos certificados IRAM. Consultanos por el que mejor se adapte a tu necesidad.",
    category: "Variedad",
    image: "/images/matafuegos-polvo-quimico.jpg",
    features: [
      "Capacidades: 2.5kg, 5kg, 10kg",
      "Tipo: Polvo quimico ABC",
      "Marcas: Drago y Norbeo",
      "Certificados IRAM",
      "Para todo uso",
      "Asesoramiento incluido",
    ],
    price: "Consultar",
  },
];

export const categories = [
  "Todos",
  "Vehicular",
  "Comercial",
  "Industrial",
  "Accesorios",
  "Senaletica",
  "Variedad",
];
export * from "@/lib/products";

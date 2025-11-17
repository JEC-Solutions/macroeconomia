export interface ProductImage {
  id: string;
  name: string;
  imageUrl: string;
}

export const PRODUCT_IMAGES: Record<
  any,
  Partial<
    Record<
      number,
      {
        imports: ProductImage[];
        exports: ProductImage[];
      }
    >
  >
> = {
  colombia_ecuador: {
    2014: {
      imports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2015: {
      imports: [
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2016: {
      imports: [
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "madera",
          name: "Madera y artículos de madera; carbón vegetal",
          imageUrl: "/images/maderas.jpg",
        },
      ],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2017: {
      imports: [
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "madera",
          name: "Madera y artículos de madera; carbón vegetal",
          imageUrl: "/images/maderas.jpg",
        },
      ],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2018: {
      imports: [
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "madera",
          name: "Madera y artículos de madera; carbón vegetal",
          imageUrl: "/images/maderas.jpg",
        },
      ],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2019: {
      imports: [
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "madera",
          name: "Madera y artículos de madera; carbón vegetal",
          imageUrl: "/images/maderas.jpg",
        },
      ],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2020: {
      imports: [
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "madera",
          name: "Madera y artículos de madera; carbón vegetal",
          imageUrl: "/images/maderas.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2021: {
      imports: [
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "madera",
          name: "Madera y artículos de madera; carbón vegetal",
          imageUrl: "/images/maderas.jpg",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
      ],
    },
    2022: {
      imports: [
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "madera",
          name: "Madera y artículos de madera; carbón vegetal",
          imageUrl: "/images/maderas.jpg",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2023: {
      imports: [
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "madera",
          name: "Madera y artículos de madera; carbón vegetal",
          imageUrl: "/images/maderas.jpg",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2024: {
      imports: [
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "madera",
          name: "Madera y artículos de madera; carbón vegetal",
          imageUrl: "/images/maderas.jpg",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
  },
  "colombia-brasil": {
    2014: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
        {
          id: "hierro",
          name: "Fundicion, hierro y acero",
          imageUrl: "/images/hierro.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "quimico",
          name: "Productos diversos de las industrias químicas",
          imageUrl: "/images/quimicos.jpg",
        },
      ],
    },
    2015: {
      imports: [
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "hierro",
          name: "Fundicion, hierro y acero",
          imageUrl: "/images/hierro.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "quimico",
          name: "Productos diversos de las industrias químicas",
          imageUrl: "/images/quimicos.jpg",
        },
      ],
    },
    2016: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "quimico",
          name: "Productos diversos de las industrias químicas",
          imageUrl: "/images/quimicos.jpg",
        },
      ],
    },
    2017: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "quimico",
          name: "Productos diversos de las industrias químicas",
          imageUrl: "/images/quimicos.jpg",
        },
      ],
    },
    2018: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "hierro",
          name: "Fundicion, hierro y acero",
          imageUrl: "/images/hierro.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
    },
    2019: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
        {
          id: "hierro",
          name: "Fundicion, hierro y acero",
          imageUrl: "/images/hierro.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "quimico",
          name: "Productos diversos de las industrias químicas",
          imageUrl: "/images/quimicos.jpg",
        },
      ],
    },
    2020: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "quimico",
          name: "Productos diversos de las industrias químicas",
          imageUrl: "/images/quimicos.jpg",
        },
      ],
    },
    2021: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
    },
    2022: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "cereal",
          name: "Cereales",
          imageUrl: "/images/cereal.avif",
        },
        {
          id: "quimico",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/quimicos.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
    },
    2023: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "cereal",
          name: "Cereales",
          imageUrl: "/images/cereal.avif",
        },
        {
          id: "hierba",
          name: "Café, té, yerba mate y especias",
          imageUrl: "/images/hierbas.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "quimico",
          name: "Productos diversos de las industrias químicas",
          imageUrl: "/images/quimicos.jpg",
        },
      ],
    },
    2024: {
      imports: [
        {
          id: "tractor",
          name: "Vehículos automóviles, tractores, velocípedos y demás vehículos terrestres, sus partes y accesorios",
          imageUrl: "/images/tractor.avif",
        },
        {
          id: "quimico",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/quimicos.jpg",
        },
        {
          id: "rediuo",
          name: "Residuos y desperdicios de las industrias alimentarias; alimentos preparados para animales",
          imageUrl: "/images/residuos.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "quimico",
          name: "Productos diversos de las industrias químicas",
          imageUrl: "/images/quimicos.jpg",
        },
      ],
    },
  },
  "colombia-peru": {
    2014: {
      imports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
      ],
    },
    2015: {
      imports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
      ],
    },
    2016: {
      imports: [
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "zinc",
          name: "Zinc y sus manufaturas",
          imageUrl: "/images/zinc.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
      ],
    },
    2017: {
      imports: [
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "zinc",
          name: "Zinc y sus manufaturas",
          imageUrl: "/images/zinc.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "dulce",
          name: "Azúcares y confitería",
          imageUrl: "/images/dulce.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2018: {
      imports: [
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "zinc",
          name: "Zinc y sus manufaturas",
          imageUrl: "/images/zinc.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
      ],
    },
    2019: {
      imports: [
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "dulce",
          name: "Azúcares y confitería",
          imageUrl: "/images/dulce.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2020: {
      imports: [
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "dulce",
          name: "Azúcares y confitería",
          imageUrl: "/images/dulce.avif",
        },
      ],
    },
    2021: {
      imports: [
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "zinc",
          name: "Zinc y sus manufaturas",
          imageUrl: "/images/zinc.jpg",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
      ],
    },
    2022: {
      imports: [
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "zinc",
          name: "Zinc y sus manufaturas",
          imageUrl: "/images/zinc.jpg",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
      ],
    },
    2023: {
      imports: [
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "cereal",
          name: "Preparaciones de cereal, harina y almidón",
          imageUrl: "/images/cereal.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2024: {
      imports: [
        {
          id: "cobre",
          name: "Cobre y sus manufacturas",
          imageUrl: "/images/cobre.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "tejido",
          name: "Tejido de punto.",
          imageUrl: "/images/tejido.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "aceite",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
  },
  "colombia-panama": {
    2014: {
      imports: [
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
        {
          id: "barco",
          name: "Barcos, embarcaciones y estructuras flotantes",
          imageUrl: "/images/barco.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceutico.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2015: {
      imports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "barco",
          name: "Barcos, embarcaciones y estructuras flotantes",
          imageUrl: "/images/barco.avif",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "electrico",
          name: "Maquinaria y equipo eléctrico y sus partes; grabadoras y reproductores de sonido, televisores...",
          imageUrl: "/images/electrico.avif",
        },
      ],
    },
    2016: {
      imports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "licor",
          name: "Bebidas, licores y vinagre",
          imageUrl: "/images/licor.avif",
        },
        {
          id: "perfume",
          name: "Aceites esenciales y resinoides; preparaciones de perfumería, cosmética o tocador",
          imageUrl: "/images/perfume.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "mueble",
          name: "Muebles; ropa de cama, colchones, bases de colchón, cojines y demás artículos tapizados",
          imageUrl: "/images/muebles.jpg",
        },
      ],
    },
    2017: {
      imports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "licor",
          name: "Bebidas, licores y vinagre",
          imageUrl: "/images/licor.avif",
        },
        {
          id: "perfume",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2018: {
      imports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "nave",
          name: "Aeronaves, naves espaciales y sus partes.",
          imageUrl: "/images/naves.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2019: {
      imports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "nave",
          name: "Aeronaves, naves espaciales y sus partes.",
          imageUrl: "/images/naves.jpg",
        },
        {
          id: "licor",
          name: "Bebidas, licores y vinagre",
          imageUrl: "/images/licor.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2020: {
      imports: [
        {
          id: "licor",
          name: "Bebidas, licores y vinagre",
          imageUrl: "/images/licor.avif",
        },
        {
          id: "nave",
          name: "Aeronaves, naves espaciales y sus partes.",
          imageUrl: "/images/naves.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2021: {
      imports: [
        {
          id: "hierro",
          name: "Hierro y Acero",
          imageUrl: "/images/hierro.avif",
        },
        {
          id: "nave",
          name: "Aeronaves, naves espaciales y sus partes.",
          imageUrl: "/images/naves.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2022: {
      imports: [
        {
          id: "hierro",
          name: "Hierro y Acero",
          imageUrl: "/images/hierro.avif",
        },
        {
          id: "nave",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "electrico",
          name: "Maquinaria y equipo eléctrico y sus partes; grabadoras y reproductores de sonido, televisores...",
          imageUrl: "/images/electrico.avif",
        },
      ],
    },
    2023: {
      imports: [
        {
          id: "hierro",
          name: "Hierro y Acero",
          imageUrl: "/images/hierro.avif",
        },
        {
          id: "farmaceuticos",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "aluminio",
          name: "Aluminio y sus manufacturas",
          imageUrl: "/images/aluminio.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "mueble",
          name: "Muebles; ropa de cama, colchones, bases de colchón, cojines y demás artículos tapizados",
          imageUrl: "/images/muebles.jpg",
        },
      ],
    },
    2024: {
      imports: [
        {
          id: "hierro",
          name: "Hierro y Acero",
          imageUrl: "/images/hierro.avif",
        },
        {
          id: "farmaceuticos",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
      ],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "tv",
          name: "Televisores",
          imageUrl: "/images/tv.avif",
        },
      ],
    },
  },
  "colombia-venezuela": {
    2014: {
      imports: [
        {
          id: "organico",
          name: "Productos quimicos organicos",
          imageUrl: "/images/organico.avif",
        },
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
      ],
      exports: [
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
        {
          id: "azucar",
          name: "Azúcares y artículos de confitería",
          imageUrl: "/images/azucar.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2015: {
      imports: [
        {
          id: "organico",
          name: "Productos quimicos organicos",
          imageUrl: "/images/organico.avif",
        },
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.avif",
        },
      ],
      exports: [
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.avif",
        },
        {
          id: "farmaceutico",
          name: "Productos farmacéuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
      ],
    },
    2016: {
      imports: [
        {
          id: "hierro",
          name: "Fundicion hierro y acero",
          imageUrl: "/images/hierro.jpg",
        },
        {
          id: "organico",
          name: "Productos quimicos organicos",
          imageUrl: "/images/organico.avif",
        },
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
      ],
      exports: [
        {
          id: "azucar",
          name: "Azúcares y artículos de confitería",
          imageUrl: "/images/azucar.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
      ],
    },
    2017: {
      imports: [
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
        {
          id: "plastico",
          name: "Plástico y sus manufacturas",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aluminio",
          name: "Aluminio y sus manufacturs",
          imageUrl: "/images/aluminio.avif",
        },
      ],
      exports: [
        {
          id: "azucar",
          name: "Azúcares y artículos de confitería",
          imageUrl: "/images/azucar.avif",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.jpg",
        },
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
      ],
    },
    2018: {
      imports: [
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
        {
          id: "inorganico",
          name: "Productos químicos inorgánicos; compuestos inorgánicos u orgánicos de metal precioso, de elementos radiactivos, de metales de las tierras raras o de isótopos",
          imageUrl: "/images/inorganico.avif",
        },
        {
          id: "aluminio",
          name: "Aluminio y sus manufacturs",
          imageUrl: "/images/aluminio.avif",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          imageUrl: "/images/combustible_mineral.jpg",
        },
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
      ],
    },
    2019: {
      imports: [
        {
          id: "plastico",
          name: "Plástico y sus manufacturas",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "hierro",
          name: "Fundicion hierro y acero",
          imageUrl: "/images/hierro.jpg",
        },
        {
          id: "aluminio",
          name: "Aluminio y sus manufacturs",
          imageUrl: "/images/aluminio.avif",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceites",
          name: "grasas y aceites animales, vegetales o microbianos y sus productos de descenso; grasas alimentarias preparadas; ceras animales o vegetales",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "electrodomestico",
          name: "Máquinas, aparatos y material eléctrico, y sus partes; aparatos de grabación o reproducción de sonido, aparatos de grabación o reproducción de imagen y sonido en televisión, y las partes y accesorios de estos aparatos",
          imageUrl: "/images/electrodomestico.jpg",
        },
      ],
    },
    2020: {
      imports: [
        {
          id: "hilo",
          name: "Guata, fieltro y tela sin tejer; hilados especiales; cordeles, cuerdas y cordajes; artículos de cordelería",
          imageUrl: "/images/hilo.avif",
        },
        {
          id: "electrodomestico",
          name: "Máquinas, aparatos y material eléctrico, y sus partes; aparatos de grabación o reproducción de sonido, aparatos de grabación o reproducción de imagen y sonido en televisión, y las partes y accesorios de estos aparatos",
          imageUrl: "/images/electrodomestico.jpg",
        },
        {
          id: "alogodon",
          name: "Algodon",
          imageUrl: "/images/algodon.avif",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceites",
          name: "grasas y aceites animales, vegetales o microbianos y sus productos de descenso; grasas alimentarias preparadas; ceras animales o vegetales",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "electrodomestico",
          name: "Máquinas, aparatos y material eléctrico, y sus partes; aparatos de grabación o reproducción de sonido, aparatos de grabación o reproducción de imagen y sonido en televisión, y las partes y accesorios de estos aparatos",
          imageUrl: "/images/electrodomestico.jpg",
        },
      ],
    },
    2021: {
      imports: [
        {
          id: "hierro",
          name: "Fundicion hierro y acero",
          imageUrl: "/images/hierro.jpg",
        },
        {
          id: "electrodomestico",
          name: "Máquinas, aparatos y material eléctrico, y sus partes; aparatos de grabación o reproducción de sonido, aparatos de grabación o reproducción de imagen y sonido en televisión, y las partes y accesorios de estos aparatos",
          imageUrl: "/images/electrodomestico.jpg",
        },
        {
          id: "sal",
          name: "Sal; azufre; tierras y piedras; yesos, cales y cementos",
          imageUrl: "/images/sal.avif",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceites",
          name: "grasas y aceites animales, vegetales o microbianos y sus productos de descenso; grasas alimentarias preparadas; ceras animales o vegetales",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "azucar",
          name: "Azúcares y artículos de confitería",
          imageUrl: "/images/azucar.jpg",
        },
      ],
    },
    2022: {
      imports: [
        {
          id: "organico",
          name: "Productos quimicos organicos",
          imageUrl: "/images/organico.avif",
        },
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
        {
          id: "sal",
          name: "Sal; azufre; tierras y piedras; yesos, cales y cementos",
          imageUrl: "/images/sal.avif",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceites",
          name: "grasas y aceites animales, vegetales o microbianos y sus productos de descenso; grasas alimentarias preparadas; ceras animales o vegetales",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "azucar",
          name: "Azúcares y artículos de confitería",
          imageUrl: "/images/azucar.jpg",
        },
      ],
    },
    2023: {
      imports: [
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
        {
          id: "hierro",
          name: "Fundicion hierro y acero",
          imageUrl: "/images/hierro.jpg",
        },
        {
          id: "electrodomestico",
          name: "Máquinas, aparatos y material eléctrico, y sus partes; aparatos de grabación o reproducción de sonido, aparatos de grabación o reproducción de imagen y sonido en televisión, y las partes y accesorios de estos aparatos",
          imageUrl: "/images/electrodomestico.jpg",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "aceites",
          name: "grasas y aceites animales, vegetales o microbianos y sus productos de descenso; grasas alimentarias preparadas; ceras animales o vegetales",
          imageUrl: "/images/aceites.jpg",
        },
        {
          id: "azucar",
          name: "Azúcares y artículos de confitería",
          imageUrl: "/images/azucar.jpg",
        },
      ],
    },
    2024: {
      imports: [
        {
          id: "hierro",
          name: "Fundicion hierro y acero",
          imageUrl: "/images/hierro.jpg",
        },
        {
          id: "abono",
          name: "Abonos",
          imageUrl: "/images/abono.avif",
        },
        {
          id: "electrodomestico",
          name: "Máquinas, aparatos y material eléctrico, y sus partes; aparatos de grabación o reproducción de sonido, aparatos de grabación o reproducción de imagen y sonido en televisión, y las partes y accesorios de estos aparatos",
          imageUrl: "/images/electrodomestico.jpg",
        },
      ],
      exports: [
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "reactor",
          name: "Reactores nucleares, calderas, máquinas, aparatos y artefactos mecánicos; partes de estas máquinas o aparatos",
          imageUrl: "/images/reactor.jpg",
        },
        {
          id: "azucar",
          name: "Azúcares y artículos de confitería",
          imageUrl: "/images/azucar.jpg",
        },
      ],
    },
  },
  norte_santander_venezuela: {
    2020: {
      imports: [
        {
          id: "coco",
          name: "Con la cáscara interna (endocarpio);",
          imageUrl: "/images/coco.jpg",
        },
        {
          id: "desecho",
          name: "Desechos, recortes y desperdicios, de polímeros de etileno.",
          imageUrl: "/images/desechos.avif",
        },
        {
          id: "almendra",
          name: "Aceites de almendra de palma y sus fracciones, en bruto.",
          imageUrl: "/images/almendra.avif",
        },
      ],
      exports: [
        {
          id: "costal",
          name: "Los demás sacos (bolsas) y talegas, de tiras o formas similares, para envasar, de polipropileno.",
          imageUrl: "/images/costal.jpg",
        },
        {
          id: "blanco",
          name: "Los demás artículos de confitería sin cacao (incluido el chocolate blanco).",
          imageUrl: "/images/blanco.avif",
        },
        {
          id: "jabones",
          name: "Jabones y  preparaciones orgánicos tensoactivos, en barras, panes o trozos, o en piezas troqueladas o moldeadas.",
          imageUrl: "/images/jabones.avif",
        },
      ],
    },
    2021: {
      imports: [
        {
          id: "coco",
          name: "Con la cáscara interna (endocarpio);",
          imageUrl: "/images/coco.jpg",
        },
        {
          id: "desecho",
          name: "Desechos, recortes y desperdicios, de polímeros de etileno.",
          imageUrl: "/images/desechos.avif",
        },
        {
          id: "plastica",
          name: "Los demás artículos para el transporte o envasado, de plástico.",
          imageUrl: "/images/botella_plastica.avif",
        },
      ],
      exports: [
        {
          id: "palma",
          name: "Los demás aceites de palma y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          imageUrl: "/images/palma.avif",
        },
        {
          id: "costal",
          name: "Los demás sacos (bolsas) y talegas, de tiras o formas similares, para envasar, de polipropileno.",
          imageUrl: "/images/costal.jpg",
        },
        {
          id: "shampoo",
          name: "Champues para el cabello.",
          imageUrl: "/images/shampoo.jpg",
        },
      ],
    },
    2022: {
      imports: [
        {
          id: "coco",
          name: "Con la cáscara interna (endocarpio);",
          imageUrl: "/images/coco.jpg",
        },
        {
          id: "alambre",
          name: "Los demás alambrones de hierro o acero sin alear; de sección circular con diámetro inferior a 14 mm; con un contenido de cromo, niquel, cobre y molibdeno inferior a 0,12% en total; con un contenido d",
          imageUrl: "/images/alambre.avif",
        },
        {
          id: "plastica",
          name: "Los demás artículos para el transporte o envasado, de plástico.",
          imageUrl: "/images/botella_plastica.avif",
        },
      ],
      exports: [
        {
          id: "palma",
          name: "Los demás aceites de palma y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          imageUrl: "/images/palma.avif",
        },
        {
          id: "soja",
          name: "Los demás aceites de soja (soya) y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          imageUrl: "/images/soja.avif",
        },
        {
          id: "shampoo",
          name: "Champues para el cabello.",
          imageUrl: "/images/shampoo.jpg",
        },
      ],
    },
    2023: {
      imports: [
        {
          id: "hulla",
          name: "Hullas térmicas.",
          imageUrl: "/images/hulla.jpg",
        },
        {
          id: "hulla_bi",
          name: "Las demás hullas bituminosas.",
          imageUrl: "/images/hullas_bitu.jpg",
        },
        {
          id: "almendra",
          name: "Aceites de almendra de palma y sus fracciones, en bruto.",
          imageUrl: "/images/almendra.avif",
        },
      ],
      exports: [
        {
          id: "palma",
          name: "Los demás aceites de palma y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          imageUrl: "/images/palma.avif",
        },
        {
          id: "galleta",
          name: "Galletas dulces (con adición de edulcorante).",
          imageUrl: "/images/galletas.avif",
        },
        {
          id: "desodorante",
          name: "Desodorantes corporales y antitranspirantes.",
          imageUrl: "/images/desodorante.avif",
        },
      ],
    },
    2024: {
      imports: [
        {
          id: "hulla_bi",
          name: "Las demás hullas bituminosas.",
          imageUrl: "/images/hullas_bitu.jpg",
        },
        {
          id: "almendra",
          name: "Aceites de almendra de palma y sus fracciones, en bruto.",
          imageUrl: "/images/almendra.avif",
        },
         {
          id: "alambre",
          name: "Los demás alambrones de hierro o acero sin alear; de sección circular con diámetro inferior a 14 mm; con un contenido de cromo, niquel, cobre y molibdeno inferior a 0,12% en total; con un contenido d",
          imageUrl: "/images/alambre.avif",
        },
      ],
      exports: [
        {
          id: "soja",
          name: "Los demás aceites de soja (soya) y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          imageUrl: "/images/soja.avif",
        },
        {
          id: "papas",
          name: "Papas (patatas), preparadas o conservadas (excepto en vinagre o en ácido acético), sin congelar.",
          imageUrl: "/images/papas.jpg",
        },
        {
          id: "desodorante",
          name: "Desodorantes corporales y antitranspirantes.",
          imageUrl: "/images/desodorante.avif",
        },
      ],
    },
  },
};

export type homePageList = {
  qty: number;
  heading: string;
  types: string[];
  description: string;
  image: string;
  className ?: string;
};

export const homePageLists: homePageList[] = [
  {
    qty: 1500,
    heading: "Chairs",
    image: "/chair.png",
    className: "row-span-2",
    description: "Choose among wide range of chairs",
    types: [
      "Gaming Chair",
      "Lounge Chair",
      "Folding Chair",
      "Dining Chair",
      "Office Chair",
      "Armchair",
      "Bar Stool",
      "Club Chair",
    ],
  },

  {
    qty: 750,
    heading: "Sofa",
    image: "/sofa.png",
    description: "Premium sofa range.",
    types: [
      "Reception Chair",
      "Sectional Sofa",
      "Armless Sofa",
      "Curved Sofa",
    ],
  },
  {
    qty: 450,
    heading: "Lighting",
    image: "/light.png",
    description: "Lighting to light your life.",
    types: [
      "Table Lights",
      "Floor Lights",
      "Ceiling Lights",
      "Wall Lights",
    ],
  },
];

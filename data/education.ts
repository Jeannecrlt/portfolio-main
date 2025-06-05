export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

const education: Education[] = [
  {
    id: 1,
    degree: "MS in Material Science and Engineering, Minor in Integrated Design",
    institution: "Ecole Polytechnique Fédérale de Lausanne",
    period: "Sept 2023 – June 2025",
    details: [
      "Coursework: Soft Matter, Fracture mechanics, Solid state physics, Semi-conductor, Advanced electron microscopy, Nanomaterials",
      "Semester project: Sustainable Material Laboratory - Study on innovative packaging using sustainable materials"
    ]
  },
  {
    id: 2,
    degree: "BS in Material Science and Engineering",
    institution: "Ecole Polytechnique Fédérale de Lausanne",
    period: "Sept 2019 – June 2023",
    details: [
      "Coursework: Polymer, metallurgy, composite, ceramic, construction materials technology",
      "Semester Project: Paul Scherrer Institute and EPFL + ECAL lab - Project on the synthesis, characterisation of hydroxyapatite filter for the construction and design of a porous ceramic coffee filter."
    ]
  }
];

export default education; 
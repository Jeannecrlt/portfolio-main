export interface SkillCategory {
  id: number;
  category: string;
  skills: string[];
}

const skills: SkillCategory[] = [
  {
    id: 1,
    category: "Core Competencies",
    skills: [
      "Experimental Laboratory Research",
      "Project Management",
      "Group Work",
      "Software-based Simulation",
      "Data Analysis",
      "Scientific Report Writing",
      "Problem Solving"
    ]
  },
  {
    id: 2,
    category: "Languages",
    skills: ["Python", "R", "LaTeX"]
  },
  {
    id: 3,
    category: "Technologies",
    skills: [
      "Suite Office",
      "Suite Adobe",
      "Abaqus",
      "Catia V5",
      "STAN",
      "ThermoCalc",
      "Rhino",
      "OpenLCA"
    ]
  }
];

export default skills; 
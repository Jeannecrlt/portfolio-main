export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

const experience: Experience[] = [
  {
    id: 1,
    title: "Student Assistant | Cultural animator",
    company: "EPFL Pavilions",
    location: "Lausanne",
    period: "Sept 2021 – Aug 2025",
    details: [
      "Curator of the WARPED exhibition presented by ENCOR studio. Exhibition organization, artist liaison, communication creation, and setup assistance.",
      "Welcoming exhibition vistors, conducting guided tours, assisting in exhibition setup"
    ]
  },
  {
    id: 2,
    title: "Junior Journalist Intern",
    company: "Alter",
    location: "Lausanne",
    period: "Sept 2023 – Aug 2025",
    details: [
      "Production of scientific popularization reports in laboratory."
    ]
  },
  {
    id: 3,
    title: "Intern",
    company: "Future of Materials",
    location: "Zurich",
    period: "Sept 2024 – Feb 2025",
    details: [
      "Participation in article writing for a professional platform | vulgarization of scientific publications."
    ]
  }
];

export default experience; 
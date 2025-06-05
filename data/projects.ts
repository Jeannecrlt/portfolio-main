export interface Project {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  details: string[];
  tools?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Artepoly",
    subtitle: "Art Association",
    period: "2021 - 2022",
    details: [
      "Founder and Editor in chief of a student monthly magazine that combines illustration and article writing on student life, scientific news, and campus cultural events."
    ],
    tools: ["Adobe Indesign", "Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: 2,
    title: "Artiphys",
    subtitle: "Electronic music festival based in EPFL",
    period: "2022 - 2023",
    details: [
      "Artistic Director. Creation of a graphic identity, implementation of new artistic and musical projects."
    ]
  },
  {
    id: 3,
    title: "Balélec",
    subtitle: "Music Festival",
    period: "2024",
    details: [
      "Content Creator, Videographer. Filming promotional content, promoting the festival with original ideas."
    ],
    tools: ["Adobe Premiere Pro"]
  }
];

export default projects; 
export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  bio: string;
}

const personalInfo: PersonalInfo = {
  name: "Jeanne Charlot",
  location: "Lausanne",
  email: "jeanne.charlot@epfl.ch",
  phone: "+41 78 248 46 08",
  website: "people.epfl.ch/jeanne.charlot",
  linkedin: "linkedin.com/in/jeanne-charlot-b66681206",
  bio: "I'm Jeanne, a 22 years old engineering student. Currently completing my Master of Science in Materials Science, I possess strong analytical, problem-solving, and communication skills with a proven ability to work independently and in collaborative teams. Passionate about exploring the intersection of art, education, and science through innovative materials engineering projects."
};

export default personalInfo; 
"use client";

import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import ExperienceItem from '../../components/ExperienceItem';
import { experience } from '../../data';

export default function ExperiencePage() {
  return (
    <div>
      <SectionTitle title="Work Experience" />
      <div className="space-y-8">
        {experience.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
}
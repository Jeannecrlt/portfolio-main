"use client";

import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import SkillCategory from '../../components/SkillCategory';
import { skills } from '../../data';

export default function SkillsPage() {
  return (
    <div>
      <SectionTitle title="Skills & Competencies" />
      <div className="space-y-8">
        {skills.map((category) => (
          <SkillCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
} 
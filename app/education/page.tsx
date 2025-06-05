"use client";

import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import EducationItem from '../../components/EducationItem';
import { education } from '../../data';

export default function EducationPage() {
  return (
    <div>
      <SectionTitle title="Education" />
      <div className="space-y-8">
        {education.map((edu) => (
          <EducationItem key={edu.id} education={edu} />
        ))}
      </div>
    </div>
  );
} 
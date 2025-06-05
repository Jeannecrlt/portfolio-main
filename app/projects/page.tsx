"use client";

import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import ProjectItem from '../../components/ProjectItem';
import { projects } from '../../data';

export default function ProjectsPage() {
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
} 
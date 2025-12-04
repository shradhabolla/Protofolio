import ProjectCard from './ProjectCard';
import React from "react";

const projects = [
  {
    title: "Associate Checkout Cart — Lowe's",
    timeframe: "2024 – Present",
    tech: ["React", "Redux‑Saga", "Node.js", "AWS"],
    description: "Built responsive checkout UIs and secure APIs."
  },
  {
    title: "Census Data Mapper — CSU",
    timeframe: "2022 – 2023",
    tech: ["Java", "Spring Boot", "Drupal"],
    description: "Developed data visualization dashboard with Census APIs."
  },
  {
    title: "NextGen Customer Portal — HSBC",
    timeframe: "2019 – 2021",
    tech: ["React", "Next.js", "TypeScript"],
    description: "Built PWAs and real‑time collaboration features."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-14">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="mt-6 grid gap-6">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
}
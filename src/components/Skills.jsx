import React from "react";
export default function Skills() {
  const skills = ["React", "Next.js", "Redux", "Node.js", "Express", "MongoDB", "AWS", "Cypress", "Jest"];
  return (
    <section id="skills" className="py-14">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map(s => <span key={s} className="px-3 py-1 border rounded text-sm bg-slate-50">{s}</span>)}
      </div>
    </section>
  );
}
import React from "react";
export default function ProjectCard({ title, timeframe, tech, description }) {
  return (
    <div className="p-5 border rounded hover:shadow transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-slate-500">{timeframe}</p>
      <p className="mt-3 text-slate-700">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="text-xs bg-slate-100 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
    </div>
  );
}
import React from "react";
export default function Hero() {
  return (
    <section className="py-16">
      <h1 className="text-5xl font-extrabold">Shradha Reddy</h1>
      <p className="mt-4 text-lg text-sky-500 max-w-2xl">
        Software Engineer
      </p>
      <div className="mt-6 flex gap-4 flex-wrap">
        <a href="/ShradhaReddy.pdf" className="px-4 py-2 border rounded" target="_blank">Resume</a>
        <a href="https://www.linkedin.com/in/shradha-reddy-4a83ab1ab/" className="px-4 py-2 border rounded" target="_blank">LinkedIn</a>
        <a href="https://github.com/" className="px-4 py-2 border rounded" target="_blank">GitHub</a>
      </div>
    </section>
  );
}
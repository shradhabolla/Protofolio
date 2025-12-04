import React from "react";
export default function Header() {
  return (
    <header className="py-6 border-b bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-bold">Shradha Reddy</div>
        <nav className="space-x-5 text-sm">
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
          <a
            href="/ShradhaReddy.pdf"
            target="_blank"
            className="bg-accent text-white px-3 py-1 rounded"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
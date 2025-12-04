import React from "react";
export default function Footer() {
  return (
    <footer className="text-center py-10 mt-10 border-t">
      <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Shradha Reddy — Built with React</p>
    </footer>
  );
}
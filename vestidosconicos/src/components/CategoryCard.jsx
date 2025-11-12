import React from "react";
import "./CategoryCard.css";

export default function CategoryCard({ title, icon }) {
  return (
    <div className="category-card">
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
    </div>
  );
}

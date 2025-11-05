function CategoryCard({ icon, label }) {
  return (
    <div className="category-card">
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </div>
  );
}

export default CategoryCard;

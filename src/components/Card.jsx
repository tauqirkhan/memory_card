import "../styles/card.css";

export default function Card({ name, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="image" />
      <p>{name}</p>
    </div>
  );
}

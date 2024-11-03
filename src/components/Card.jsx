import "../styles/card.css";

export default function Card({
  name,
  imageUrl,
  handleClick,
  selectedArray,
  setSelectedArray,
}) {
  return (
    <div
      className="card"
      onClick={() => handleClick(name, selectedArray, setSelectedArray)}
    >
      <img src={imageUrl} alt={name} className="image" />
      <p>{name}</p>
    </div>
  );
}

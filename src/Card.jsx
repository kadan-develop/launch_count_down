function Card({ value, attr }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <h1>{value}</h1>
      </div>
      <p>{attr.toUpperCase()}</p>
    </div>
  );
}

export default Card;

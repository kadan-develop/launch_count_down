function Card({ value, attr }) {
  return (
    <div className="cards">
      <div className="card flex">
        <div className="circle c1 position-absolute"></div>
        <div className="circle c2 position-absolute"></div>
        <h1>{value}</h1>
      </div>
      <p>{attr.toUpperCase()}</p>
    </div>
  );
}

export default Card;

function Card({ value, attr }) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <h1>{value}</h1>
        </div>
        <p>{attr}</p>
      </div>
    </>
  );
}

export default Card;

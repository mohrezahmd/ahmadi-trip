const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span style={{ marginLeft: "0.5rem" }}>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>از ${cost}</p>
          <p>{duration} روز</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;

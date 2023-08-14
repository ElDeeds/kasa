function StarRating({ rating }) {
  const starCount = 5;

  const stars = Array(starCount).fill(null).map((_, index) => (
    <span
      key={index}
      className={`star ${index < rating ? 'filled' : ''}`}
    >
      &#9733;
    </span>
  ));

  return <div className="starRating">{stars}</div>;
}

export default StarRating;

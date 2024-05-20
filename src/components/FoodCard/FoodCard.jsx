const FoodCard = ({ item }) => {
    const {name,image,price,recipe}=item
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p>Price: {price}</p>
        <p> {recipe} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

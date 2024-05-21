const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p>Price: {price}</p>
        <p> {recipe} </p>
        <div className="card-actions justify-center">
          
            <button
              to="/order/pizza"
              className="btn btn-outline text-center   uppercase mx-auto mb-6 border-0  border-b-4 mt-4 text-slate-900"
            >
              Order Now
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

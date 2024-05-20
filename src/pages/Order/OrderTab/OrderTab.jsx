import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({item}) => {
    return (
        <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 grid-cols-1">
            {item.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
    );
};

export default OrderTab;
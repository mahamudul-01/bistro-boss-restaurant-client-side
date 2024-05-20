
const PopularItem = ({item}) => {
    const {name,image,price,recipe}=item
    return (
        <div className="flex items-center justify-between ">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[105px] mr-4" src={image} alt="" />
            <div>
                <h3 className="uppercase font-semibold text-xl">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-300">$ {price}</p>
        </div>
    );
};

export default PopularItem;
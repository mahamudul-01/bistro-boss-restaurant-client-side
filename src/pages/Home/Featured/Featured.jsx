import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feturedImage from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="fetured bg-fixed  ">
            <SectionTitle
                heading={'featured item'}
                subHeading={'check it out'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-6 py-10  pb-16 text-white px-16  ">
                <div>
                    <img className="rounded-md zs-10"  src={feturedImage} alt="" />
                </div>
                <div className="w-full">
                    <h4>May 18 2024</h4>
                    <h3 className="uppercase">Where can i get some</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste perferendis sapiente corrupti quia voluptas ipsa ducimus eaque officiis ipsum.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
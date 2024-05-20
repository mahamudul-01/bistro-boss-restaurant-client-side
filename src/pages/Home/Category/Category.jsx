import categorySlide1 from "../../../assets/home/slide1.jpg";
import categorySlide2 from "../../../assets/home/slide2.jpg";
import categorySlide3 from "../../../assets/home/slide3.jpg";
import categorySlide4 from "../../../assets/home/slide4.jpg";
import categorySlide5 from "../../../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      
        <SectionTitle
        heading={"Order Online"}
        subHeading={"From 10 AM To 11 PM"}
        >
          
        </SectionTitle>
      
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded-md" src={categorySlide1} alt="" />
          <h4 className="lg:text-3xl text-xl uppercase   lg:-mt-24 -mt-14 text-center font-bold text-white lg:mr-16 mr-2">
            salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={categorySlide2} alt="" />
          <h4 className="lg:text-3xl text-xl uppercase  lg:-mt-24 -mt-14 text-center font-bold text-white lg:mr-16 mr-2">
            pizza
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={categorySlide3} alt="" />
          <h4 className="lg:text-3xl text-xl uppercase  lg:-mt-24 -mt-14 text-center font-bold text-white lg:mr-16 mr-2">
            desert
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={categorySlide4} alt="" />
          <h4 className="lg:text-3xl text-xl uppercase  lg:-mt-24 -mt-14 text-center font-bold text-white lg:mr-16 mr-2">
            cake
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-md" src={categorySlide5} alt="" />
          <h4 className="lg:text-3xl text-xl uppercase lg:-mt-24 -mt-14 text-center font-bold text-white lg:mr-16 mr-2">
            salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

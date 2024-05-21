import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg";
// import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";

import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  console.log(menu);

  const soup=menu.filter(item=> item.category==='soup')
  const salad=menu.filter(item=> item.category==='salad')
  const pizza=menu.filter(item=> item.category==='pizza')
  const dessert=menu.filter(item=> item.category==='dessert')
  const offered=menu.filter(item=> item.category==='offered')
  


  return (
    <div>
      <div>
        <Helmet>
          <title>Bistro Boss | Menu</title>
        </Helmet>
      </div>
      <Cover
        img={menuCover}
        title={"our menu"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta ullam magnam nam esse distinctio nulla eius hic vitae sunt."
        }
      ></Cover>
      <SectionTitle
      heading={'todays offer'}
      subHeading={'lets try our offer items'}
      
      >

      </SectionTitle>


      <MenuCategory items={offered}> </MenuCategory>

      {/* desert */}
      <Cover
        img={desertImg}
        title={"desert"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta ullam magnam nam esse distinctio nulla eius hic vitae sunt."
        }
      ></Cover>
      <SectionTitle
      heading={'desert items'}
      subHeading={'Supper Desert Items'}
      
      >

      </SectionTitle>
      <MenuCategory items={dessert}> </MenuCategory>
      <div className=" text-center">
      <Link to='/order/dessert' className="btn btn-outline text-center   uppercase mx-auto mb-6 border-0  border-b-4 mt-4 text-slate-900">Order Now</Link>
      </div>
      {/* pizza */}
      <Cover
        img={pizzaImg}
        title={"pizza"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta ullam magnam nam esse distinctio nulla eius hic vitae sunt."
        }
      ></Cover>
      <SectionTitle
      heading={'pizza items'}
      subHeading={'Supper pizza Items'}
      
      >

      </SectionTitle>
      <MenuCategory items={pizza}> </MenuCategory>
      <div className=" text-center">
      <Link to='/order/pizza' className="btn btn-outline text-center   uppercase mx-auto mb-6 border-0  border-b-4 mt-4 text-slate-900">Order Now</Link>
      </div>
      {/* salad*/}
      <Cover
        img={saladImg}
        title={"salad"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta ullam magnam nam esse distinctio nulla eius hic vitae sunt."
        }
      ></Cover>
      <SectionTitle
      heading={'salad items'}
      subHeading={'Supper salad Items'}
      
      >

      </SectionTitle>
      <MenuCategory items={salad}> </MenuCategory>
      <div className=" text-center">
      <Link to='/order/salad' className="btn btn-outline text-center   uppercase mx-auto mb-6 border-0  border-b-4 mt-4 text-slate-900">Order Now</Link>
      </div>
      {/* soup*/}
      <Cover
        img={soupImg}
        title={"soup"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta ullam magnam nam esse distinctio nulla eius hic vitae sunt."
        }
      ></Cover>
      <SectionTitle
      heading={'soup items'}
      subHeading={'Supper soup Items'}
      
      >

      </SectionTitle>
      <MenuCategory items={soup}> </MenuCategory>
      <div className=" text-center">
      <Link to='/order/soup' className="btn btn-outline text-center   uppercase mx-auto mb-6 border-0  border-b-4 mt-4 text-slate-900">Order Now</Link>
      </div>


    </div>
  );
};

export default Menu;

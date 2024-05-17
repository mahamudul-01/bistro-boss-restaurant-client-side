import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


//import images for banner

import bannerImage1 from '../../../assets/home/01.jpg'
import bannerImage2 from '../../../assets/home/02.jpg'
import bannerImage3 from '../../../assets/home/03.png'
import bannerImage4 from '../../../assets/home/04.jpg'
import bannerImage5 from '../../../assets/home/05.png'
import bannerImage6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <div>
             <Carousel>
                <div>
                    <img className="rounded-md" src={bannerImage1} />
                     
                </div>
                <div>
                    <img  className="rounded-md"  src={bannerImage2} />
                    
                </div>
                <div>
                    <img   className="rounded-md"  src={bannerImage3} />
                    
                </div>
                <div>
                    <img  className="rounded-md"  src={bannerImage4} />
                     
                </div>
                <div>
                    <img  className="rounded-md"  src={bannerImage5} />
                    
                </div>
                <div>
                    <img  className="rounded-md"  src={bannerImage6} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
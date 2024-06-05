import Image from "next/image";
import Title from "../Title";
import ImageGallery from "../ImageGallary";
// import InfiniteSlider from "../slider/InfiniteSlider";
import SwiperSlider from "../slider/SwiperSlider";

const EventSection: React.FC = () => {
    // const renderImages = () => {
    //     const images = [];
    //     for (let i = 1; i <= 9; i++) {
    //       images.push(
    //         <div key={i} className="inline-block mr-4">
    //           <img src={`/event/${i}.png`} alt={'event'} className={`object-cover w-52 h-64"`} />
    //         </div>
    //       );
    //     }
    //     return images;
    //   };

    return (
        <div className="flex mt-20" id="event">
            {/* <div className="overflow-auto whitespace-nowrap">
                {renderImages()}
            </div> */}
            {/* <InfiniteSlider/> */}
            <SwiperSlider />
        </div>
    );
};

export default EventSection;

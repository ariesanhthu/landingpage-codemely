import Image from "next/image";
import Title from "../Title";
import ImageGallery from "../ImageGallary";
const PartnerSection: React.FC = () => {
 return(
    <div className="w-full mt-20" id='business-partners'>
        <div className="flex w-full m-5">
            <Title mainText="Đối Tác" secondaryText="Của CodeMeLy" backgroundText="partner"/>
        </div>
        <ImageGallery/>
    </div>

 );
};

export default PartnerSection;

import Link from "next/link";
import Image from "next/image";
import { describe } from "node:test";
import { FaArrowRight } from "react-icons/fa";
import Title from "../Title";
import AboutCard from "../card/AboutCard";

const AboutSection: React.FC = () => {
 return(
    <div className="w-full mb-0 pb-0 mt-20" id='about'>
        
        <div className="flex w-full m-5">
            <Title mainText="Code MeLy" secondaryText="Dự Án Cộng Đồng" backgroundText="about"/>
        </div>
    <div className="flex">

        <div className="relative">
            <div className="w-72 h-96 relative rounded-lg">
                <Image src={'/event/offline2.jpg'} alt={'offline2'} fill className="object-cover rounded-lg"/>
            </div>

            <div className="w-56 h-64 relative z-1 rounded-lg  shadow-lg left-44 bottom-[200px]">
                <Image src={'/event/offline1.jpg'} alt={'offline1'} fill className="object-cover rounded-lg"/>
            </div>
        </div>

        <div className="flex flex-col pr-10 pt-10">
            <h1 className="text-3xl font-bold text-nowrap flex justify-end pr-20">GIỚI THIỆU VỀ CỘNG ĐỒNG CHÚNG MÌNH</h1>
            <ul className="pl-60 list-disc list-list-outside ms-5 p-5 text-wrap flex flex-col gap-5">
                <li>
                    Code Mely là tổ chức phi lợi nhuận, được thành lập với mục tiêu xây dựng một cộng đồng IT Gen Z năng động, tài năng và sáng tạo với màu sắc Gen Z, IT, Nữ IT.
                </li>
                <li>
                    Trên thực tế, Code MeLy đã và đang thực hiện sáng tạo các cuộc thi, sân chơi chất lượng có quy mô rộng để kết nối, phát triển kiến thức, kinh nghiệm cho các lập trình viên
                </li>
                <li>
                    Cung cấp nguồn nhân lực chất lượng cao cho các dự án CNTT trên phạm vi trong và ngoài nước. Code MeLy tự hào là điểm khởi đầu của nhiều tài năng trẻ thế hệ mới - GENZ, đặc biệt là các "Nữ IT".
                </li>
            </ul>
        </div>
    </div>

        <div className="flex gap-10 justify-center p-0 m-0 z-5">
            <AboutCard title="Tầm nhìn" imageUrl="about/about_1.png" content={["Là cộng đồng IT có sức ảnh hưởng và chất lượng hàng đầu ở Việt Nam.", 
                                                                                "Phát huy sức mạnh cá nhân trong cộng đồng."]}/>
            <AboutCard title="Sứ mệnh" imageUrl="about/about_2.png" content={["Kết nối sinh viên, học sinh yêu thích và đam mê CNTT.", 
                                                                                "Xây dựng môi trường học tập trẻ trung, năng động.", 
                                                                                "Giúp các bạn trẻ phát triển những kiến thức, kỹ năng trong ngành CNTT.", 
                                                                                "Phát triển nguồn nhân lực chất lượng cao cho ngành CNTT."]}/>
            <AboutCard title="Giá trị cốt lõi" imageUrl="about/about_3.png" content={["Chất lượng - Sáng tạo - Chuyên nghiệp - Năng động - Đoàn kết"]}/>
        </div>
    </div>

 );
};

export default AboutSection;

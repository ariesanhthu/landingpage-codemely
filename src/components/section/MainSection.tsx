import Link from "next/link";
import Image from "next/image";
import { describe } from "node:test";
import { FaArrowRight } from "react-icons/fa";

interface ContentProps {
    name: string;
    describe: string;
    strongText: string;
}

const content: ContentProps ={
    name: "Code MeLy",
    describe: "là một cộng đồng IT được tạo ra bởi những người trẻ đầy năng lượng với sự mệnh kết nối những người yêu thích công nghệ với nhau, lan tỏa và chia sẻ những giá trị tích cực bằng cách tạo ra môi trường, những sân chơi dành cho",
    strongText: "cộng đồng lập trình viên Việt Nam"
}

const MainSection: React.FC = () => {
 return(
    <div className="flex w-full p-0 m-0 gap-10" id='#'>
        <div className="flex flex-col">
                
                <div className="flex w-full justify-center">
                    <Image alt={'slogan'} src={'/slogan.svg'} width={650} height={500} className="object-cover"/>
                </div>
                
                <div className="flex w-full justify-center">
                    <p className="text-wrap text-lg text-justify w-11/12">"<label className="text-primary font-bold">{content.name} </label> 
                    {content.describe} 
                    <label className="font-bold"> {content.strongText}</label>"</p>
                </div>

                <div className="flex w-full justify-end mt-5">
                    <Image alt={'slogan'} src={'/underlineSlider.png'} width={400} height={10}/>
                </div>
                
                <div className="bg-primary px-10 py-2 w-fit rounded flex align-middle ml-10 mt-5 gap-2 hover:bg-orange-500">
                    <a target="_blank" href={'https://www.facebook.com/groups/3059387787464905'} className="flex justify-start">Tham gia cùng chúng mình </a>
                    <div className="justify-end flex align-middle mt-1">
                        <FaArrowRight />
                    </div>
                </div>
        </div>
        <div className="flex justify-end z-10 overflow-hidden">
            <Image 
                alt="img1" 
                src={'/homeSection.png'} 
                width={1200} 
                height={1000}
                style={{animation: 'float 10s ease-in-out infinite'}}
                className="z-10"
            />
        </div>
    </div>
 );
};

export default MainSection;

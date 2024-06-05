import InfoCard from "../card/InfoCard";
import Image from "next/image";

const ComSection: React.FC = () => {
 return(
    <div className="w-full flex mt-20" id='community'>
        <div className="flex justify-center align-middle h-full">
            <Image src={'/CommunitySection.png'} alt={'comimg'} width={400} height={200} className={'object-cover'}/>
        </div>
        <div className="flex w-full flex-1 flex-wrap gap-10 m-0 p-0">
            <InfoCard title = {'Code MeLy'} description = {'Trang chia sẻ thông tin về các hoạt động của cộng đồng Code MeLy và cập nhập kiến thức, kỹ năng liên quan đến ngành CNTT đến người trẻ'} start={59030} end={59330} link={'https://www.facebook.com/code.mely'} colorName={'aqua'} iconName={'facebook'}/>
            <InfoCard title = {'Dev ơi, mình đi đâu thế?'} description = {'Dev ơi, mình đi đâu thế là cộng đồng lập trình viên cùng nhau học tập/chia sẻ. Bạn có thể: Chia sẻ, thảo luận khóa học, tin tức, kiến thức, kinh nghiệm học tập liên quan đến Khoa học,Toán, Lập trình,...'} start={82000} end={82195} link={'https://www.facebook.com/groups/3059387787464905'} colorName={'#fda41d'} iconName={'facebook'}/>
            <InfoCard title = {'Code MeLy'} description = {'Kênh discord thảo luận, học tập, chia sẻ về kiến thức, kỹ năng liên quan đến ngành CNTT của Code MeLy'} start={16089} end={16689} link={'/discord.com/invite/codemely'} colorName={'#9945ff'} iconName={'facebook'}/>
            <InfoCard title = {'Code MeLy'} description = {'Trang chia sẻ những kiến thức, kỹ năng liên quan đến ngành An Toàn Thông Tin và các cuộc thi liên quan đến ATTT đến từ Cộng đồng bảo mật nói chung, Code MeLy nói riêng'} start={576} end={876} link={'https://www.instagram.com/code.mely'} colorName={'#19fb9b'} iconName={'facebook'}/>
        </div>
    </div>

 );
};

export default ComSection;

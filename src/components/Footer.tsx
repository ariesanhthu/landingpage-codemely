import React from 'react';
// import { FaFacebook, FaDiscord } from 'react-icons/fa';
// import { IoLogoInstagram } from 'react-icons/io';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 text-white bg-black/5 backdrop-blur-sm border-t-2 border-primary overflow-hidden">
      <div className=" container mx-auto flex items-center justify-center">
        <img src="/logo.svg" alt="logo" className="w-20 h-auto" />
      </div>
      <p className="text-center my-4 text-sm">Dự Án Cộng Đồng Kết Nối Các Thành Viên Trong Cộng Đồng IT</p>
      <div className="flex justify-center">
        {/* <FaFacebook className="text-3xl mr-4" />
        <FaDiscord className="text-3xl mr-4" />
        <IoLogoInstagram className="text-3xl" /> */}
      </div>
    </footer>
  );
};

export default Footer;

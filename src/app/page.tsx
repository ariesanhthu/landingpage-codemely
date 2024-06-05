import Image from "next/image";
import backgroundImage from "../../public/bg.jpg";
import MainSection from "@/components/section/MainSection";
import AboutSection from "@/components/section/AboutSection";
import ComSection from "@/components/section/ComSection";
import PartnerSection from "@/components/section/PartnerSection";
import EventSection from "@/components/section/EventSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage.src})`, width: '100%', height:'100%'}}>
      <MainSection/>
      <AboutSection/>
      <ComSection/>
      <EventSection/>
      <PartnerSection/>

    </main>
  );
}

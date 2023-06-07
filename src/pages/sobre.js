import SobreFifthSection from "@/components/sobre/fifth-section";
import SobreFirstSection from "@/components/sobre/first-section";
import SobreFourthSection from "@/components/sobre/fourth-section";
import SobreSecondSection from "@/components/sobre/second-section";
import SobreThirdSection from "@/components/sobre/third-section";
import thirdSectionImg from "@pub/sobre-third.png"
import Image from "next/image";

export default function Sobre() {
  return (
  <div>
    <SobreFirstSection />
    <SobreSecondSection />
    <Image src={thirdSectionImg} alt="img" className="my-8 xl:my-16 w-full" />
    <SobreThirdSection />
    <SobreFourthSection />
    <SobreFifthSection />
  </div>
  )
}

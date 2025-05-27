import Banner from "@/components/Banner/Banner";
import BannerImg from "@/components/Banner_image/BannerImg";
import Card from "@/components/Card/Card";
import Form from "@/components/Form/Form";

import Pacotes from "@/components/Pacotes/Pacotes";
import Pronto from "@/components/Pronto/Pronto";
import Services from "@/components/Services/Services";
// import Image from "next/image";



export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="block md:hidden p-4 bg-none ">
        <Form />
      </div>
      <Card />
      <BannerImg/>
      <Services/>
      <Pacotes/>
      <Pronto/>
    </div>
  );
}

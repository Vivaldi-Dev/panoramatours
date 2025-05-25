import Banner from "@/components/Banner/Banner";
import BannerImg from "@/components/Banner_image/BannerImg";
import Card from "@/components/Card/Card";
// import Flycard from "@/components/Flycard/Flycard";
// import Footer from "@/components/Footer/Footer";
// import Form from "@/components/Form/Form";

// import Grid from "@/components/grid_ayout/Grid";
// import Header from "@/components/Header/Header";
import Pacotes from "@/components/Pacotes/Pacotes";
import Pronto from "@/components/Pronto/Pronto";
import Services from "@/components/Services/Services";
// import Image from "next/image";



export default function Home() {
  return (
    <div className="">
      <Banner />
      <Card />
      <BannerImg/>
      <Services/>
      <Pacotes/>
      <Pronto/>
    </div>
  );
}

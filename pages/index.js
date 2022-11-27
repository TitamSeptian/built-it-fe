import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import HeroAbout from "../components/landing/HeroAbout";
import Service from "../components/landing/Serivce";
import Product from "../components/landing/Product";
import FaqSection from "../components/landing/FaqSection";
import Footer from "../components/landing/Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <HeroAbout/>
            <Service/>
            <Product/>
            <FaqSection/>
        </>
    );
}

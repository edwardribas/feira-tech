// Sections
import { Hero } from "../../sections/Hero";
import { Categorias } from "../../sections/Categorias";
import { Sobre } from "../../sections/Sobre";

// Components
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ArrowUp } from "../../components/ArrowUp";

export const Home = () => {
    return (
    <>
        <Header/>
        <Hero/>
        <Categorias/>
        <Sobre/>
        <Footer/>
        <ArrowUp/>
    </>
    )
}
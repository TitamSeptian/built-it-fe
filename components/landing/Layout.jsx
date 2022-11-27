import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import {useState, useEffect} from "react";
export default function Layout({children}) {
    // make timer using state
    // const [timer, setTimer] = useState(0);
    // // make timer using useEffect
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimer(prevTimer => prevTimer + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // });
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </div>
    );
}
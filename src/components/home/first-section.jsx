import homeImg from "@pub/img/home-img.png"
import Image from "next/image"
import { redirectToAgricultura } from "../../../scripts/script"

const HomeFirstSection = () => {
    return (
        <div className="max-w-[1440px] mx-auto h-auto flex flex-col px-8 md:flex-row py-28 gap-8">
            <div className="w-full flex flex-col justify-center gap-8 items-start">
                <p className="text-4xl md:text-6xl xl:text-8xl font-bold text-primary-default" id="Main-Heading">
                    VIDA NOVA
                </p>
                <p className="text-xl md:text-2xl font-light text-primary-dark text-left w-[80%]">
                    Nós somos uma dedicada e incansável organização não governamental, movida pela missão de eliminar a
                    fome e contribuir para um mundo melhor.
                </p>
                <button
                    type="button" onClick={redirectToAgricultura}
                    className="bg-secondary-default rounded-full font-bold text-white md:text-lg xl:text-xl py-2 text-center w-[50%]">
                    Mais Informações
                </button>
            </div>
            <Image src={homeImg} alt="home-img" className="w-full md:w-[40%] mt-8 md:mt-0 rounded-xl"/>
        </div>
    )
}

export default HomeFirstSection
import homeImg from "@pub/home-img.png"
import Image from "next/image"

const HomeFirstSection = () => {
    return (
    <div className="h-auto flex flex-col md:flex-row px-4 md:px-12 py-20 lg:py-24 xl:py-36 lg:px-20 gap-4">
      <div className="w-full md:w-[60%] flex flex-col justify-center gap-8 items-start">
        <p className="text-3xl md:text-6xl xl:text-7xl font-bold text-primary-default">
            VIDA NOVA
          </p>
          <p className="text-xl md:text-2xl font-light text-primary-dark text-left w-[90%]">
            Nós somos uma dedicada e incansável organização não governamental, movida pela missão de eliminar a fome e contribuir para um mundo melhor.
          </p>
          <button type="button" 
          className="bg-secondary-default rounded-full font-bold text-white md:text-lg xl:text-xl py-1.5 text-center w-[75%] md:w-[50%]">
            Mais Informações
          </button>
      </div>
      <Image src={homeImg} alt="home-img" className="w-full md:w-[40%] mt-8 md:mt-0 rounded-xl" />
    </div>
    )
}

export default HomeFirstSection
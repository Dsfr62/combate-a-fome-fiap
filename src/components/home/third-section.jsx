import thirdSectionImg from "@pub/home-third-section.png"
import Image from "next/image"

const HomeThirdSection = () => {
    return (
    <div className="w-full px-4 lg:px-10 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-center h-auto gap-12 mb-12">
        <Image src={thirdSectionImg} alt="img" className="rounded-lg" />
        <div className="flex flex-col gap-0.5 xl:gap-4 w-full lg:w-[50%]">
          <p className="text-xl xl:text-3xl font-bold w-full text-primary-default">No Mundo, 2,3 bilhões de pessoas vivem em situação de insegurança alimentar.</p>
          <div className="gap-1 xl:gap-4 flex flex-col">
            <p className="text-sm xl:text-base text-primary-dark">
            A fome não conhece fronteiras ou limites. Ela afeta todas as faixas etárias, desde crianças pequenas até idosos. É uma crise que compromete não apenas a saúde e o bem-estar das pessoas, mas também o desenvolvimento socioeconômico das comunidades e nações inteiras.
            </p>
            <p className="text-sm xl:text-base text-primary-dark">
            No entanto, é importante destacar que a fome não é apenas uma questão de escassez de alimentos. É um problema complexo, enraizado em fatores como pobreza, desigualdade, conflitos, mudanças climáticas e falta de acesso a recursos básicos.
            </p>
            <p className="text-sm xl:text-base text-primary-dark">
              Nosso trabalho incansável como ONG dedicada a acabar com a fome envolve enfrentar esses desafios de frente. Implementamos projetos de segurança alimentar, apoiamos a agricultura sustentável e promovemos o acesso a água potável e saneamento adequado. 
            </p>
          </div>
        </div>
    </div>
    )
}

export default HomeThirdSection
import thirdSectionImg from "@pub/home-third-section.png"
import Image from "next/image"

const HomeThirdSection = () => {
    return (
        <div
            className="max-w-[1440px] mx-auto h-auto flex px-8 py-20 gap-12 flex-col-reverse mb-12 md:flex-row lg:flex-row lg:items-start lg:justify-between">
            <Image src={thirdSectionImg} alt="img" className="w-full md:w-[40%] mt-8 md:mt-0 rounded-xl"/>
            <div className="flex flex-col gap-1 sm:gap-6 w-full lg:w-[50%]">
                <p className="text-xl xl:text-3xl font-bold w-full text-primary-default">
                    No Mundo, 2,3 bilhões de pessoas vivem em situação de insegurança alimentar.
                </p>
                <div className="gap-1 xl:gap-4 flex flex-col text-primary-dark">
                    <p className="text-sm xl:text-base">
                        A fome não conhece fronteiras ou limites. Ela afeta todas as faixas etárias, desde crianças
                        pequenas até idosos. É uma crise que compromete não apenas a saúde e o bem-estar das pessoas,
                        mas também o desenvolvimento socioeconômico das comunidades e nações inteiras.
                    </p>
                    <p className="text-sm xl:text-base">
                        No entanto, é importante destacar que a fome não é apenas uma questão de escassez de alimentos.
                        É um problema complexo, enraizado em fatores como pobreza, desigualdade, conflitos, mudanças
                        climáticas e falta de acesso a recursos básicos.
                    </p>
                    <p className="text-sm xl:text-base">
                        Nosso trabalho incansável como ONG dedicada a acabar com a fome envolve enfrentar esses desafios
                        de frente. Implementamos projetos de segurança alimentar, apoiamos a agricultura sustentável e
                        promovemos o acesso a água potável e saneamento adequado.
                    </p>
                    <button
                        type="button" onClick={() => window.open("/dados", "_self")}
                        className="bg-secondary-default rounded-full font-bold text-white md:text-lg xl:text-xl py-2 mt-6 text-center w-[50%]">
                        Mais Informações
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeThirdSection
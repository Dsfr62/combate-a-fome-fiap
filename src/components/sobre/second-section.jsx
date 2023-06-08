import { redirectToAgricultura } from "../../../scripts/script"

const SobreSecondSection = () => {
    return (
        <div className="w-full flex flex-col h-auto items-center bg-bg-banner-img bg-cover py-28">
            <div
                className="bg-primary-default flex flex-col rounded-[4px] py-8 px-8 justify-center items-center mx-4">
                <p className="text-4xl font-bold text-white max-w-sm">Em 2023, os níveis de fome serão maiores do que
                    nunca</p>
                <p className="text-xl mt-6 text-white max-w-sm">
                    Saiba como fazer a diferença na vida de milhões de
                    pessoas em todo o mundo
                </p>
                <button type="button" onClick={redirectToAgricultura}
                        className="bg-fourth-default mt-6 rounded-[4px] font-normal text-white md:text-lg xl:text-xl py-1.5 text-center w-[75%] md:w-[50%]">
                    Mais Informações
                </button>
            </div>
        </div>
    )
}

export default SobreSecondSection
import Image from "next/image";
import scrapIMG from "@pub/img/scrap-img.png";

const AgricultureThirdSection = () => {
    return (
        <div className="h-auto flex flex-col items-start">
            <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col justify-between lg:flex-row">
                <div className="w-full md:w-2/4 mb-4 md:mb-0">
                    <p className="text-primary-dark text-lg">
                        Ao permitir o cultivo de alimentos em áreas antes consideradas inadequadas, a aplicação das IAs
                        generativas na agricultura aumenta significativamente a produtividade e reduz o desperdício de
                        recursos naturais preciosos.
                    </p>
                    <p className="text-primary-dark mt-6 text-lg">
                        Isso é especialmente importante em um cenário global onde a demanda por alimentos está em
                        constante crescimento e os recursos disponíveis estão se tornando cada vez mais escassos.
                    </p>
                    <p className="text-primary-dark mt-6 text-lg">
                        Além disso, a solução oferece benefícios significativos para regiões remotas, onde a escassez de
                        alimentos é uma realidade. As IAs generativas podem fornecer acesso a alimentos frescos e
                        nutritivos, melhorando a qualidade de vida dessas comunidades.
                    </p>
                </div>
                <div className="w-full md:w-2/5">
                    <Image src={scrapIMG} alt="img" className="w-[100%] rounded-lg"/>
                </div>
            </div>
        </div>
    )
}

export default AgricultureThirdSection
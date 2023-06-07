import Image from "next/image";
import boxIMG from "@pub/box-img.png";

const AgricultureFourthSection = () => {
    return (
        <div className="h-auto flex flex-col items-start bg-primary-default">
            <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col justify-between lg:flex-row">
                <div className="w-2/5">
                    <Image src={boxIMG} alt="img" className="w-[100%]"/>
                </div>
                <div className="w-2/4">
                    <p className="text-white text-2xl">
                        Ao permitir o cultivo de alimentos em áreas antes consideradas inadequadas, a aplicação das IAs
                        generativas na agricultura aumenta significativamente a produtividade e reduz o desperdício de
                        recursos naturais preciosos.
                    </p>
                    <p className="text-white mt-6 text-2xl">
                        Isso é especialmente importante em um cenário global onde a demanda por alimentos está em
                        constante crescimento e os recursos disponíveis estão se tornando cada vez mais escassos.
                    </p>
                    <p className="text-white mt-6 text-2xl">
                        Além disso, a solução oferece benefícios significativos para regiões remotas, onde a escassez de
                        alimentos é uma realidade. As IAs generativas podem fornecer acesso a alimentos frescos e
                        nutritivos, melhorando a qualidade de vida dessas comunidades.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AgricultureFourthSection
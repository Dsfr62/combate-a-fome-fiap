import Image from "next/image";
import aiIMG from "@pub/ai-img.png";

const AgricultureSecondSection = () => {
    return (
        <div className="h-auto flex flex-col items-start bg-primary-default">
            <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col justify-between lg:flex-row">
                <div className="w-2/5">
                    <Image src={aiIMG} alt="img" className="w-[100%]"/>
                </div>
                <div className="w-2/4">
                    <p className="text-white text-2xl">
                        Além das melhorias na produção agrícola convencional, as IAs generativas também podem
                        impulsionar a inovação na produção de alimentos. Por exemplo, tecnologias como a agricultura
                        vertical, aquaponia e hidroponia, que já mostraram promessa no uso eficiente de recursos, podem
                        ser aprimoradas com a ajuda das IAs generativas.
                    </p>
                    <p className="text-white mt-6 text-2xl">
                        Essas tecnologias combinam o cultivo de plantas com criação de peixes ou uso de soluções
                        nutritivas em um ambiente controlado, resultando em produção de alimentos altamente sustentável
                        e localizada. As IAs generativas podem otimizar esses sistemas, ajustando as condições
                        ambientais de forma precisa e fornecendo insights sobre os melhores métodos de cultivo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AgricultureSecondSection
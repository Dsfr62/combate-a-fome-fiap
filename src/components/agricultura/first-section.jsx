import heroIMG from "@pub/img/agri-hero.png"
import Image from "next/image";

const AgricultureFirstSection = () => {
    return (
        <div
            className="h-auto flex flex-col items-start">
            <div className="bg-[#EFF2F5] w-full h-auto py-8 flex flex-col items-start">
                <div className="flex justify-items-start w-full max-w-[1440px] mx-auto px-8">
                    <h1 className="text-4xl font-bold text-third-default">Agricultura Inteligente</h1>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col justify-between lg:flex-row">
                <div className=" py-8 flex flex-col justify-between lg:flex-row">
                    <div className="w-full md:w-2/4">
                        <h2 className="text-2xl font-bold text-primary-default uppercase">
                            As IAs generativas na agricultura
                        </h2>
                        <p className="text-primary-dark mt-6 text-lg">
                            Em relação à produção agrícola, as IAs generativas podem desempenhar um papel fundamental na
                            criação de modelos de cultivo altamente eficientes e sustentáveis.
                        </p>
                        <p className="text-primary-dark mt-6 text-lg">
                            Essas tecnologias avançadas são capazes de analisar enormes quantidades de dados, como
                            informações sobre solo, clima, culturas e práticas agrícolas, para identificar padrões e
                            tomar
                            decisões inteligentes. Com base nessas análises, os agricultores podem otimizar o uso de
                            recursos, como água, fertilizantes e pesticidas, reduzindo o desperdício e maximizando a
                            produtividade.
                        </p>
                    </div>
                    <div className="w-full md:w-2/5 mt-4 md:mt-0">
                        <Image src={heroIMG} alt="img" className="w-[100%] rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgricultureFirstSection
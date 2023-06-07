import historyImg from "@pub/history.png"
import Image from "next/image"

const SobreFirstSection = () => {
    return (
        <div className="w-full h-auto py-16 px-6 md:px-32 xl:px-44 flex flex-col items-start justify-center md:items-center">
            <p className="text-6xl font-bold">Sobre nós</p>
            <Image src={historyImg} alt="img" className="mt-6" />
            <p className="text-xl mt-6">
                Nossa solução são estufas de hidroponia em conjunto das as IAs generativas!
                Essa tecnologia revolucionária pode transformar a agricultura e garantir um futuro alimentar sustentável para todos. As IAs generativas podem ser utilizadas para criar modelos de cultivo mais eficientes e sustentáveis, elas também preveem condições climáticas e de solo, permitindo que os agricultores tomem decisões mais informadas sobre o cultivo, reduzindo o desperdício de água e recursos naturais.
            </p>
            <p className="text-xl mt-6">
                Além disso, as IAs generativas possibilitam a criação de modelos de agricultura vertical, aquaponia e hidroponia. Esses métodos inovadores permitem cultivar alimentos em locais antes considerados inadequados para a agricultura, como regiões remotas ou de difícil acesso.
            </p>
        </div>
    )
}

export default SobreFirstSection
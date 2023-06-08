import Image from "next/image"
import firstImg from "@pub/dados_1.png"

const DadosFirstSection = () => {
    return (
    <div className="h-auto flex flex-col items-start">
        <div className="bg-[#EFF2F5] w-full h-auto py-8 flex flex-col items-start">
            <div className="flex justify-items-start w-full max-w-[1440px] mx-auto px-8">
                <h1 className="text-4xl font-bold text-secondary-default">A Fome no Mundo</h1>
            </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col justify-between lg:flex-row">
            <div className="flex flex-col justify-between lg:flex-row">
                <div className="w-full lg:w-2/4">
                    <h2 className="text-2xl font-bold text-primary-default uppercase">
                        Conheça a Realidade e Ajude a Mudar essa  História
                    </h2>
                    <p className="text-primary-dark mt-6 text-lg">
                        Descubra quantas pessoas sofrem com a falta de acesso a alimentos adequados e como a insegurança alimentar afeta bilhões de indivíduos. Conheça também as estatísticas preocupantes relacionadas ao retardo de crescimento em crianças e a caquexia infantil. Através dessas informações, buscamos conscientizar e mostrar a urgência de agir para combater a fome.
                    </p>
                    <p className="text-primary-dark mt-6 text-lg">
                        A fome é uma realidade que não pode ser ignorada. Os dados apresentados nesta página nos mostram que é hora de agir. Junte-se a nós nessa luta contra a fome, compartilhe essas informações e participe de iniciativas que visam garantir o direito fundamental à alimentação para todos. Vamos fazer a diferença juntos!
                    </p>
                </div>
                <div className="w-[80%] mx-auto lg:w-2/5 mt-6 lg:mt-0">
                    <Image src={firstImg} alt="img" className="w-[100%] rounded-lg"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DadosFirstSection
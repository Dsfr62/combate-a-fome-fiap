import { TbApple } from "react-icons/tb"
import { MdUpdate, MdOutlineRealEstateAgent, MdHome, MdOutlineHealthAndSafety, MdEco } from "react-icons/md"

const HomeFourthSection = () => {
    return (
        <div className="h-auto w-full bg-primary-default px-6 md:px-16 py-10 md:justify-center md:items-center flex flex-col">
            <p className="text-4xl font-bold text-white">Nossos pilares!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-12 md:mt-10 gap-8">
                <div className="flex flex-col gap-2 items-start md:items-center">
                    <TbApple size={50} className="text-white" />
                    <p className="text-sm text-start md:text-center text-white">
                        Acesso a alimentos nutritivos para todos, o que constitui a base fundamental de nossa organização. 
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-start md:items-center">
                    <MdUpdate size={50} className="text-white" />
                    <p className="text-sm text-start md:text-center text-white">
                        Buscamos implementar soluções de longo prazo que garantam que as comunidades tenham acesso consistente e sustentável a alimentos. 
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-start md:items-center">
                    <MdOutlineRealEstateAgent size={50} className="text-white" />
                    <p className="text-sm text-start md:text-center text-white">
                        Estabelecemos parcerias estratégicas com governos, outras organizações não governamentais, empresas e instituições acadêmicas.
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-start md:items-center">
                    <MdHome size={50} className="text-white" />
                    <p className="text-sm text-start md:text-center text-white">
                        Trabalhamos em estreita colaboração com as comunidades, ouvindo suas necessidades, fortalecendo suas habilidades e promovendo uma participação ativa
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-start md:items-center">
                    <MdOutlineHealthAndSafety size={50} className="text-white" />
                    <p className="text-sm text-start md:text-center text-white">
                        Trabalhamos para aumentar a conscientização sobre as questões relacionadas à fome e à segurança alimentar, mobilizando o público em geral e influenciadores. 
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-start md:items-center">
                    <MdEco size={50} className="text-white" />
                    <p className="text-sm text-start md:text-center text-white">
                        Buscamos abordagens que promovam a produção e o consumo sustentáveis, minimizando o impacto negativo no meio ambiente.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeFourthSection
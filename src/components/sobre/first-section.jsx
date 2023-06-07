import lineIMG from "@pub/line_brake.png"
import Image from "next/image"

const SobreFirstSection = () => {
    return (
        <div
            className="h-auto flex flex-col items-start">
            <div className="bg-[#F5EFEF] w-full h-auto py-8 flex flex-col items-start">
                <div className="flex justify-items-start w-full max-w-[1440px] mx-auto px-8">
                    <h1 className="text-4xl font-bold text-fourth-default">
                        Crise Alimentar
                    </h1>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col lg:flex-row flex-wrap">
                <h2 className="text-2xl font-bold text-fourth-default uppercase lg:w-1/3 px-0 md:px-2">
                    Insegurança Alimentar
                </h2>
                <div className="lg:w-2/3">
                    <Image src={lineIMG} alt="img" className="mb-6 md:mt-6 lg:mt-0"/>
                    <p className="text-primary-dark">
                        Conflitos, perturbações econômicas, eventos climáticos extremos e a
                        escalada vertiginosa dos preços dos fertilizantes estão se combinando para gerar uma crise
                        alimentar de proporções sem precedentes.
                    </p>
                    <p className="text-primary-dark mt-6">
                        A incerteza sobre a origem da próxima refeição assombra aproximadamente 828 milhões de pessoas.
                        Estamos diante de uma encruzilhada: tomar medidas imediatas para salvar vidas e investir em
                        soluções que garantam a segurança alimentar, a estabilidade e a paz para todos, ou testemunhar
                        um aumento crescente da fome ao redor do mundo.
                    </p>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col lg:flex-row flex-wrap">
                <h2 className="text-2xl font-bold text-fourth-default uppercase lg:w-1/3 px-0 md:px-2">
                    Causas da fome extrema
                </h2>
                <div className="lg:w-2/3">
                    <Image src={lineIMG} alt="img" className="mb-6 md:mt-6 lg:mt-0"/>
                    <p className="text-primary-dark">Por que o mundo está mais faminto do que nunca?</p>
                    <p className="text-primary-dark mt-6">A fome global é impulsionada por uma combinação letal de
                        conflitos, crises climáticas e altos preços de fertilizantes. Cerca de 70% das pessoas famintas
                        vivem em áreas afetadas por guerras e violência. Os choques climáticos destroem colheitas e
                        meios de subsistência, prejudicando a capacidade das pessoas de se alimentarem. Os preços
                        globais de fertilizantes dispararam, ameaçando a disponibilidade de alimentos. Além disso, os
                        custos operacionais aumentaram, levando à redução de rações para alcançar mais pessoas.</p>
                    <p className="text-primary-dark mt-6">A fome mundial exige ação imediata para enfrentar esses
                        desafios, garantindo a paz, agindo contra as mudanças climáticas e buscando soluções para os
                        altos preços de fertilizantes. É fundamental fornecer alimentos para todos e abordar as causas
                        subjacentes da fome.</p>
                    <p className="text-primary-dark mt-6">Resumindo, a fome é impulsionada por conflitos, crises
                        climáticas, preços de fertilizantes e custos operacionais elevados. Ações urgentes são
                        necessárias para resolver esses problemas e garantir a disponibilidade de alimentos para
                        todos.</p>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col lg:flex-row flex-wrap">
                <h2 className="text-2xl font-bold text-fourth-default uppercase lg:w-1/3 px-0 md:px-2">Pontos críticos de
                    fome</h2>
                <div className="lg:w-2/3">
                    <Image src={lineIMG} alt="img" className="mb-6 md:mt-6 lg:mt-0"/>
                    <p className="text-primary-dark">Do Corredor Seco da América Central e do Haiti, através do Sahel,
                        da República Centro-Africana, do Sudão do Sul e depois em direção ao Chifre da África, Síria,
                        Iêmen e até o Afeganistão, conflitos e choques climáticos estão levando milhões de pessoas à
                        beira da inanição.</p>
                    <p className="text-primary-dark mt-6">No ano passado, o mundo reuniu recursos extraordinários - um
                        recorde de impressionantes US$14 bilhões somente para o PMA - para enfrentar a crise alimentar
                        global sem precedentes. Em países como a Somália, que tem lutado na iminência da fome, a
                        comunidade internacional se uniu e conseguiu resgatar as pessoas. Porém, não é suficiente apenas
                        manter as pessoas vivas. Precisamos ir além e isso só pode ser alcançado ao abordarmos as causas
                        fundamentais da fome.</p>
                    <p className="text-primary-dark mt-6">
                        As consequências de não investir em atividades de fortalecimento terão repercussões além das
                        fronteiras. Se as comunidades não forem capacitadas para resistir a choques e adversidades, isso
                        pode resultar em aumento da migração e possíveis instabilidades e conflitos. A história recente
                        nos ensinou isso: quando o PMA ficou sem recursos para alimentar os refugiados sírios em 2015,
                        eles não tiveram outra opção a não ser deixar os acampamentos e procurar ajuda em outros
                        lugares, causando uma das maiores crises de refugiados na história recente da Europa.</p>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-8 py-8 flex flex-col lg:flex-row flex-wrap">
                <h2 className="text-2xl font-bold text-fourth-default uppercase lg:w-1/3 px-0 md:px-2">Vamos acabar com a
                    fome</h2>
                <div className="lg:w-2/3">
                    <Image src={lineIMG} alt="img" className="mb-6 md:mt-6 lg:mt-0"/>
                    <p className="text-primary-dark">Uma proposta de solução consiste na utilização de Inteligências
                        Artificiais generativas para aprimorar a produção agrícola, a distribuição de alimentos e a
                        eficiência dos sistemas de alimentação. As IA generativas podem desempenhar um papel fundamental
                        na criação de modelos de cultivo mais eficientes e sustentáveis, na previsão de condições
                        climáticas e de solo, bem como no desenvolvimento de métodos inovadores de produção de
                        alimentos, como agricultura vertical, aquaponia e hidroponia. Essas tecnologias permitem o
                        cultivo de alimentos em áreas anteriormente consideradas inadequadas, aumentando a produtividade
                        e reduzindo o desperdício de recursos naturais.</p>
                    <p className="text-primary-dark mt-6">
                        Essa solução traz benefícios significativos para o público-alvo, pois oferece meios para superar
                        os desafios enfrentados na produção e distribuição de alimentos. Ela viabiliza o acesso a
                        alimentos em regiões remotas, aumenta a eficiência da produção agrícola e reduz o desperdício de
                        recursos, contribuindo para a segurança alimentar e a sustentabilidade.</p>
                </div>
            </div>
        </div>
    )
}

export default SobreFirstSection
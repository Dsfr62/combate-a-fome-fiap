import thirdSectionImg from "@pub/home-third-section.png"

const HomeThirdSection = () => {
    return (
    <div className="w-full px-4 lg:px-10 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-center h-auto my-16 gap-12">
        <Image src={thirdSectionImg} alt="img" />
        <div className="flex flex-col gap-0.5 xl:gap-4 w-full lg:w-[50%]">
          <p className="text-xl xl:text-3xl font-bold w-full">No Brasil, 125 milhões de pessoas vivem em situação de insegurança alimentar</p>
          <div className="gap-1 xl:gap-4 flex flex-col">
            <p className="text-sm xl:text-base">
              A ONG Banco de Alimentos, atua desde 1998 auxiliando pessoas em situação de insegurança alimentar através do combate ao desperdício de alimentos. Mas você sabe o que significa insegurança alimentar?
            </p>
            <p className="text-sm xl:text-base">
              Estado de insegurança alimentar é quando não há a garantia de que teremos o que comer na próxima refeição. Uma situação inaceitável especialmente aqui no Brasil, que bate recordes no agronegócio e desperdiçou 23,6 milhões de toneladas de alimentos em 2019.
            </p>
            <p className="text-sm xl:text-base">
              Faça sua doação para a ONG Banco de Alimentos e colabore com nosso trabalho no combate ao desperdício de alimentos.
            </p>
            <p className="text-sm xl:text-base">
              Hoje, através das 57 entidades sociais parceiras, ajudamos a complementar a refeição de mais de 25 mil pessoas de forma digna e nutritivas, em lugares onde muitos são esquecidos.
            </p>
          </div>
        </div>
    </div>
    )
}

export default HomeThirdSection


const SobreSecondSection = () => {
    return (
    <div className="w-full h-auto py-8 bg-primary-default flex flex-col items-start md:justify-center md:items-center px-6 md:px-0">
        <p className="font-bold text-2xl text-white">Resultados Acumulados ONG Banco de Alimentos</p>
        <p className="text-white mb-8 mt-2">Conheça nossos resultados de 1998 a 2022</p>
        <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-6 w-full justify-center text-white">
            <p className="text-3xl font-bold flex flex-col items-start md:items-center md:w-[30%] xl:w-[25%] text-start md:text-center">
                16 MIL TONELADAS
                <span className="text-xs">DE ALIMENTOS ENTREGUES</span>
            </p>
            <p className="text-3xl font-bold flex flex-col items-start md:items-center md:w-[30%] xl:w-[25%] text-start md:text-center">
                25 MIL PESSOAS
                <span className="text-xs">BENEFICIADAS DIARIAMENTE</span>
            </p>
            <p className="text-3xl font-bold flex flex-col items-start md:items-center md:w-[30%] xl:w-[25%] text-start md:text-center">
                25 ANOS
                <span className="text-xs">TEMPO DE EXISTÊNCIA</span>
            </p>
        </div>
    </div>
    )
}

export default SobreSecondSection


const DadosFourthSection = () => {
    return (
        <div className="w-full flex flex-col h-auto items-center justify-center py-8 border-t-8 border-t-secondary-default">
            <p className="text-4xl mb-6 font-bold text-secondary-default text-center w-full md:w-[50%] xl:w-[40%]">Pontos críticos de fome GLOBAL 2022</p>
            <div className="bg-primary-default w-full flex items-center justify-center overflow-auto md:overflow-hidden">
                <iframe className="w-full md:w-[70%] h-[30rem]"
                seamless frameborder="0" scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR5hDRmCvmWfziVZK_zSvaXN1EAKQ69tJ5WiTJKEUV2c-ADaQ34NoSG_J9RJEi9S33iOlkwbc24FDwN/pubchart?oid=1604788782&amp;format=interactive"></iframe>
            </div>
        </div>
    )
}

export default DadosFourthSection
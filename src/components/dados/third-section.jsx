

const DadosThirdSection = () => {
    return (
        <div className="w-full flex flex-col h-auto items-start md:items-center justify-center my-6 px-4 md:px-12">
            <p className="text-2xl md:text-3xl text-primary-default text-start md:text-center w-full font-bold mb-6">
                Uma pessoa morre de fome no mundo a cada 4 segundos, dizem ONGs em carta a governantes na ONU
            </p>
            <iframe 
            className="w-full max-w-[1440px] h-[20rem] md:h-[32rem] px-0 md:px-4 py-2"
            src="https://www.youtube.com/embed/V9MKjIoGtjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default DadosThirdSection
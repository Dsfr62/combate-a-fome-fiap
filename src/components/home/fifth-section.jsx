const HomeFifthSection = () => {
    return (
        <div className="w-full h-auto py-16 px-6 md:px-24 flex flex-col items-start justify-center md:items-center">
            <p className="text-3xl font-bold text-primary-default">Saiba mais sobre nossa proposta</p>
            <iframe src="https://www.youtube.com/embed/Gy-aPQRtrww"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen className="w-full max-w-[1440px] h-[20rem] md:h-[32rem] px-0 md:px-8 mt-6 py-2">
            </iframe>
        </div>
    )
}

export default HomeFifthSection
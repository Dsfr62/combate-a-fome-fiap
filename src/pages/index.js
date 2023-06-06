import HomeFirstSection from "@/components/home/first-section";

export default function Home() {
  return (
  <div>
    <HomeFirstSection />
    <div className="w-full bg-secondary-dark h-fit md:h-32 flex flex-col md:flex-row items-center gap-10 py-4 px-2 lg:px-40">
      <p className="font-bold text-3xl lg:text-4xl text-white flex flex-col items-center">
        125 milhões
        <span className="font-light text-sm text-center">DE PESSOAS NO BRASIL VIVEM EM SITUAÇÃO DE INSEGURANÇA ALIMENTAR</span>
      </p>
      <p className="font-bold text-3xl lg:text-4xl text-white flex flex-col items-center">
        41.6 kg
        <span className="font-light text-sm text-center">DE COMIDA SÃO DESEPERDIÇADAS POR CADA BRASILEIRO ANUALMENTE</span>
      </p>
      <p className="font-bold text-3xl lg:text-4xl text-white flex flex-col items-center">
        27 milhões
        <span className="font-light text-sm text-center">DE TONELADAS DE ALIMENTOS FORAM DESPERDIÇADOS NO BRASIL EM 2019</span>
      </p>
    </div>
  </div>
  )
}

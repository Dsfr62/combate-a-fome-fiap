import PoliticaFirstSection from "@/components/politica/first-section";
import PoliticaSecondSectionItem from "@/components/politica/item";
import politicaDados from "@pub/politicas.json"

export default function Politica() {
    return (
    <div>
        <PoliticaFirstSection />
        <div className="max-w-[1440px] mx-auto px-8 w-full gap-6 flex flex-col my-4 py-8">
            {politicaDados.data.map(item => 
            <PoliticaSecondSectionItem title={item.title} dataList={item.sections} />    
            )}
        </div>
    </div>
    )
}
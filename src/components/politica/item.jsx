

const PoliticaSecondSectionItem = ({ title, dataList }) => {
    return (
    <div className="w-full flex flex-col items-center">
        <p className="mb-4">{title}</p>
        {dataList.map(item => 
        <div className="flex flex-col md:flex-row justify-between gap-2">
            <p className="w-32 h-2 bg-fourth-default"></p>
            <p className="w-[80%] text-left text-primary-dark">{item}</p>
        </div>
        )}
    </div>
    )
}

export default PoliticaSecondSectionItem
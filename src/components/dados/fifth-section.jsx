import { LineChart } from "@tremor/react"
import chartData from "@pub/dados.json"

const DadosFifthSection = () => {

    return (
    <div className="w-full flex flex-col h-auto px-2 py-4 bg-white">
        <p className="text-3xl font-light text-primary-default indent-0 md:indent-2">Chronically Hungry</p>
        <p className="text-xl font-semibold text-primary-default indent-0 md:indent-2">768 million people were chronically hungry in 2020</p>
        <LineChart
        className="my-4 overflow-x-auto w-full"
        data={chartData.data}
        index="anos"
        showXAxis={true}
        showYAxis={true}
        categories={["fome_cronica"]}
        colors={["green"]}
        />
    </div>
    )
}

export default DadosFifthSection
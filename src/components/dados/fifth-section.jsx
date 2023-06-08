import {Legend, LineChart} from "@tremor/react"
import chartData from "@pub/data/dados.json"

const DadosFifthSection = () => {

    return (
        <div className="max-w-[1440px] mx-auto w-full flex flex-col h-auto px-8 py-4 bg-white">
            <p className="text-3xl font-bold text-primary-default indent-0 md:indent-2">Pessoas Cronicamente
                Famintas</p>
            <p className="text-xl font-normal text-primary-default indent-0 md:indent-2">768 milhões de pessoas estavam
                famintas em 2020.</p>
            <LineChart
                className="my-4 overflow-x-auto w-full"
                data={chartData.data}
                index="anos"
                showXAxis={true}
                showYAxis={true}
                xLabel="Anos"
                yLabel="Pessoas Famintas"
                categories={["fome_cronica"]}
                colors={["green"]}
                minValue={300}
            />
            <Legend
                className="mt-3"
                categories={['Milhões de Pessoas ']}
                colors={['green']}
            />
        </div>
    )
}

export default DadosFifthSection
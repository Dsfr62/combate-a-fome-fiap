import {AiOutlineArrowDown, AiOutlineArrowRight} from "react-icons/ai";


const PoliticaSecondSectionItem = ({ title, dataList }) => {
    return (
    <div className="w-full gap-3 flex flex-col py-4 md:py-8 md:gap-6">
        <p className="mb-8 text-primary-default text-2xl justify-start">{title}</p>
        {dataList.map(item => 
        <div className="flex flex-col md:flex-row justify-between gap-2">
            <AiOutlineArrowRight size={50} className="invisible absolute sm:visible sm:relative text-fourth-default "/>
            <AiOutlineArrowDown  size={50} className="visible sm:hidden text-fourth-default text-right"/>
            <p className="w-[100%] text-left text-primary-dark md:w-[80%]">{item}</p>
        </div>
        )}
    </div>
    )
}

export default PoliticaSecondSectionItem
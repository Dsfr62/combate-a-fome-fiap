import historyImg from "@pub/history.png"
import Image from "next/image"

const HomeFifthSection = () => {
    return (
        <div className="w-full h-auto py-16 px-6 md:px-24 flex flex-col items-start justify-center md:items-center">
            <p className="text-3xl font-bold text-primary-default">Um pouco da história</p>
            <Image src={historyImg} alt="img" className="mt-6" />
        </div>
    )
}

export default HomeFifthSection
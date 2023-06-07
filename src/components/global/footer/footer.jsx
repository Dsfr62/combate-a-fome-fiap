import Image from "next/image"
import footerImg from "@pub/navbar-logo.png"
import { useRouter } from "next/router"

const Footer = () => {
    const router = useRouter()

    return (
        <div className="w-full h-auto flex border-t-2 border-primary-default px-8 md:px-16 py-12 text-sm items-center justify-between">
            <div className="flex flex-col">
                <p className="text-primary-default font-bold">LINKS ÚTEIS</p>
                <ul className="flex flex-col text-xs mt-4 text-primary-default gap-1">
                    <li className="cursor-pointer hover:opacity-90 ease-linear transition-all" onClick={() => router.push("/")}>- Informações</li>
                    <li className="cursor-pointer hover:opacity-90 ease-linear transition-all" onClick={() => router.push("/contato")}>- Contato</li>
                    <li className="cursor-pointer hover:opacity-90 ease-linear transition-all" onClick={() => router.push("/sobre")}>- Sobre nós</li>
                    <li className="cursor-pointer hover:opacity-90 ease-linear transition-all" onClick={() => router.push("/doe")}>- Doe agora</li>
                </ul>
            </div>
            <Image src={footerImg} alt="img" />
        </div>
    )
}

export default Footer
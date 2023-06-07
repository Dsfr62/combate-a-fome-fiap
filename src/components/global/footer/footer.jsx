import Image from "next/image"
import footerImg from "@pub/vida-nova-logo.png"
import { useRouter } from "next/router"
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs"

const Footer = () => {
    const router = useRouter()

    return (
        <div className="bg-primary-default">
            <div className="max-w-[1440px] mx-auto w-full h-auto flex flex-col md:grid md:grid-cols-3 px-8 md:px-16 py-8 text-sm justify-between">
                <div className="flex flex-col w-full">
                    <p className="text-white font-bold text-lg">LINKS ÚTEIS</p>
                    <ul className="flex flex-col mt-4 text-white gap-1">
                        <li className="cursor-pointer hover:opacity-90 ease-linear transition-all"
                            onClick={() => router.push("/")}>- Informações
                        </li>
                        <li className="cursor-pointer hover:opacity-90 ease-linear transition-all"
                            onClick={() => router.push("/contato")}>- Contato
                        </li>
                        <li className="cursor-pointer hover:opacity-90 ease-linear transition-all"
                            onClick={() => router.push("/sobre")}>- Sobre nós
                        </li>
                        <li className="cursor-pointer hover:opacity-90 ease-linear transition-all"
                            onClick={() => router.push("/doe")}>- Doe agora
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col w-full items-start md:items-center my-6 md:my-0">
                    <p className="text-white font-bold text-lg mb-2">NOSSO CONTATO</p>
                    <p className="text-lg text-white font-light truncate">Email: contato@vidanova.com.br</p>
                    <p className="text-lg text-white font-light">Instagram: @vidanova</p>
                </div>
                <div className="w-full flex flex-col">
                    <p className="text-white font-bold text-lg mb-2 p-0 md:px-4 text-start md:text-end">REDES
                        SOCIAIS</p>
                    <div className="flex gap-2 p-0 md:px-4 self-start md:self-end">
                        <BsInstagram size={40} className="p-2 rounded-2xl bg-white text-primary-default"/>
                        <BsLinkedin size={40} className="p-2 rounded-2xl bg-white text-primary-default"/>
                        <BsFacebook size={40} className="p-2 rounded-2xl bg-white text-primary-default"/>
                    </div>
                    <p className="font-bold text-white text-lg p-0 md:px-4 mt-8 text-start md:text-end">2023 Vida
                        Nova</p>
                </div>
                <Image src={footerImg} alt="img" className="col-span-3 place-self-center"/>
            </div>
        </div>
    )
}

export default Footer
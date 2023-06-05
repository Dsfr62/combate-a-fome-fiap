import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()

  return (
    <div className="w-full flex h-24 justify-between items-center px-6 bg-primary">
        <p className="w-[20%]">Logo</p>
        <div className="w-[100%] flex gap-2 items-center justify-end">
          <p 
          className={`${router.pathname == "/" ? "navbar-item-selected" : "navbar-item"}`}>
            Início
          </p>
          <p 
          className={`navbar-item`}>
            Sobre nós
          </p>
          <p 
          className={`navbar-item`}>
            Contato
          </p>
          <p 
          className={`navbar-item`}>
            Parceiros
          </p>
          <p 
          className={`navbar-item`}>
            Doe agora
          </p>
        </div>  
    </div>
  )
}

export default Navbar
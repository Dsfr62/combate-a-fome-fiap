import { useState } from "react"
import { createMessage } from "../../scripts/script"

export default function Contato() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [celular, setCelular] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [motivo, setMotivo] = useState("")

  async function handleFormulario(e) {
    e.preventDefault()
    await createMessage([nome, email, celular, empresa, motivo])
  }

  return (
  <form onSubmit={e => handleFormulario(e)} className="max-w-[1440px] mx-auto w-full flex flex-col h-auto py-10 px-4 md:px-12 gap-4" id="Form-Default">
    <p className="text-3xl font-medium mb-2 col-span-2 text-primary-default">Entre em contato conosco</p>
    <div className="flex flex-col gap-1">
        <label className="font-light text-lg">Nome Completo <span className="text-fourth-default font-semibold">*</span></label>
        <input type="text" className="p-2 rounded-lg bg-fifth-default text-primary-dark font-light text-sm" onChange={e => setNome(e.target.value)} required={true}/>
    </div>
    <div className="flex flex-col gap-1">
        <label className="font-light text-lg">Email <span className="text-fourth-default font-semibold">*</span></label>
        <input type="text" className="p-2 rounded-lg bg-fifth-default text-primary-dark font-light text-sm" onChange={e => setEmail(e.target.value)} required={true}/>
    </div>
    <div className="flex flex-col gap-1">
        <label className="font-light text-lg">Celular <span className="text-fourth-default font-semibold">*</span></label>
        <input type="text" className="p-2 rounded-lg bg-fifth-default text-primary-dark font-light text-sm" onChange={e => setCelular(e.target.value)} required={true}/>
    </div>
    <div className="flex flex-col gap-1">
        <label className="font-light text-lg">Empresa</label>
        <input type="text" className="p-2 rounded-lg bg-fifth-default text-primary-dark font-light text-sm"  onChange={e => setEmpresa(e.target.value)}/>
    </div>
    <div className="flex flex-col gap-1 col-span-2">
        <label className="font-light text-lg">Motivo do contato</label>
        <textarea type="text" className="p-2 rounded-lg bg-fifth-default text-primary-dark font-light text-sm" onChange={e => setMotivo(e.target.value)}></textarea>
    </div>
    <button type="submit" className="col-span-2 w-[30%] xl:w-[15%] rounded-full bg-secondary-default p-2 text-center font-bold text-white mt-4 text-lg" >Enviar</button>
  </form>
  )
}

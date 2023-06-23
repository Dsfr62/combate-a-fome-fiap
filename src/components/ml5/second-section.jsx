import {
  MdSchedule,
  MdComputer,
  MdHandyman,
  MdSearch,
  MdScience,
} from "react-icons/md";

const SecondSectionML5 = () => {
  return (
    <div className="lg:container px-4 mt-4 mb-4 lg:mt-8 lg:mb-8">
      <h1 className="px-4 text-2xl font-bold text-center">
        QUAIS OS DIFERENCIAIS DO CURSO?
      </h1>
      <div className="flex flex-col py-8 gap-4 lg:flex-row">
        <div className="w-full py-4 px-2 flex flex-col gap-4 align-text-top text-center bg-primary-default text-white rounded-[8px] hover:-translate-y-2 hover:shadow-md hover:shadow-primary-dark transition-transform">
          <p>
            <MdSchedule className="text-primary-light text-5xl m-auto" />
          </p>
          <h2 className="text-2xl font-bold">Carga horária</h2>
          <p className="text-md">
            Maior carga horária do Brasil, com 248h, divididas em módulos
            presenciais e aulas EAD
          </p>
        </div>
        <div className="w-full py-4 px-2 flex flex-col gap-4 align-text-top text-center bg-primary-default text-white rounded-[8px] hover:-translate-y-2 hover:shadow-md hover:shadow-primary-dark transition-transform">
          <p>
            <MdSearch className="text-primary-light text-5xl m-auto" />
          </p>
          <h2 className="text-2xl font-bold">Análise de perfil</h2>
          <p className="text-md">
            Módulo de Análise de Perfil Comportamental – CIS Assessment.
          </p>
        </div>
        <div className="w-full py-4 px-2 flex flex-col gap-4 align-text-top text-center bg-primary-default text-white rounded-[8px] hover:-translate-y-2 hover:shadow-md hover:shadow-primary-dark transition-transform">
          <p>
            <MdHandyman className="text-primary-light text-5xl m-auto" />
          </p>
          <h2 className="text-2xl font-bold">Ferramentas</h2>
          <p className="text-md">
            Ferramentas poderosas e comprovadas para aumentar a sua performance
            em gestão empresarial
          </p>
        </div>
        <div className="w-full py-4 px-2 flex flex-col gap-4 align-text-top text-center bg-primary-default text-white rounded-[8px] hover:-translate-y-2 hover:shadow-md hover:shadow-primary-dark transition-transform">
          <p>
            <MdScience className="text-primary-light text-5xl m-auto" />
          </p>
          <h2 className="text-2xl font-bold">Neurociência</h2>
          <p className="text-md">
            Módulo de Neurociência com pesquisador e professor certificado
          </p>
        </div>
        <div className="w-full py-4 px-2 flex flex-col gap-4 align-text-top text-center bg-primary-default text-white rounded-[8px] hover:-translate-y-2 hover:shadow-md hover:shadow-primary-dark transition-transform">
          <p>
            <MdComputer className="text-primary-light text-5xl m-auto" />
          </p>
          <h2 className="text-2xl font-bold">Sistema</h2>
          <p className="text-md">Sistema de Coaching exclusivo da Febracis.</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionML5;

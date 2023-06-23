import {
  MdApartment,
  MdWorkspacePremium,
  MdSchool,
  MdBadge,
} from "react-icons/md";

const FourthSectionML5 = () => {
  return (
    <div className="lg:container px-4 mt-4 mb-4 lg:mt-8 lg:mb-8">
      <h1 className="px-4 text-2xl font-bold text-center">
        POR QUE FAZER ML5?
      </h1>
      <div className="flex flex-col py-8 gap-4 lg:flex-row">
        <div className="w-full py-4 px-4 flex flex-col gap-4 align-text-top text-left bg-primary-default text-white rounded-[8px] hover:-translate-y-2 hover:shadow-md hover:shadow-primary-dark transition-transform lg:text-left">
          <p>
            <MdApartment className="text-primary-light text-5xl" />
          </p>
          <h2 className="text-2xl font-medium">
            Formação em Business Coaching
          </h2>
          <p className="text-sm">
            40 unidades espalhadas pelo Brasil, que juntas somam 55 mil m²;
            <br />
            <br />+ de 1.300 colaboradores diretos ligados à Febracis;
            <br />+ de 70 milhões de pessoas impactadas pela metodologia;
            <br />+ de 1 milhão de seguidores no Facebook, somando o perfil do
            presidente Paulo Vieira (1 milhão) e a página da Febracis Coaching.
          </p>
        </div>
        <div className="w-full py-4 px-4 flex flex-col gap-4 align-text-top text-left bg-primary-default text-white rounded-[8px] hover:-translate-y-2 hover:shadow-md hover:shadow-primary-dark transition-transform lg:text-left">
          <p>
            <MdBadge className="text-primary-light text-5xl" />
          </p>
          <h2 className="text-2xl font-medium">
            Possibilidade de atuação imediata como coach
          </h2>
          <p className="text-sm">
            Você será, logo após o primeiro módulo, incentivado a dar início aos
            atendimentos como coach (pro bono), colocando em prática as técnicas
            e ferramentas poderosas que aprendeu durante as aulas;
            <br />
            <br />
            Além da possibilidade imediata de dar início à uma nova carreira,
            você também pode utilizar as técnicas e ferramentas aprendidas para
            potencializar a sua carreira atual e os seus negócios.
          </p>
        </div>
        <div className="w-full py-4 px-4 flex flex-col gap-4 align-text-top text-left bg-primary-default text-white rounded-[8px] hover:-translate-y-2 hover:shadow-md hover:shadow-primary-dark transition-transform lg:text-left">
          <p>
            <MdWorkspacePremium className="text-primary-light text-5xl" />
          </p>
          <h2 className="text-2xl font-medium">
            Sistema de Coaching exclusivo da Febracis
          </h2>
          <p className="text-sm">
            Plataforma elaborada pela Febracis para auxiliar sua atuação como
            coach; Facilita o contato com os clientes, dando excelência a todo o
            processo;
            <br />
            <br />
            Acesso a sessões de coaching gravadas com trainers Febracis; Você
            terá acesso gratuito ao Sistema de Coaching durante a realização dos
            módulos 1 e 2 da sua turma.
          </p>
        </div>
        <div className="w-full py-4 px-4 flex flex-col gap-4 align-text-top text-left bg-primary-default text-white rounded-[8px] hover:-translate-y-2 hover:shadow-md hover:shadow-primary-dark transition-transform lg:text-left">
          <p>
            <MdSchool className="text-primary-light text-5xl" />
          </p>
          <h2 className="text-2xl font-medium">
            Ministrar cursos exclusivos da Febracis
          </h2>
          <p className="text-sm">
            Você pode também ser um ministrante oficial dos cursos: O Poder da
            Ação, O Poder da Autorresponsabilidade, Poder e Alta Performance e
            Foco na Prática; Grandes oportunidades de dar início à sua carreira
            como coach;
            <br />
            <br />
            Os cursos são inspirados em best-sellers do Master Coach Paulo
            Vieira e Camila Vieira; Todos ministrados por trainers Febracis e
            com carga-horária 16h.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSectionML5;

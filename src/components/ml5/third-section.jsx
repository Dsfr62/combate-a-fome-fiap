import { MdPunchClock } from "react-icons/md";

const ThirdSectionML5 = () => {
  return (
    <div className=" bg-primary-default">
      <div className="lg:container px-4 py-8 mt-4 mb-4 lg:mt-8 lg:mb-8">
        <div className="flex flex-col justify-between items-center gap-3 text-center lg:flex-row lg:text-left ">
          <MdPunchClock className="text-primary-light text-5xl self-center" />
          <h2 className="text-primary-light font-bold text-xl">
            CARGA HORÁRIA: 248 HORAS
          </h2>
          <p className="text-white text-sm lg:max-w-xl">
            Imersão composta por curso presencial de 8 dias (dois módulos de 4
            dias cada, com um intervalo entre os módulos), projeto prático do
            curso, atividades complementares e encontros não presenciais.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionML5;

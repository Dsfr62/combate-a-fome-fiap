import { Button } from "@material-tailwind/react";

const FirstSectionML5 = () => {
  return (
    // MAIN CONTAINER
    <div>
      {/* HEADER */}
      <div className="bg-primary-default py-6">
        {/* CONTENT */}
        <div className="lg:container px-4 mt-4 mb-4">
          <h1 className="text-3xl font-bold text-primary-light text-center lg:text-left">
            Formação Profissional em Business Coaching – ML5
          </h1>
        </div>
      </div>
      {/* HERO */}
      <div className="flex flex-col px-4 mt-4 mb-4 lg:flex-row lg:justify-between lg:container lg:mt-8 lg:mb-8">
        <div className="flex flex-col justify-between lg:max-w-[50%]">
          <p className="text-base text-[#333333] text-left lg:text-justify">
            A Formação Profissional em Business Coaching – ML5 é um programa
            completo, com técnicas e ferramentas voltadas para quem busca a
            excelência e a alta performance na área business, no mundo dos
            negócios. O curso, assim como a Formação Internacional em Coaching
            Integral Sistêmico, proporciona imersão na metodologia criada por
            Paulo Vieira, PhD em Business Administration e autor do best-seller
            “O Poder da Ação”, mas traz uma abordagem específica voltada para o
            business.
          </p>
          <p className="text-base text-[#333333] text-left mt-4 md:visible lg:text-justify">
            Ao concluir a Formação Profissional em Business Coaching – ML5, o
            aluno estará pronto para conduzir com excelência sessões de coaching
            e palestras na área. Dessa forma, o curso se destina a pessoas que
            desejam realizar transição de carreira – se tornando Business Coach
            -, a pessoas que pretendem aprender ferramentas e técnicas com as
            quais possam alcançar a excelência e a alta performance em suas
            carreiras no mundo dos negócios e a coaches formados pela Febracis
            que buscam maiores conhecimentos para atuar na área business.
          </p>
          <Button
            className="bg-primary-light mt-4 align-middle w-full"
            href="/contato"
            target="_self"
          >
            Solicite Atendimento
          </Button>
        </div>
        <div className="w-full mt-4 max-w-xl lg:mt-0 lg:h-[400px]">
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/foesu8C2gq8"
            loading="lazy"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FirstSectionML5;

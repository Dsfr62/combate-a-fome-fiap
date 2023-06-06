import Layout from "@/components/global/layout";

export default function Home() {
  return (
  <Layout>
    <div className="h-screen flex flex-col justify-center items-start md:items-center px-12 lg:px-20">
      <p className="text-3xl md:text-6xl xl:text-7xl font-bold text-primary-default">
        VIDA NOVA
      </p>
      <p className="text-xl md:text-3xl xl:text-4xl font-bold text-primary-default text-justify mt-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit est a aliquam ullamcorper. Curabitur quam magna, scelerisque eget ultrices.
      </p>
      <p className="text-base md:text-lg xl:text-xl font-light text-primary-default text-justify mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit est a aliquam ullamcorper. Curabitur quam magna, scelerisque eget ultrices.
      </p>
      <button type="button" 
      className="bg-secondary-default rounded-full font-bold text-white md:text-lg xl:text-xl py-1 text-center w-[50%] lg:w-[30%] xl:w-[25%] mt-8">
        SAIBA MAIS
      </button>
    </div>
  </Layout>
  )
}

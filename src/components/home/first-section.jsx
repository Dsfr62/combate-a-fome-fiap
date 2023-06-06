

const HomeFirstSection = () => {
    return (
    <div className="h-screen flex flex-col justify-evenly items-start md:items-center px-12 py-20 lg:py-28 xl:py-36 lg:px-20">
        <p className="text-3xl md:text-6xl xl:text-7xl font-bold text-primary-default">
          VIDA NOVA
        </p>
        <p className="text-xl md:text-3xl xl:text-4xl font-bold text-primary-default text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit est a aliquam ullamcorper. Curabitur quam magna, scelerisque eget ultrices.
        </p>
        <p className="text-base md:text-lg xl:text-xl font-light text-primary-default text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit est a aliquam ullamcorper. Curabitur quam magna, scelerisque eget ultrices.
        </p>
        <button type="button" 
        className="bg-secondary-default rounded-full font-bold text-white md:text-lg xl:text-xl py-1 text-center w-[50%] lg:w-[30%] xl:w-[25%]">
          SAIBA MAIS
        </button>
    </div>
    )
}

export default HomeFirstSection
import { hero } from "../assets";

function Hero() {
  return (
    <div>
      <section className="bg-amber-100 text-amber-950">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Where Stories Come to Life
            </h1>
            <p className="max-w-2xl mb-6 font-medium text-amber-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Welcome to BookCharm, your go-to destination for discovering and
              owning captivating eBooks that inspire, entertain, and enlighten.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-7 py-3 text-base font-medium text-amber-950 text-center border border-amber-950 rounded-full hover:bg-amber-950 hover:text-white hover:text-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Explore
            </a>
          </div>
          <div className="lg:mt-16 lg:col-span-5 lg:flex justify-center items-center ">
            <img src={hero} alt="mockup" className="rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

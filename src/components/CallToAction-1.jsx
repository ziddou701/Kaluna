const CallToAction1 = () => {
  return (
    <section class="flex flex-col items-center justify-cente w-screen p-5 mt-20 mx-auto max-md:mx-2 max-md:px-2 max-w-5xl text-center md:rounded-2xl py-20 md:py-24 bg-gray-700 bg-cover bg-center bg-no-repeat">
        <h1 class="p-5 text-3xl md:text-4xl font-medium text-white max-w-3xl text-center">Empower Your Sales & Marketing with a Next-Gen AI Workforce</h1>
        <div class="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-indigo-600"></div>
        <p class="w-full md:w-5/6 p-5 text-sm md:text-base text-white">
            Leverage AI Agents for real-time calling and unified multi-channel engagement, optimizing customer interactions at scale.
        </p>
        <div className="flex flex-row gap-4 mt-5 mx-auto w-full justify-center">
            <button class="px-8 py-2.5 mt-4 text-sm bg-gradient-to-r from-indigo-600 to-violet-500 hover:scale-105 transition duration-300 text-white rounded-full">
                Get Started
            </button>
            <button class="px-8 py-2.5 mt-4 text-sm bg-transparent border-1 hover:scale-105 transition duration-300 text-white rounded-full">
                Explore Solutions
            </button>
        </div>
    </section>
  );
};

export default CallToAction1;
const CallToAction1 = () => {
  return (
    <section className="max-w-3xl flex flex-col items-center justify-center p-5 mt-10 md:mt-16 mx-auto max-md:mx-2 max-md:px-2 text-center rounded-2xl md:rounded-4xl py-20 md:py-24 bg-linear-to-t from-zinc-600/50 to-transparent backdrop-blur-xs shadow-2xl">
         <div className="w-fit px-4 py-1 border rounded-full border-zinc-100/30 bg-black/10 backdrop-blur-lg text-sm text-zinc-50/80">
            <p>Managed IT Services</p>
        </div>
        <h1 className="p-5 text-3xl md:text-4xl font-medium text-white md:w-lg text-center">Reliable IT Support for Growing Businesses</h1>
        <div className="h-0.75 w-32 my-1 bg-linear-to-l from-transparent to-indigo-600"></div>
        <p className="w-full md:w-xl p-5 text-sm md:text-base text-white/80">
            We handle your IT, security and support needs, so you can focus on growing your business confidantly.
        </p>
        <div className="flex flex-row gap-4 mt-5 mx-auto w-fit justify-center">
            <button className="w-1/2 md:w-fit px-8 py-2.5 mt-4 text-sm shadow-sm bg-linear-to-r from-indigo-600/50 to-violet-500/50 backdrop-blur-lg hover:scale-105 transition duration-200 text-white rounded-full">
                Book A Free Consultation
            </button>
            <button className="w-1/2 md:w-fit px-8 py-2.5 mt-4 text-sm shadow-sm bg-linear-to-bl from-transparent to-zinc-50/20 border border-zinc-100/30 backdrop-blur-lg hover:scale-105 transition duration-200 text-white rounded-full">
                See Our Services
            </button>
        </div>
    </section>
  );
};

export default CallToAction1;
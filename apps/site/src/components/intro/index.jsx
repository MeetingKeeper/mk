
const Intro = () => {
  return (
    <section className="pb-10 pt-20 md:pt-32 w-full h-1527 relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:block h-full w-full gradient-circle" />
      <div className="container h-full mx-auto">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex flex-col items-center justify-items-center">
            <h1 className="text-jacarta-700 font-bold font-display mb-6 text-center text-5xl text-white md:text-left lg:text-5xl xl:text-6xl">
              Streamlining User Meetings for Optimal Efficiency.
            </h1>
            <p className="dark:text-jacarta-200 mb-8 text-center text-white text-lg md:text-left">
              PlanMeet aims to streamline the meeting process, ensuring that valuable time spent in meetings is utilized effectively.
            </p>
          </div>
          <div className="col-span-6 xl:col-span-6">
            <div className="relative text-center md:pl-8 md:text-right">
              <img
                src="/assets/images/logo.png"
                alt=""
                className="inline-block w-72  sm:w-full lg:w-[24rem] xl:w-[35rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

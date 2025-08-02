const Hero = () => {
  return (
    <div className="font-main my-40 flex flex-col items-center justify-center">
      <h1 className="max-w-4xl bg-neutral-500 bg-gradient-to-b from-neutral-50 bg-clip-text text-center text-8xl leading-tight font-bold tracking-tighter text-transparent">
        Unleash the power of intuitive finance
      </h1>

      <p className="mx-auto mt-10 max-w-3xl text-center text-xl leading-snug font-semibold text-neutral-400">
        Say goodbye to the <span className="text-primary">outdated </span>
        financial tools. Every small business owner, regardless of the
        background, can now manage their business like a pro.{" "}
        <span className="text-primary">Simple</span>.{" "}
        <span className="text-sky">Intuitive</span>. And{" "}
        <span className="text-yellow">never boring</span>.
      </p>

      <div className="btn mt-8 flex w-full max-w-lg items-center justify-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="focus:ring-primary mr-4 flex-1 cursor-pointer rounded-xl border border-neutral-600 px-4 py-2 text-xl text-white transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:outline-none"
        />
        <button className="relative cursor-pointer rounded-full border-1 border-neutral-600 px-4 py-2 text-xl font-bold text-neutral-500 hover:text-neutral-200">
          Join the waitlist
          <div className="via-primary absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent to-transparent"></div>
        </button>
      </div>
    </div>
  );
};

export default Hero;

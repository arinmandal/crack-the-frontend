import React from "react";

const HeroSection = () => {
  return (
    <div className='px-4 py-2 flex flex-col items-center w-full my-20'>
      <div className='badge border rounded-full border-neutral-200 bg-neutral-100 text-neutral-600 py-1 px-4 text-xs font-bold'>
        QSBS just got better in July 2025
      </div>

      <section>
        <h1 className='mt-10 font-medium text-5xl text-black tracking-tighter text-center'>
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className='font-small text-[#595959] mt-5 text-lg max-w-md mx-auto text-center'>
          Automated bookkeeping, effortless tax filing, real‑time insights. Set
          up in 10 mins. Back to building by 12:10am.
        </p>

        <div className='hero-btn text-center mt-6'>
          <button className='bg-[#2679F3] hover:bg-[#2262C7] text-sm text-white font-semibold rounded-md px-4 py-2 cursor-pointer shadow-lg text-shadow-md tracking-wide mr-2'>
            Start free trial
          </button>
          <button className='hover:bg-[#d2d9e2] text-sm text-black font-semibold rounded-md px-4 py-2 cursor-pointer tracking-wide'>
            Pricing &rarr;
          </button>
        </div>

        {/* Blue badge for Delaware C-Corps */}
        <div className='flex justify-center mt-4'>
          <span className='text-xs px-3 py-1 font-medium text-gray-400'>
            Currently for US-based Delaware C-Corps.
          </span>
        </div>
      </section>

      <section className='relative w-full mt-10'>
        {/* Fixed gradient divider */}
        <div className='h-px w-full absolute inset-x-0 top-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0'></div>
        <div className='image mx-auto max-w-5xl relative z-10'>
          <img
            src='/hero-ui-v5.webp'
            alt='hero-image'
            width={1000}
            height={1000}
            className='w-full rounded-md object-cover'
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

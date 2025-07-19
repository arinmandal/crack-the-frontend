const Hero = () => {
  return (
    <div className='hero-root'>
      <div className='badge'>
        <span>What are the early-stage tax requirements?</span>
        <svg width='15' height='15' fill='none'>
          <path
            stroke='#34353aff'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-opacity='.5'
            stroke-width='1'
            d='M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5'
          ></path>
        </svg>
      </div>
      <h1 className='hero-title'>Magically simplify accounting and taxes</h1>

      <p className='hero-subtitle'>
        Automated bookkeeping, effortless tax filing, real‑time insights. Set up
        in 10 mins. Back to building by 12:30am.
      </p>

      <div className='hero-cta'>
        <button className='btn'>Start free trail</button>
        <button className='btn-secondary'>
          <span>Pricing</span>
          <svg width='15' height='15' fill='none'>
            <path
              stroke='#34353aff'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-opacity='.5'
              stroke-width='1'
              d='M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;

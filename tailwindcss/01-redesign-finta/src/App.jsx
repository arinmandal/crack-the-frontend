import Container from "./components/Container";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
const App = () => {
  return (
    <div className='h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]'>
      <div className='max-w-5xl mx-auto absolute inset-0 h-full w-full'>
        <div className='absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent' />
        <div className='absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent' />

        <Container>
          <Navbar />
          <HeroSection />
        </Container>
      </div>
    </div>
  );
};

export default App;

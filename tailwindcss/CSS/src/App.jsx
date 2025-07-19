import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Components from "./Components/Components";
function App() {
  return (
    <div className='layout'>
      <div className='line-container'>
        <div className='right-line'></div>
        <div className='left-line'></div>
      </div>
      <Components>
        <Navbar />
        <Hero />
      </Components>

      <div className='image-container'>
        <div className='horizontal-line'></div>
        <img src='hero-ui-v5.webp' alt='hero-image' className='hero-image' />
      </div>
    </div>
  );
}

export default App;

import Header from './components/Header.jsx';
import gradient from './assets/gradient.png';
import Hero from './components/Hero.jsx';

export default function App() {
  return (
    <main>
      {/* Gradient Image */}
      <img className="absolute top-0 right-0 
      opacity-60 -z-1" src={gradient} 
      alt="Gradient-img" />

      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute 
      top-[20%] right-[-5%] shadow-[0_0_900x_20_#e99b63] 
      -rotate-[30deg] -z-10"></div>

      <Header />
      <Hero />

    </main>
  )
}
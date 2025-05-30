import Textos from "./components/Textos"
import Footer from "./components/Footer";

function App() {
  return (

    <div className="min-h-screen bg-white bg-img">

      <div className="text-title mb-5 p-5">
        <h1 className="text-3xl text-center font-medium pb-2 text-white md:text-black">Textos</h1>
        <p className="font-medium italic text-center text-gray-400">Poemas criados por: <a href="https://www.instagram.com/_ph.pinheiro_/" target="_blank" className="underline">Pedro Henrique</a></p>
      </div>

      <Textos />

      <Footer />
    </div>
  );
}

export default App;

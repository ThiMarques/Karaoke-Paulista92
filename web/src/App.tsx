import { Resevation } from './Components/Resevation'

function App() {
  return (
    <div className="App">
      <header className="text-[#44cd5e] ">
        <h1 className="">Karaoke Paulista</h1>
      </header>
      <section className="flex-col grid justify-items-stretch place-content-center">
      <p className=" text-title-color flex justify-self-center p-8">
          Procurando um lugar pra se divertir e ter uma experiência única com os seus amigos?
        </p>
        <p className="text-[#757575] flex justify-self-center p-8">
          Aqui você encontra os melhores serviços de karaokê box em São Paulo !
          Salas exclusivas aos grupos, com ar condicionado, iluminação personalizada, atendimento de bar e repertório contendo canções tanto nacionas quanto internacionais.
        </p>

        {/* <Resevation /> */}
      </section>
      
    </div>
  );
}

export default App;

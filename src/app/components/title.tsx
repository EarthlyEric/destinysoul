export default function Title(Props: { title: string }) {
    return (
      <section id="#title" className="w-full h-screen flex place-content-center items-center bg-[url('/resources/img/bg.gif')] bg-left bg-cover bg-dunes">/
        <div className="px-10 grid grid-cols-1 gap-4 place-content-center h-48 text-center rounded-xl backdrop-blur-sm bg-white/30">
          <div>
            <h1 className="text-6xl font-bold">{Props.title}</h1>
          </div>
        </div>
      </section>
    );
  }
  
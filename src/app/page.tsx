export const runtimes = "edge";

export default function Home() {
  return (
    <div>
      <section id="#title" className="w-full h-screen flex place-content-center items-center bg-[url('/images/bg.gif')] bg-left bg-cover bg-dunes">
        <div className="px-10 py-2 grid grid-cols-1 gap-4 h-1/2 place-content-center text-center rounded-xl backdrop-blur-sm bg-white/30">
          <div className="text-black text-6xl font-bold">
            <h1>DestinySoul Studio</h1>
          </div>
          <div>
            <button className="text-black border-rose-50 rounded-full">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

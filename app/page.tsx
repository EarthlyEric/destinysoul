import { FaAngleDoubleDown } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url('/assets)" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">👋, Hello there !</h1>
          <p className="mb-5 text-xl font-bold">Welcome to DestinySoul Studio&apos;s Website 🎉</p>
          <p className="mb-5">

          </p>
          <button className="btn btn-primary">
            <FaAngleDoubleDown className="w-6 h-6 mr-2" />
            Scroll Down
            </button>
        </div>
      </div>  
    </div>
    );
}
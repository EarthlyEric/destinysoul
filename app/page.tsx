import { useTranslations } from "next-intl";
import { FaAngleDoubleDown } from "react-icons/fa";


export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url('')" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{t('hero.title')}</h1>
          <p className="mb-5 text-xl font-bold">{t('hero.subtitle')}</p>
          <p className="mb-5">
            {/* wait to fill text */}
          </p>
          <button className="btn btn-primary">
            <FaAngleDoubleDown className="w-6 h-6 mr-2" />
            {t('hero.button')}
            </button>
        </div>
      </div>  
    </div>
    );
}
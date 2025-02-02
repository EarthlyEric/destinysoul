import { useTranslations } from "next-intl";
import { FaAngleDoubleDown, FaCheckCircle, FaRegEdit } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { RiEditCircleFill } from "react-icons/ri";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const storyevents = [
    { date: t('storyevents.1.date'), text: t('storyevents.1.text'), icon: <FaCheckCircle className="text-primary w-6 h-6" /> },
    { date: t('storyevents.2.date'), text: t('storyevents.2.text'), icon: <FaRegCirclePlay className="text-primary w-6 h-6" /> },
    { date: t('storyevents.3.date'), text: t('storyevents.3.text'), icon: <RiEditCircleFill className="text-primary w-6 h-6" /> },
    { date: t('storyevents.4.date'), text: t('storyevents.4.text'), icon: <RiEditCircleFill className="text-primary w-6 h-6" /> },
    { date: t('storyevents.5.date'), text: t('storyevents.5.text'), icon: <FaCheckCircle className="text-primary w-6 h-6" /> },
    { date: t('storyevents.6.date'), text: t('storyevents.6.text'), icon: <FaRegEdit className="text-primary w-6 h-6" /> },
    { date: t('storyevents.7.date'), text: t('storyevents.7.text'), icon: <RiEditCircleFill className="text-primary w-6 h-6" /> }
  ];
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url('/assets/images/hero.webp')" }}
      >
        <div className="hero-overlay bg-gradient-to-b from-transparent to-base-100"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-auto">
            <h1 className="mb-5 lg:text-9xl text-5xl font-bold">
              {t("welcome.title")}
            </h1>
            <p className="mb-5 text-xl font-bold">{t("welcome.subtitle")}</p>
            <p className="mb-5">{/* wait to fill text */}</p>
            <a href="#about-us" className="btn btn-primary animate-bounce">
              <FaAngleDoubleDown className="w-6 h-6 mr-2" />
              {t("welcome.button")}
            </a>
          </div>
        </div>
      </div>
      <div id="about-us" className="hero min-h-screen h-auto bg-base-100">
        <div className="hero-overlay"></div>
        <div className="hero-content mx-auto flex flex-col">
          <h1 className="card-title text-4xl font-bold text-center lg:text-right">
            {t('storyevents.title')}
          </h1>
          <p className="text-center lg:text-right">{t('storyevents.subtitle')}</p>
          <div className="card bg-base-300 w-full max-auto shadow-2xl border-2 border-blue-300 flex flex-row">
            <div className="card-body p-2 items-start">
              <ul className="timeline timeline-vertical">
                {storyevents.map((event, index) => (
                  <li key={index}>
                    {index !== 0 && <hr className="bg-primary" />}
                    <div className="timeline-start">{event.date}</div>
                    <div className="timeline-middle">{event.icon}</div>
                    <div className="timeline-end timeline-box">{event.text}</div>
                    {index !== storyevents.length - 1 && <hr className="bg-primary" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

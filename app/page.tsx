'use client'
import { useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";
import { FaAngleDoubleDown, FaDotCircle } from "react-icons/fa";


export default function HomePage() {
  const t = useTranslations("HomePage");
  const storyevents = [
    { date: t('storyevents.1.date'), text: t('storyevents.1.text') },
    { date: t('storyevents.2.date'), text: t('storyevents.2.text') },
    { date: t('storyevents.3.date'), text: t('storyevents.3.text') },
    { date: t('storyevents.4.date'), text: t('storyevents.4.text') },
    { date: t('storyevents.5.date'), text: t('storyevents.5.text') },
    { date: t('storyevents.6.date'), text: t('storyevents.6.text') },
    { date: t('storyevents.7.date'), text: t('storyevents.7.text') }
  ];
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url('/assets/images/welcome.webp')" }}
      >
        <div className="hero-overlay bg-gradient-to-b from-transparent to-base-100"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-auto">
            <h1 className="mb-5 lg:text-9xl text-6xl font-bold">
              {t("welcome.title")}
            </h1>
            <p className="mb-5 text-xl font-bold">
              {t("welcome.subtitle.1")}
            </p>
            <div className="mb-5 text-xl font-bold">
              <Typewriter
                options={{
                  strings: [
                    t("welcome.subtitle.2"),
                    t("welcome.subtitle.3"),
                    t("welcome.subtitle.4"),
                    t("welcome.subtitle.5"),
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <a href="#our-story" className="btn btn-primary animate-bounce">
              <FaAngleDoubleDown className="w-6 h-6 mr-2" />
              {t("welcome.button")}
            </a>
          </div>
        </div>
      </div>
      <div id="our-story" className="hero min-h-screen bg-base-100">
        <div className="hero-overlay"></div>
        <div className="hero-content flex flex-col">
          <h1 className="card-title text-4xl font-bold text-center lg:text-right">
            {t('storyevents.title')}
          </h1>
          <p className="text-center lg:text-right">{t('storyevents.subtitle')}</p>
          <div className="card bg-base-300 w-full max-auto shadow-2xl border-2 border-blue-300 flex flex-row">
            <div className="card-body p-2 items-start">
              <ul className="timeline timeline-vertical">
                {storyevents.map((event, index) => (
                  <li key={index}>
                    {index !== 0 && <hr className="bg-primary"/>}
                    <div className="timeline-start font-mono">{event.date}</div>
                    <div className="timeline-middle">
                      <FaDotCircle className="text-primary w-4 h-4" />
                    </div>
                    <div className="timeline-end timeline-box">{event.text}</div>
                    {index !== storyevents.length - 1 && <hr className="bg-primary"/>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="flex w-full">
            <div className="card bg-base-300 rounded-box grid w-1/2 h-full flex-grow place-items-center">
              <div className="card-title">title</div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card bg-base-300 rounded-box grid w-1/2 h-full flex-grow place-items-center">
              <div className="card-title">title</div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

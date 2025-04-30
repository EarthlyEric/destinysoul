import { useTranslations } from "next-intl";

export default function DevelopmentAlert(){
  const t = useTranslations('dev');
  return (
    <div className="bottom-0 left-0 w-full bg-blue text-white lg:text-base text-xs text-center py-1 shadow-md">
      {t('text')}
    </div>
  );
};



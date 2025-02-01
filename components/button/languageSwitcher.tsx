import { defaultLocale } from "@/i18n/config";
import { useEffect, useState } from "react";
import { HiTranslate } from "react-icons/hi";

export default function LanguageSwitcher() {
    const [currentLocale, setCurrentLocale] = useState(defaultLocale);
    const langList = [
        { label: '繁體中文', url: '#', locale: 'zh-TW' },
        { label: 'English', url: '#', locale: 'en-US' }
    ];
    
    useEffect(() => {
        const locale = document.cookie.split(';').find(row => row.startsWith('DS_LOCALE='))?.split('=')[1];
        if (!locale) {
            document.cookie = 'DS_LOCALE=' + defaultLocale + ';';
        } else {
            setCurrentLocale(locale);
        }
    }, []);
    
    const changeLang = (locale: string) => {
        document.cookie = `DS_LOCALE=${locale};`;
        window.location.reload();
    };

    return (
        <li>
            <details className="dropdown dropdown-end">
                <summary className="flex items-center cursor-pointer">
                    <HiTranslate className="w-7 h-7 mr-2 text-white" />
                </summary>
                <ul className="dropdown-content menu menu-compact p-2 shadow bg-gray-900 rounded-box w-40 mt-2">
                    {langList.map(lang => (
                        <li key={lang.locale}>
                            <button onClick={() => changeLang(lang.locale)} 
                                className={`btn btn-sm btn-ghost flex items-center w-full gap-2 ${currentLocale === lang.locale ? 'btn-disabled' : ''}`}>
                                <div className="badge badge-outline text-xs px-1">{lang.locale}</div>
                                {lang.label}
                            </button>
                        </li>
                    ))}
                    {langList.length > 3 && (
                        <li>
                            <button className="btn btn-sm btn-ghost flex items-center w-full gap-2 btn-disabled" disabled>
                                More languages available...
                            </button>
                        </li>
                    )}
                </ul>
            </details>
        </li>
    );
}

import { FaGithub } from "react-icons/fa";

export default function Footer() {
    const navItems = [
        { label: "EULA", href: "/eula" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/ToS" },
        { label: "Contact Us", href: "#contact-us" },
    ];
    const socialItems = [
        { label: "GitHub", href: "", icon: <FaGithub className="w-6 h-6"/> }
    ]
    return (
        <footer className="footer bg-gray-900 footer-center text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                {navItems.map((item) => (
                    <a key={item.label}
                        href={item.href}
                        className="btn btn-ghost btn-xs link link-hover link-primary"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            <div className="grid grid-flow-col gap-4">
                {socialItems.map((item) => (
                    <a key={item.label}
                        href={item.href}
                        className="btn btn-ghost btn-sm link link-hover link-primary px-1 py-1"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - DestinySoul Studio. All right reserved. </p>
                <p>Made by EarthlyEric6 with ❤️</p>
            </aside>
        </footer>
    );
};

"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Footer() {
    const tFooter = useTranslations('Footer');

    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 text-sm">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    &copy; {new Date().getFullYear()} {tFooter('rights')}
                </div>
                <div className="flex gap-6">
                    <Link href="/impressum" className="hover:text-white transition-colors">
                        {tFooter('imprint')}
                    </Link>
                    <Link href="/datenschutz" className="hover:text-white transition-colors">
                        {tFooter('privacy')}
                    </Link>
                </div>
            </div>
        </footer>
    );
}

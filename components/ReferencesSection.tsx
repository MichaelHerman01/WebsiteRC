"use client";

import Image from "next/image";
<<<<<<< HEAD
=======
import { useState } from "react";
>>>>>>> a80f2c38eb5d65fae8050f0095a5e20c548621ca
import { useTranslations } from "next-intl";

const references = [
    // Global Player & Halbleiter/Optik
    {
        name: "Carl Zeiss",
        alt: "Softwareentwicklung Automatisierung Referenz Carl Zeiss",
        src: "/Zeiss_logo.svg.png",
        placeholderText: "ZEISS",
    },
    {
        name: "Infineon",
        alt: "Prozesssteuerung Halbleiterindustrie Infineon",
        src: "/Infineon-Logo.svg.png",
        placeholderText: "Infineon",
    },
    {
        name: "KLA",
        alt: "SPS Software Engineering KLA Corporation",
        src: "/KLA.png",
        placeholderText: "KLA",
    },
    // Spezialisten & Industrie
    {
        name: "Hekuma",
        alt: "HMI Entwicklung Spritzgussmaschinen Hekuma",
        src: "", // Logo missing
        placeholderText: "HEKUMA",
    },
    {
        name: "Vistec",
        alt: "Elektronenstrahllithografie Steuerung Vistec",
        src: "/Vistec.png",
        placeholderText: "Vistec",
    },
    {
        name: "Freiberger",
        alt: "Compound Materials Prozessautomatisierung Freiberger",
        src: "/freiberger_logo-color.175x0.png",
        placeholderText: "Freiberger",
    },
    {
        name: "Omicron",
        alt: "Lasersysteme Software Steuerung Omicron",
        src: "/Omicron.png",
        placeholderText: "OMICRON",
    },
    // Medizintechnik & Forschung
    {
        name: "Gambro",
        alt: "Medizintechnik Dialyse Software Gambro",
        src: "/gambro-logo.png",
        placeholderText: "Gambro",
    },
    {
        name: "Seleon",
        alt: "Medizintechnik Software Dosiersysteme Seleon",
        src: "/seleon_Logo_white-1.png",
        placeholderText: "seleon",
        className: "bg-slate-800 p-2 rounded", // Added to handle likely white logo
    },
    {
        name: "TU Bergakademie Freiberg",
        alt: "Forschungsprojekt Automatisierung TU Bergakademie",
        src: "/TUBAF_Logo.svg.png",
        placeholderText: "TU Freiberg",
    },
];

export default function ReferencesSection() {
    const t = useTranslations('ReferencesSection');
<<<<<<< HEAD
=======
    const [isExpanded, setIsExpanded] = useState(false);
>>>>>>> a80f2c38eb5d65fae8050f0095a5e20c548621ca

    return (
        <section id="referenzen" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* The Trust Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                    {references.map((ref, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 h-32 ${ref.src ? '' : 'bg-slate-50'}`}
                        >
                            <div className={`relative w-full h-full flex items-center justify-center transition-all duration-300 ${ref.src ? 'filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105' : ''}`}>
                                {ref.src ? (
                                    <Image
                                        src={ref.src}
                                        alt={ref.alt}
                                        fill
                                        className={`object-contain ${ref.className || ''}`}
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                    />
                                ) : (
                                    <span className="font-display font-bold text-xl text-slate-400 group-hover:text-slate-900 transition-colors">
                                        {ref.placeholderText}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

<<<<<<< HEAD
=======
                <div className="mt-16 max-w-5xl mx-auto text-left">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative group hover:border-brand-primary/30 transition-colors duration-300">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-200 group-hover:bg-brand-primary transition-colors duration-300"></div>
                        <div className="p-8 md:p-10">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-3 relative">
                                        <Image
                                            src="/TUBAF_Logo.svg.png"
                                            alt="TU Bergakademie Freiberg"
                                            fill
                                            className="object-contain p-2"
                                            sizes="80px"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="bg-brand-primary/10 text-brand-primary text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                    Migration & Modernisierung
                                                </span>
                                                <span className="text-slate-400 text-sm">VGF-Kristallzuchtanlage</span>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                                                &quot;Die Migration der Software in eine moderne C# -basierte Windows-Applikation wurde sehr kurzfristig und zu unserer vollsten Zufriedenheit realisiert.&quot;
                                            </h3>

                                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                                                <div className="prose prose-slate text-slate-600 max-w-none space-y-4 leading-relaxed bg-slate-50/50 p-6 rounded-xl border border-slate-100">
                                                    <p>
                                                        Im Kristallzüchtungslabor der TU Bergakademie Freiberg existiert seit vielen Jahren eine Ofenanlage zur Züchtung von Halbleiterkristallen nach dem Vertical Gradient Freeze (VGF-) Verfahren, die für Forschungs- und Ausbildungszwecke eingesetzt wird.
                                                    </p>
                                                    <p>
                                                        Das VGF-Verfahren erfordert eine aufwändige Leistungs- und Temperaturregelung, die bisher von einem Windows 95-PC angesteuert wurde. Da bei dieser Konstellation durch den Ausfall des PC’s die Verfügbarkeit der Anlage gefährdet ist, benötigten wir eine Migration der Automatisierung auf einen modernen PC.
                                                    </p>
                                                    <p className="font-medium text-slate-800">
                                                        Die modernisierte VGF-Anlage wurde in unserem Labor ausgiebig und erfolgreich getestet. Die neue Automatisierung entspricht dem neuesten Stand der Technik und gewährleistet eine zukunftssichere Ansteuerung unseres VGF-Ofens.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-slate-100 pt-6">
                                            <div>
                                                <cite className="not-italic font-bold text-slate-900 block text-lg">Dr. rer. nat. Olf Pätzold</cite>
                                                <span className="text-sm text-slate-500 block">Institut für Nichteisenmetallurgie und Reinststoffe</span>
                                                <span className="text-sm text-brand-primary font-medium">TU Bergakademie Freiberg</span>
                                            </div>

                                            <button
                                                onClick={() => setIsExpanded(!isExpanded)}
                                                className="group/btn flex items-center gap-2 text-slate-600 hover:text-brand-primary font-semibold transition-colors text-sm px-4 py-2 hover:bg-brand-primary/5 rounded-full"
                                            >
                                                {isExpanded ? (
                                                    <>
                                                        Weniger anzeigen
                                                        <i className="fa-solid fa-chevron-up transition-transform group-hover/btn:-translate-y-0.5"></i>
                                                    </>
                                                ) : (
                                                    <>
                                                        Details zur Case Study
                                                        <i className="fa-solid fa-chevron-down transition-transform group-hover/btn:translate-y-0.5"></i>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

>>>>>>> a80f2c38eb5d65fae8050f0095a5e20c548621ca
                <p className="mt-12 text-sm text-slate-400 italic">
                    {t('footer')}
                </p>
            </div>
        </section>
    );
}

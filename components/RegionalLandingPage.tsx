"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import ReferencesSection from "@/components/ReferencesSection";
import StartupCtaSection from "@/components/StartupCtaSection";
import Footer from "@/components/Footer";
import { LandingPageData } from "@/data/landingPages";

interface RegionalLandingPageProps {
    data: LandingPageData;
}

export default function RegionalLandingPage({ data }: RegionalLandingPageProps) {
    const tContact = useTranslations('Contact');
    const tCommon = useTranslations('Hero'); // Reusing some common strings if needed

    return (
        <>
            {/* Hero Section */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-dark">
                {/* Background Image if available */}
                {data.heroImage && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={data.heroImage}
                            alt={data.title}
                            fill
                            className="object-cover opacity-20 blur-sm"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/80 to-brand-dark/95"></div>
                    </div>
                )}

                {/* Background Pattern (fallback or overlay) */}
                <div className="absolute inset-0 z-0 hero-pattern opacity-30 mix-blend-overlay"></div>

                {/* Abstract Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary opacity-10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent opacity-10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-stone-900/60 border border-stone-600 backdrop-blur-sm shadow-lg">
                        <span className="text-brand-primary font-semibold text-sm tracking-wider uppercase">
                            ResearchControl Regional
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                        {data.title}
                    </h1>

                    <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-200 mb-10 font-medium leading-relaxed drop-shadow-md">
                        {data.subtitle}
                    </p>

                    {/* Keywords Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {data.keywords.map((keyword, index) => (
                            <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm font-mono backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                                #{keyword}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#kontakt"
                            className="px-8 py-4 bg-brand-primary text-white rounded-lg font-bold text-lg hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/25 hover:shadow-neon transform hover:-translate-y-1"
                        >
                            Projekt anfragen
                        </a>
                        <a
                            href="#details"
                            className="px-8 py-4 bg-transparent text-white border border-slate-600 rounded-lg font-bold text-lg hover:bg-white/5 transition-all backdrop-blur-sm"
                        >
                            Mehr erfahren
                        </a>
                    </div>
                </div>
            </header>

            {/* Intro Text */}
            <section id="details" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-lg text-slate-700 leading-loose text-center" dangerouslySetInnerHTML={{ __html: data.introText }}></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-brand-light border-y border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-card border border-orange-50 hover:border-brand-primary transition-colors group">
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                                    <i className={`fa-solid ${feature.icon} text-xl text-brand-secondary group-hover:text-white`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
                                <p className="text-stone-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table Section */}
            {data.tableData && (
                <section className="py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-display font-bold text-stone-900 mb-4">{data.tableData.title}</h2>
                            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
                        </div>
                        <div className="overflow-x-auto shadow-card rounded-xl border border-slate-200">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        {data.tableData.headers.map((header, index) => (
                                            <th key={index} className="p-5 font-bold text-stone-700 uppercase text-sm tracking-wider">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {data.tableData.rows.map((row, rowIndex) => (
                                        <tr key={rowIndex} className="hover:bg-slate-50/50 transition-colors">
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className={`p-5 text-slate-600 ${cellIndex === 0 ? 'font-semibold text-stone-800' : ''}`}>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}

            {/* Dynamic Content Sections with Images & Conversion Breaks */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {data.sections.map((section, index) => (
                        <div key={index} className="space-y-16">
                            {/* Content Block */}
                            <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-1/2">
                                    <h2 className="text-3xl font-display font-bold text-stone-900 mb-6 relative">
                                        {section.title}
                                        <span className="block h-1 w-20 bg-brand-primary mt-2 rounded-full"></span>
                                    </h2>
                                    <div
                                        className="prose prose-lg text-slate-600 prose-headings:text-stone-800 prose-a:text-brand-primary hover:prose-a:text-brand-secondary prose-strong:text-stone-900 prose-ul:marker:text-brand-primary"
                                        dangerouslySetInnerHTML={{ __html: section.content }}
                                    />
                                </div>
                                <div className="lg:w-1/2 w-full h-[300px] lg:h-[400px] bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-inner overflow-hidden relative group">
                                    {section.infographic ? (
                                        <div className="relative w-full h-full p-6">
                                            <Image
                                                src={section.infographic}
                                                alt={section.infographicAlt || section.title}
                                                fill
                                                className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-slate-50 hero-pattern opacity-10"></div>
                                            <div className="text-center p-8 z-10">
                                                <i className="fa-solid fa-code text-6xl text-slate-300 mb-4 block"></i>
                                                <span className="text-slate-400 font-mono text-sm">Visualisierung: {section.title}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Interstitial CTA Block (Conversion Break) */}
                            {section.cta && (
                                <div className="bg-brand-dark rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-neon transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="absolute inset-0 hero-pattern opacity-10"></div>
                                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{section.cta.headline}</h3>
                                            <p className="text-slate-300 max-w-xl">{section.cta.text}</p>
                                        </div>
                                        <a href="#kontakt" className="flex-shrink-0 px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary transition-colors shadow-lg">
                                            {section.cta.btnText} <i className="fa-solid fa-arrow-right ml-2"></i>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* SEO / Related Topics Cloud */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm text-slate-400 mb-4 font-semibold uppercase tracking-wider">Verwandte Themengebiete & Technologien</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {data.keywords.map((k, i) => (
                            <span key={i} className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                                {k}
                            </span>
                        ))}
                        {/* Artificial "Expanded" keywords for SEO density */}
                        <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">Industrie 4.0</span>
                        <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">Systemintegration</span>
                        <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">Engineering</span>
                    </div>
                </div>
            </section>

            <ReferencesSection />
            <StartupCtaSection />

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-4">Häufige Fragen</h2>
                        <p className="text-slate-600">Spezifische Antworten für {data.keywords[data.keywords.length - 1]}</p>
                    </div>
                    <div className="space-y-6">
                        {data.faq.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-start gap-3">
                                        <i className="fa-solid fa-circle-question text-brand-primary mt-1"></i>
                                        {item.question}
                                    </h3>
                                    <p className="text-slate-600 pl-8">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section (Simplified version of Home) */}
            <section id="kontakt" className="py-24 bg-brand-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 hero-pattern opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Projekt in {data.keywords[data.keywords.length - 1]} starten?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        {data.subtitle}
                    </p>
                    <a
                        href="mailto:hermann@researchcontrol.de"
                        className="inline-block px-10 py-5 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold text-xl shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all transform hover:-translate-y-1"
                    >
                        Jetzt anfragen
                    </a>
                    <p className="mt-8 text-slate-500 text-sm">
                        Oder direkt anrufen: <a href="tel:+4915679751053" className="text-slate-400 hover:text-white transition-colors">+49 15679 751053</a>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}

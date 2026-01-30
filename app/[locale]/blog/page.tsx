"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import { landingPages } from "@/data/landingPages";

export default function BlogPage() {
    const t = useTranslations('Navbar'); // Reusing Navbar translations for now or generic

    return (
        <>
            <div className="pt-32 pb-20 bg-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 hero-pattern opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Blog & Regionale Kompetenz
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Einblicke in aktuelle Projekte, Technologie-Trends und unsere regionale Vernetzung in der deutschen High-Tech Industrie.
                    </p>
                </div>
            </div>

            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.values(landingPages).map((page, index) => (
                            <Link
                                key={index}
                                href={`/${page.slug}`}
                                className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-neon transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                            >
                                <div className="h-48 bg-slate-900 relative overflow-hidden">
                                    {page.heroImage ? (
                                        <Image
                                            src={page.heroImage}
                                            alt={page.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-stone-800 hero-pattern opacity-50 group-hover:scale-105 transition-transform duration-500"></div>
                                    )}

                                    {/* Overlay Gradient for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-brand-primary/90 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-sm backdrop-blur-sm">
                                            {page.keywords[page.keywords.length - 1]}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                                        {page.title}
                                    </h3>
                                    <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                                        {page.subtitle}
                                    </p>
                                    <span className="text-brand-primary text-sm font-bold flex items-center gap-2">
                                        Artikel lesen <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

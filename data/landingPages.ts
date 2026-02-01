export interface LandingPageData {
    slug: string;
    title: string;
    subtitle: string;
    heroImage: string;
    keywords: string[];
    metaDescription: string;
    introText: string;
    sections: {
        title: string;
        content: string; // Rich HTML
        infographic?: string;
        infographicAlt?: string;
        cta?: {
            headline: string;
            text: string;
            btnText: string;
        };
    }[];
    tableData: {
        title: string;
        headers: string[];
        rows: string[][];
    };
    features: {
        title: string;
        description: string;
        icon: string;
    }[];
    faq: {
        question: string;
        answer: string;
    }[];
}

export const landingPages: Record<string, LandingPageData> = {
    "dresden": {
        slug: "softwareentwicklung-semiconductor-dresden",
        title: "Spezialisierte C# Softwareentwicklung für die Halbleiterindustrie in Dresden",
        subtitle: "Vom Wafer-Handling-Roboter bis zur MES-Schnittstelle: Maßgeschneiderte .NET Lösungen, die den Takt im Silicon Saxony vorgeben.",
        heroImage: "/images/cleanroom-robot.png",
        keywords: ["Semiconductor", "Automatisierungstechnik", "C#", ".NET", "OPC UA", "Dresden", "Equipment Control", "Reinraum Software", "Wafer Handling"],
        metaDescription: "Senior C# Entwickler für Semiconductor in Dresden. Spezialist für Equipment Control, OPC UA, Wafer-Handling und Reinraum-Automatisierung. Jetzt Projekt anfragen.",
        introText: "Im Herzen des 'Silicon Saxony' gelten keine Kompromisse. Davon kann ich aus eigener Erfahrung berichten. Ich durfte bereits gemeinsam mit den Ingenieuren von der Freiberger Compound Materials GmbH die Software und die Automatisierungstechnik für einige Sondermaschinen für den harten Produktionseinsatz entwickeln und bei der Infineon AG im Dresdner Norden das MES-System für die Produktionssteuerung weiterentwickeln. Seitdem weiss ich: die Halbleiterfertigung ist die Königsklasse der Automatisierung: Nanometer-Präzision, Prozesse, die an die Grenzen des physikalisch machbaren gehen, 24/7-Verfügbarkeit und Reinraum-Klassen, die keinen Fehler verzeihen. Als spezialisierter Software-Ingenieur verstehe ich nicht nur Code, sondern auch die Physik Ihrer Prozesse. Ob in Dresden-Nord, Freiberg oder Chemnitz – ich liefere Software, die auf einem tiefen Verständis ihrer Prozesse basiert.",
        sections: [
            {
                title: "Mission Critical: Software für den Reinraum",
                content: "<p>Sowohl auf dem IPC oder in der SPS/PLC ist Software weit mehr als nur eine Benutzeroberfläche. Sie ist das Gehirn der Anlage. Ein kurzer Stillstand (Downtime) an einem Wafer-Handler oder ein Kommunikationsfehler beim 'Lot Tracking' kann Schäden in sechsstelliger Höhe verursachen.</p><p>Ich entwickle <strong>Equipment Control Software (ECS)</strong>, die speziell auf diese Anforderungen gehärtet ist. Mein Fokus liegt auf:</p><ul class='list-disc pl-5 mt-4 space-y-2'><li><strong>Fehlertoleranz:</strong> Automatische Recovery-Routinen, wenn Hardware (Greifer, Pumpen) kurze Aussetzer hat.</li><li><strong>Thread-Safety:</strong> Sichere Parallelverarbeitung von High-Speed Sensordaten und langsamen Datenbank-Operationen im Hintergrund und immer ein flüssiges Nutzererlebnis am Bildschirm.</li><li><strong>Prozess-Sicherheit:</strong> Validierung aller Parameter *bevor* ein mechanischer Aktor bewegt wird, um Wafer-Bruch zu 100% auszuschließen.</li></ul>",
                infographic: "/images/cleanroom-robot.png",
                infographicAlt: "Roboterarm handhabt 300mm Wafer im gelben Reinraumlicht",
                cta: {
                    headline: "Haben Sie Probleme mit Legacy-Software?",
                    text: "Alte VB6, LabView, Win95-Anwendungen bremsen Ihre neuen Anlagen aus? Lassen Sie uns über eine sichere Migration sprechen.",
                    btnText: "Code-Audit vereinbaren"
                }
            },
            {
                title: "Host-Kommunikation",
                content: "<p>Die schönste Anlage nützt nichts, wenn sie 'stumm' ist. Die Integration in das Manufacturing Execution System (MES) ist oft der Flaschenhals bei neuen Projekten.</p><p>Ich implementiere für Sie:</p><ul class='list-disc pl-5 mt-4 space-y-2'><li><strong>Full Compliance:</strong> Vollständige Umsetzung der GEM-States (Control, Equipment Processing).</li><li><strong>Remote Command Control:</strong> Start/Stop/Pause der Anlage direkt vom Leitstand aus.</li><li><strong>Traceability:</strong> Lückenlose Erfassung von Wafer-ID, Slot-Number und Prozess-Parametern für jedes einzelne Produkt.</li><li><strong>Hybrid-Lösungen:</strong> Kommunikation über OPC UA, gRPC, propieatäre Protokolle oder SECS/GEM.</li></ul>",
                infographic: "/images/secs-gem-flow.png",
                infographicAlt: "Diagramm des SECS/GEM Protokoll Stacks und Datenfluss"
            },
            {
                title: "Modernisierung & Retrofit statt Neukauf",
                content: "<p>Viele Anlagen im Feld sind mechanisch unzerstörbar, aber die Steuerung läuft noch auf Windows XP. Das ist ein massives Sicherheitsrisiko und verhindert die Integration in moderne IT-Infrastrukturen.</p><p>Ich biete Ihnen ein <strong>Software-Retrofit</strong> an: Ich ersetze den veralteten Steuerungs-PC durch einen modernen Industrie-PC mit Windows 10/11 IoT und meiner neu entwickelten .NET Software. Die bestehende SPS und Sensorik wird via Bus-Koppler weitergenutzt. So machen Sie Ihre 20 Jahre alte Sputter-Anlage bereit für Industrie 4.0 – zu einem Bruchteil der Kosten einer Neuanlage.</p>",
                infographic: "/images/semiconductor-infographic.png",
                infographicAlt: "Futuristische Darstellung einer Halbleiter-Fabrik"
            }
        ],
        tableData: {
            title: "Vergleich: Standard-IT vs. Semiconductor-Engineering",
            headers: ["Kriterium", "Generische IT-Agentur", "ResearchControl (Spezialisiert)"],
            rows: [
                ["Hardware-Verständnis", "Begrenzt (Web/App Fokus)", "Tief (Weiß, wie ein Waferhandling Robot funktioniert)"],
                ["Verfügbarkeit", "Bürozeiten (9-to-5)", "Versteht Schichtbetrieb & Wartungsfenster"],
                ["Technologie", "Oft Web-basiert (Latenz!) oder Verwendung überbordender Frameworks", "Leichte, gut wartbare C#-Anwendungen, mit PLC-Anbindung"],
                ["Protokolle", "REST/JSON", "UPC UA, ADS, gRPC, Proprietäre Protokolle"],
                ["Sicherheit", "Fokus auf Datenschutz", "Fokus auf Anlagensicherheit & Personenschutz"]
            ]
        },
        features: [
            {
                title: "Waferhandling",
                description: "Erfahrung mit Standard-Automatisierung für Waferhandling.",
                icon: "fa-circle-notch"
            },
            {
                title: "Legacy Integration",
                description: "Anbindung alter RS232/GPIB-Messgeräte oder moderner wissenschaftlicher Sensoren und Antriebe an moderne Ethernet-Architekturen.",
                icon: "fa-plug"
            },
            {
                title: "Physik-Affin",
                description: "Gerade mit Prozessen, die an die Grenzen der Physik gehen, habe ich bereits viel Erfahrung und spreche die Sprache der Physiker, Optiker und Spezialisten.",
                icon: "fa-server"
            }
        ],
        faq: [
            {
                question: "Welche Protokolle sind Innen bereits vertraut",
                answer: "Ich habe jahrelange Erfahrung mit alle seriellen (RS232, USB) und ASCII-Protokollen (Telnet, TCP-IP) wie sie immer noch an den meisten anspruchsvollen Sensoren und Antriebslösungen vorkommen. Natürlich habe ich auch langjährige Erfahrungen mit OPC UA (Client und Server), gRPC oder auch ADS (Beckhoff). Für die Integration von SECS/GEM nutze ich ausgefeilte Frameworks von anderen Anbietern."
            },
            {
                question: "Können Sie kurzfristig in die Fab kommen?",
                answer: "Ja, für Projekte im Raum Dresden ist eine Vor-Ort-Präsenz (On-Site Debugging) problemlos möglich. Ich besitze Erfahrung im sicheren Arbeiten in Reinraumumgebungen."
            },
            {
                question: "Übernehmen Sie auch die SPS-Programmierung und Planung von ganzen Automatisierungssystemen?",
                answer: "Obwohl mein Fokus liegt auf der Hochsprachen-Ebene liegt (PC, IPC / Windows-Anwendung -> C#), programmiere ich auch SPS/PLC. (Beckhoff, Codesys, ST). Darüberhinaus bringe ich jahrelange Erfahrung in der Planung und Ausführung von kompletten Automatisierungssystemen mit, angefangen von der Auswahl der Hardware (Sensorik, Aktuatorik, Roboter) und der geeigneten Kommunikationsstruktur (OPC UA, gRPC ...), Integration in den mechanischen Aufbau, bis hin zur Überwachung der Erstellung der Stromlaufpläne durch Partner, der Verdrahtung, Inbetriebnahme, Produktionseinführung und des Service. Für die Planung und Programmierung SPS von Siemens TIA arbeite ich eng mit Ihren Automatisierern zusammen oder bringe Partner aus meinem Netzwerk mit."
            }
        ]
    },

    "jena": {
        slug: "laborautomatisierung-software-jena",
        title: "Laborautomatisierung & Photonik: Maßgeschneiderte Software für Jena & Thüringen",
        subtitle: "Vom Labortisch zum marktreifen Produkt. Hochperformante Windows-Anwendungen für Analyse, optische Inspektion und Gerätesteuerung.",
        heroImage: "/images/microscope-analysis.png",
        keywords: ["Laborautomatisierung", "LabVIEW Alternative", "Photonik", "Jena", "Messtechnik", "Bildverarbeitung", "Präzisions Sensoren", "Präzisions Antriebe", "C#"],
        metaDescription: "Softwareentwicklung für Laborgeräte und Optik in Jena. Ich ersetze komplexe LabVIEW-Projekte durch wartbare C# / .NET Lösungen. Jetzt beraten lassen.",
        introText: "Jena ist das weltweite Zentrum für Optik und Photonik. Hier entstehen Geräte, die an die Grenzen der Physik gehen. Doch oft hält die Software nicht mit der Qualität der Hardware mit. Viele Projekte stecken in unwartbaren 'Spaghetti-Code' Strukturen fest. Ich helfe High-Tech Unternehmen in Thüringen, ihre exzellente Hardware mit ebenso exzellenter, professioneller Software auszustatten – skalierbar, wartbar und benutzerfreundlich - und ich durfte schon etliche Jahre in Jena bei der Carl-Zeiss AG und der LIS Gmbh (KLA-Tencor) meinen Beitrag für eine qualitativ hochwertige Softwarebasis leisten.",
        sections: [
            {
                title: "Intelligente Gerätesteuerung: Mehr als nur Treiber",
                content: "<p>Ein modernes Laborgerät besteht selten aus einer Komponente. Es ist ein Orchester aus Kameras, Positioniertischen, Lasern und Sensoren. Die Kunst ist das Dirigieren.</p><p>Ich entwickle <strong>modulare Steuerungssoftware</strong>, die diese Komponenten abstrahiert. Anstatt harten Code für eine spezifische Kamera zu schreiben, entwickle ich Schnittstellen (Interfaces), die es erlauben, Hardware auszutauschen, ohne die gesamte Applikation neu schreiben zu müssen. So bleiben Sie herstellerunabhängig und flexibel.</p>",
                infographic: "/images/lab-sensor_calibration.png",
                infographicAlt: "Kalibrierung eines Lasersensors im Labor",
                cta: {
                    headline: "Hängt Ihr Projekt fest?",
                    text: "LabVIEW VIs sind zu komplex geworden oder die Performance stimmt nicht? Ich portiere Ihr Projekt nach C# .NET.",
                    btnText: "Portierungs-Strategie anfragen"
                }
            },
            {
                title: "Vom Labor in die Produktion: Analyse in Echtzeit",
                content: "<p>Moderne Sensoren liefern Daten im Gigabyte-Bereich. Herkömmliche Tools wie Excel sind absolut untauglich für den Produktionseinsatz. Ich setze ihren Laborablauf in eine Produktionsreife sichere Software mit übersichtlicher und einfacher Bedienerführung (GUI, HMI, UX) um, damit Spektren, Kamerabilder oder Messkurven <strong>in Echtzeit</strong> protokolliert, ausgewertet und dargestellt werden.</p><p><strong>Beispiel Workflow:</strong></p><ul class='list-disc pl-5 mt-4 space-y-2'><li>Triggerung der Kamera (Hardware-Sync).</li><li>Bildaufnahme und Transfer in den RAM (Zero-Copy).</li><li>Sofortige Analyse (z.B. Partikelzählung) noch im Speicher.</li><li>Speicherung nur der Ergebnisse + Metadaten in einer Datenbank (SQL/NoSQL).</li></ul>",
                infographic: "/images/microscope-analysis.png",
                infographicAlt: "Monitor zeigt Software für Zellanalyse und Heatmaps"
            },
            {
                title: "Qualitätssicherung & Validierung",
                content: "<p>Besonders in der Medizintechnik und Pharma-Forschung reicht 'funktioniert' nicht aus. Software muss dokumentiert, getestet und validierbar sein (FDA 21 CFR Part 11). Ich implementiere Features wie <strong>Audit Trails</strong> (wer hat wann was geändert), Benutzer-Rollenmanagement und manipulationssichere Datenspeicherung. Damit wird aus einem Labor-Prototypen ein zertifizierfähiges Produkt.</p>",
                infographic: "/images/lab-automation-infographic.png",
                infographicAlt: "Grafische Darstellung von Labor-Robotik"
            }
        ],
        tableData: {
            title: "Entwicklungs-Phasen & Mehrwert",
            headers: ["Phase", "Typische Probleme", "Meine Lösung"],
            rows: [
                ["Prototyping", "UI rudimentär, langsam oder fehlt ganz", "Schnelle WPF-GUIs, Scripting-Engine integriert"],
                ["Prototyping", "SPS-Programm oder Windows-App unflexibel, nicht erweiterbar", "Flexibel, beliebig erweiterbar und Übersichtlich durch MVVM-Entwurfsmuster"],
                ["Produktiv-Nutzung", "Abstürze, Datenchaos (CSV-Dateien)", "Robuste, leichte und übersichtliche MVVM-Architektur, Verzicht auf überbordende Frameworks"],
                ["Skalierung / Serie", "Lizenzkosten (LabVIEW/Matlab, propietäre OPC UA-Frameworks, GUI-Frameworks Telerik, Sycfusion, Infragistic)", "Verwendung eines eigenen kleinen lizenzfreien Frameworks, bei dem die Quellen vorliegen"],
                ["Support", "Wissen nur im Kopf des Entwicklers", "Clean Code, Dokumentation, Automated Tests"]
            ]
        },
        features: [
            {
                title: "Hardware-Unabhängig",
                description: "Integration von Treibern aller großen Hersteller (Basler, PI, Zeiss, Thorlabs).",
                icon: "fa-microscope"
            },
            {
                title: "Automated Testing",
                description: "Simulation von Hardware zur Software-Validierung ohne physikalisches Gerät.",
                icon: "fa-vial"
            },
            {
                title: "Jahrzehntelange Erfahrung in Hardware Anbindung",
                description: "Ich habe jahrzentelange Erfahrung in Hardware-Anbindung und für sehr viele Hersteller schon Sensoren oder Antriebe angebunden (oft ohne Treibernutzung, was deutlich zuverlässiger ist).",
                icon: "fa-database"
            }
        ],
        faq: [
            {
                question: "Wie aufwendig ist es eine neue Hardware anzubinden?",
                answer: "Auf Grund meiner jahrzehntelangen Erfahrung in der Anbindung von Hardware, ist der Aufwand im allgemeinen serh gering. Ich hsbe schon mit folgenden Hardware Anbindung in C#/.Net Erfahrungen gesammelt: Motoren/Antriebe von PI, Physical Instruments, PI-Micos, Newport, Faulhaber, Mitsubishi, Aerotec, Galil, Smaract, Maxon, Acs,  Sensoren von: Almemo, National Instruments, Keyence, Keithley, Thorlabs, Ophir, Kameras von Dalsa, Matrox (MIL) Basler, Dataray, Hamamatsu, Laser: Kohaerent, Newport, Steuerungen: Philips, Beckhoff, ADAM, Pilz, Siemens, ThermoSientific, Keysight. "
            },
            {
                question: "Warum C# statt Python?",
                answer: "Python ist super für Skripte. Aber für robuste GUI-Anwendungen, Hardware-Treiber und Multithreading bietet C# / .NET eine stabilere, typsichere Umgebung und einfacheres Deployment beim Kunden."
            },
            {
                question: "Können wir unsere bestehende C++ DLLs weiter nutzen?",
                answer: "Ja, absolut. Über P/Invoke oder C++/CLI Wrapper binde ich Ihre High-Performance Algorithmen nahtlos in die moderne .NET Oberfläche ein."
            },
            {
                question: "Wie läuft die Zusammenarbeit?",
                answer: "Ich integriere mich in Ihr Team (Scrum, Azure DevOps, Jira, Git) oder liefere komplette Gewerk-Lösungen. Regelmäßige Demos stellen sicher, dass wir in die richtige Richtung entwickeln."
            }
        ]
    },

    "chemnitz": {
        slug: "hmi-gui-entwicklung-chemnitz",
        title: "High-End HMI & GUI Design: Das Gesicht Ihrer Maschine (Chemnitz)",
        subtitle: "Maschinenbau trifft User Experience. Begeistern Sie Ihre Kunden mit intuitiven, smartphone-ähnlichen Bedienoberflächen.",
        heroImage: "/images/touch-panel-user.png",
        keywords: ["HMI Design", "WPF Entwicklung", "Maschinenbau Chemnitz", "UX Design", "Touch Interface", "Operator Guidance", ".NET"],
        metaDescription: "Experte für HMI Design und GUI Entwicklung im Maschinenbau (Chemnitz). Ich erstelle moderne WPF-Oberflächen, die Bedienfehler reduzieren und den Umsatz steigern.",
        introText: "In einer Welt, in der jeder ein iPhone in der Tasche hat, akzeptieren Kunden keine klobigen, grauen Industriesteuerungen mehr. Das HMI (Human Machine Interface) ist das Erste, was Ihr Kunde sieht – und oft der entscheidende Faktor beim Kaufentscheid. In Chemnitz, dem Herz des sächsischen Maschinenbaus, helfe ich Ihnen, Ihre technologische Marktführerschaft auch visuell und funktional zu unterstreichen.",
        sections: [
            {
                title: "Psychologie der Bedienung: Fehler vermeiden",
                content: "<p>Ein gutes HMI ist mehr als nur 'hübsch'. Es führt den Bediener. Durch intelligente Farbgebung, klare Hierarchien und Animationen lenke ich die Aufmerksamkeit auf das Wesentliche. </p><p><strong>Smart Operator Guidance:</strong></p><ul class='list-disc pl-5 mt-4 space-y-2'><li><strong>Kontext-Sensitiv:</strong> Zeige nur Buttons, die im aktuellen Zustand erlaubt sind.</li><li><strong>Visuelles Feedback:</strong> Sofortige Reaktion auf jeden Touch (kein 'Hämmern' auf den Bildschirm).</li><li><strong>3D-Visualisierung:</strong> Zeigen Sie den Fehlerort direkt am 3D-Modell der Maschine an, statt kryptische Fehlercodes zu listen.</li></ul>",
                infographic: "/images/touch-panel-user.png",
                infographicAlt: "Industriearbeiter bedient intuitives Touch-Panel",
                cta: {
                    headline: "Wie aufwändig wird ein upgrade auf Windows 11?",
                    text: "Senden Sie mir eine Kurzbeschreibung Ihrer Maschine oder ihres Gerätes. Ich gebe Ihnen ein kostenloses Überblick über zeitlichen Aufwand und Kosten des Upgrades.",
                    btnText: "Upgrade-Check anfordern"
                }
            },
            {
                title: "Technologie: WPF, XAML & DirectX",
                content: "<p>Warum nicht einfach eine Web-App? Weil Web-Browser im industriellen Dauerbetrieb oft Probleme machen (Updates, Performance, Speicherbedarf). Ich setze auf <strong>WPF (Windows Presentation Foundation)</strong>.</p><p>WPF nutzt die Grafikkarte (GPU) zur Beschleunigung. Das ermöglicht flüssige 60 FPS Animationen, Transparenzen und komplexe Schattenwürfe, selbst auf Sparsamer Industrie-Hardware. Zudem bietet es Zugriff auf das volle Windows-API (Dateisystem, USB, Serielle Ports), was Browsern verwehrt bleibt.</p>",
                infographic: "/images/hmi-infographic.png",
                infographicAlt: "Modernes Dashboard Design mit Diagrammen"
            },
            {
                title: "Architektur: MVVM für Wartbarkeit",
                content: "<p>Viele HMI-Projekte scheitern daran, dass Logik und Design vermischt sind ('Code-Behind Hölle'). Ändert man die Farbe eines Buttons, bricht die Maschinensteuerung. Ich nutze strikt das <strong>MVVM-Pattern (Model-View-ViewModel)</strong>.</p><p>Dies trennt die grafische Oberfläche komplett von der Steuerungslogik. Das erlaubt es uns, das Design alle paar Jahre komplett zu modernisieren ('Re-Skinning'), ohne eine Zeile am getesteten Steuerungscode ändern zu müssen. Investitionsschutz pur.</p>",
                infographic: "/images/mvvm-architecture.png",
                infographicAlt: "Schema der MVVM Software Architektur"
            }
        ],
        tableData: {
            title: "Technologie-Check: Web vs. Native WPF",
            headers: ["Feature", "Web-HMI (HTML/JS)", "Native HMI (WPF/.NET)"],
            rows: [
                ["Hardware-Zugriff", "Limitiert (Sicherheitssandbox)", "Vollständig (Scanner, USB, Datei)"],
                ["Performance", "Abhängig von Browser-Engine", "Native GPU-Beschleunigung"],
                ["Offline-Start", "Braucht oft Webserver", "Startet sofort als EXE"],
                ["Multi-Touch", "Oft träge / ungenau", "Präzise Gestensteuerung"],
                ["Entwicklung", "Viele Frameworks (React, Vue...)", "Ein stabiler Standard seit 15 Jahren"]
            ]
        },
        features: [
            {
                title: "Flüssiges Benutzererlebnis",
                description: "Keine hängeden Oberflächen, sondern ein flüssiges stets reponsibles Benutzerlebnis, erreiche ich durch konsequente Auslagerung aller zeitkritischen Prozesse in Hintergrundtasks.",
                icon: "fa-palette"
            },
            {
                title: "Rapid Prototyping",
                description: "Eine schnelle Umsetzung Ihrer Ideen (in Wochen!!!) durch konsequente Anwendung des MVVM-Entwurfspattern, Einbindung von KI, leichtgewichtige ständig erweiterbare Architektur ohne die Verwendung großer überbordnder Frameworks. Trotzdem bleibt alles sauberer Code, der später auch unter produktiven Bedingungen eingesetzt werden kann und extrem gut Ausbaufähig und erbeiterbar ist..",
                icon: "fa-globe"
            },
            {
                title: "Windows-Applikation erweitert die Fähigkeiten der SPS",
                description: "Die Kombination von IPC und SPS bietet eine ideale Architektur für mittelgroße bis hin zu sehr komplexen Anwendungen. Auf der SPS laufen alle zeitkritischen und hardwarenahen Routineaufgaben, Ansteuerung der Hardwarr, Verriegelung von Bewegungen etc. und die Windows-Applikation auf dem IPC bringt eine leichte Erweiterbarkeit, Ansprechende flexible HMI, Kommunikation über diverse Schnittstellen (z.B. Einbindung von Sensoren über USB), Speicherung von Daten in Datenbanken, beliebige Protokolle zur Übergeordneten Ebene.",
                icon: "fa-id-card"
            }
        ],
        faq: [
            {
                question: "Erstellen Sie auch das Grafik-Design?",
                answer: "Ich bin spezialisierter Entwickler, habe aber ein gutes Auge für UI/UX. Für hochkomplexe Design-Entwürfe arbeite ich gerne mit Ihren Grafikern zusammen oder vermittle Experten."
            },
            {
                question: "Wie lange dauert die Umsetzung eines Upgrades auf Windows 11 mit einer HMI-Modernisierung?",
                answer: "Ein 'Re-Skinning' oder Refurbish einer bestehenden gut dokumentierten Applikation mittlerer Komplexität kann in 4-8 Wochen erfolgen. Entscheidende Faktoren sind die Qualität der Dokumentation oder des vorhandenen Wissens über die Technologie und die angebundene Hardware,Schnittstellen zur Hardware und zu höheren Ebenen der Kommunikation und natürlich von der komplexität der Maschine oder des Gerätes."
            },
            {
                question: "Nutzen Sie Drittanbieter-Controls?",
                answer: "Wo sinnvoll ja (z.B. für komplexe Charts), um Kosten zu sparen. Aber ich vermeide unnötige Abhängigkeiten, um Lizenzprobleme zu verhindern. Ich achte ganz besonders darauf, die Verwendung von unnötigen Frameworks zu vermeiden, weil in jeder externen Abhängigkeit ein schlecht kalkulierbares Risiko steckt. "
            }
        ]
    },

    "rostock": {
        slug: "sps-hochsprachen-programmierung-rostock",
        title: "Industrie 4.0 & IoT Vernetzung: SPS trifft IT in Rostock",
        subtitle: "Wir befreien Ihre Daten aus der Steuerung. Sichere OPC UA & gRPC Lösungen für Maritime Wirtschaft und Produktion.",
        heroImage: "/images/opc-ua-security.png",
        keywords: ["OPC UA", "rRPC", "SPS Anbindung", "IOT Anbindung" "Rostock", "Industrie 4.0", "Edge Computing", "Codesys", "Beckhoff"],
        metaDescription: "Verbinden Sie Ihre SPS oder ihr IOT Device mit der Cloud. Experte für OPC UA, gRPC und Hochsprachen-Programmierung in Rostock. Jetzt Datenpotenziale nutzen.",
        introText: "Die SPS ist der Nerv der Maschine, aber Software ist das Gehirn. In der maritimen Industrie und Fertigung rund um Rostock wird noch viel Potenzial verschenkt, weil Daten in der Steuerung 'gefangen' sind. Ich baue die digitalen Brücken. Ich sorge dafür, dass Ihre Siemens oder Beckhoff Steuerung sicher alle Sprachen der Industriekommunikation spricht (auch proprietäre Protokolle!)– ohne die Echtzeit-Prozesse zu gefährden.",
        sections: [
            {
                title: "OPC UA: Der Standard für Interoperabilität",
                content: "<p>Proprietäre Schnittstellen waren gestern. Heute spricht die Fabrik **OPC UA**. Ich implementiere performante OPC UA Server und Clients direkt in C# / .NET.</p><p><strong>Warum OPC UA?</strong></p><ul class='list-disc pl-5 mt-4 space-y-2'><li><strong>Security by Design:</strong> Verschlüsselte Übertragung und Zertifikats-basierte Authentifizierung bis runter zur Maschine.</li><li><strong>Semantische Daten:</strong> Nicht nur 'Wert 50', sondern 'Temperatur Motor A, Einheit Grad Celsius'.</li><li><strong>Plattformunabhängig:</strong> Läuft auf Linux-Gateways genauso wie auf Windows-Servern.</li></ul>",
                infographic: "/images/opc-ua-security.png",
                infographicAlt: "Digitales Sicherheitsschild vor Server-Rack mit OPC UA Schriftzug",
                cta: {
                    headline: "Daten-Silos aufbrechen?",
                    text: "Sie wissen nicht, wie Sie Daten aus Ihrer alten S7-300 in die Cloud bekommen? Ich habe die passenden Gateway-Lösungen.",
                    btnText: "Connectivity-Beratung"
                }
            },
            {
                title: "Edge Computing: Intelligenz an der Maschine",
                content: "<p>Nicht jedes Bit muss in die Cloud. Bandbreite ist teuer und Latenz ist kritisch. Mit **Edge Computing** verlagern wir die Datenvorverarbeitung direkt an die Maschine.</p><p>Ich entwickle Services (z.B. als Docker Container oder Windows Service), die Hochfrequenz-Daten (z.B. Vibrationen) direkt lokal analysieren (FFT-Analyse) und nur bei Anomalien einen Alarm über MQTT an den Leitstand senden. Das spart Kosten und erhöht die Reaktionsgeschwindigkeit drastisch.</p>",
                infographic: "/images/edge-gateway.png",
                infographicAlt: "Edge Gateway Gerät im Schaltschrank mit bunten Kabeln"
            },
            {
                title: "Sicherheit in vernetzten Anlagen",
                content: "<p>Wer Maschinen vernetzt, öffnet potenzielle Einfallstore für Hacker. Ein ungeschützter MQTT-Broker oder offener OPC UA Port ist fahrlässig.</p><p>Ich setze konsequent auf 'Security First': TLS 1.3 Verschlüsselung für alle Verbindungen, Trennung von Maschinen-Netz und Office-Netz (DMZ-Konzepte) und strikte Input-Validierung. Damit Ihre Produktion nicht morgen stillsteht, weil Ransomware zugeschlagen hat.</p>",
                infographic: "/images/sps-infographic.png",
                infographicAlt: "Schemazeichnung einer sicheren Netzwerk-Architektur"
            }
        ],
        tableData: {
            title: "Protokoll-Entscheidungshilfe",
            headers: ["Anforderung", "OPC UA", "MQTT", "REST API", "Modbus TCP"],
            rows: [
                ["Nutzung", "Maschine-zu-Maschine (Interne Vernetzung)", "Maschine-zu-Cloud (IoT)", "IT-Integration (ERP)", "Einfache Feldgeräte"],
                ["Komplexität", "Hoch (Mächtig)", "Mittel", "Mittel", "Gering"],
                ["Echtzeit", "Möglich (TSN)", "Nein", "Nein", "Bedingt"],
                ["Overhead", "Groß", "Sehr klein (Ideal für Mobilfunk)", "Groß (Text-basiert)", "Sehr klein"]
            ]
        },
        features: [
            {
                title: "SPS-Treiber",
                description: "Direkte Kommunikation mit S7 (Snap7), Beckhoff (ADS) und Allen-Bradley ohne teure Middleware.",
                icon: "fa-memory"
            },
            {
                title: "Daten-Pufferung",
                description: "Store-and-Forward Mechanismen: Keine Daten gehen verloren, wenn das Netzwerk ausfällt.",
                icon: "fa-database"
            },
            {
                title: "Dashboarding",
                description: "Erstellung von web-basierten Dashboards (Grafana / Blazor) für den schnellen Überblick.",
                icon: "fa-chart-line"
            }
        ],
        faq: [
            {
                question: "Brauche ich neue Hardware für IoT?",
                answer: "Nicht zwingend. Oft reicht ein kleines Gateway (z.B. Raspberry Pi Industrial oder ein kleiner IPC), das parallel zur SPS installiert wird und die Daten 'abgreift'."
            },
            {
                question: "Unterstützen Sie Cloud-Plattformen?",
                answer: "Ich bin plattformneutral. Ich kann Ihre Daten an Azure IoT Hub, AWS Sitewise oder Ihre eigene Private Cloud senden."
            }
        ]
    },

    "leipzig": {
        slug: "windows-industrie-software-leipzig",
        title: "Windows IoT & Industrie-Apps: Robustheit trifft Usability (Leipzig)",
        subtitle: "Maßgeschneiderte Windows-Lösungen für Logistik, Fertigung und Kiosk-Systeme. Stabil, sicher, wartungsfrei.",
        heroImage: "/images/kiosk-mode.png",
        keywords: ["Windows IoT", "Kiosk Software", "Logistik Software", "Leipzig", "Barcodescanner", "Hardware Integration", "LTSC"],
        metaDescription: "Windows Softwareentwicklung für die Industrie in Leipzig. Kiosk-Systeme, Logistik-Apps und Hardware-Treiber unter Windows IoT Enterprise.",
        introText: "Leipzig ist ein europäisches Logistik-Hub. Hier muss Software funktionieren – schnell, einfach und fehlerfrei. Ein Absturz beim Waagen-Treiber oder ein hängendes Fenster beim Schichtwechsel kostet bares Geld. Ich habe mich darauf spezialisiert, die Windows-Plattform für den industriellen Einsatz zu 'bändigen'. Ich entwickle Anwendungen, die so stabil laufen wie eine SPS, aber den Komfort eines modernen PCs bieten.",
        sections: [
            {
                title: "Kiosk Mode: Wenn Windows unsichtbar wird",
                content: "<p>In der Produktion soll der Mitarbeiter nicht Solitaire spielen oder im Internet surfen. Ich konfiguriere Windows so, dass es zur reinen 'Appliance' wird.</p><p>Mit dem <strong>Shell Launcher</strong> ersetze ich den Windows Explorer durch Ihre Anwendung. Das System bootet direkt in die Software. Fehler-Popups, Update-Meldungen oder Tastenkombinationen wie Alt-Tab werden unterdrückt. Das Ergebnis: Ein absolut sicheres, geschlossenes System.</p>",
                infographic: "/images/kiosk-mode.png",
                infographicAlt: "Industrie-Tablet im Kiosk-Modus, gesichert",
                cta: {
                    headline: "Nervt Windows Updates?",
                    text: "Starten Ihre Maschinen morgens neu, weil Updates installiert wurden? Ich zeige Ihnen, wie man das mit Windows IoT LTSC dauerhaft unterbindet.",
                    btnText: "System-Härtung anfragen"
                }
            },
            {
                title: "Hardware-Integration: Scanner, Waagen, Labeler",
                content: "<p>Logistik-Software steht und fällt mit der Peripherie. Ein Barcode muss in millisekunden extrem schnell erkannt werden, der Label-Drucker darf nicht blockieren.</p><p>Ich nutze keine generischen Tastatur-Emulationen, sondern spreche Hardware <strong>nativ</strong> an (USB HID, Serial Ports, TCP/IP Sockets). Das ermöglicht detailliertes Feedback (z.B. 'Papierstau im Drucker') direkt in der App, statt nur eine generische Fehlermeldung zu zeigen. Das spart Zeit bei der Fehlerbehebung durch den Werker.</p>",
                infographic: "/images/barcode-scanner.png",
                infographicAlt: "POV: Barcode-Scanner in Logistik-Halle"
            },
            {
                title: "Robustheit durch System-Härtung (EWF/UWF)",
                content: "<p>Was passiert, wenn der Strom ausfällt? Bei einem Standard-Windows ist oft das Dateisystem korrupt. Ich nutze den <strong>Unified Write Filter (UWF)</strong> von Windows IoT.</p><p>Dieser leitet alle Schreibzugriffe in den RAM um. Nach einem Neustart ist das System wieder im perfekten Ursprungszustand. Viren, Fehlkonfigurationen oder 'Datenmüll' haben keine Chance. Persistente Daten werden gezielt auf eine separate Partition geschrieben.</p>",
                infographic: "/images/windows-industry-infographic.png",
                infographicAlt: "Rugged Device im Industrieeinsatz"
            }
        ],
        tableData: {
            title: "Windows Embedded Features",
            headers: ["Feature", "Nutzen für die Industrie", "In Pro-Version enthalten?"],
            rows: [
                ["UWF (Write Filter)", "Schutz vor Dateisystemschäden bei Stromausfall", "Nein"],
                ["Shell Launcher", "Ersetzt Desktop durch eigene App", "Nein (nur eingeschränkt)"],
                ["Keyboard Filter", "Blockiert Ctrl+Alt+Del, Alt+Tab, etc.", "Nein"],
                ["LTSC Support", "10 Jahre keine Feature-Updates", "Nein"]
            ]
        },
        features: [
            {
                title: "Offline-First",
                description: "Lokale SQL-Datenbank (SQLite/LocalDB) synchronisiert sich, sobald Netz da ist. Kein Stillstand.",
                icon: "fa-wifi"
            },
            {
                title: "Updater Service",
                description: "Eigener Update-Dienst, der Software im Hintergrund aktualisiert, ohne den Betrieb zu stören.",
                icon: "fa-sync"
            },
            {
                title: "Log & Trace",
                description: "Detailliertes Logging aller Benutzeraktionen zur Prozessoptimierung.",
                icon: "fa-list-ol"
            }
        ],
        faq: [
            {
                question: "Entwickeln Sie auch Treiber?",
                answer: "Ich entwickle User-Mode Treiber und Wrapper für Hardware. Kernel-Mode Treiberentwicklung biete ich in Kooperation mit Partnern an."
            },
            {
                question: "Welche Hardware empfehlen Sie?",
                answer: "Ich habe gute Erfahrungen mit IPCs von Beckhoff, Siemens und Advantech. Ich berate Sie gerne bei der Hardware-Auswahl passend zur Software."
            }
        ]
    }
};

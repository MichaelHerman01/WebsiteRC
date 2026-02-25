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
        introText: "Im Herzen des <strong>'Silicon Saxony'</strong> gelten keine Kompromisse. Davon kann ich aus eigener Erfahrung berichten. Ich durfte bereits gemeinsam mit den Ingenieuren von der Freiberger Compound Materials GmbH die Software und die Automatisierungstechnik für einige Sondermaschinen für den harten Produktionseinsatz entwickeln und bei der Infineon AG im Dresdner Norden das MES-System für die Produktionssteuerung weiterentwickeln. Seitdem weiss ich: die <strong>Halbleiterfertigung</strong> ist die Königsklasse der Automatisierung: Nanometer-Präzision, Prozesse, die an die Grenzen des physikalisch machbaren gehen, 24/7-Verfügbarkeit und <strong>Reinraum-Klassen</strong>, die keinen Fehler verzeihen. Als spezialisierter Software-Ingenieur verstehe ich nicht nur Code, sondern auch die Physik Ihrer Prozesse. Ob in Dresden-Nord, Freiberg oder Chemnitz – ich liefere Software, die auf einem tiefen Verständis ihrer Prozesse basiert.",
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
                infographic: "/images/cleanroom-robot.png",
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
        introText: "<strong>Jena</strong> ist das weltweite Zentrum für <strong>Optik und Photonik</strong>. Hier entstehen Geräte, die an die Grenzen der Physik gehen. Doch oft hält die Software nicht mit der Qualität der Hardware mit. Viele Projekte stecken in unwartbaren 'Spaghetti-Code' Strukturen fest. Ich helfe High-Tech Unternehmen in Thüringen, ihre exzellente Hardware mit ebenso exzellenter, professioneller Software auszustatten – skalierbar, wartbar und benutzerfreundlich - und ich durfte schon etliche Jahre in Jena bei der Carl-Zeiss AG und der LIS Gmbh (KLA-Tencor) meinen Beitrag für eine qualitativ hochwertige <strong>Softwarebasis</strong> leisten.",
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
                answer: "Auf Grund meiner jahrzehntelangen Erfahrung in der Anbindung von Hardware, ist der Aufwand im allgemeinen sehr gering. Ich habe schon mit folgenden Hardware Anbindung in C#/.Net Erfahrungen gesammelt: Motoren/Antriebe von PI, Physical Instruments, PI-Micos, Newport, Faulhaber, Mitsubishi, Aerotec, Galil, Smaract, Maxon, Acs,  Sensoren von: Almemo, National Instruments, Keyence, Keithley, Thorlabs, Ophir, Kameras von Dalsa, Matrox (MIL) Basler, Dataray, Hamamatsu, Laser: Kohaerent, Newport, Steuerungen: Philips, Beckhoff, ADAM, Pilz, Siemens, ThermoSientific, Keysight. "
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
        introText: "In einer Welt, in der jeder ein iPhone in der Tasche hat, akzeptieren Kunden keine klobigen, grauen Industriesteuerungen mehr. Das <strong>HMI (Human Machine Interface)</strong> ist das Erste, was Ihr Kunde sieht – und oft der entscheidende Faktor beim Kaufentscheid. In Chemnitz, dem Herz des <strong>sächsischen Maschinenbaus</strong>, helfe ich Ihnen, Ihre technologische Marktführerschaft auch visuell und funktional zu unterstreichen.",
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
                description: "Eine schnelle Umsetzung Ihrer Ideen (in Wochen!!!) durch konsequente Anwendung des MVVM-Entwurfspattern, Einbindung von KI, leichtgewichtige ständig erweiterbare Architektur ohne die Verwendung großer überbordnder Frameworks. Trotzdem bleibt alles sauberer Code, der später auch unter produktiven Bedingungen eingesetzt werden kann und extrem gut ausbaufähig und erweiterbar ist.",
                icon: "fa-globe"
            },
            {
                title: "Windows-Applikation erweitert die Fähigkeiten der SPS",
                description: "Die Kombination von IPC und SPS bietet eine ideale Architektur für mittelgroße bis hin zu sehr komplexen Anwendungen. Auf der SPS laufen alle zeitkritischen und hardwarenahen Routineaufgaben, Ansteuerung der Sensoren und Antriebe, Verriegelung von Bewegungen etc. und die Windows-Applikation auf dem IPC bringt eine leichte Erweiterbarkeit, Ansprechende flexible HMI, Kommunikation über diverse Schnittstellen (z.B. Einbindung von Sensoren über USB), Speicherung von Daten in Datenbanken, beliebige Protokolle zur übergeordneten Ebene.",
                icon: "fa-id-card"
            }
        ],
        faq: [
            {
                question: "Erstellen Sie auch das Grafik-Design?",
                answer: "Im allgemeinen: Ja. Ich bin spezialisierter Entwickler, habe aber ein gutes Auge für UI/UX. Für hochkomplexe Design-Entwürfe arbeite ich gerne mit Ihren Grafikern zusammen oder vermittle Experten."
            },
            {
                question: "Wie lange dauert die Umsetzung eines Upgrades auf Windows 11 mit einer HMI-Modernisierung?",
                answer: "Ein 'Re-Skinning' oder Refurbishing einer bestehenden gut dokumentierten Applikation mittlerer Komplexität kann in 4-8 Wochen erfolgen. Entscheidende Faktoren sind die Qualität der Dokumentation oder des vorhandenen Wissens über die Technologie und die angebundene Hardware, Schnittstellen zur Hardware und zu höheren Ebenen der Kommunikation und natürlich wie komplex die Maschine oder des Gerät ist."
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
        keywords: ["OPC UA", "rRPC", "SPS Anbindung", "IOT Anbindung", "Rostock", "Industrie 4.0", "Edge Computing", "Codesys", "Beckhoff"],
        metaDescription: "Verbinden Sie Ihre SPS oder ihr IOT Device mit der Cloud. Experte für OPC UA, gRPC und Hochsprachen-Programmierung in Rostock. Jetzt Datenpotenziale nutzen.",
        introText: "Die <strong>SPS</strong> ist der Nerv der Maschine, aber <strong>Software</strong> ist das Gehirn. In der <strong>maritimen Industrie</strong> und Fertigung rund um Rostock wird noch viel Potenzial verschenkt, weil Daten in der Steuerung 'gefangen' sind. Ich baue die digitalen Brücken. Ich sorge dafür, dass Ihre Siemens oder Beckhoff Steuerung sicher alle Sprachen der <strong>Industriekommunikation</strong> spricht (auch proprietäre Protokolle!)– ohne die Echtzeit-Prozesse zu gefährden.",
        sections: [
            {
                title: "OPC UA: Der Standard für Interoperabilität",
                content: "<p>Proprietäre Schnittstellen waren gestern. Heute spricht die Fabrik **OPC UA**. Ich implementiere performante OPC UA Server und Clients direkt in C# / .NET ohne anufwändige, unnötige und zu lizensierende Drittanbieter-Frameworks.</p><p><strong>Warum OPC UA?</strong></p><ul class='list-disc pl-5 mt-4 space-y-2'><li><strong>Security by Design:</strong> Verschlüsselte Übertragung und Zertifikats-basierte Authentifizierung bis runter zur Maschine.</li><li><strong>Semantische Daten:</strong> Nicht nur 'Wert 50', sondern 'Temperatur Motor A, Einheit Grad Celsius'.</li><li><strong>Plattformunabhängig:</strong> Läuft auf Linux-Gateways genauso wie auf Windows-Servern.</li></ul>",
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
                title: "SPS-Kommunikation",
                description: "Direkte Kommunikation mit Beckhoff über ADS oder OPC UA, mit Siemens S7 über OPC UA.",
                icon: "fa-memory"
            },
            {
                title: "Daten-Pufferung",
                description: "Store-and-Forward Mechanismen: Keine Daten gehen verloren, wenn das Netzwerk ausfällt.",
                icon: "fa-database"
            },
            {
                title: "Ältere oder propieatäre Protokolle",
                description: "Natürlich kenne ich die etwas angestaubten älteren Feldbusse auch sehr gut und binde Ihnen auch Modbus, RS232, CAN-Bus, sowie auch alle anderen Feldbusse und auch propietäre Protokolle (soweit sie dokumentiert sind) an ihr System an.",
                icon: "fa-chart-line"
            }
        ],
        faq: [
            {
                question: "Brauche ich neue Hardware für IoT?",
                answer: "Nicht zwingend. Oft reicht ein kleines Gateway (z.B. Raspberry Pi Industrial oder ein kleiner IPC), das parallel zur SPS installiert wird und die Daten 'abgreift'."
            },
            {
                question: "Können auch Devices mit USB-Schnittelle angebunden werden?",
                answer: "Die USB-Schnittelle ist prinzipiell auf Grund der mechanischen Eigenschaften des Steckersystems und aufgrund ihrer schlechten Reconnect-Eigenschaften für Automatisierungslösungen nur bedingt geeignet. Bei Geräten, für die es nur die USB-Schnittstelle gibt, eignet sich ein kleiner IPC zur Anbindung an die SPS über OPC UA, oder die Architektur kann so gewählt werden, dass die Daten direkt in den IPC der HMI gelangen und von dort zur SPS."
            }
        ]
    },

    "oberkochen": {
        slug: "softwareentwicklung-optik-oberkochen-stuttgart",
        title: "Softwareentwicklung für Optik & Halbleiter in Oberkochen, Aalen & Stuttgart",
        subtitle: "Präzision trifft Code. Maßgeschneiderte .NET & C# Lösungen für die High-Tech Region Baden-Württemberg. Von EUV-Lithographie bis zur Laborautomatisierung.",
        heroImage: "/images/semiconductor-infographic.png",
        keywords: ["Oberkochen", "Aalen", "Stuttgart", "Optik", "EUV Lithographie", "Reinraum", "C#", ".NET", "OPC UA", "Scrum", "Azure DevOps"],
        metaDescription: "Spezialisierter Software-Ingenieur für die Optik-Industrie in Baden-Württemberg (Oberkochen, Stuttgart). Experte für EUV, Wafer-Steuerung, OPC UA und Hardware-Integration (ACS, PI, Basler).",
        introText: "Baden-Württemberg, und speziell die Achse Stuttgart-Aalen-Oberkochen, ist der Maschinenraum der globalen High-Tech Industrie. Hier, wo Weltmarktführer wie die Carl-Zeiss-SMT an der Zukunft der Mikrochips durch EUV (Extreme Ultraviolet Lithographie) arbeiten, gelten andere Maßstäbe. Software darf hier nicht nur 'funktionieren'. Sie muss so präzise sein wie die Objektive, die sie steuert, und so rein wie der Cleanroom, in dem sie läuft. Als erfahrener Software-Ingenieur unterstütze ich Teams in dieser Region dabei, komplexe physikalische Prozesse in sauberen, wartbaren Code (Clean Code) zu übersetzen. Ich kenne die Herausforderungen von multidisziplinären Teams und integriere mich nahtlos in Ihre Scrum-Prozesse via Azure DevOps. Einige Jahre durfte ich mein Know-How schon bei der Carl-Zeiss SMT in Oberkochen mit einbringen. Dort wurde und wird meine Mitarbeit geschätzt. Für mich persönlich war die Mitarbeit an Projekten in der EUV-Litographie ein Glanzpukt meiner Tätigkeit, aber auch bei der Programmierung von PC-Gestützter Messtechnik für Objektive konnte ich die Zusammenarbeit im Team unter höchsten Ansprüchen schätzen lernen.",
        sections: [
            {
                title: "Reinraum-Software: Wenn jeder Nanometer zählt",
                content: "<p>Die Entwicklung softwaregestützter Systeme für die <strong>Optik-Fertigung</strong> und <strong>EUV-Lithographie</strong> erfordert ein tiefes Verständnis für die physikalischen Randbedingungen. Es geht nicht nur um Algorithmen, sondern um die direkte Interaktion mit hochsensibler Hardware im Reinraum.</p><p>Meine Expertise umfasst die komplette vertikale Integration:</p><h4 class='text-lg font-bold mt-4 mb-2'>Antriebstechnik & Motion Control</h4><p>Präzision beginnt bei der Bewegung. Ich besitze umfangreiche Erfahrung in der Anbindung und Steuerung von Hochleistungs-Antrieben und Piezo-Systemen führender Hersteller, die in der Halbleiterindustrie Standard sind:</p><ul class='list-disc pl-5 mt-2 mb-4 space-y-1'><li><strong>ACS Motion Control:</strong> Komplexe Multi-Axis-Synchronisationen.</li><li><strong>SmarAct & PI-Micos:</strong> Nanometergenaue Positionierung für optische Gitter und Spiegel.</li><li><strong>Physik Instrumente (PI) & Newport:</strong> Integration von Hexapoden und Fast-Steering-Mirrors.</li><li><strong>Aerotech & Galil:</strong> Hochdynamische Bahnen für Wafer-Stages.</li></ul><p>Dabei achte ich penibel auf Latenzzeiten und Jitter, um die geforderte Systemperformance sicherzustellen.</p>",
                infographic: "/images/cleanroom-robot.png",
                infographicAlt: "Ingenieur im Reinraum bei der Arbeit an einer EUV-Anlage, Konzentration auf Code und Hardware",
                cta: {
                    headline: "Festgefahrenes Automatisierungsprojekt oder unzuverlässige Achsansteuerung?",
                    text: "Ihr Automatisierungsprojekt kommt nicht voran oder die Achsen in Ihrem Projekt verhalten sich unzuverlässig. Lassen Sie uns die Anbindung Ihrer Motion-Control-Architektur analysieren.",
                    btnText: "Automatisierungsprojekt Audit"
                }
            },
            {
                title: "Sensorik & Messtechnik: Das Auge der Maschine",
                content: "<p>In der Region Oberkochen/Aalen dreht sich alles um Licht und Präzision. Um dieses zu messen und zu manipulieren, integriere ich eine breite Palette an High-End Sensorik direkt in Ihre .NET Applikationen:</p><ul class='list-disc pl-5 mt-4 mb-4 space-y-2'><li><strong>Laser-Leistungsmessung:</strong> Integration von <strong>Ophir</strong> und <strong>Thorlabs</strong> Power-Metern zur Strahlanalyse in Echtzeit.</li><li><strong>Präzisions-Messtechnik:</strong> Einbindung von <strong>Keithley</strong> Sourceometern und <strong>Keyence</strong> Laserscannern für die Qualitätskontrolle.</li><li><strong>Frequenz-Messung:</strong> Ansteuerung von <strong>HighFinesse</strong> Wellenlängenmessgeräten für tunable Laser.</li></ul><p>Diese Daten werden nicht nur erfasst, sondern oft direkt mit Positionsdaten der Antriebe korreliert (Triggering), um hochauflösende Mappings der optischen Oberflächen zu erstellen.</p>",
                infographic: "/images/sensor-calibration.png",
                infographicAlt: "Schematische Darstellung der Sensor-Integration in einem optischen System"
            },
            {
                title: "Vision Systems & Kamera-Integration",
                content: "<p>Neben punktuellen Sensoren spielen bildgebende Verfahren eine zentrale Rolle. Ich entwickle performante Vision-Pipelines, die Bilddaten direkt von der Hardware abholen (Zero-Copy) und verarbeiten.</p><p class='mb-2'>Unterstützte Kamera-Interfaces und Hersteller:</p><ul class='list-disc pl-5 space-y-1 mb-4'><li><strong>Standards:</strong> GigE Vision, USB3 Vision, CameraLink, CoaXPress.</li><li><strong>Hersteller:</strong> <strong>Basler</strong> (Pylon), <strong>Teledyne Dalsa</strong>, <strong>Hamamatsu</strong> (für Low-Light/Wissenschaft), <strong>DataRay</strong> (Beam-Profiling).</li><li><strong>Framegrabber:</strong> <strong>Matrox</strong> (MIL) und <strong>Pleora (eBus)</strong> für High-Speed Applikationen.</li></ul><p>Die Einbindung erfolgt modular, sodass Sie Kameras verschiedener Hersteller austauschen können, ohne die gesamte Applikationslogik neu schreiben zu müssen.</p>",
                infographic: "/images/microscope-analysis.png",
                infographicAlt: "Analyse-Software Oberfläche mit Kamerabild und Histogramm"
            },
            {
                title: "Integration & Steuerung: Das große Ganze",
                content: "<p>Kein System ist eine Insel. Die Integration in die bestehende Fabrik-Infrastruktur ist entscheidend für den Erfolg von Industrie 4.0 Projekten.</p><h4 class='text-lg font-bold mt-4 mb-2'>SPS & Leitsysteme</h4><p>Ich verbinde Ihre PC-basierte Messsoftware robust mit der Welt der Speicherprogrammierbaren Steuerungen (SPS). Ob <strong>Siemens S7</strong> (via TIA Portal / S7.Net), <strong>Beckhoff TwinCAT</strong> oder Sicherheitssteuerungen von <strong>Pilz</strong> – der Handshake zwischen Windows und SPS muss sitzen.</p><h4 class='text-lg font-bold mt-4 mb-2'>Konnektivität & Standards</h4><p>Hier setze ich konsequent auf offene Standards statt proprietärer Insel-Lösungen:</p><ul class='list-disc pl-5 mt-2 mb-4 space-y-2'><li><strong>OPC UA:</strong> Der Gold-Standard für die vertikale Integration. Ich implementiere Clients und Server, die komplexe Datenstrukturen (nicht nur flache Tags) austauschen.</li><li><strong>Matlab-Einbindung:</strong> Oft entstehen Algorithmen in der Vorausentwicklung in Matlab. Ich integriere kompilierte Matlab-DLLs oder nutze die Matlab-Engine API, um diese Algorithmen performant in der C# Produktions-Software auszuführen.</li></ul>",
                infographic: "/images/opc-ua-security.png",
                infographicAlt: "Netzwerk-Diagramm: Verbindung von Sensoren, SPS und Cloud via OPC UA",
                cta: {
                    headline: "Schnittstellen-Chaos?",
                    text: "Sprechen Ihre Anlagen verschiedene Sprachen? Ich etabliere eine einheitliche Kommunikations-Architektur auf Basis von OPC UA.",
                    btnText: "Schnittstellen-Beratung"
                }
            },
            {
                title: "Modernes Software-Engineering: Clean Code & DevOps",
                content: "<p>Die Zeiten, in denen eine Software 'auf Zuruf' am Gerät gehackt wurde, sind vorbei. In regulierten Umgebungen wie der Medizintechnik oder der Halbleiterindustrie ist der Prozess genauso wichtig wie das Ergebnis.</p><p>Ich bringe moderne Software-Entwicklungsmethoden in Ihr Ingenieurs-Team:</p><ul class='list-disc pl-5 mt-4 space-y-2'><li><strong>Versionskontrolle (Git):</strong> Saubere History, Feature-Branches und das 'Fork & Pull Request' Prinzip ermöglichen reviewbaren Code.</li><li><strong>Clean Code:</strong> Code ist zum Lesen da. Ich schreibe Software so, dass Ihr Team sie auch in 5 Jahren noch versteht und warten kann.</li><li><strong>Azure DevOps & Scrum:</strong> Transparenz durch Backlogs, Sprints und CI/CD Pipelines. Jeder Commit wird automatisch gebaut und getestet.</li><li><strong>Automated Testing:</strong> Unit-Tests für Logik und Hardware-Simulation (Mocking) für Integrationstests ohne physisches Gerät.</li></ul><p>Dieser Ansatz reduziert die 'Technical Debt' massiv und sorgt für ruhige Nächte vor dem Release.</p>",
                infographic: "/images/mvvm-architecture.png",
                infographicAlt: "Darstellung eines DevOps Zyklus mit Git Branching und CI/CD Pipeline"
            }
        ],
        tableData: {
            title: "Hardware-Unterstützung im Überblick",
            headers: ["Kategorie", "Hersteller/Marken", "Integrations-Tiefe"],
            rows: [
                ["Antriebe & Motion", "ACS, SmarAct, PI-Micos, Galil, Newport, Aerotech", "Tief: Direkte DLL/API Einbindung, Synchronisation, Triggering"],
                ["Sensoren & Laser", "Ophir, Thorlabs, Keyence, Keithley, HighFinesse", "Mittel: Auslesen von Messwerten, Konfiguration, Stream-Recording"],
                ["Kameras & Vision", "Basler, DataRay, Dalsa, Hamamatsu, Pleora, Matrox", "Hoch: Zero-Copy Grabbing, GPU-Processing, Overlay-Rendering"],
                ["Steuerung (PLC)", "Siemens S7, Keysight, Pilz, Beckhoff", "Robust: OPC UA, ADS, TCP/IP Socket, Modbus"],
                ["Messgeräte", "Oszilloskope (Keysight/Tektronix), Spektrometer", "VISA / SCPI Kommandos, IVI Treiber"]
            ]
        },
        features: [
            {
                title: "Regionale Nähe",
                description: "Vor-Ort Präsenz in Oberkochen, Aalen und Stuttgart für die enge Zusammenarbeit im Team, Inbetriebnahme und Tests an der Maschine.",
                icon: "fa-map-marker-alt"
            },
            {
                title: "Physik & Code",
                description: "Ich verstehe nicht nur C#, sondern auch Strahlengang, Interferenz und Beugung, Bewegungsteuerung, die besonderheiten komplexer Sensoren und die dahinter liegende Physik und Methematik. Das erleichtert die Kommunikation mit Ihren Physikern.",
                icon: "fa-atom"
            },
            {
                title: "Legacy to Future",
                description: "Sichere Migration von alten VB6/LabVIEW Projekten auf modernes .NET 8 / WPF.",
                icon: "fa-history"
            }
        ],
        faq: 
		[
            {
                question: "Arbeiten Sie auch mit bestehenden Frameworks?",
                answer: "Ja. Ich bin es gewohnt mich schnell in proprietäre Firmen-Frameworks einzuarbeiten und diese effektiv zu nutzen. Ich erfinde das Rad nicht neu, wenn es gut läuft."
            },
            {
                question: "Können Sie Matlab-Algorithmen in C# nutzen?",
                answer: "Definitiv. Das ist ein Standard-Szenario. Matlab für den Algorithmus, C# für die performante GUI und Maschinen-Steuerung. Die Anbindung erfolgt über den Matlab Compiler SDK oder native DLLs."
            },
            {
                question: "Wie garantieren Sie Code-Qualität?",
                answer: "Durch strikte Einhaltung von Clean Code Prinzipien (SOLID), Code Reviews via Pull Requests (Git/Azure DevOps) und automatisierte Tests. Qualität entsteht nicht durch Testen am Ende, sondern durch Konstruktion von Anfang an."
            },
            {
                question: "Haben Sie eine eigene Codebasis?",
                answer: "Mit den Jahren hat sich bei mir ein kleines Framework entwickelt, welches ich kostenlos und lizenzfrei zur Verfügung stellen kann. Damit sind häufig wiederkehrende Standardaufgaben in der Automatisierung wie das MVVM-Pattern für WPF, Statemachines, Digitale Filter, PID-Regler, ein Log- und Messaging-System, OPC-UA Client abgedeckt."
            }
        ]
    }
};

export type Lang = "en" | "sr";
export const defaultLang: Lang = "en";

export const ui = {
  en: {
    htmlLang: "en",
    site: {
      title:
        "Petar Jovanovic - Senior Product Engineer | SaaS & AI Development | AI-Assisted Development",
      description:
        "I help startups and businesses turn their vision into scalable web applications with clean architecture, thoughtful UX, and a strong technical foundation.",
    },
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      services: "Services",
      writing: "Writing",
      contact: "Contact",
      bookCall: "Book a call",
      switchTo: "SR",
      switchToLabel: "Switch to Serbian",
      switchToHref: "/sr/",
    },
    hero: {
      eyebrow:
        "Senior Product Engineer · SaaS & AI Development · AI-Assisted Development",
      headingHtml:
        'Building scalable <span class="text-[#818cf8]">software</span> that grows with your <span class="text-[#818cf8]">business</span>',
      body: "I help SaaS companies build and scale web products end-to-end — from launching MVPs and adding new features to modernizing products that become harder to maintain as they grow.",
      ctaWork: "View my work",
      ctaTalk: "Let's talk",
      workedWithLabel: "Worked with",
    },
    stats: {
      years: "Years of experience",
      startups: "Startups built from ground up",
      projects: "Production projects",
      users: "Users impacted",
    },
    about: {
      eyebrow: "The Person Behind the Code",
      heading: "Get to Know Me",
      valuesEyebrow: "My values",
      bio: [
        `Hi there! I'm Petar, a Senior Product Engineer and technical partner. I'm here to help you <strong class="text-[#aaa] font-semibold">build or evolve your SaaS product end-to-end</strong> — one that solves the right problem, feels effortless to use, and can grow from user #1 to user #1,000,000.`,
        `I've spent the last 7+ years building products across startups and large enterprise environments, including platforms for Fortune Global 500 companies, spanning fintech, ed-tech, social networking, and e-commerce.`,
        `That experience has taught me that the best software comes from understanding the problem before writing the solution. Before thinking about implementation, I want to understand the problem we're actually trying to solve. Who is using the product? Why do they need this feature? Is there a simpler way to achieve the same outcome? And will the decisions we make today still make sense as the product grows?`,
        `That's the mindset I bring to every project.`,
        `I especially enjoy the challenges that come with growing SaaS products. What starts as a simple application naturally becomes more complex as customers, features, and requirements accumulate. Patterns that worked at the beginning stop scaling. Development slows down. Small changes start affecting unexpected parts of the product.`,
        `I enjoy stepping into that complexity, understanding what's causing it, and finding ways to make the product easier to build, maintain, and evolve.`,
        `That mindset shaped some of the work I'm most proud of. Most recently, at <strong class="text-[#aaa] font-semibold"><a href="https://www.paayed.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#818cf8] transition-colors duration-200">Paayed</a></strong>, a UK-based B2B fintech SaaS platform, I saw that an inconsistent UI and duplicated frontend patterns were becoming increasingly difficult to maintain as the platform grew. I built a shared component library and design system that was adopted across the product, giving the team a stronger foundation for developing new features and evolving the platform.`,
        `I'm also someone who cares about the small details. Whether it's an interaction that doesn't quite feel right, an unnecessarily complicated piece of code, or an architectural decision that could create problems later, I find it difficult to simply say, <em class="text-[#888] not-italic">"good enough."</em> I want to finish something and genuinely be proud of what I've built.`,
        `AI has made building software faster than ever, and I use it extensively in my own development process. But I think that makes engineering judgment even more important. The interesting question is increasingly not <em class="text-[#888] not-italic">"Can we build this?"</em> but <em class="text-[#888] not-italic">"Should we build this — and what's the simplest way to solve the actual problem?"</em>`,
        `Outside of client and product work, I'm building <strong class="text-[#aaa] font-semibold"><a href="https://www.whatistheoutput.com/" target="_blank" rel="noopener noreferrer" class="hover:text-[#818cf8] transition-colors duration-200">What Is The Output</a></strong>, my own experiment in making developer education more personalized. Building something of my own has given me another perspective on software — thinking not only about architecture and code, but also about users, validation, priorities, and whether an idea actually creates enough value to deserve being built.`,
        `And when I'm away from the keyboard, you'll usually find me playing music, reading, or spending time with my family.`,
        `So if you're building a SaaS product and looking for an engineer who will understand the bigger picture, care about the details, contribute ideas, and take ownership beyond the code itself — we'll probably have a lot to talk about.`,
      ],
      values: [
        {
          label: "Meticulous",
          body: "Whether it's an interaction that doesn't feel right, an overly complicated piece of code, or an architectural decision that could cause problems later — I find it difficult to simply say 'good enough.' I want to finish something and genuinely be proud of what I've built.",
        },
        {
          label: "Transparent",
          body: "I surface concerns early rather than staying quiet and letting them grow. I value clear, honest communication — about what's working, what isn't, and what decisions we're making and why.",
        },
        {
          label: "Problem-first",
          body: "Before thinking about implementation, I want to understand the actual problem. Who is using this? Why do they need it? Is there a simpler way? The question is no longer 'Can we build this?' — it's 'Should we, and what's the simplest way to solve the real problem?'",
        },
        {
          label: "Purposeful",
          body: "I understand the bigger picture, contribute ideas, and take ownership beyond the code. I'm not completing a task list — I'm helping build a product that solves the right problem and can grow from user #1 to user #1,000,000.",
        },
      ],
    },
    philosophy: {
      eyebrow: "Process",
      heading: "How we'll work together",
      stepLabel: "Step",
      steps: [
        {
          title: "Analyze Your Requirements",
          body: "Every successful product starts with understanding the problem. We don't start building until I fully understand every detail of your vision. I'll take the time to learn about your business, users, goals, and technical constraints before making any implementation decisions. The right solution begins with asking the right questions.",
        },
        {
          title: "Propose the Right Solution",
          body: "Once I understand the bigger picture, I'll recommend an approach that balances business goals, technical quality, scalability, and development speed. Every decision is made with your product's long-term success in mind.",
        },
        {
          title: "Build with Engineering in Mind",
          body: "This is where ideas become reality. I leverage AI to accelerate development, helping you validate your idea faster without compromising quality. Combined with clean architecture, maintainable code, thoughtful user experiences, and transparent communication, it allows us to move quickly while building software that's made to last.",
        },
        {
          title: "Launch & Keep Improving",
          body: "Shipping isn't the finish line—it's the beginning. After launch, we'll gather feedback, measure results, iterate on what matters, and continue improving the product as it grows.",
        },
      ],
      ctaBook: "Book a free call",
      ctaWork: "See my work →",
    },
    work: {
      eyebrow: "Selected Work",
      heading: "What I've built",
      items: [
        {
          label: "Fintech · Startup · Accounting & Analytics",
          company:
            "Paayed - All in One Payment Platform (Accounting, CRM, Payments)",
          description:
            "Led the development of a shared npm UI component library and design system, establishing scalable frontend standards that improved UI consistency, accelerated development, and reduced maintenance costs. Delivered core fintech features including secure authentication, 3DS payment flows, Hosted Payment Pages, analytics, CRM, reporting, and accounting modules.",
          outcomes: [
            "Shared UI library adopted company-wide",
            "90+ legacy components standardized & moved to library",
            "Accelerated feature delivery",
            "Reduced long-term maintenance",
            "UK fintech compliance requirements",
          ],
        },
        {
          label: "Fashion Industry · Enterprise · E-commerce · EdTech",
          company: "Symphony - Software Development Company",
          tagline: "4 client projects · Sep 2022–Dec 2024",
          projects: [
            {
              name: "Fortune Global 500 MFE Platform",
              highlight:
                "Shipped Micro-Frontend (MFE) web app supporting the article production workflow and day-to-day business operations between external suppliers worldwide and the company\u2019s quality assurance teams. Built a shared npm UI library adopted across 5+ engineering teams.",
            },
            {
              name: "US Booking Marketplace",
              highlight:
                "Full-stack platform connecting service providers and consumers — service discovery, booking flows, and calendar integration.",
            },
            {
              name: "HR CRM Tool",
              highlight:
                "Admin panel with continuous UI/UX improvements, surfacing employee skills and experience insights for efficient people placement.",
            },
            {
              name: "Internal Learning Platform",
              highlight:
                "Developed and shipped a knowledge-sharing platform helping hundreds of employees learn and collaborate.",
            },
          ],
          outcomes: [
            "Fortune Global 500 engineering engagement",
            "Shipped & maintained shared npm UI library adopted by 5+ teams",
            "4 products successfully delivered",
            "Cross-functional collaboration at scale",
          ],
        },
        {
          label:
            "Fintech · Enterprise · Accounting & Analytics · AI-powered EdTech",
          company: "Devtech - Software Development Company",
          tagline: "2 client projects · Aug 2021–Sep 2022",
          projects: [
            {
              name: "Enterprise Accounting Platform (USA)",
              highlight:
                "Transformed the UI of a legacy enterprise system into a modern, scalable frontend aligned with current engineering best practices. Delivered financial reporting dashboards, lease accounting flows, and performant data-heavy UI components.",
            },
            {
              name: "AI-Powered Microsoft-365 Enablement Platform",
              highlight:
                "Owned the frontend implementation of advanced data visualization features, building custom standalone D3.js chart components to render complex, large-scale datasets.",
            },
          ],
          outcomes: [
            "Enterprise platform modernized",
            "Custom D3.js data visualizations",
            "AI-powered learning platform",
            "High-performance analytics dashboards",
          ],
        },
      ],
    },
    services: {
      eyebrow: "My Services",
      heading: "How I can help",
      items: [
        {
          title: "Build Your Product",
          tagline: "From idea to production-ready software.",
          body: "Whether you're validating a new idea, launching an MVP, or scaling an existing product, I will help you transform your vision into a scalable web solution with a strong technical foundation, clean architecture, and maintainable code. AI accelerates my development workflow—so you ship faster without compromising quality.",
          outcomes: [
            "Production-ready MVP or SaaS application",
            "Scalable architecture that grows with your business",
            "Faster time-to-market without sacrificing quality",
            "Clean, maintainable code built for long-term success",
          ],
        },
        {
          title: "Technical Consulting",
          tagline: "Solve the problems slowing your team down.",
          body: "Need a second opinion on the front-end architecture, performance bottlenecks, scalability or some other type of complexity? I help teams identify root causes, make informed technical decisions, and define a clear path forward.",
          outcomes: [
            "Clear diagnosis of bottlenecks and technical debt",
            "Actionable architecture and performance recommendations",
            "Informed decisions on tech stack and tooling",
            "A defined path forward for your team",
          ],
        },
        {
          title: "Modernize & Scale",
          tagline: "Improve what already works.",
          body: "Legacy applications don't always need a rewrite. I help teams modernize codebases, introduce scalable architecture, establish design systems, improve performance, and reduce long-term maintenance costs without disrupting product development.",
          outcomes: [
            "Legacy codebase modernized without service disruption",
            "Scalable architecture and established design system",
            "Improved performance and Core Web Vitals",
            "Reduced maintenance costs and technical debt",
          ],
        },
      ],
      ctaBook: "Book a free call",
      ctaWork: "See my work →",
      workedWithLabel: "Trusted by teams at",
    },
    writing: {
      eyebrow: "Writing",
      heading: "Thinking out loud.",
      subheading:
        "Articles on frontend engineering, design systems, and building software that's maintainable at scale.",
      minRead: "min read",
    },
    techStack: {
      eyebrow: "Tech",
      heading: "Tools of the trade",
      categories: [
        { label: "Languages", items: ["TypeScript", "JavaScript", "PHP"] },
        {
          label: "Frontend",
          items: [
            "React",
            "Next.js",
            "Astro",
            "Tailwind",
            "Radix UI",
            "Material UI",
            "Redux Toolkit",
            "D3.js",
            "Sass",
          ],
        },
        {
          label: "Testing",
          items: ["Jest", "RTL", "Stryker.js", "Storybook", "Vitest"],
        },
        {
          label: "Backend & Data",
          items: [
            "Node.js",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Prisma",
            "Firebase",
          ],
        },
        {
          label: "Infra & DevOps",
          items: ["Docker", "GitHub Actions", "Jenkins", "Vite", "Webpack"],
        },
        {
          label: "AI Tools",
          items: ["GitHub Copilot", "Claude", "Cursor", "Gemini"],
        },
        { label: "Auth & Tooling", items: ["Auth0", "ESLint", "Git", "Figma"] },
      ],
    },
    contact: {
      eyebrow: "Let's Connect",
      heading: "Let's build something powerful together",
      body: "Book a free discovery call. No sales pitch — just an honest conversation about your challenges and whether I can help.",
      perks: [
        "30-minute focused conversation",
        "No obligation, completely free",
        "Understand your challenges first",
        "Get actionable insights either way",
      ],
      ctaBook: "Schedule your free call",
      orEmail: "or if you prefer —",
      emailLink: "send me an email",
      lookingFor: {
        eyebrow: "What I'm looking for",
        items: [
          "Senior frontend roles",
          "Full-stack roles (Next.js or Node.js)",
          "Complex products at scale",
          "Teams that care about craft",
          "Remote or hybrid (Serbia-based)",
        ],
      },
      responseTime: {
        eyebrow: "Response time",
        body: "I typically respond within 24 hours. If it's urgent, mention it in the subject line.",
      },
      location: {
        eyebrow: "Location",
        city: "Niš, Serbia",
        timezone: "UTC+1 (CET) / UTC+2 (CEST)",
      },
    },
    footer: {
      tagline: "Building scalable software that grows with your business",
    },
  },

  sr: {
    htmlLang: "sr",
    site: {
      title:
        "Petar Jovanović - Senior Product Engineer | SaaS i AI razvoj | Razvoj uz pomoć AI-a",
      description:
        "Pomažem startapovima i preduzećima da pretvore svoju viziju u skalabilne veb aplikacije s čistom arhitekturom, promišljenim UX-om i jakim tehničkim temeljima.",
    },
    nav: {
      home: "Početna",
      about: "O meni",
      work: "Projekti",
      services: "Usluge",
      writing: "Blog",
      contact: "Kontakt",
      bookCall: "Zakažite poziv",
      switchTo: "EN",
      switchToLabel: "Switch to English",
      switchToHref: "/",
    },
    hero: {
      eyebrow:
        "Senior Product Engineer · SaaS i AI razvoj · Razvoj uz pomoć AI-a",
      headingHtml:
        'Gradim <span class="text-[#818cf8]">softver</span> na webu koji raste zajedno s vašim <span class="text-[#818cf8]">poslovanjem</span>',
      body: "Više od 7 godina gradim proizvode za industrijske lidere, uključujući platforme za kompanije s Fortune Global 500 liste u fintech-u, ed-techu, društvenim mrežama i e-commercu.",
      ctaWork: "Pogledajte moj rad",
      ctaTalk: "Razgovarajmo",
      workedWithLabel: "Radio sam sa",
    },
    stats: {
      years: "Godina iskustva",
      startups: "Startapa izgrađenih od nule",
      projects: "Produkcijskih projekata",
      users: "Korisnika",
    },
    about: {
      eyebrow: "Čovek iza koda",
      heading: "Upoznajte me",
      valuesEyebrow: "Moje vrednosti",
      bio: [
        `Zdravo! Ja sam Petar i pomažem ljudima i kompanijama da svoje ideje pretvore u kvalitetna digitalna rešenja.`,
        `Bilo da želite da pokrenete novi biznis na internetu, izgradite web sajt ili aplikaciju, ili unapredite postojeće digitalno poslovanje — mogu da vam pomognem da pronađemo pravo tehničko rešenje i sprovedemo ga u delo.`,
        `Od prve ideje do gotovog proizvoda, moj cilj je da tehnologija bude alat koji rešava stvarne probleme, olakšava poslovanje i stvara prostor za dalji rast.`,
        `Više od 7 godina razvijam softverska rešenja za startape i velike međunarodne kompanije, a danas to iskustvo koristim da klijentima pomognem da tehnologiju pretvore u nešto što donosi konkretnu vrednost njihovom biznisu.`,
        `Ja sam osoba koja primećuje najsitnije detalje i zaista mari da stvari budu urađene
        kako treba. Upravo tako pristupam razvoju softvera. Verujem da je to ono što razdvaja
        dobar softver od izvanrednog. Temeljit sam po prirodi i duboko mi je stalo do kvaliteta.
        Kad god nešto gradim, želim na kraju dana da pogledam i pomislim:
        <em class="text-[#888] not-italic">"Zaista sam ponosan na ono što sam napravio."</em>`,
        `Volim da uprošćavam složenost. Tokom godina otkrio sam da ovaj pristup koristi ne samo
        kodu i inženjering timu, već i ljudima koji svakodnevno koriste proizvod. Iskustvo me je
        naučilo da izađem iz načina razmišljanja inženjera i stavim se u kožu korisnika. Danas,
        sa veštačkom inteligencijom koja ubrzava razvoj softvera više nego ikad, pitanje više nije
        <em class="text-[#888] not-italic">"Da li možemo to izgraditi?"</em> — već
        <em class="text-[#888] not-italic">"Da li treba da to izgradimo?"</em> Verujem da je
        odličan inženjering rešavanje pravih problema, a ne samo gradnja novih funkcionalnosti.`,
        `Transparentnost je jedna od mojih ključnih vrednosti, kako profesionalno tako i lično.
        Radije ću reći <em class="text-[#888] not-italic">"Ne znam"</em> nego da glumim da znam
        i stvorim veći problem kasnije. Cenim iskrenost, jasnu komunikaciju i poverenje. Zato
        preuzimam samo projekte u kojima zaista verujem da mogu napraviti smislen doprinos.`,
        `Pored klijentskog rada, osnivač sam platforme <strong class="text-[#aaa] font-semibold"><a href="https://www.whatistheoutput.com/" target="_blank" rel="noopener noreferrer" class="hover:text-[#818cf8] transition-colors duration-200">What Is The Output</a></strong>,
        s jednostavnom misijom: pomaganje programerima da identifikuju praznine u svom znanju i
        pronađu prave resurse za učenje koji će ih zatvoriti. Trenutno smo u fazi dokaza koncepta,
        validiramo ideju i tražimo veze s tehničkim edukatorima, investitorima i ljudima koji dele
        našu viziju da učenje programera postane personalizovanije i efektivnije. Ako vam ovo
        rezonuje, voleo bih da čujem od vas.`,
        `Van inženjeringa, strastveni sam muzičar i zagrizeni čitalac. Verujem da kreativnost u
        jednoj disciplini izoštrava razmišljanje u drugoj, i neke od mojih najboljih tehničkih
        ideja su došle iz iskustava koja nemaju nikakve veze s programiranjem. Nedavno sam i
        postao ponosan tata divne devojčice, Lole. U zadnje vreme, većinu slobodnog vremena
        radosno provodim s njom.`,
        `Ako jednostavno tražite nekoga ko će završiti listu zadataka, ima mnogo inženjera koji
        to mogu. Ali ako tražite nekoga ko će zaista mariti za vaš proizvod, dovoditi u pitanje
        pretpostavke kada je to potrebno, doprinositi idejama i graditi softver koji vaši korisnici
        zaista trebaju — voleo bih da razgovaramo i istražimo kako možemo sarađivati.`,
      ],
      values: [
        {
          label: "Pažljiv",
          body: "Primećujem najsitnije detalje i zaista mi je stalo da stvari budu urađene kako treba. To je ono što razdvaja dobar softver od izvanrednog — i tu za mene nema pregovora.",
        },
        {
          label: "Transparentan",
          body: "Radije ću reći 'Ne znam' nego glumiti da znam i stvoriti veći problem. Cenim iskrenost, jasnu komunikaciju i poverenje — u svakom projektu, s svakim saradnikom.",
        },
        {
          label: "Korisnik na prvom mestu",
          body: "Uprošćavam složenost i stavljam se u kožu korisnika. Danas pitanje nije 'Da li možemo to izgraditi?' — već 'Da li treba?' Odličan inženjering rešava prave probleme.",
        },
        {
          label: "Svrhovit",
          body: "Ne završavam liste zadataka — zaista mi je stalo do vašeg proizvoda, dovodim u pitanje pretpostavke kada je potrebno i preuzimam samo rad gde verujem da mogu napraviti pravi doprinos.",
        },
      ],
    },
    philosophy: {
      eyebrow: "Proces rada",
      heading: "Kako ćemo raditi zajedno",
      stepLabel: "Korak",
      steps: [
        {
          title: "Analiza vaših zahteva",
          body: "Svaki uspešan proizvod počinje razumevanjem problema. Ne počinjemo izgradnju dok u potpunosti ne razumem svaki detalj vaše vizije. Izdvojiću vreme da saznam o vašem poslovanju, korisnicima, ciljevima i tehničkim ograničenjima pre donošenja bilo kakvih implementacionih odluka. Pravo rešenje počinje postavljanjem pravih pitanja.",
        },
        {
          title: "Predlog pravog rešenja",
          body: "Kada razumem širu sliku, predložiću pristup koji usklađuje poslovne ciljeve, kvalitet rešenja, skalabilnost i brzinu razvoja. Svaku odluku donosim imajući u vidu dugoročni uspeh vašeg proizvoda.",
        },
        {
          title: "Razvoj s fokusom na inženjering",
          body: "Ovde ideje postaju stvarnost. Koristim veštačku inteligenciju kako bih ubrzao razvoj i omogućio vam da svoju ideju testirate i validirate za kraće vreme, bez žrtvovanja kvaliteta. U kombinaciji sa kvalitetnom arhitekturom, održivim kodom, dobrim korisničkim iskustvom i otvorenom komunikacijom, ovaj pristup nam omogućava da brže dođemo do rezultata i izgradimo pouzdano rešenje na duže staze.",
        },
        {
          title: "Lansiranje i kontinuirano unapređenje",
          body: "Lansiranje nije kraj — već početak. Nakon što proizvod zaživi, prikupljamo povratne informacije, pratimo rezultate i unapređujemo ono što je zaista važno. Kako se vaše poslovanje razvija, proizvod nastavlja da se razvija zajedno sa njim.",
        },
      ],
      ctaBook: "Zakažite besplatan poziv",
      ctaWork: "Pogledajte moj rad →",
    },
    work: {
      eyebrow: "Izabrani projekti",
      heading: "Šta sam izgradio",
      items: [
        {
          label: "Fintech · Startup · Računovodstvo i analitika",
          company:
            "Paayed - Sveobuhvatna platforma za plaćanje (računovodstvo, CRM, plaćanja)",
          description:
            "Vodio razvoj deljene npm UI biblioteke komponenti i dizajn sistema, uspostavljajući skalabilne frontend standarde koji su poboljšali konzistentnost UI-a, ubrzali razvoj i smanjili troškove održavanja. Isporučio ključne fintech funkcionalnosti uključujući sigurnu autentifikaciju, 3DS tokove plaćanja, Hosted Payment Pages, analitiku, CRM, izveštavanje i računovodstvene module.",
          outcomes: [
            "Deljena UI biblioteka usvojena na nivou kompanije",
            "90+ legacy komponenti standardizovano i prebačeno u biblioteku",
            "Ubrzana isporuka funkcionalnosti",
            "Smanjeno dugoročno održavanje",
            "UK fintech compliance zahtevi",
          ],
        },
        {
          label: "Modna industrija · Enterprise · E-commerce · EdTech",
          company: "Symphony - Kompanija za razvoj softvera",
          tagline: "4 klijentska projekta · Sep 2022–Dec 2024",
          projects: [
            {
              name: "Fortune Global 500 MFE platforma",
              highlight:
                "Isporučio Micro-Frontend (MFE) veb aplikaciju koja podržava radni tok produkcije artikala i svakodnevno poslovanje između eksternih dobavljača širom sveta i timova za osiguranje kvaliteta kompanije. Izgradio deljenu npm UI biblioteku usvojenu u 5+ inženjering timova.",
            },
            {
              name: "US Booking platforma",
              highlight:
                "Full-stack platforma koja povezuje pružaoce usluga i korisnike — pretraga usluga, tokovi rezervacija i integracija kalendara.",
            },
            {
              name: "HR CRM alat",
              highlight:
                "Admin panel s kontinuiranim UI/UX poboljšanjima koji prikazuje uvide o veštinama i iskustvu zaposlenih za efikasno raspoređivanje kadrova.",
            },
            {
              name: "Interna platforma za učenje",
              highlight:
                "Razvio i isporučio platformu za deljenje znanja koja pomaže stotinama zaposlenih da uče i sarađuju.",
            },
          ],
          outcomes: [
            "Angažman u Fortune Global 500 inženjeringu",
            "Isporučena i održavana deljena npm UI biblioteka usvojena od strane 5+ timova",
            "4 uspešno isporučena proizvoda",
            "Međufunkcionalna saradnja u skali",
          ],
        },
        {
          label: "Fintech · Enterprise · Računovodstvo i analitika · AI EdTech",
          company: "Devtech - Kompanija za razvoj softvera",
          tagline: "2 klijentska projekta · Aug 2021–Sep 2022",
          projects: [
            {
              name: "Enterprise računovodstvena platforma (SAD)",
              highlight:
                "Transformisao UI legacy enterprise sistema u moderan, skalabilan frontend usklađen s najboljim inženjering praksama. Isporučio dashborde za finansijsko izveštavanje, tokove za računovodstvo lizinga i performantne UI komponente s velikim količinama podataka.",
            },
            {
              name: "AI-Powered Microsoft-365 platforma za obuku",
              highlight:
                "Vodio frontend implementaciju naprednih funkcionalnosti za vizualizaciju podataka, gradeći prilagođene standalone D3.js chart komponente za renderovanje kompleksnih, velikih skupova podataka.",
            },
          ],
          outcomes: [
            "Enterprise platforma modernizovana",
            "Prilagođene D3.js vizualizacije podataka",
            "AI platforma za učenje",
            "Visokoučinkoviti analitički dashbordovi",
          ],
        },
      ],
    },
    services: {
      eyebrow: "Moje usluge",
      heading: "Kako mogu pomoći",
      items: [
        {
          title: "Izgradite vaš proizvod",
          tagline: "Od ideje do produkcijskog softvera.",
          body: "Bilo da validirate novu ideju, lansirate MVP ili skalujete postojeći proizvod, pomoći ću vam da transformišete svoju viziju u skalabilno veb rešenje s jakim tehničkim temeljima, čistom arhitekturom i održivim kodom. Veštačka inteligencija ubrzava moj razvojni radni tok — tako da isporučujete brže bez kompromisa kvaliteta.",
          outcomes: [
            "Produkcijsko-spreman MVP ili SaaS aplikacija",
            "Skalabilna arhitektura koja raste s vašim poslovanjem",
            "Brže vreme izlaska na tržište bez žrtvovanja kvaliteta",
            "Čist, održiv kod izgrađen za dugoročni uspeh",
          ],
        },
        {
          title: "Tehnički konsalting",
          tagline: "Rešite probleme koji usporavaju vaš tim.",
          body: "Trebate li mišljenje o frontend arhitekturi, performansnim uskim grlima, skalabilnosti ili nekoj drugoj vrsti složenosti? Pomažem timovima da identifikuju uzroke problema, donose informisane tehničke odluke i definišu jasan put napred.",
          outcomes: [
            "Jasna dijagnoza tehničkih prepreka i tehničkog duga",
            "Konkretne preporuke za unapređenje arhitekture i performansi",
            "Stručne preporuke za izbor tehnologija i alata",
            "Jasan plan narednih koraka za vaš tim",
          ],
        },
        {
          title: "Modernizacija i skaliranje",
          tagline: "Poboljšajte ono što već radi.",
          body: "Legacy aplikacije ne trebaju uvek prepisivanje. Pomažem timovima da modernizuju kodne baze, uvedu skalabilnu arhitekturu, uspostave dizajn sisteme, poboljšaju performanse i smanje dugoročne troškove održavanja bez narušavanja razvoja proizvoda.",
          outcomes: [
            "Modernizacija postojećeg sistema bez prekida u radu",
            "Skalabilna arhitektura i standardizovan dizajn sistem",
            "Bolje performanse, brzina i Core Web Vitals rezultati",
            "Niži troškovi održavanja i smanjen tehnički dug",
          ],
        },
      ],
      ctaBook: "Zakažite besplatan poziv",
      ctaWork: "Pogledajte moj rad →",
      workedWithLabel: "Poverenje timova iz",
    },
    writing: {
      eyebrow: "Blog",
      heading: "Razmišljanje naglas.",
      subheading:
        "Članci o frontend inženjeringu, dizajn sistemima i izgradnji softvera koji je skalabilan i održiv.",
      minRead: "min čitanja",
    },
    techStack: {
      eyebrow: "Tehnologije",
      heading: "Alati koje koristim",
      categories: [
        { label: "Jezici", items: ["TypeScript", "JavaScript", "PHP"] },
        {
          label: "Frontend",
          items: [
            "React",
            "Next.js",
            "Astro",
            "Tailwind",
            "Radix UI",
            "Material UI",
            "Redux Toolkit",
            "D3.js",
            "Sass",
          ],
        },
        {
          label: "Testiranje",
          items: ["Jest", "RTL", "Stryker.js", "Storybook", "Vitest"],
        },
        {
          label: "Backend i Podaci",
          items: [
            "Node.js",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Prisma",
            "Firebase",
          ],
        },
        {
          label: "Infrastruktura i DevOps",
          items: ["Docker", "GitHub Actions", "Jenkins", "Vite", "Webpack"],
        },
        {
          label: "AI Alati",
          items: ["GitHub Copilot", "Claude", "Cursor", "Gemini"],
        },
        {
          label: "Autentifikacija i Alati",
          items: ["Auth0", "ESLint", "Git", "Figma"],
        },
      ],
    },
    contact: {
      eyebrow: "Povežimo se",
      heading: "Izgradimo nešto snažno zajedno",
      body: "Zakažite besplatni uvodni poziv. Bez prodajnih govora — samo iskren razgovor o vašim izazovima i tome da li mogu da pomognem.",
      perks: [
        "30-minutni fokusirani razgovor",
        "Bez obaveza, potpuno besplatno",
        "Prvo razumem vaše izazove",
        "Dobijate korisne uvide u svakom slučaju",
      ],
      ctaBook: "Zakažite besplatan poziv",
      orEmail: "ili ako preferirate —",
      emailLink: "pošaljite mi email",
      lookingFor: {
        eyebrow: "Šta tražim",
        items: [
          "Senior frontend pozicije",
          "Full-stack pozicije (Next.js ili Node.js)",
          "Složeni proizvodi u skali",
          "Timovi kojima je stalo do kvaliteta",
          "Udaljeno ili hibridno (Srbija)",
        ],
      },
      responseTime: {
        eyebrow: "Vreme odgovora",
        body: "Obično odgovaram u roku od 24 sata. Ako je hitno, napomenite to u naslovu poruke.",
      },
      location: {
        eyebrow: "Lokacija",
        city: "Niš, Srbija",
        timezone: "UTC+1 (CET) / UTC+2 (CEST)",
      },
    },
    footer: {
      tagline: "Gradim softver na webu koji raste zajedno s vašim poslovanjem",
    },
  },
} as const;

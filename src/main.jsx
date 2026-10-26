import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./assets/fonts/fonts.css";
import "./styles.css";

const WHATSAPP_NUMBER = "966500000000";

const images = {
  hero:
    "/images/salon-hero.png",
  bridal:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=84",
  hair:
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=84",
  makeup:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=84",
  nails:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=84",
  skin:
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1400&q=84",
  lounge:
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1400&q=84"
};

const sectionIds = ["portfolio", "services", "pricing", "testimonials", "contact"];

const content = {
  en: {
    lang: "en",
    dir: "ltr",
    brand: "Layali",
    brandArabic: "ليالي",
    nav: [
      { label: "Gallery", href: "#portfolio" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Contact", href: "#contact" }
    ],
    languageToggle: "العربية",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    whatsappMessage:
      "Hello Layali, I would like to book a private beauty appointment.",
    hero: {
      place: "ranked top 24 in ryiadh",
      title: "Layali Beauty Salon",
      copy:
        "Hair, bridal beauty, skin rituals, and nails for women who want a private appointment with a polished luxury finish.",
      primary: "Book on WhatsApp",
      secondary: "View gallery",
      imageAlt:
        "A calm luxury salon suite with soft lighting and styled hair stations",
      scroll: "Scroll to gallery"
    },
    portfolio: {
      heading: "Gallery",
      label: "Salon portfolio gallery",
      cta: "Book this look",
      items: [
        {
          title: "Bridal glow",
          image: images.bridal,
          alt: "Soft bridal makeup with luminous skin"
        },
        {
          title: "Glossy blowout",
          image: images.hair,
          alt: "Glossy styled hair in a salon chair"
        },
        {
          title: "Evening makeup",
          image: images.makeup,
          alt: "Polished evening makeup with soft rose tones"
        },
        {
          title: "Quiet lounge",
          image: images.lounge,
          alt: "Private salon lounge with refined lighting"
        },
        {
          title: "Clean manicure",
          image: images.nails,
          alt: "Minimal luxury manicure with polished nails"
        },
        {
          title: "Skin ritual",
          image: images.skin,
          alt: "Beauty treatment room prepared for a skin ritual"
        }
      ]
    },
    services: {
      heading: "Services",
      intro:
        "Private, polished appointments for everyday beauty, occasions, and bridal preparation.",
      items: [
        {
          title: "Signature hair",
          label: "Most requested",
          detail:
            "Soft color, refined cuts, glossy blowouts, and occasion styling shaped around your features.",
          image: images.hair
        },
        {
          title: "Bridal beauty",
          label: "Private room",
          detail:
            "A calm preparation rhythm for engagement nights, weddings, and family celebrations.",
          image: images.bridal
        },
        {
          title: "Skin rituals",
          label: "Glow finish",
          detail:
            "Restorative facials and glow treatments for a polished, camera-ready finish.",
          image: images.skin
        },
        {
          title: "Nails and polish",
          label: "Quiet detail",
          detail:
            "Minimal manicures, delicate nail art, and long-wear finishes for every occasion.",
          image: images.nails
        }
      ]
    },
    pricing: {
      heading: "Pricing",
      book: "Book on WhatsApp",
      items: [
        {
          name: "Essential polish",
          price: "280 SAR",
          note: "Hair styling, manicure refresh, or soft makeup finish.",
          features: ["Consultation", "One focused service", "Finishing ritual"]
        },
        {
          name: "Occasion suite",
          price: "740 SAR",
          note: "A composed look for evenings, photos, and family events.",
          features: ["Hair styling", "Makeup finish", "Private appointment"]
        },
        {
          name: "Bridal atelier",
          price: "From 1,900 SAR",
          note: "A private preparation experience for the full bridal look.",
          features: ["Trial session", "Hair and makeup", "Bridal room booking"]
        }
      ]
    },
    testimonials: {
      heading: "Client reviews",
      previous: "Previous reviews",
      next: "Next reviews",
      pause: "Pause review carousel",
      play: "Play review carousel",
      motionOff: "Autoplay is off because reduced motion is enabled",
      reviews: [
        {
          quote:
            "The appointment felt calm and private. My hair looked polished without feeling too styled.",
          name: "Bride, Riyadh",
          context: "Bridal atelier"
        },
        {
          quote:
            "They understood exactly what I meant by soft glam. Elegant, clean, and very comfortable.",
          name: "Private client",
          context: "Occasion makeup"
        },
        {
          quote:
            "The blowout lasted through the whole evening. I loved that the finish still looked natural.",
          name: "Salon guest",
          context: "Signature hair"
        },
        {
          quote:
            "The room was quiet, the timing was organized, and the bridal trial gave me so much confidence.",
          name: "Bride-to-be",
          context: "Trial session"
        },
        {
          quote:
            "My manicure was simple and very neat. The kind of detail you notice in photos.",
          name: "Regular guest",
          context: "Nails and polish"
        },
        {
          quote:
            "I booked before a family event and left feeling ready without rushing.",
          name: "Private client",
          context: "Occasion suite"
        },
        {
          quote:
            "The makeup artist listened carefully. The result was refined and suited my features.",
          name: "Riyadh guest",
          context: "Soft glam"
        },
        {
          quote:
            "Clean space, beautiful lighting, and a team that made the whole appointment feel easy.",
          name: "Salon guest",
          context: "Skin ritual"
        },
        {
          quote:
            "The hair color consultation was thoughtful. Nothing felt random or rushed.",
          name: "Private client",
          context: "Hair color"
        },
        {
          quote:
            "I came in for a simple refresh and it still felt like a luxury appointment.",
          name: "Riyadh client",
          context: "Essential polish"
        }
      ]
    },
    contact: {
      heading: "Reserve a private beauty appointment.",
      copy:
        "Share the occasion, preferred date, and service. The salon team can follow up with availability and preparation notes.",
      phone: "+966 50 000 0000",
      email: "hello@layalibeauty.example",
      location: "Al Olaya, Riyadh",
      whatsapp: "WhatsApp booking",
      form: {
        success:
          "Request received. The salon can follow up with available appointment times.",
        summary: "Please check these details:",
        name: "Name",
        phone: "Phone or WhatsApp",
        service: "Service",
        message: "Appointment details",
        submit: "Send request",
        errors: {
          name: "Enter your name so the salon can prepare your request.",
          phone: "Enter a phone number or WhatsApp number for follow-up.",
          message: "Share the occasion, preferred date, or service details."
        }
      }
    },
    footer: {
      tagline: "Private beauty appointments in Riyadh.",
      socialHeading: "Social",
      paymentHeading: "Payment methods",
      backToTop: "Back to top",
      socials: {
        instagram: "Instagram",
        snapchat: "Snapchat",
        tiktok: "TikTok",
        whatsapp: "WhatsApp"
      },
      payments: ["Mada", "Apple Pay", "Visa", "Mastercard", "STC Pay"]
    }
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    brand: "ليالي",
    brandArabic: "Layali",
    nav: [
      { label: "المعرض", href: "#portfolio" },
      { label: "الخدمات", href: "#services" },
      { label: "الباقات", href: "#pricing" },
      { label: "آراء العميلات", href: "#testimonials" },
      { label: "التواصل", href: "#contact" }
    ],
    languageToggle: "English",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    whatsappMessage:
      "هلا ليالي، حابة أحجز موعد خاص في الصالون.",
    hero: {
      place: "#24 على مستوى الرياض",
      title: "صالون ليالي",
      copy:
        "شعر، مكياج، عناية بالبشرة وأظافر بلمسة ناعمة وخصوصية تناسب مناسباتك.",
      primary: "احجزي عبر واتساب",
      secondary: "شاهدي المعرض",
      imageAlt: "صالون نسائي فاخر بإضاءة هادئة وكراسي تصفيف أنيقة",
      scroll: "انتقلي إلى المعرض"
    },
    portfolio: {
      heading: "المعرض",
      label: "معرض أعمال الصالون",
      cta: "احجزي هذا اللوك",
      items: [
        {
          title: "إطلالة عروس ناعمة",
          image: images.bridal,
          alt: "مكياج عروس ناعم وبشرة مضيئة"
        },
        {
          title: "استشوار لامع",
          image: images.hair,
          alt: "تصفيفة شعر ناعمة ولامعة داخل الصالون"
        },
        {
          title: "مكياج سهرة",
          image: images.makeup,
          alt: "مكياج سهرة راق بدرجات وردية ناعمة"
        },
        {
          title: "جلسة خاصة",
          image: images.lounge,
          alt: "ركن انتظار خاص داخل صالون فاخر"
        },
        {
          title: "مناكير ناعم",
          image: images.nails,
          alt: "أظافر مرتبة بطلاء ناعم وفاخر"
        },
        {
          title: "عناية بالبشرة",
          image: images.skin,
          alt: "غرفة عناية بالبشرة جاهزة لجلسة هادئة"
        }
      ]
    },
    services: {
      heading: "الخدمات",
      intro:
        "مواعيد خاصة ومرتبة لإطلالات يومية، مناسبات، وتجهيز عرايس.",
      items: [
        {
          title: "شعر وتصفيف",
          label: "الأكثر طلبا",
          detail:
            "قصات ناعمة، لون مرتب، استشوار لامع وتسريحات مناسبات تناسب ملامحك.",
          image: images.hair
        },
        {
          title: "تجهيز عروس",
          label: "غرفة خاصة",
          detail:
            "تجربة هادئة للملكة، ليلة الزفاف، والمناسبات العائلية المهمة.",
          image: images.bridal
        },
        {
          title: "عناية بالبشرة",
          label: "نضارة",
          detail:
            "جلسات عناية وترطيب تمنح البشرة مظهر مرتب ومشرق قبل المناسبة.",
          image: images.skin
        },
        {
          title: "أظافر ومناكير",
          label: "تفاصيل ناعمة",
          detail:
            "مناكير مرتب، رسومات خفيفة، وتشطيبات تدوم وتطلع جميلة بالصور.",
          image: images.nails
        }
      ]
    },
    pricing: {
      heading: "الباقات",
      book: "احجزي عبر واتساب",
      items: [
        {
          name: "لمسة أساسية",
          price: "٢٨٠ ر.س",
          note: "تصفيف شعر، تجديد مناكير، أو مكياج ناعم.",
          features: ["استشارة سريعة", "خدمة واحدة مركزة", "لمسة نهائية مرتبة"]
        },
        {
          name: "باقة مناسبة",
          price: "٧٤٠ ر.س",
          note: "إطلالة متكاملة للمناسبات، التصوير، والعزايم.",
          features: ["تصفيف شعر", "مكياج كامل", "موعد خاص"]
        },
        {
          name: "أتيلية العروس",
          price: "تبدأ من ١,٩٠٠ ر.س",
          note: "تجهيز خاص وهادئ لإطلالة العروس الكاملة.",
          features: ["جلسة تجربة", "شعر ومكياج", "حجز غرفة عروس"]
        }
      ]
    },
    testimonials: {
      heading: "آراء العميلات",
      previous: "الآراء السابقة",
      next: "الآراء التالية",
      pause: "إيقاف حركة الآراء",
      play: "تشغيل حركة الآراء",
      motionOff: "تم إيقاف الحركة بسبب إعداد تقليل الحركة",
      reviews: [
        {
          quote:
            "الموعد كان هادي وخاص، وشعري طلع مرتب بدون ما يحس مبالغ فيه.",
          name: "عروس من الرياض",
          context: "أتيلية العروس"
        },
        {
          quote:
            "فهموا طلبي بالضبط: مكياج ناعم وراقي، والنتيجة كانت مريحة وجميلة.",
          name: "عميلة خاصة",
          context: "مكياج مناسبة"
        },
        {
          quote:
            "الاستشوار ثبت طول الليلة، وأكثر شيء عجبني أنه كان طبيعي ولامع.",
          name: "زائرة للصالون",
          context: "شعر وتصفيف"
        },
        {
          quote:
            "غرفة العروس كانت مريحة والتنظيم واضح. التجربة خلتني أطمئن قبل اليوم الكبير.",
          name: "عروس قريبا",
          context: "جلسة تجربة"
        },
        {
          quote:
            "المناكير كان ناعم ومرتب، التفاصيل الصغيرة طلعت حلوة جدا بالصور.",
          name: "عميلة دائمة",
          context: "أظافر ومناكير"
        },
        {
          quote:
            "حجزت قبل مناسبة عائلية، وخلصت وأنا جاهزة بدون استعجال أو توتر.",
          name: "عميلة خاصة",
          context: "باقة مناسبة"
        },
        {
          quote:
            "خبيرة المكياج سمعتني كويس، واللوك طلع راق ومناسب لملامحي.",
          name: "زائرة من الرياض",
          context: "مكياج ناعم"
        },
        {
          quote:
            "المكان نظيف ومرتب والإضاءة جميلة، وكل شيء في الموعد كان سهل.",
          name: "زائرة للصالون",
          context: "عناية بالبشرة"
        },
        {
          quote:
            "استشارة لون الشعر كانت دقيقة. حسيت أن كل خطوة محسوبة ومو عشوائية.",
          name: "عميلة خاصة",
          context: "لون شعر"
        },
        {
          quote:
            "دخلت لتجديد بسيط، ومع ذلك حسيت أن التجربة كلها فاخرة ومهتمين بالتفاصيل.",
          name: "عميلة من الرياض",
          context: "لمسة أساسية"
        }
      ]
    },
    contact: {
      heading: "احجزي موعد جمال خاص.",
      copy:
        "ارسلي المناسبة، التاريخ المناسب، والخدمة المطلوبة. فريق ليالي يتواصل معك بالتوفر والتجهيزات.",
      phone: "+966 50 000 0000",
      email: "hello@layalibeauty.example",
      location: "العليا، الرياض",
      whatsapp: "حجز واتساب",
      form: {
        success: "وصلنا طلبك. فريق الصالون بيتواصل معك بالمواعيد المتاحة.",
        summary: "راجعي هذه التفاصيل:",
        name: "الاسم",
        phone: "رقم الجوال أو واتساب",
        service: "الخدمة",
        message: "تفاصيل الموعد",
        submit: "إرسال الطلب",
        errors: {
          name: "اكتبي اسمك عشان نجهز طلبك.",
          phone: "اكتبي رقم جوال أو واتساب للتواصل.",
          message: "اكتبي المناسبة، التاريخ المفضل، أو تفاصيل الخدمة."
        }
      }
    },
    footer: {
      tagline: "مواعيد جمال خاصة في الرياض.",
      socialHeading: "حساباتنا",
      paymentHeading: "طرق الدفع",
      backToTop: "العودة للأعلى",
      socials: {
        instagram: "إنستغرام",
        snapchat: "سناب شات",
        tiktok: "تيك توك",
        whatsapp: "واتساب"
      },
      payments: ["مدى", "Apple Pay", "Visa", "Mastercard", "STC Pay"]
    }
  }
};

const socialLinks = [
  { key: "instagram", href: "https://www.instagram.com/", Icon: InstagramIcon },
  { key: "snapchat", href: "https://www.snapchat.com/", Icon: SnapchatIcon },
  { key: "tiktok", href: "https://www.tiktok.com/", Icon: TiktokIcon },
  { key: "whatsapp", href: null, Icon: WhatsAppIcon }
];

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("layali-language") || "en";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { reviewViewportRef, reviewStep, visibleReviews } = useReviewLayout();
  const copy = content[language];
  const activeSection = useActiveSection(sectionIds);
  const headerScrolled = useHeaderScroll();
  const whatsAppHref = useMemo(
    () => makeWhatsAppUrl(copy.whatsappMessage),
    [copy.whatsappMessage]
  );
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: copy.pricing.items[2].name,
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [sent, setSent] = useState(false);
  const errorSummaryRef = useRef(null);
  const successRef = useRef(null);

  const reviewCount = copy.testimonials.reviews.length;
  const maxReviewIndex = Math.max(0, reviewCount - visibleReviews);
  const reviewsPaused = prefersReducedMotion || interactionPaused || userPaused;
  const reviewOffset = -activeReview * reviewStep;

  useRevealAnimation();
  useLuxuryCursor();
  useTiltCards();
  useHeroSparkles(prefersReducedMotion);
  useHeroScrollMotion(prefersReducedMotion);

  useEffect(() => {
    document.documentElement.lang = copy.lang;
    document.documentElement.dir = copy.dir;
    window.localStorage.setItem("layali-language", language);
  }, [copy.dir, copy.lang, language]);

  useEffect(() => {
    setActiveReview(0);
    setMenuOpen(false);
    setSent(false);
    setFormErrors({});
    setFormState((current) => ({
      ...current,
      service: copy.pricing.items[2].name
    }));
  }, [copy.pricing.items, language]);

  useEffect(() => {
    if (activeReview > maxReviewIndex) setActiveReview(0);
  }, [activeReview, maxReviewIndex]);

  useEffect(() => {
    if (reviewsPaused || maxReviewIndex === 0) return undefined;
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current >= maxReviewIndex ? 0 : current + 1));
    }, 4200);
    return () => window.clearInterval(timer);
  }, [maxReviewIndex, reviewsPaused]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const validationSummary = useMemo(
    () => Object.values(formErrors).filter(Boolean),
    [formErrors]
  );

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
    setSent(false);
  };

  const validateForm = () => {
    const nextErrors = {};
    if (formState.name.trim().length < 2) nextErrors.name = copy.contact.form.errors.name;
    if (formState.phone.trim().length < 7) nextErrors.phone = copy.contact.form.errors.phone;
    if (formState.message.trim().length < 10) {
      nextErrors.message = copy.contact.form.errors.message;
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setFormErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      window.requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }

    setSent(true);
    setFormState({
      name: "",
      phone: "",
      service: copy.pricing.items[2].name,
      message: ""
    });
    window.requestAnimationFrame(() => successRef.current?.focus());
  };

  const goToPreviousReviews = () => {
    setActiveReview((current) => (current <= 0 ? maxReviewIndex : current - 1));
  };

  const goToNextReviews = () => {
    setActiveReview((current) => (current >= maxReviewIndex ? 0 : current + 1));
  };

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "ar" : "en"));
  };

  const headerClassName = [
    "site-header",
    headerScrolled ? "is-scrolled" : "",
    menuOpen ? "is-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a className="skip-link" href="#main">
        {language === "ar" ? "تخطي إلى المحتوى" : "Skip to content"}
      </a>
      <div className="luxury-cursor" aria-hidden="true" />

      <header className={headerClassName}>
        <a className="brand-mark" href="#top" aria-label="Layali Beauty Salon home">
          <span className="brand-mark__symbol" aria-hidden="true">
            L
          </span>
          <span className="brand-mark__lockup">
            <span className="brand-mark__text">{copy.brand}</span>
            <span className="brand-mark__arabic" lang={language === "ar" ? "en" : "ar"}>
              {copy.brandArabic}
            </span>
          </span>
        </a>

        <nav
          id="mobile-navigation"
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label={language === "ar" ? "التنقل الرئيسي" : "Primary"}
        >
          {copy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "is-active" : ""}
              aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="site-nav__actions">
            <button className="lang-toggle" type="button" onClick={toggleLanguage}>
              {copy.languageToggle}
            </button>
            <a className="nav-cta" href={whatsAppHref} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              {copy.hero.primary}
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" type="button" onClick={toggleLanguage}>
            {copy.languageToggle}
          </button>
          <a className="nav-cta" href={whatsAppHref} target="_blank" rel="noreferrer">
            {copy.hero.primary}
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img
            className="hero__image"
            src={images.hero}
            alt={copy.hero.imageAlt}
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <div className="hero__veil" aria-hidden="true" />
          <canvas className="hero__sparkles" aria-hidden="true" />
          <div className="hero__content reveal">
            <p className="hero__place">{copy.hero.place}</p>
            <h1 id="hero-title">{copy.hero.title}</h1>
            <p className="hero__copy">{copy.hero.copy}</p>
            <div className="hero__actions">
              <a className="button button--gold" href={whatsAppHref} target="_blank" rel="noreferrer">
                {copy.hero.primary}
              </a>
              <a className="button button--ghost" href="#portfolio">
                {copy.hero.secondary}
              </a>
            </div>
          </div>
          <a className="hero__scroll" href="#portfolio" aria-label={copy.hero.scroll}>
            <span aria-hidden="true" />
          </a>
        </section>

        <section className="portfolio-section section-anchor" id="portfolio" aria-labelledby="portfolio-title">
          <div className="gallery-head reveal">
            <h2 id="portfolio-title">{copy.portfolio.heading}</h2>
            <a className="gallery-booking" href={whatsAppHref} target="_blank" rel="noreferrer">
              {copy.portfolio.cta}
            </a>
          </div>

          <div className="portfolio-grid" aria-label={copy.portfolio.label}>
            {copy.portfolio.items.map((item) => (
              <figure className="portfolio-card reveal" data-tilt key={item.title}>
                <img
                  src={item.image}
                  alt={item.alt}
                  width="1000"
                  height="1250"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="section services-section" aria-labelledby="services-title">
          <div className="section-heading section-anchor reveal" id="services">
            <h2 id="services-title">{copy.services.heading}</h2>
            <p>{copy.services.intro}</p>
          </div>

          <div className="service-showcase">
            {copy.services.items.map((service) => (
              <article className="service-card reveal" data-tilt key={service.title}>
                <img
                  src={service.image}
                  alt=""
                  width="900"
                  height="1100"
                  loading="lazy"
                  decoding="async"
                />
                <div className="service-card__body">
                  <span>{service.label}</span>
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-section section section-anchor" id="pricing" aria-labelledby="pricing-title">
          <h2 className="sr-only" id="pricing-title">
            {copy.pricing.heading}
          </h2>
          <div className="pricing-grid">
            {copy.pricing.items.map((plan, index) => (
              <article
                className={index === 1 ? "price-card price-card--featured reveal" : "price-card reveal"}
                data-tilt
                key={plan.name}
              >
                <div>
                  <h3>{plan.name}</h3>
                  <p>{plan.note}</p>
                </div>
                <strong>{plan.price}</strong>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="button button--purple" href={whatsAppHref} target="_blank" rel="noreferrer">
                  {copy.pricing.book}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className="reviews-section section-anchor"
          id="testimonials"
          aria-labelledby="testimonials-title"
        >
          <div className="reviews-head reveal">
            <h2 id="testimonials-title">{copy.testimonials.heading}</h2>
            <div className="review-controls" aria-label={copy.testimonials.heading}>
              <button className="icon-button" type="button" onClick={goToPreviousReviews} aria-label={copy.testimonials.previous}>
                <ChevronIcon direction={copy.dir === "rtl" ? "right" : "left"} />
              </button>
              <button
                className="icon-button"
                type="button"
                onClick={() => setUserPaused((paused) => !paused)}
                aria-label={
                  prefersReducedMotion
                    ? copy.testimonials.motionOff
                    : reviewsPaused
                      ? copy.testimonials.play
                      : copy.testimonials.pause
                }
                aria-pressed={userPaused}
                disabled={prefersReducedMotion}
              >
                {reviewsPaused ? <PlayIcon /> : <PauseIcon />}
              </button>
              <button className="icon-button" type="button" onClick={goToNextReviews} aria-label={copy.testimonials.next}>
                <ChevronIcon direction={copy.dir === "rtl" ? "left" : "right"} />
              </button>
            </div>
          </div>

          <div
            className="review-carousel reveal"
            ref={reviewViewportRef}
            onMouseEnter={() => setInteractionPaused(true)}
            onMouseLeave={() => setInteractionPaused(false)}
            onFocus={() => setInteractionPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setInteractionPaused(false);
            }}
          >
            <div
              className="review-track"
              style={{ transform: `translate3d(${reviewOffset}px, 0, 0)` }}
            >
              {copy.testimonials.reviews.map((review, index) => (
                <article className="review-card" key={`${review.name}-${index}`} tabIndex="0">
                  <p>{review.quote}</p>
                  <footer>
                    <strong>{review.name}</strong>
                    <span>{review.context}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div className="contact-copy section-anchor reveal" id="contact">
            <h2 id="contact-title">{copy.contact.heading}</h2>
            <p>{copy.contact.copy}</p>
            <div className="contact-details">
              <a href="tel:+966500000000">{copy.contact.phone}</a>
              <a href={whatsAppHref} target="_blank" rel="noreferrer">
                {copy.contact.whatsapp}
              </a>
              <a href="mailto:hello@layalibeauty.example">{copy.contact.email}</a>
              <span>{copy.contact.location}</span>
            </div>
          </div>

          <form className="contact-form reveal" noValidate onSubmit={handleSubmit}>
            {validationSummary.length > 0 && (
              <div
                className="form-summary"
                tabIndex="-1"
                ref={errorSummaryRef}
                role="alert"
              >
                <strong>{copy.contact.form.summary}</strong>
                <ul>
                  {validationSummary.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            {sent && (
              <div className="form-success" role="status" tabIndex="-1" ref={successRef}>
                {copy.contact.form.success}
              </div>
            )}

            <div className="field">
              <label htmlFor="name">{copy.contact.form.name}</label>
              <input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleFieldChange}
                aria-describedby={formErrors.name ? "name-error" : undefined}
                aria-invalid={Boolean(formErrors.name)}
                autoComplete="name"
              />
              {formErrors.name && <p id="name-error">{formErrors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor="phone">{copy.contact.form.phone}</label>
              <input
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleFieldChange}
                aria-describedby={formErrors.phone ? "phone-error" : undefined}
                aria-invalid={Boolean(formErrors.phone)}
                autoComplete="tel"
                inputMode="tel"
              />
              {formErrors.phone && <p id="phone-error">{formErrors.phone}</p>}
            </div>

            <div className="field">
              <label htmlFor="service">{copy.contact.form.service}</label>
              <select
                id="service"
                name="service"
                value={formState.service}
                onChange={handleFieldChange}
              >
                {copy.pricing.items.map((plan) => (
                  <option key={plan.name}>{plan.name}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">{copy.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formState.message}
                onChange={handleFieldChange}
                aria-describedby={formErrors.message ? "message-error" : undefined}
                aria-invalid={Boolean(formErrors.message)}
              />
              {formErrors.message && <p id="message-error">{formErrors.message}</p>}
            </div>

            <button className="button button--gold" type="submit">
              {copy.contact.form.submit}
            </button>
          </form>
        </section>
      </main>

      <a
        className={headerScrolled ? "floating-whatsapp is-visible" : "floating-whatsapp"}
        href={whatsAppHref}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.hero.primary}
      >
        <WhatsAppIcon />
      </a>

      <footer className="site-footer">
        <div>
          <a className="footer-brand" href="#top">
            {copy.brand}
          </a>
          <p>{copy.footer.tagline}</p>
        </div>

        <div className="footer-group">
          <h2>{copy.footer.socialHeading}</h2>
          <div className="footer-socials">
            {socialLinks.map(({ key, href, Icon }) => (
              <a
                key={key}
                href={key === "whatsapp" ? whatsAppHref : href}
                target="_blank"
                rel="noreferrer"
                aria-label={copy.footer.socials[key]}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-group">
          <h2>{copy.footer.paymentHeading}</h2>
          <div className="payment-list" aria-label={copy.footer.paymentHeading}>
            {copy.footer.payments.map((payment) => (
              <span key={payment}>{payment}</span>
            ))}
          </div>
        </div>

        <a className="footer-top" href="#top">
          {copy.footer.backToTop}
        </a>
      </footer>
    </>
  );
}

function makeWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);
    updatePreference();

    if (query.addEventListener) {
      query.addEventListener("change", updatePreference);
      return () => query.removeEventListener("change", updatePreference);
    }

    query.addListener(updatePreference);
    return () => query.removeListener(updatePreference);
  }, []);

  return prefersReducedMotion;
}

function useReviewLayout() {
  const reviewViewportRef = useRef(null);
  const [layout, setLayout] = useState({ reviewStep: 0, visibleReviews: 3 });

  useEffect(() => {
    const updateLayout = () => {
      const width = reviewViewportRef.current?.clientWidth || 0;
      const visibleReviews = width < 700 ? 1 : width < 1040 ? 2 : 3;
      const gap = width < 680 ? 14 : 18;
      const cardWidth = width > 0 ? (width - gap * (visibleReviews - 1)) / visibleReviews : 0;
      setLayout({ reviewStep: cardWidth + gap, visibleReviews });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout, { passive: true });
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return { reviewViewportRef, ...layout };
}

function useRevealAnimation() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll(".reveal"));
    const canObserve = !reduceMotion && "IntersectionObserver" in window;

    document.documentElement.classList.toggle("supports-reveal", canObserve);

    if (!canObserve) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("supports-reveal");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -48px" }
    );

    const revealFallback = window.setTimeout(() => {
      elements.forEach((element) => element.classList.add("is-visible"));
    }, 500);

    elements.forEach((element) => observer.observe(element));
    return () => {
      window.clearTimeout(revealFallback);
      observer.disconnect();
      document.documentElement.classList.remove("supports-reveal");
    };
  }, []);
}

function useHeaderScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return scrolled;
}

function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!("IntersectionObserver" in window) || sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (window.scrollY < window.innerHeight * 0.48) {
          setActiveSection("");
          return;
        }
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.08, 0.2, 0.36]
      }
    );

    sections.forEach((section) => observer.observe(section));
    const clearNearTop = () => {
      if (window.scrollY < window.innerHeight * 0.48) setActiveSection("");
    };
    window.addEventListener("scroll", clearNearTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", clearNearTop);
    };
  }, [ids]);

  return activeSection;
}

function useLuxuryCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".luxury-cursor");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!cursor || reduceMotion || !finePointer) return undefined;

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const moveCursor = (event) => {
      x = event.clientX;
      y = event.clientY;
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest("a, button, input, textarea, select, [data-tilt]");
      cursor.classList.toggle("is-active", Boolean(interactive));
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        frame = 0;
      });
    };

    cursor.classList.add("is-ready");
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
}

function useTiltCards() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion || !finePointer) return undefined;

    const cards = Array.from(document.querySelectorAll("[data-tilt]"));

    const handleMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 4).toFixed(2)}deg`);
      card.style.setProperty("--glow-x", `${(event.clientX - rect.left).toFixed(0)}px`);
      card.style.setProperty("--glow-y", `${(event.clientY - rect.top).toFixed(0)}px`);
    };

    const handleLeave = (event) => {
      const card = event.currentTarget;
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);
}

function useHeroSparkles(prefersReducedMotion) {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    const canvas = document.querySelector(".hero__sparkles");
    if (!hero || !canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    if (prefersReducedMotion) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      return undefined;
    }

    let particles = [];
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    const pointer = { x: 0, y: 0, active: false };
    const gold = "184, 138, 56";
    const pearl = "255, 248, 238";
    const lavender = "226, 210, 238";

    const createParticles = () => {
      const count = Math.max(26, Math.min(72, Math.round(width / 22)));
      particles = Array.from({ length: count }, (_, index) => {
        const upperBias = index % 5 === 0 ? 0.18 : 0.08;
        return {
          baseX: Math.random() * width,
          baseY: height * upperBias + Math.random() * height * 0.74,
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0.7 + Math.random() * 1.6,
          drift: 4 + Math.random() * 14,
          phase: Math.random() * Math.PI * 2,
          speed: 0.0004 + Math.random() * 0.0008,
          tone: index % 4 === 0 ? lavender : index % 3 === 0 ? pearl : gold
        };
      });
    };

    const resizeCanvas = () => {
      const rect = hero.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const updatePointer = (event) => {
      const rect = hero.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    const drawSparkle = (particle, alpha, glow) => {
      const gradient = context.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.radius * glow
      );
      gradient.addColorStop(0, `rgba(${particle.tone}, ${Math.min(alpha + 0.22, 0.78)})`);
      gradient.addColorStop(0.38, `rgba(${particle.tone}, ${alpha})`);
      gradient.addColorStop(1, `rgba(${particle.tone}, 0)`);

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius * glow, 0, Math.PI * 2);
      context.fill();

      if (particle.radius > 1.55 && alpha > 0.24) {
        context.strokeStyle = `rgba(${particle.tone}, ${alpha * 0.42})`;
        context.lineWidth = 0.55;
        context.beginPath();
        context.moveTo(particle.x - particle.radius * 2.2, particle.y);
        context.lineTo(particle.x + particle.radius * 2.2, particle.y);
        context.moveTo(particle.x, particle.y - particle.radius * 2.2);
        context.lineTo(particle.x, particle.y + particle.radius * 2.2);
        context.stroke();
      }
    };

    const render = (time) => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const orbitX = Math.sin(time * particle.speed + particle.phase) * particle.drift;
        const orbitY = Math.cos(time * particle.speed * 0.82 + particle.phase) * particle.drift * 0.55;
        let targetX = particle.baseX + orbitX;
        let targetY = particle.baseY + orbitY;
        let disturbance = 0;

        if (pointer.active) {
          const dx = targetX - pointer.x;
          const dy = targetY - pointer.y;
          const distance = Math.hypot(dx, dy);
          const radius = 155;

          if (distance < radius) {
            const force = (1 - distance / radius) ** 2;
            const angle = Math.atan2(dy, dx);
            targetX += Math.cos(angle) * force * 76;
            targetY += Math.sin(angle) * force * 50;
            disturbance = force;
          }
        }

        particle.x += (targetX - particle.x) * 0.085;
        particle.y += (targetY - particle.y) * 0.085;

        const twinkle = (Math.sin(time * particle.speed * 2.8 + particle.phase) + 1) / 2;
        const alpha = 0.08 + twinkle * 0.22 + disturbance * 0.28;
        drawSparkle(particle, alpha, 3.8 + disturbance * 2.6);
      });

      frame = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    frame = window.requestAnimationFrame(render);
    window.addEventListener("resize", resizeCanvas);
    hero.addEventListener("mousemove", updatePointer);
    hero.addEventListener("mouseleave", clearPointer);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resizeCanvas);
      hero.removeEventListener("mousemove", updatePointer);
      hero.removeEventListener("mouseleave", clearPointer);
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [prefersReducedMotion]);
}

function useHeroScrollMotion(prefersReducedMotion) {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return undefined;

    let frame = 0;

    const clearMotion = () => {
      hero.style.removeProperty("--hero-image-y");
      hero.style.removeProperty("--hero-image-scale");
      hero.style.removeProperty("--hero-content-y");
      hero.style.removeProperty("--hero-content-opacity");
      hero.style.removeProperty("--hero-scroll-y");
      hero.style.removeProperty("--hero-scroll-opacity");
      hero.style.removeProperty("--hero-veil-opacity");
    };

    const updateMotion = () => {
      frame = 0;

      if (prefersReducedMotion) {
        clearMotion();
        return;
      }

      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height * 0.82)));

      hero.style.setProperty("--hero-image-y", `${(progress * 34).toFixed(2)}px`);
      hero.style.setProperty("--hero-image-scale", (1.035 + progress * 0.035).toFixed(3));
      hero.style.setProperty("--hero-content-y", `${(-progress * 28).toFixed(2)}px`);
      hero.style.setProperty("--hero-content-opacity", Math.max(0.62, 1 - progress * 0.38).toFixed(3));
      hero.style.setProperty("--hero-scroll-y", `${(progress * 18).toFixed(2)}px`);
      hero.style.setProperty("--hero-scroll-opacity", Math.max(0, 1 - progress * 1.8).toFixed(3));
      hero.style.setProperty("--hero-veil-opacity", (1 + progress * 0.08).toFixed(3));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      clearMotion();
    };
  }, [prefersReducedMotion]);
}

function ChevronIcon({ direction }) {
  const points = direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6";
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <polyline points={points} />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9 5v14M15 5v14" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9 6.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3.5a8.2 8.2 0 0 0-7 12.4l-1 4.1 4.2-1a8.2 8.2 0 1 0 3.8-15.5Z" />
      <path d="M8.8 8.5c.2-.5.4-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.6 1 1.4 1.8 2.5 2.4l.6-.6c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.6v.6c0 .5-.2.7-.6.9-.6.3-1.4.2-2.2-.1-2.6-.9-4.7-3-5.7-5.5-.3-.8-.4-1.5-.1-2.1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.3" />
      <circle cx="16.3" cy="7.8" r="0.7" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 4.5c3 0 4.1 2.5 4.1 5.1v2c0 .5.5.8 1.3.9.6.1 1.1.3 1.1.8 0 .6-.7.8-1.6 1.1-.5.2-.8.4-1 .8-.4.8-1.1 1.4-2.2 1.6-.5.1-.7.7-1.7.7s-1.2-.6-1.7-.7c-1.1-.2-1.8-.8-2.2-1.6-.2-.4-.5-.6-1-.8-.9-.3-1.6-.5-1.6-1.1 0-.5.5-.7 1.1-.8.8-.1 1.3-.4 1.3-.9v-2c0-2.6 1.1-5.1 4.1-5.1Z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.5 5v9.2a4.2 4.2 0 1 1-3.7-4.2" />
      <path d="M14.5 5c.6 2.2 2.2 3.5 4.3 3.8" />
    </svg>
  );
}

const rootElement = document.getElementById("root");
const root = rootElement._layaliRoot ?? createRoot(rootElement);
rootElement._layaliRoot = root;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

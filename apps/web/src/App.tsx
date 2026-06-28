import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  BadgeCheck,
  Camera,
  ChevronRight,
  Gauge,
  Globe2,
  HardDrive,
  Menu,
  ShieldCheck,
  Snowflake,
  Video,
  X
} from "lucide-react";
import {
  capacityOptions,
  confirmBeforeUse,
  getLocale,
  locales,
  LocaleCode,
  recommendedFormats,
  technicalFacts
} from "@hiipoo/content";

const localeCodes = Object.keys(locales) as LocaleCode[];
const basePath = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
const whatsappPhone = "8619064025220";

function asset(path: string) {
  return `${basePath}${path.replace(/^\/+/, "")}`;
}

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const headerHeight = document.querySelector(".global-nav")?.getBoundingClientRect().height ?? 0;
  const subNavHeight = document.querySelector(".sub-nav")?.getBoundingClientRect().height ?? 0;
  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - subNavHeight - 12);

  window.scrollTo({ top, behavior: "smooth" });
}

function createInitialQuantities() {
  return Object.fromEntries(capacityOptions.map((option) => [option.capacity, 0])) as Record<string, number>;
}

export function App() {
  const [locale, setLocale] = useState<LocaleCode>("en");
  const [orderQuantities, setOrderQuantities] = useState<Record<string, number>>(createInitialQuantities);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const content = getLocale(locale);
  const selectedOrderItems = useMemo(
    () => capacityOptions.filter((option) => (orderQuantities[option.capacity] ?? 0) > 0),
    [orderQuantities]
  );
  const totalOrderQuantity = useMemo(
    () => selectedOrderItems.reduce((total, option) => total + (orderQuantities[option.capacity] ?? 0), 0),
    [orderQuantities, selectedOrderItems]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = content.direction;
  }, [content.direction, locale]);

  useEffect(() => {
    if (!isLanguageOpen) {
      return;
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      if (languageMenuRef.current?.contains(event.target as Node)) {
        return;
      }
      setIsLanguageOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isLanguageOpen]);

  useEffect(() => {
    if (!isMobileNavOpen) {
      return;
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      const target = event.target as Node;
      if (mobileMenuRef.current?.contains(target) || mobileMenuButtonRef.current?.contains(target)) {
        return;
      }
      setIsMobileNavOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileNavOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileNavOpen]);

  function clampQuantity(nextQuantity: number) {
    return Math.max(0, Math.min(999, Number.isFinite(nextQuantity) ? Math.floor(nextQuantity) : 0));
  }

  function updateOrderQuantity(capacity: string, nextQuantity: number) {
    setOrderQuantities((current) => ({
      ...current,
      [capacity]: clampQuantity(nextQuantity)
    }));
  }

  function changeOrderQuantity(capacity: string, delta: number) {
    setOrderQuantities((current) => ({
      ...current,
      [capacity]: clampQuantity((current[capacity] ?? 0) + delta)
    }));
  }

  function submitWhatsAppOrder() {
    if (totalOrderQuantity === 0) {
      return;
    }

    const lines = selectedOrderItems.map((option) => {
      const quantity = orderQuantities[option.capacity] ?? 0;
      return `- ${option.capacity} ${option.type}: ${quantity} pcs`;
    });
    const message = [
      "Hi, I want to place a Hiipoo Birdie CFexpress Type A order.",
      "",
      "Order details:",
      ...lines,
      "",
      `Total quantity: ${totalOrderQuantity} pcs`,
      `Page language: ${locales[locale].label}`,
      "",
      "Please confirm price, stock, shipping, and warranty details."
    ].join("\n");

    window.location.href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
  }

  function closeMobileNavAndScroll(id: string) {
    setIsMobileNavOpen(false);
    window.requestAnimationFrame(() => scrollToSection(id));
  }

  return (
    <main className="site-shell">
      <header className="global-nav" aria-label="Global">
        <button
          ref={mobileMenuButtonRef}
          className={isMobileNavOpen ? "nav-icon-button mobile-only active" : "nav-icon-button mobile-only"}
          type="button"
          aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav"
          onClick={() => {
            setIsMobileNavOpen((open) => !open);
            setIsLanguageOpen(false);
          }}
        >
          {isMobileNavOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
        <button className="wordmark" type="button" onClick={() => scrollToSection("hero")}>
          Hiipoo
        </button>
        <nav className="global-links desktop-only" aria-label="Primary">
          <button type="button" onClick={() => scrollToSection("hero")}>
            {content.nav.product}
          </button>
          <button type="button" onClick={() => scrollToSection("workflow")}>
            {content.nav.workflow}
          </button>
          <button type="button" onClick={() => scrollToSection("capacities")}>
            {content.nav.capacities}
          </button>
          <button type="button" onClick={() => scrollToSection("specs")}>
            {content.nav.specs}
          </button>
          <button type="button" onClick={() => scrollToSection("support")}>
            {content.nav.support}
          </button>
        </nav>
        <div className="nav-actions">
          <div className="language-menu-wrap" ref={languageMenuRef}>
            <button
              className={isLanguageOpen ? "nav-icon-button active" : "nav-icon-button"}
              type="button"
              aria-label="Select language"
              aria-expanded={isLanguageOpen}
              aria-controls="language-menu"
              aria-haspopup="true"
              onClick={() => {
                setIsLanguageOpen((open) => !open);
                setIsMobileNavOpen(false);
              }}
            >
              <Globe2 size={16} aria-hidden="true" />
            </button>
            {isLanguageOpen ? (
              <div className="language-popover" id="language-menu" role="menu" aria-label="Select language">
                {localeCodes.map((code) => (
                  <button
                    className={code === locale ? "language-option active" : "language-option"}
                    key={code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={code === locale}
                    lang={code}
                    dir={locales[code].direction}
                    onClick={() => {
                      setLocale(code);
                      setIsLanguageOpen(false);
                    }}
                  >
                    <span>{locales[code].label}</span>
                    <small>{code}</small>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </header>

      {isMobileNavOpen ? (
        <nav className="mobile-nav-panel" id="mobile-nav" ref={mobileMenuRef} aria-label="Mobile primary">
          <button type="button" onClick={() => closeMobileNavAndScroll("hero")}>
            {content.nav.product}
          </button>
          <button type="button" onClick={() => closeMobileNavAndScroll("workflow")}>
            {content.nav.workflow}
          </button>
          <button type="button" onClick={() => closeMobileNavAndScroll("specs")}>
            {content.nav.specs}
          </button>
          <button type="button" onClick={() => closeMobileNavAndScroll("capacities")}>
            {content.nav.capacities}
          </button>
          <button type="button" onClick={() => closeMobileNavAndScroll("support")}>
            {content.nav.support}
          </button>
        </nav>
      ) : null}

      <div className="sub-nav">
        <div className="sub-nav-title">{technicalFacts.family}</div>
        <div className="sub-nav-links">
          <button className="sub-nav-link desktop-only" type="button" onClick={() => scrollToSection("workflow")}>
            {content.nav.workflow}
          </button>
          <button className="sub-nav-link desktop-only" type="button" onClick={() => scrollToSection("capacities")}>
            {content.nav.capacities}
          </button>
          <button className="button-primary compact" type="button" onClick={() => scrollToSection("support")}>
            {content.support.cta}
          </button>
        </div>
      </div>

      <section
        className="hero-tile"
        id="hero"
        style={{ backgroundImage: `url("${asset("assets/birdie/web/creator-flow.png")}")` }}
      >
        <div className="hero-copy">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.headline}</h1>
          <p className="hero-subhead">{content.hero.subheadline}</p>
          <div className="cta-row" aria-label="Primary actions">
            <button className="button-primary" type="button" onClick={() => scrollToSection("workflow")}>
              {content.hero.ctaPrimary}
            </button>
            <button className="button-secondary" type="button" onClick={() => scrollToSection("specs")}>
              {content.hero.ctaSecondary}
            </button>
          </div>
        </div>

        <div className="hero-badges" aria-label="Highlights">
          {content.hero.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </section>

      <section className="benefit-band" id="product">
        <div className="section-heading">
          <h2>{content.benefitsTitle}</h2>
        </div>
        <div className="benefit-grid">
          {content.benefits.map((benefit, index) => {
            const Icon = [Camera, Gauge, ShieldCheck][index] ?? BadgeCheck;
            return (
              <article className="utility-card" key={benefit.title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="detail-tile">
        <div className="detail-copy">
          <h2>800MB/s-class storage for Sony Type A creators.</h2>
          <p>
            Built for Sony CFexpress Type A cameras and compatible video devices, Birdie supports high-speed
            continuous shooting, 4K recording, and faster file transfer. IP68 protection, X-ray resistance, wide
            temperature tolerance, and a 3-year replacement service help reduce purchase concerns.
          </p>
        </div>
        <div className="detail-media">
          <video
            poster={asset("assets/birdie/motion/birdie-exploded-1.png")}
            aria-label="Birdie CFexpress Type A card exploded view animation"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={asset("assets/birdie/motion/birdie-exploded.mp4")} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="dark-product-tile" id="workflow">
        <div className="dark-copy">
          <p className="eyebrow on-dark">{technicalFacts.category}</p>
          <h2>{content.workflow.title}</h2>
          <p>{content.workflow.body}</p>
          <div className="stat-row">
            {content.workflow.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="dark-visual">
          <img
            className="workflow-image"
            src={asset("assets/birdie/details/birdie-4k.jpg")}
            alt="Stable 4K video recording with a compatible camera workflow"
          />
        </div>
      </section>

      <section className="split-feature">
        <div className="split-media">
          <img
            src={asset("assets/birdie/web/field-protection.png")}
            alt="Birdie card in an outdoor water and dust protection scene"
            loading="lazy"
          />
        </div>
        <div className="split-copy">
          <Video size={28} aria-hidden="true" />
          <h2>{content.compatibility.title}</h2>
          <p>{content.compatibility.body}</p>
          <div className="compatibility-columns">
            <div>
              <h3>{content.compatibility.recommended}</h3>
              <ul>
                {recommendedFormats.map((format) => (
                  <li key={format}>
                    <ChevronRight size={16} aria-hidden="true" />
                    {format}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{content.compatibility.check}</h3>
              <ul>
                {confirmBeforeUse.map((format) => (
                  <li key={format}>
                    <ChevronRight size={16} aria-hidden="true" />
                    {format}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="spec-section" id="specs">
        <div className="section-heading">
          <h2>{technicalFacts.model}</h2>
          <p>{technicalFacts.category}</p>
        </div>
        <div className="spec-grid">
          <SpecItem label="Interface" value={technicalFacts.interface} icon={<HardDrive size={22} />} />
          <SpecItem label="Protocol" value={technicalFacts.protocol} icon={<Gauge size={22} />} />
          <SpecItem label="Read speed" value={technicalFacts.readSpeed} icon={<ChevronRight size={22} />} />
          <SpecItem label="Write speed" value={technicalFacts.writeSpeed} icon={<ChevronRight size={22} />} />
          <SpecItem label="Dimensions" value={technicalFacts.dimensions} icon={<BadgeCheck size={22} />} />
          <SpecItem label="Operating temp." value={technicalFacts.operatingTemperature} icon={<Snowflake size={22} />} />
          <SpecItem label="Storage temp." value={technicalFacts.storageTemperature} icon={<Snowflake size={22} />} />
          <SpecItem label="Protection" value={technicalFacts.protection} icon={<ShieldCheck size={22} />} />
        </div>
      </section>

      <section className="capacity-section order-section" id="capacities">
        <div className="capacity-intro">
          <h2>Build your WhatsApp order.</h2>
          <p>
            Set quantities for each capacity. Submitting opens WhatsApp with your order information filled in for
            manual confirmation.
          </p>
        </div>

        <div className="order-grid" aria-label="Capacity order quantities">
          {capacityOptions.map((option) => {
            const quantity = orderQuantities[option.capacity] ?? 0;

            return (
              <article className="order-card" key={option.capacity}>
                <img src={asset(option.image)} alt={`${option.capacity} ${technicalFacts.family} card`} loading="lazy" />
                <div className="order-card-copy">
                  <span>{option.type}</span>
                  <strong>{option.capacity}</strong>
                  <p>{option.recommendation}</p>
                </div>
                <div className="quantity-stepper" aria-label={`${option.capacity} quantity`}>
                  <button type="button" onClick={() => changeOrderQuantity(option.capacity, -1)}>
                    -1
                  </button>
                  <input
                    type="number"
                    min="0"
                    max="999"
                    inputMode="numeric"
                    value={quantity}
                    aria-label={`${option.capacity} order quantity`}
                    onChange={(event) => updateOrderQuantity(option.capacity, Number(event.currentTarget.value))}
                  />
                  <button type="button" onClick={() => changeOrderQuantity(option.capacity, 1)}>
                    +1
                  </button>
                  <button type="button" onClick={() => changeOrderQuantity(option.capacity, 10)}>
                    +10
                  </button>
                </div>
              </article>
            );
          })}

          <article className="order-card order-submit-card">
            <div>
              <span>WhatsApp order</span>
              <strong>{totalOrderQuantity > 0 ? `${totalOrderQuantity} pcs selected` : "Select quantity"}</strong>
              <p>
                Your message will be sent to +86 19064025220 for price, stock, shipping, and warranty confirmation.
              </p>
            </div>
            <button
              className="button-primary order-submit-button"
              type="button"
              disabled={totalOrderQuantity === 0}
              onClick={submitWhatsAppOrder}
            >
              Submit order
            </button>
          </article>
        </div>
        <p className="fine-note">
          This static website does not process payment. WhatsApp submission only prepares an order inquiry draft.
        </p>
      </section>

      <section className="support-section" id="support">
        <div className="support-copy">
          <h2>{content.support.title}</h2>
          <p>{content.support.body}</p>
          <button className="button-primary" type="button">
            {content.support.cta}
          </button>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <h2>FAQ</h2>
        </div>
        <div className="faq-list">
          {content.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{technicalFacts.brand}</strong>
          <span>{technicalFacts.family}</span>
        </div>
        <p>
          No payment function is included on this static website. Product claims should be validated against current
          certificates, test reports, warranty terms, and camera compatibility lists before publication.
        </p>
      </footer>
    </main>
  );
}

function SpecItem({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <article className="spec-item">
      <div aria-hidden="true">{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

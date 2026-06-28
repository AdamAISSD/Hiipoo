import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  BadgeCheck,
  Camera,
  ChevronRight,
  Gauge,
  Globe2,
  HardDrive,
  Languages,
  Menu,
  Search,
  ShieldCheck,
  Snowflake,
  Video
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

function asset(path: string) {
  return `${basePath}${path.replace(/^\/+/, "")}`;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function App() {
  const [locale, setLocale] = useState<LocaleCode>("en");
  const [selectedCapacity, setSelectedCapacity] = useState("512GB");
  const content = getLocale(locale);
  const selectedCapacityData = useMemo(
    () => capacityOptions.find((option) => option.capacity === selectedCapacity) ?? capacityOptions[4],
    [selectedCapacity]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = content.direction;
  }, [content.direction, locale]);

  return (
    <main className="site-shell">
      <header className="global-nav" aria-label="Global">
        <button className="nav-icon-button mobile-only" type="button" aria-label="Open navigation">
          <Menu size={18} aria-hidden="true" />
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
          <button className="nav-icon-button desktop-only" type="button" aria-label="Search">
            <Search size={16} aria-hidden="true" />
          </button>
          <button className="nav-icon-button" type="button" aria-label="Language">
            <Globe2 size={16} aria-hidden="true" />
          </button>
        </div>
      </header>

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
            src={asset("assets/birdie/web/speed-flow.png")}
            alt="Birdie card moving through a high-speed media workflow"
          />
        </div>
      </section>

      <section className="capacity-section" id="capacities">
        <div className="capacity-intro">
          <h2>{content.capacity.title}</h2>
          <p>{content.capacity.body}</p>
        </div>

        <div className="capacity-layout">
          <div className="capacity-showcase">
            <img
              src={asset(selectedCapacityData.image)}
              alt={`${selectedCapacityData.capacity} ${technicalFacts.family} card`}
              loading="lazy"
            />
            <div className="capacity-summary">
              <span>{selectedCapacityData.type}</span>
              <strong>{selectedCapacityData.capacity}</strong>
              <p>{selectedCapacityData.recommendation}</p>
            </div>
          </div>

          <div className="capacity-options" aria-label="Capacity options">
            {capacityOptions.map((option) => (
              <button
                className={option.capacity === selectedCapacity ? "capacity-chip selected" : "capacity-chip"}
                key={option.capacity}
                type="button"
                onClick={() => setSelectedCapacity(option.capacity)}
              >
                <img src={asset(option.image)} alt="" loading="lazy" />
                <span>
                  <strong>{option.capacity}</strong>
                  <small>{option.type}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
        <p className="fine-note">{content.capacity.note}</p>
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

      <section className="detail-tile">
        <div className="detail-copy">
          <h2>A compact card for fast creator days.</h2>
          <p>
            A clean Type A body, broad capacity range, and resilient field posture help buyers understand Birdie as a
            creator storage card before they choose the exact version.
          </p>
        </div>
        <div className="detail-media">
          <img
            src={asset("assets/birdie/web/product-light.png")}
            alt="Birdie CFexpress Type A card on a clean cinematic light trail background"
            loading="lazy"
          />
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

      <section className="support-section" id="support">
        <div className="support-copy">
          <h2>{content.support.title}</h2>
          <p>{content.support.body}</p>
          <button className="button-primary" type="button">
            {content.support.cta}
          </button>
        </div>
        <div className="locale-panel">
          <label className="language-select" htmlFor="locale-select">
            <span className="language-select-heading">
              <Languages size={22} aria-hidden="true" />
              <span>Language</span>
            </span>
            <select
              id="locale-select"
              value={locale}
              onChange={(event) => setLocale(event.currentTarget.value as LocaleCode)}
              aria-label="Select language"
            >
            {localeCodes.map((code) => (
              <option key={code} value={code} lang={code} dir={locales[code].direction}>
                {locales[code].label}
              </option>
            ))}
            </select>
          </label>
          <div className="locale-pills" aria-label="Available languages">
            {localeCodes.map((code) => (
              <span className={code === locale ? "locale-pill active" : "locale-pill"} key={code} lang={code}>
                {locales[code].label}
              </span>
            ))}
          </div>
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

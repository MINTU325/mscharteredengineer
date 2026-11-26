/**
 * Dynamic SEO Pre-Rendering Service
 * Detects search crawlers and social media bots, injecting semantic pre-rendered HTML
 * and Schema.org JSON-LD directly into the server response before React mounts.
 */

const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterestbot',
  'slackbot',
  'vkshare',
  'w3c_validator',
  'whatsapp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'skypeuripreview',
  'nuzzel',
  'discordbot',
  'google page speed',
  'qwantify',
  'chrome-lighthouse',
  'telegrambot',
  'screaming frog',
  'duckduckgo'
];

const BOT_REGEX = new RegExp(BOT_USER_AGENTS.join('|'), 'i');

class PrerenderService {
  /**
   * Checks if the incoming request is from a search crawler or social bot
   * @param {string} userAgent 
   * @returns {boolean}
   */
  static isBot(userAgent) {
    if (!userAgent) return false;
    return BOT_REGEX.test(userAgent);
  }

  /**
   * Generates Schema.org JSON-LD structured data for the given route
   * @param {string} cleanPath 
   * @param {Object} meta 
   * @returns {string}
   */
  static generateJsonLd(cleanPath, meta = {}) {
    const canonical = meta.canonical || `https://www.mscharteredengineer.com${cleanPath}`;

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "KS Chartered Engineers, Valuers & Technical Services",
      "alternateName": "KS Group",
      "url": "https://www.mscharteredengineer.com",
      "logo": "https://www.mscharteredengineer.com/og-image-ks.png",
      "image": "https://www.mscharteredengineer.com/og-image-ks.png",
      "description": meta.description || "Chartered Engineers and IBBI Registered Valuers in Jaipur & Pan-India. Plant & Machinery Valuation, Subsidies, CEIG Solar & Statutory Certifications.",
      "telephone": "+91-91586-58885",
      "email": "info@mscharteredengineer.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Civil Lines / Tonk Road Industrial Corridor",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302015",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.9124,
        "longitude": 75.7873
      },
      "founder": {
        "@type": "Person",
        "name": "Er. Mukesh Singh",
        "jobTitle": "Chartered Engineer & Registered Valuer",
        "alumniOf": "IIT Roorkee",
        "memberOf": "Institution of Engineers (India)"
      },
      "priceRange": "₹₹₹"
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.mscharteredengineer.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": (meta.title || cleanPath).replace(/\|.*/, '').trim(),
          "item": canonical
        }
      ]
    };

    return `
      <script type="application/ld+json">
        ${JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        ${JSON.stringify(breadcrumbSchema)}
      </script>
    `;
  }

  /**
   * Returns rich semantic pre-rendered HTML for search crawlers
   * @param {string} cleanPath 
   * @param {Object} meta 
   * @returns {string}
   */
  static getPrerenderedHtml(cleanPath, meta = {}) {
    const title = meta.title || 'KS Chartered Engineers & IBBI Registered Valuers';
    const desc = meta.description || 'Statutory engineering valuation, technical auditing, and CEIG advisory services by IIT Roorkee alumni.';

    // Route-specific rich semantic content for crawlers
    if (cleanPath.startsWith('/registered-valuer') || cleanPath === '/valuation-services' || cleanPath === '/valuation') {
      return `
        <main class="prerendered-content" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif; color: #1e293b;">
          <header style="margin-bottom: 30px;">
            <p style="font-size: 0.85rem; color: #0284c7; font-weight: 700; text-transform: uppercase;">Statutory Valuation Practice · Section 34 AB Wealth Tax Act & IBBI Registered Valuers</p>
            <h1 style="font-size: 2.2rem; font-weight: 800; color: #0f172a; margin-top: 8px;">Registered Valuers | Accurate, Reliable & Compliant Statutory Valuations</h1>
            <p style="font-size: 1.1rem; line-height: 1.6; color: #475569;">${desc}</p>
          </header>

          <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5rem; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Statutory Valuation Asset Classes & Disciplines</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">
              <article style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px;">
                <h3 style="font-size: 1.15rem; color: #0f172a;">1. Plant & Machinery Valuations (IndAS 16 / Companies Act 2013)</h3>
                <p style="font-size: 0.95rem; color: #475569; line-height: 1.5;">Physical technical inspection, balance useful life (RUL) estimation, and Fair Market Value (FMV) assessment for manufacturing plants, heavy industrial machinery, and utilities.</p>
              </article>
              <article style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px;">
                <h3 style="font-size: 1.15rem; color: #0f172a;">2. Corporate M&A, DCF & Share Transfer (Rule 11UA(2) & FEMA)</h3>
                <p style="font-size: 0.95rem; color: #475569; line-height: 1.5;">Statutory Discounted Cash Flow (DCF), Net Asset Value (NAV), and PE multiple appraisals for FDI/FEMA compliance, Section 247, rights issues, and NCLT mergers.</p>
              </article>
              <article style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px;">
                <h3 style="font-size: 1.15rem; color: #0f172a;">3. Capital Gains 50C & 2001 Fair Market Value (Income Tax Act 1961)</h3>
                <p style="font-size: 0.95rem; color: #475569; line-height: 1.5;">Government-approved valuation reports for capital gains tax indexation as on 01-04-2001, defending Section 50C circle rate disputes before Assessing Officers & ITAT.</p>
              </article>
              <article style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px;">
                <h3 style="font-size: 1.15rem; color: #0f172a;">4. Bank Mortgage, Secured Lending & SARFAESI Standards</h3>
                <p style="font-size: 0.95rem; color: #475569; line-height: 1.5;">Dual-methodology appraisals establishing Fair Market Value (FMV), Realizable Value, and Forced Sale Value (FSV) for industrial estates, commercial complexes, and real estate.</p>
              </article>
              <article style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px;">
                <h3 style="font-size: 1.15rem; color: #0f172a;">5. Court Litigation, Partition & IBC Valuations</h3>
                <p style="font-size: 0.95rem; color: #475569; line-height: 1.5;">Independent admissible valuation certificates for High Court disputes, family partition deeds, probate matters, and CIRP liquidation value under IBBI regulations.</p>
              </article>
            </div>
          </section>

          <footer style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
            <h3 style="margin-top: 0;">Contact our Head Office for Valuation Appraisals</h3>
            <p>Phone: <strong>+91 91586 58885</strong> | Location: Jaipur, Rajasthan (Pan-India Practice) | Lead Valuer: Er. Mukesh Singh, CEng (India) MIE, IIT Roorkee</p>
          </footer>
        </main>
      `;
    }

    if (cleanPath === '/dpdp-compliance' || cleanPath === '/privacy-policy' || cleanPath === '/cookie-policy') {
      return `
        <main class="prerendered-content" style="padding: 40px 20px; max-width: 1000px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif; color: #1e293b;">
          <header style="margin-bottom: 24px;">
            <p style="font-size: 0.85rem; color: #d97706; font-weight: 700;">STATUTORY COMPLIANCE ARCHITECTURE · DPDP ACT 2023</p>
            <h1 style="font-size: 2rem; color: #0f172a;">${title}</h1>
            <p style="font-size: 1.05rem; color: #475569; line-height: 1.6;">${desc}</p>
          </header>
          <section style="line-height: 1.6; color: #334155;">
            <h2>Data Fiduciary & Privacy Governance Framework</h2>
            <p>KS Chartered Engineers maintains strict adherence to the Digital Personal Data Protection Act 2023 (DPDP Act). We uphold Section 5 statutory notices, Section 6 unbundled affirmative consent, Chapter III Data Principal statutory rights (Access, Correction, Erasure, Nomination), and Section 13 dedicated Grievance Redressal channels.</p>
            <h3>Key Statutory Compliance Features:</h3>
            <ul>
              <li><strong>Zero Pre-ticked Consent:</strong> All tracking cookies and optional analytics stay disabled by default.</li>
              <li><strong>180-Day Automated Retention Schedule:</strong> Personal identifying data from inquiry forms is automatically pruned and anonymized after 180 days in accordance with Section 8(7).</li>
              <li><strong>Grievance Redressal Officer:</strong> Dedicated statutory officer available for 30-day SLA dispute resolution before escalation to the Data Protection Board of India (DPBI).</li>
            </ul>
          </section>
        </main>
      `;
    }

    // Default Fallback Rich Pre-render for Home and all other service corridors
    return `
      <main class="prerendered-content" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif; color: #1e293b;">
        <header style="margin-bottom: 30px;">
          <p style="font-size: 0.85rem; color: #0284c7; font-weight: 700; text-transform: uppercase;">Chartered Engineers (India) · Approved Valuers (Sec 34 AB) · IIT Roorkee Alumni</p>
          <h1 style="font-size: 2.2rem; font-weight: 800; color: #0f172a; margin-top: 8px;">${title}</h1>
          <p style="font-size: 1.1rem; line-height: 1.6; color: #475569;">${desc}</p>
        </header>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 1.5rem; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Comprehensive Statutory Engineering & Valuation Services</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 20px;">
            <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; background: #ffffff;">
              <h3 style="font-size: 1.1rem; color: #0f172a; margin-top: 0;">Chartered Engineer Certifications</h3>
              <p style="font-size: 0.9rem; color: #64748b;">Customs duty exemptions, EPCG scheme, secondhand machinery import certification, DGFT attestation, and factory capacity audits.</p>
            </div>
            <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; background: #ffffff;">
              <h3 style="font-size: 1.1rem; color: #0f172a; margin-top: 0;">IBBI & Statutory Asset Valuations</h3>
              <p style="font-size: 0.9rem; color: #64748b;">Plant & Machinery, Land & Buildings, Fair Market Value (FMV), Capital Gains Section 50C, and DCF equity valuation.</p>
            </div>
            <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; background: #ffffff;">
              <h3 style="font-size: 1.1rem; color: #0f172a; margin-top: 0;">Solar & CEIG Clearances</h3>
              <p style="font-size: 0.9rem; color: #64748b;">Chief Electrical Inspector to Government (CEIG) safety drawing approvals, MMS structural stability, and wind load analysis.</p>
            </div>
            <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; background: #ffffff;">
              <h3 style="font-size: 1.1rem; color: #0f172a; margin-top: 0;">MSME Subsidies & Bank DPR</h3>
              <p style="font-size: 0.9rem; color: #64748b;">Bankable Detailed Project Reports (DPR), TEV studies, and statutory subsidy certifications for RIPS 2024, PMEGP, and CGTMSE loans.</p>
            </div>
          </div>
        </section>

        <section style="background: #f1f5f9; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
          <h2 style="font-size: 1.3rem; color: #0f172a; margin-top: 0;">Headquarters & Contact Information</h2>
          <p style="font-size: 0.95rem; color: #334155; line-height: 1.6;">
            <strong>KS Chartered Engineers, Valuers & Technical Services</strong><br />
            Founder: Er. Mukesh Singh, CEng (India) MIE, IIT Roorkee<br />
            Phone / WhatsApp: <a href="tel:+919158658885" style="color: #0284c7; text-decoration: none;">+91 91586 58885</a><br />
            Head Office: Jaipur, Rajasthan, India (Serving Nationwide across all Industrial Corridors)
          </p>
        </section>
      </main>
    `;
  }
}

module.exports = PrerenderService;

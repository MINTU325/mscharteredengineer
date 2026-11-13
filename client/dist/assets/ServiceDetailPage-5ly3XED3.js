import{g as R,j as e,S as m}from"./index-Dckmuxp3.js";import{a as l,a0 as o,x as d,a9 as b,aa as f,C as k,p as u,y as j,e as y,S as v,A as C,ab as w,V as E,G as H,ac as W,ad as L,j as N,h as P,$ as O,ae as U,F as Y,a4 as $,af as M,d as V,B as _,w as G,ag as K,q as Z,ah as Q,ai as J,I as X,aj as ee,ak as se,O as re,E as ae,al as ie,am as te,an as ne,ao as le,ap as oe,f as de,aq as ce,ar as pe,v as xe,as as ge,at as he,U as me,au as be,av as fe,W as ke,aw as ue,Z as je}from"./icons-COLPKCh7.js";import"./react-vendor-DJh2Hx8i.js";const ye={Zap:je,Boxes:ue,Wrench:ke,Warehouse:fe,HeartPulse:be,Users:me,AlertTriangle:he,Server:ge,ShieldAlert:xe,Flame:pe,Unlink:ce,Cpu:de,Wind:oe,ShieldCheck:v,Droplet:le,CloudRain:ne,Gauge:te,Bell:ie,Eye:ae,Lightbulb:re,DoorOpen:se,Link:ee,Scale:y,Layers:X,Cog:J,Volume2:Q,Lock:Z,CheckCircle:w,Calendar:K,Building:G,Building2:_,Landmark:V,TrendingUp:M,HardHat:$,FileText:o,FileCheck2:Y,FileSpreadsheet:U,Compass:O,Sun:P,Award:N,ArrowRight:C,ArrowLeft:d,PhoneCall:j,MessageSquare:u,Share2:b,Camera:L,Laptop:W,GraduationCap:H,Factory:E,ChevronUp:f,ChevronDown:k};function Ne({slug:c,onOpenQuote:z,onNavigateHome:p,onNavigateService:x}){const[S,g]=l.useState(!1),[T,A]=l.useState({}),r=R(c);l.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"}),r&&(document.title=`${r.fullTitle||r.heroTitle} | KS Chartered Engineers`)},[c,r]);const q=s=>{A(a=>({...a,[s]:!a[s]}))},F=()=>{navigator.clipboard&&(navigator.clipboard.writeText(window.location.href),g(!0),setTimeout(()=>g(!1),2500))},n=(s,a)=>{a&&(a.preventDefault(),a.stopPropagation()),window.history.pushState({},"",s),x?x(s):window.dispatchEvent(new PopStateEvent("popstate")),window.scrollTo({top:0,left:0,behavior:"smooth"})},i=(s,a=24,t="#f5b81b")=>{if(!s)return e.jsx(w,{size:a,color:t});const D=ye[s]||N;return e.jsx(D,{size:a,color:t})};if(!r)return e.jsx("div",{style:{minHeight:"70vh",background:"#07080d",color:"#f1f5f9",padding:"100px 20px",textAlign:"center"},children:e.jsxs("div",{style:{maxWidth:"600px",margin:"0 auto"},children:[e.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",color:"#ef4444"},children:e.jsx(o,{size:32})}),e.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"12px"},children:"Service Not Found"}),e.jsx("p",{style:{color:"#94a3b8",marginBottom:"28px",lineHeight:1.6},children:"The requested service documentation could not be found or may have been updated."}),e.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center"},children:[e.jsxs("button",{onClick:s=>n("/services",s),className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"10px 20px",borderRadius:"8px"},children:[e.jsx(d,{size:16})," View All Services"]}),e.jsx("button",{onClick:p,className:"btn btn-secondary",style:{padding:"10px 20px",borderRadius:"8px"},children:"Back to Home"})]})]})});const h=(r.relatedSlugs||[]).map(s=>m[s]).filter(Boolean),I=Object.values(m).filter(s=>s.code!==r.code).slice(0,4),B=h.length>0?h:I;return e.jsxs("div",{className:"ske-service-detail-page",style:{background:"#07080d",color:"#eef0f5",minHeight:"100vh",fontFamily:"'Inter', sans-serif"},children:[e.jsx("style",{children:`
        .ske-top-breadcrumb {
          background: #0d1017;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 20px;
          font-size: 13px;
          color: #94a3b8;
        }
        .ske-service-hero {
          background: linear-gradient(180deg, #0d121c 0%, #07080d 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 48px 20px 42px;
        }
        .ske-category-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #f5b81b;
          background: rgba(245, 184, 27, 0.12);
          border: 1px solid rgba(245, 184, 27, 0.3);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 14px;
        }
        .ske-hero-title {
          font-size: clamp(2rem, 4.5vw, 2.9rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          line-height: 1.22;
        }
        .ske-hero-subtitle {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #94a3b8;
          max-width: 880px;
          margin: 0;
        }
        .ske-content-container {
          max-width: 1040px;
          margin: 0 auto;
          padding: 45px 20px 70px;
        }
        .ske-main-h1 {
          font-size: clamp(1.6rem, 3.2vw, 2.2rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          text-align: left;
          border-bottom: 3px solid #f5b81b;
          padding-bottom: 14px;
          line-height: 1.3;
        }
        .ske-lead-p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 36px;
        }
        .ske-section-h2 {
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 45px;
          margin-bottom: 20px;
          text-align: left;
          border-left: 5px solid #f5b81b;
          padding-left: 16px;
          line-height: 1.35;
        }
        .ske-body-p {
          font-size: 0.98rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 22px;
        }
        .ske-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin: 24px 0 35px;
        }
        .ske-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 24px 0 35px;
        }
        .ske-card {
          background: #11141c;
          padding: 22px 18px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
        }
        .ske-card:hover {
          transform: translateY(-4px);
          border-color: #f5b81b;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }
        .ske-card-icon {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justifyContent: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(245, 184, 27, 0.1);
        }
        .ske-card h6 {
          font-size: 0.94rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px;
          line-height: 1.35;
        }
        .ske-card p {
          font-size: 0.82rem;
          color: #94a3b8;
          margin: 0;
          line-height: 1.48;
          text-align: center;
        }
        .ske-deliverable-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 28px;
          background: #11141c;
          padding: 28px 32px;
          border-radius: 14px;
          margin: 24px 0 35px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          list-style: none;
        }
        .ske-deliverable-grid li {
          position: relative;
          padding-left: 28px;
          font-size: 0.94rem;
          color: #e2e8f0;
          line-height: 1.5;
        }
        .ske-deliverable-grid li::before {
          content: "✓";
          color: #f5b81b;
          font-weight: 800;
          font-size: 1.1rem;
          position: absolute;
          left: 0;
          top: -1px;
        }
        .ske-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 24px 0 35px;
        }
        .ske-stat-card {
          background: #11141c;
          padding: 24px 16px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s ease;
        }
        .ske-stat-card:hover {
          transform: translateY(-3px);
          border-color: #f5b81b;
        }
        .ske-stat-card .number {
          font-size: 1.9rem;
          font-weight: 800;
          color: #38bdf8;
          line-height: 1.2;
          margin: 6px 0 4px;
        }
        .ske-stat-card .label {
          font-size: 0.84rem;
          color: #94a3b8;
          font-weight: 600;
        }
        .ske-faq-item {
          background: #11141c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 18px 22px;
          margin-bottom: 12px;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .ske-faq-item:hover {
          border-color: #f5b81b;
        }
        .ske-faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.02rem;
          font-weight: 700;
          color: #ffffff;
        }
        .ske-faq-a {
          margin-top: 10px;
          font-size: 0.92rem;
          line-height: 1.65;
          color: #94a3b8;
        }
        .ske-cta-section {
          background: linear-gradient(135deg, #0b172a 0%, #111c33 100%);
          border: 1px solid rgba(245, 184, 27, 0.3);
          padding: 44px 36px;
          border-radius: 16px;
          text-align: center;
          margin: 45px 0 35px;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);
        }
        .ske-cta-section h2 {
          font-size: clamp(1.4rem, 2.8vw, 1.9rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .ske-cta-section p {
          font-size: 1.02rem;
          color: #cbd5e1;
          max-width: 750px;
          margin: 0 auto 24px;
          line-height: 1.65;
        }
        .ske-cta-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .ske-btn-primary {
          background: #f5b81b;
          color: #07080d;
          border: 2px solid #f5b81b;
          border-radius: 999px;
          padding: 12px 32px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .ske-btn-primary:hover {
          background: #e0a50b;
          border-color: #e0a50b;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 184, 27, 0.35);
        }
        .ske-btn-whatsapp {
          background: #25D366;
          color: #ffffff;
          border: 2px solid #25D366;
          border-radius: 999px;
          padding: 12px 30px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .ske-btn-whatsapp:hover {
          background: #1da851;
          border-color: #1da851;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
        }
        .ske-regulatory-box {
          background: #11141c;
          border-left: 5px solid #38bdf8;
          padding: 22px 28px;
          margin: 35px 0;
          border-radius: 0 10px 10px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .ske-regulatory-box h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ske-regulatory-box ul {
          margin: 0;
          padding-left: 20px;
          font-size: 0.92rem;
          line-height: 1.8;
          color: #cbd5e1;
        }
        .ske-regulatory-box li strong {
          color: #38bdf8;
        }
        .ske-related-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 24px 0;
        }
        .ske-rel-card {
          background: #11141c;
          padding: 20px 16px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s ease;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ske-rel-card:hover {
          transform: translateY(-4px);
          border-color: #f5b81b;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
        }
        .ske-rel-card h6 {
          font-weight: 700;
          color: #ffffff;
          font-size: 0.92rem;
          margin: 8px 0 6px;
          min-height: 2.6em;
          display: flex;
          align-items: center;
          justifyContent: center;
        }
        .ske-rel-card .learn-more {
          font-size: 0.84rem;
          color: #38bdf8;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        @media (max-width: 992px) {
          .ske-grid-3, .ske-grid-4, .ske-stats-grid, .ske-related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .ske-grid-3, .ske-grid-4, .ske-stats-grid, .ske-related-grid, .ske-deliverable-grid {
            grid-template-columns: 1fr;
          }
          .ske-content-container {
            padding: 30px 16px 50px;
          }
          .ske-cta-section {
            padding: 30px 20px;
          }
        }
      `}),e.jsx("div",{className:"ske-top-breadcrumb",children:e.jsxs("div",{style:{maxWidth:"1040px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("a",{href:"/",onClick:s=>{s.preventDefault(),p()},style:{color:"#94a3b8",textDecoration:"none"},children:"Home"}),e.jsx("span",{children:"/"}),e.jsx("a",{href:"/services",onClick:s=>n("/services",s),style:{color:"#94a3b8",textDecoration:"none"},children:"Services"}),e.jsx("span",{children:"/"}),e.jsx("span",{style:{color:"#f5b81b",fontWeight:600},children:r.heroTitle})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsxs("button",{onClick:F,style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#cbd5e1",padding:"5px 12px",borderRadius:"6px",fontSize:"12px",cursor:"pointer"},children:[e.jsx(b,{size:12}),e.jsx("span",{children:S?"Link Copied!":"Share Page"})]}),e.jsxs("a",{href:"/services",onClick:s=>n("/services",s),style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"none",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#cbd5e1",padding:"5px 12px",borderRadius:"6px",fontSize:"12px",textDecoration:"none"},children:[e.jsx(d,{size:12})," Back to Services"]})]})]})}),e.jsx("section",{className:"ske-service-hero",children:e.jsxs("div",{style:{maxWidth:"1040px",margin:"0 auto"},children:[e.jsx("span",{className:"ske-category-tag",children:r.categoryTag}),e.jsx("h1",{className:"ske-hero-title",children:r.heroTitle}),e.jsx("p",{className:"ske-hero-subtitle",children:r.heroSubtitle})]})}),e.jsxs("main",{className:"ske-content-container",children:[e.jsx("h1",{className:"ske-main-h1",children:r.fullTitle}),e.jsx("p",{className:"ske-lead-p",children:r.lead}),e.jsx("h2",{className:"ske-section-h2",children:r.whatIsHeading}),e.jsx("p",{className:"ske-body-p",children:r.whatIs}),r.grid3Cards&&r.grid3Cards.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"ske-section-h2",children:r.grid3Heading}),e.jsx("div",{className:"ske-grid-3",children:r.grid3Cards.map((s,a)=>e.jsxs("div",{className:"ske-card",children:[e.jsx("div",{className:"ske-card-icon",children:i(s.icon,24,"#f5b81b")}),e.jsx("h6",{children:s.title}),e.jsx("p",{children:s.desc})]},a))})]}),r.grid4ACards&&r.grid4ACards.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"ske-section-h2",children:r.grid4AHeading}),e.jsx("div",{className:"ske-grid-4",children:r.grid4ACards.map((s,a)=>e.jsxs("div",{className:"ske-card",children:[e.jsx("div",{className:"ske-card-icon",style:{background:"rgba(56, 189, 248, 0.1)"},children:i(s.icon,22,"#38bdf8")}),e.jsx("h6",{children:s.title}),e.jsx("p",{children:s.desc})]},a))})]}),r.grid4BCards&&r.grid4BCards.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"ske-section-h2",children:r.grid4BHeading}),e.jsx("div",{className:"ske-grid-4",children:r.grid4BCards.map((s,a)=>e.jsxs("div",{className:"ske-card",children:[e.jsx("div",{className:"ske-card-icon",style:{background:"rgba(16, 185, 129, 0.1)"},children:i(s.icon,22,"#10b981")}),e.jsx("h6",{children:s.title}),e.jsx("p",{children:s.desc})]},a))})]}),r.grid4CCards&&r.grid4CCards.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"ske-section-h2",children:r.grid4CHeading}),r.grid4CSubtitle&&e.jsx("p",{className:"ske-body-p",children:r.grid4CSubtitle}),e.jsx("div",{className:"ske-grid-4",children:r.grid4CCards.map((s,a)=>e.jsxs("div",{className:"ske-card",children:[e.jsx("div",{className:"ske-card-icon",style:{background:"rgba(236, 72, 153, 0.1)"},children:i(s.icon,22,"#ec4899")}),e.jsx("h6",{children:s.title}),e.jsx("p",{children:s.desc})]},a))})]}),r.deliverables&&r.deliverables.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("h2",{className:"ske-section-h2",children:[r.heroTitle," Deliverables"]}),e.jsx("ul",{className:"ske-deliverable-grid",children:r.deliverables.map((s,a)=>e.jsx("li",{children:s},a))})]}),r.industries&&r.industries.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"ske-section-h2",children:"Industries We Serve"}),e.jsx("div",{className:"ske-grid-4",children:r.industries.map((s,a)=>e.jsxs("div",{className:"ske-card",style:{padding:"16px 12px"},children:[e.jsx("div",{className:"ske-card-icon",style:{width:"42px",height:"42px",marginBottom:"8px"},children:i(s.icon,20,"#f5b81b")}),e.jsx("h6",{style:{fontSize:"0.88rem",margin:0},children:s.name})]},a))})]}),e.jsx("h2",{className:"ske-section-h2",children:"Why Choose KS Chartered Engineers"}),e.jsx("div",{className:"ske-stats-grid",children:(r.stats||[]).map((s,a)=>e.jsxs("div",{className:"ske-stat-card",children:[e.jsx("div",{children:i(s.icon,22,"#f5b81b")}),e.jsx("div",{className:"number",children:s.number}),e.jsx("div",{className:"label",children:s.label})]},a))}),r.faqs&&r.faqs.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"ske-section-h2",children:"Frequently Asked Questions"}),e.jsx("div",{children:r.faqs.map((s,a)=>{const t=T[a]!==!1;return e.jsxs("div",{className:"ske-faq-item",onClick:()=>q(a),children:[e.jsxs("div",{className:"ske-faq-q",children:[e.jsx("span",{children:s.q}),t?e.jsx(f,{size:18,color:"#f5b81b"}):e.jsx(k,{size:18,color:"#94a3b8"})]}),t&&e.jsx("div",{className:"ske-faq-a",children:s.a})]},a)})})]}),e.jsxs("div",{className:"ske-cta-section",children:[e.jsx("h2",{children:r.ctaTitle}),e.jsx("p",{children:r.ctaDesc}),e.jsxs("div",{className:"ske-cta-buttons",children:[e.jsxs("button",{onClick:()=>z(r.heroTitle,{category:r.categoryTag}),className:"ske-btn-primary",children:[e.jsx(o,{size:16})," Request ",r.heroTitle]}),e.jsxs("a",{href:`https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20am%20interested%20in%20${encodeURIComponent(r.heroTitle)}`,target:"_blank",rel:"noopener noreferrer",className:"ske-btn-whatsapp",children:[e.jsx(u,{size:16})," WhatsApp an Expert"]}),e.jsxs("a",{href:"tel:+919158658885",style:{display:"inline-flex",alignItems:"center",gap:"8px",color:"#ffffff",border:"2px solid rgba(255, 255, 255, 0.25)",borderRadius:"999px",padding:"12px 28px",fontWeight:600,fontSize:"0.95rem",textDecoration:"none",background:"rgba(255, 255, 255, 0.05)"},children:[e.jsx(j,{size:16})," +91 91586 58885"]})]})]}),r.regulatoryActs&&r.regulatoryActs.length>0&&e.jsxs("div",{className:"ske-regulatory-box",children:[e.jsxs("h4",{children:[e.jsx(y,{size:20,color:"#38bdf8"}),e.jsx("span",{children:r.regulatoryHeading||"Current Regulatory Framework"})]}),e.jsx("ul",{children:r.regulatoryActs.map((s,a)=>e.jsxs("li",{children:[e.jsx("strong",{children:s.title})," ",s.desc]},a))})]}),e.jsx("h2",{className:"ske-section-h2",children:"Related Services"}),e.jsx("div",{className:"ske-related-grid",children:B.map(s=>e.jsxs("a",{href:`/services/${s.code}`,onClick:a=>n(`/services/${s.code}`,a),className:"ske-rel-card",children:[e.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"rgba(56, 189, 248, 0.1)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"8px"},children:e.jsx(v,{size:22,color:"#38bdf8"})}),e.jsx("h6",{children:s.heroTitle||s.title}),e.jsxs("span",{className:"learn-more",children:[e.jsx("span",{children:"Learn More"}),e.jsx(C,{size:13})]})]},s.code))})]})]})}export{Ne as default};

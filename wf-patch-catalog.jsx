// Direction 3 — Patch Catalog
// Playful index-card style, big serial-numbered pieces, uniform gallery
// Vibe: vintage parts catalog, hand-stamped, library card, friendly + organized

const PatchCatalog = () => {
  const card = {
    background: "var(--paper)",
    border: "1.5px solid var(--ink)",
    boxShadow: "4px 4px 0 var(--ink)"
  };

  return (
    <div className="wf wf-paper" style={{ width: 1280, padding: 0, position: "relative" }}>
      {/* measurement grid background — page-wide */}
      <div className="wf-grid-bg-fine"></div>

      {/* corner crop marks */}
      <div className="wf-crop-mark" style={{ top: 12, left: 12 }}></div>
      <div className="wf-crop-mark" style={{ top: 12, right: 12 }}></div>

      {/* ============ NAV — direction 1 style ============ */}
      <div style={{ position: "relative", zIndex: 2, padding: "48px 80px 0" }}>
        <header className="row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
          <div>
            <div className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--pencil)" }}>EST. 2020 / CUSTOM EMBROIDERY / ONE AT A TIME

            </div>
            <div className="wf-scfd" style={{ fontSize: 56, marginTop: 4 }}>
              SCFD<span style={{ color: "var(--accent)" }}>.</span>
            </div>
          </div>
          <nav className="row gap-24" style={{ paddingBottom: 8 }}>
            <a className="wf-nav-link active">Catalog</a>
            <a className="wf-nav-link">Reviews</a>
            <a className="wf-nav-link">Quote</a>
            <a className="wf-nav-link">FAQ</a>
          </nav>
        </header>

        <hr className="wf-rule wf-rule-thick" />

        {/* card filing slot — kept for catalog vibe */}
        <div style={{ marginTop: 16, padding: "10px 16px", border: "1.5px solid var(--ink)", borderBottom: "4px solid var(--ink)", background: "var(--paper-2)" }}>
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <span className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em" }}>FILE NO. SCFD-2026-04 ·· STITCHED IN HOUSE ·· ONE NEEDLE AT A TIME</span>
            <span className="wf-mono" style={{ fontSize: 11, color: "var(--accent)" }}>● BOOKING NOW</span>
          </div>
        </div>
      </div>

      {/* ============ HERO ============ */}
      <section style={{ padding: "56px 56px 72px", position: "relative", zIndex: 1 }}>
        {/* dimension callouts on hero */}
        <div className="wf-dim-line" style={{ top: 24, right: 80 }}>
          <span>↤</span><span>1280px GRID</span><span>↦</span>
        </div>

        <span className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--pencil)" }}>
          ENTRY 001 — INTRODUCTION
        </span>
        <h1 className="wf-stamp" style={{ fontSize: 88, lineHeight: 0.95, margin: "12px 0 0", maxWidth: 980 }}>
          Small shop.<br />
          Big dreams.<br />
          <span style={{ color: "var(--accent)" }}>NO LIMITS</span>
        </h1>

        <div className="row gap-16" style={{ marginTop: 32, alignItems: "center", flexWrap: "wrap" }}>
          <button className="wf-btn">Get a quote →</button>
          <button className="wf-btn wf-btn-ghost">Flip the catalog</button>
          <span className="wf-hand" style={{ fontSize: 20, color: "var(--accent)", marginLeft: 8, transform: "rotate(-2deg)", display: "inline-block" }}>
            no minimums, ever
          </span>
        </div>

        {/* hero composition — 1 hero card + supporting cards arranged like pinned index cards */}
        <div style={{ position: "relative", marginTop: 56, height: 520 }}>
          {/* localized measurement frame */}
          <div style={{ position: "absolute", inset: "-8px -8px -8px -8px", border: "1px dashed rgba(217,79,30,0.4)", pointerEvents: "none" }}></div>
          <div className="wf-dim-line" style={{ top: -22, left: 0 }}>
            <span>↤ 640px ↦</span>
          </div>
          <div className="wf-dim-line" style={{ top: -22, right: 0 }}>
            <span>↤ 280 ↦</span>
          </div>
          <div className="wf-dim-line" style={{ bottom: -22, left: 280 }}>
            <span>HERO COMPOSITION · 1280 × 520</span>
          </div>

          {/* big hero video card */}
          <div style={{ ...card, position: "absolute", left: 0, top: 20, width: 640, padding: 14, transform: "rotate(-1.5deg)", zIndex: 2 }}>
            <div className="wf-img wf-vid" style={{ height: 380 }}>
              <span className="wf-img-label">VIDEO · hero · 16:9</span>
            </div>
            <div className="row" style={{ justifyContent: "space-between", marginTop: 10 }}>
              <span className="wf-mono" style={{ fontSize: 11 }}>NO. 001 · MACHINE AT WORK</span>
              <span className="wf-stars" style={{ fontSize: 12 }}>★★★★★</span>
            </div>
          </div>

          {/* card 2 */}
          <div style={{ ...card, position: "absolute", right: 200, top: 0, width: 280, padding: 12, transform: "rotate(3deg)" }}>
            <div className="wf-img" style={{ height: 200 }}>
              <span className="wf-img-label">PHOTO · hat front</span>
            </div>
            <div className="wf-mono" style={{ fontSize: 11, marginTop: 8 }}>NO. 002 · 5-PANEL · 3 COLORS</div>
          </div>

          {/* card 3 */}
          <div style={{ ...card, position: "absolute", right: 0, top: 220, width: 260, padding: 12, transform: "rotate(-4deg)" }}>
            <div className="wf-img" style={{ height: 200 }}>
              <span className="wf-img-label">PHOTO · jacket back</span>
            </div>
            <div className="wf-mono" style={{ fontSize: 11, marginTop: 8 }}>NO. 003 · DENIM · 8″ × 6″</div>
          </div>

          {/* annotation */}
          <div className="wf-scrawl" style={{ position: "absolute", right: 320, top: 280, fontSize: 22, color: "var(--accent)", transform: "rotate(-6deg)" }}>
            ← thread density!
          </div>
        </div>
      </section>

      {/* ============ STAT STRIP ============ */}
      <section style={{ padding: "24px 56px", background: "var(--ink)", color: "var(--paper)" }}>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
          {[
          ["NO MINIMUMS", "1 piece is fine"],
          ["~10 DAYS", "standard turn"],
          ["12 COLORS", "thread max"],
          ["★ 4.9 / 5", "60+ reviews"],
          ["WORLDWIDE", "shipping"]].
          map(([n, s]) =>
          <div key={n} className="col">
              <span className="wf-stamp" style={{ fontSize: 18, color: "var(--accent)" }}>{n}</span>
              <span className="wf-mono" style={{ fontSize: 10, opacity: 0.7, letterSpacing: "0.1em", marginTop: 2 }}>{s.toUpperCase()}</span>
            </div>
          )}
        </div>
      </section>

      {/* ============ CATALOG / GALLERY — index card grid ============ */}
      <section style={{ padding: "64px 56px", position: "relative", zIndex: 1 }}>
        {/* ruler at top of section */}
        <div className="wf-ruler-h" style={{ marginBottom: 32, marginLeft: -56, marginRight: -56 }}>
          <span className="wf-mono" style={{ position: "absolute", top: 2, left: 64, fontSize: 9, color: "var(--pencil)", letterSpacing: "0.15em" }}>0</span>
          <span className="wf-mono" style={{ position: "absolute", top: 2, left: 320, fontSize: 9, color: "var(--pencil)", letterSpacing: "0.15em" }}>320</span>
          <span className="wf-mono" style={{ position: "absolute", top: 2, left: 640, fontSize: 9, color: "var(--accent)", letterSpacing: "0.15em" }}>·· 640 CENTER ··</span>
          <span className="wf-mono" style={{ position: "absolute", top: 2, left: 960, fontSize: 9, color: "var(--pencil)", letterSpacing: "0.15em" }}>960</span>
          <span className="wf-mono" style={{ position: "absolute", top: 2, right: 64, fontSize: 9, color: "var(--pencil)", letterSpacing: "0.15em" }}>1280</span>
        </div>

        <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <span className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--pencil)" }}>ENTRY 002 — CATALOG</span>
            <h2 className="wf-stamp" style={{ fontSize: 44, margin: "8px 0 0" }}>The Catalog.</h2>
          </div>
          <div className="row gap-8">
            {["all", "hats", "hoodies", "jackets", "patches"].map((c, i) =>
            <span key={c} className="wf-badge" style={{
              background: i === 0 ? "var(--ink)" : "var(--paper)",
              color: i === 0 ? "var(--paper)" : "var(--ink)",
              cursor: "pointer"
            }}>{c}</span>
            )}
          </div>
        </div>
        <p className="wf-hand" style={{ fontSize: 22, margin: "12px 0 32px", color: "var(--pencil)" }}>Our past orders, let's add yours to the gallery next.

        </p>

        {/* uniform card grid 4 across */}
        <div style={{ position: "relative", padding: "8px 0" }}>
          <div className="wf-dim-line" style={{ top: -8, left: 0 }}><span>4 COL · 24px GUTTER</span></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { n: "004", t: "Cafe logo cap", m: "5-panel · 3C · 2.5″" },
            { n: "005", t: "Wedding patches", m: "iron-on · 2C · 3″" },
            { n: "006", t: "Band hoodie", m: "back · 4C · 10″" },
            { n: "007", t: "Workshirt mono", m: "chest · 1C · 2″" },
            { n: "008", t: "Beanie tag", m: "fold · 2C · 1.5″" },
            { n: "009", t: "Tote bag", m: "center · 3C · 6″" },
            { n: "010", t: "Polo crest", m: "chest L · 5C · 3″" },
            { n: "011", t: "Denim jacket", m: "back · 6C · 9″" }].
            map((it, i) =>
            <div key={it.n} style={{ ...card, padding: 12, transform: `rotate(${(i % 3 - 1) * 0.6}deg)` }}>
              <div className="wf-img" style={{ height: 200 }}>
                <span className="wf-img-label">IMG · {it.t}</span>
              </div>
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1.5px dashed var(--ink)" }}>
                <div className="row" style={{ justifyContent: "space-between" }}>
                  <span className="wf-mono" style={{ fontSize: 10, color: "var(--accent)" }}>NO. {it.n}</span>
                  <span className="wf-stars" style={{ fontSize: 10 }}>★★★★★</span>
                </div>
                <div className="wf-stamp" style={{ fontSize: 13, marginTop: 4 }}>{it.t}</div>
                <div className="wf-mono" style={{ fontSize: 10, color: "var(--pencil)", marginTop: 2 }}>{it.m}</div>
              </div>
            </div>
            )}
          </div>
        </div>

        <div className="row" style={{ justifyContent: "center", marginTop: 32 }}>
          <button className="wf-btn wf-btn-ghost">See full catalog (84) →</button>
        </div>
      </section>

      {/* ============ REVIEWS — DM screenshots feel ============ */}
      <section style={{ padding: "56px 56px", background: "var(--paper-2)", borderTop: "1.5px solid var(--ink)", borderBottom: "1.5px solid var(--ink)" }}>
        <span className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--pencil)" }}>ENTRY 003 — REVIEWS</span>
        <div className="row" style={{ alignItems: "baseline", justifyContent: "space-between", marginTop: 8 }}>
          <h2 className="wf-stamp" style={{ fontSize: 44, margin: 0 }}>Folks Wrote In.</h2>
          <span className="wf-stars" style={{ fontSize: 22 }}>★★★★★ <span className="wf-mono" style={{ fontSize: 12, color: "var(--ink)", marginLeft: 8 }}>4.9 · 60+</span></span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 20, marginTop: 32 }}>
          {/* big quote */}
          <div style={{ ...card, padding: 28, position: "relative", background: "var(--paper)" }}>
            <span className="wf-stamp" style={{ fontSize: 80, lineHeight: 0.7, color: "var(--accent)" }}>"</span>
            <p className="wf-hand" style={{ fontSize: 26, lineHeight: 1.3, margin: "0 0 20px" }}>
              Took my chicken-scratch sketch and made it look intentional. Five hats later and they still look brand new.
            </p>
            <div style={{ borderTop: "1.5px dashed var(--ink)", paddingTop: 12 }}>
              <div className="wf-mono" style={{ fontSize: 12 }}>REESE V. — REPEAT CLIENT</div>
              <div className="wf-mono" style={{ fontSize: 10, color: "var(--pencil)" }}>5 HATS · CAFE BRAND</div>
            </div>
          </div>

          {/* small text-message style */}
          {[
          { who: "Marco R.", q: "Sample by morning. Hats came out cleaner than the file." },
          { who: "Jess T.", q: "Showed up early, stitched cleaner than anywhere else we got quoted." },
          { who: "DJ K.", q: "The texture is unreal. Like an heirloom on day one." },
          { who: "Annie P.", q: "Stitch density exactly what I asked for." }].
          map((r, i) =>
          <div key={i} style={{ ...card, padding: 18 }}>
              <div className="wf-stars" style={{ fontSize: 12, marginBottom: 8 }}>★★★★★</div>
              <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0 }}>"{r.q}"</p>
              <div className="wf-mono" style={{ fontSize: 10, marginTop: 12, color: "var(--pencil)" }}>— {r.who.toUpperCase()}</div>
            </div>
          )}
        </div>
      </section>

      {/* ============ QUOTE — clipboard/order form feel ============ */}
      <section style={{ padding: "64px 56px" }}>
        <span className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--pencil)" }}>ENTRY 004 — ORDER FORM</span>
        <h2 className="wf-stamp" style={{ fontSize: 44, margin: "8px 0 32px" }}>Quote Request.</h2>

        <div style={{ ...card, padding: 32, position: "relative" }}>
          {/* form header */}
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1.5px solid var(--ink)", marginBottom: 24 }}>
            <span className="wf-stamp" style={{ fontSize: 20 }}>SCFD ORDER SLIP</span>
            <span className="wf-mono" style={{ fontSize: 11, color: "var(--pencil)" }}>FORM 04 · v1 · NEW</span>
          </div>

          <div className="row" style={{ gap: 48, alignItems: "flex-start" }}>
            {/* left col */}
            <div style={{ flex: 1 }}>
              <div className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 16 }}>
                ① WHO ARE YOU?
              </div>
              <div className="row gap-16">
                <div className="wf-field" style={{ flex: 1 }}><label className="wf-label">Name</label><input className="wf-input" /></div>
                <div className="wf-field" style={{ flex: 1 }}><label className="wf-label">Email</label><input className="wf-input" /></div>
              </div>
              <div className="wf-field"><label className="wf-label">Phone (text ok)</label><input className="wf-input" /></div>

              <div className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent)", margin: "32px 0 16px" }}>
                ② WHAT ARE WE STITCHING?
              </div>
              <div className="row gap-16">
                <div className="wf-field" style={{ flex: 1 }}><label className="wf-label">Quantity</label><input className="wf-input" defaultValue="1" /></div>
                <div className="wf-field" style={{ flex: 1 }}><label className="wf-label">Size (in)</label><input className="wf-input" defaultValue="3.5 × 2" /></div>
                <div className="wf-field" style={{ flex: 1 }}><label className="wf-label"># colors</label><input className="wf-input" defaultValue="3" /></div>
              </div>

              <div className="wf-field">
                <label className="wf-label">Placement</label>
                <div className="row gap-8" style={{ marginTop: 8, flexWrap: "wrap" }}>
                  {["Chest L", "Chest R", "Sleeve", "Back", "Hat front", "Hat side", "Other"].map((p, i) =>
                  <span key={p} className="wf-badge" style={{
                    background: i === 0 ? "var(--accent)" : "var(--paper)",
                    color: i === 0 ? "var(--paper)" : "var(--ink)",
                    cursor: "pointer"
                  }}>{p}</span>
                  )}
                </div>
              </div>
            </div>

            {/* right col */}
            <div style={{ flex: 1 }}>
              <div className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent)", marginBottom: 16 }}>
                ③ THE ARTWORK
              </div>
              <div className="wf-img" style={{ height: 160, background: "var(--paper)" }}>
                <span className="wf-img-label">+ DROP / UPLOAD · PNG JPEG SVG AI PDF</span>
              </div>
              <div className="wf-hand" style={{ fontSize: 16, color: "var(--pencil)", marginTop: 8 }}>
                ~ vector preferred, but a sketch works too ~
              </div>

              <div className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent)", margin: "28px 0 16px" }}>
                ④ HOW SOON?
              </div>
              <div className="col gap-12">
                <label style={{ fontSize: 14 }}><span className="wf-radio on"></span>Standard · 1–2 weeks</label>
                <label style={{ fontSize: 14 }}><span className="wf-radio"></span>Rush · 3–5 days (+25%)</label>
              </div>

              <div className="wf-field" style={{ marginTop: 24 }}>
                <label className="wf-label">Notes / extra context</label>
                <textarea className="wf-input" style={{ minHeight: 80 }} />
              </div>
            </div>
          </div>

          <div className="row" style={{ justifyContent: "space-between", alignItems: "center", marginTop: 24, paddingTop: 24, borderTop: "1.5px dashed var(--ink)" }}>
            <span className="wf-hand" style={{ fontSize: 20, color: "var(--accent)" }}>I'll write you back within 24h ✎</span>
            <button className="wf-btn">Send order slip →</button>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ padding: "64px 56px", borderTop: "1.5px solid var(--ink)" }}>
        <span className="wf-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--pencil)" }}>ENTRY 005 — FAQ</span>
        <h2 className="wf-stamp" style={{ fontSize: 44, margin: "8px 0 32px" }}>Common Qs.</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
          ["How long does it take?", "Standard ~1–2 wks from sample approval. Rush available."],
          ["Can I bring my own garments?", "Yep — message me first about placement & material."],
          ["File formats?", "Vector preferred (SVG/AI/PDF). Hi-res PNG fine."],
          ["Minimum order?", "One. I love single pieces."],
          ["Do you ship?", "US standard, worldwide on request."],
          ["Color limits?", "Up to 12 thread colors. Most use 2–4."]].
          map(([q, a], i) =>
          <div key={i} style={{ ...card, padding: 20 }}>
              <div className="wf-mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.15em" }}>Q.0{i + 1}</div>
              <div className="wf-stamp" style={{ fontSize: 16, margin: "6px 0 8px" }}>{q}</div>
              <div className="wf-hand" style={{ fontSize: 18, color: "var(--ink)" }}>{a}</div>
            </div>
          )}
        </div>
      </section>

      {/* ============ CONTACT BAR ============ */}
      <footer style={{ background: "var(--ink)", color: "var(--paper)", padding: "48px 56px", position: "relative" }}>
        <div className="row" style={{ alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div className="row gap-16" style={{ alignItems: "center" }}>
            <div style={{
              width: 72, height: 72, borderRadius: "50%",
              border: "2.5px solid var(--paper)", background: "var(--accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transform: "rotate(-6deg)"
            }}>
              <span className="wf-scfd" style={{ fontSize: 20, color: "var(--paper)" }}>SCFD</span>
            </div>
            <div className="col">
              <span className="wf-stamp" style={{ fontSize: 22, color: "var(--paper)" }}>SCUFFED HOUSE</span>
              <span className="wf-mono" style={{ fontSize: 10, opacity: 0.6, letterSpacing: "0.15em" }}>EVERY PIECE A FILE OF ITS OWN</span>
            </div>
          </div>

          <div className="row gap-32" style={{ alignItems: "center" }}>
            <div className="col gap-4">
              <span className="wf-mono" style={{ fontSize: 10, opacity: 0.6, letterSpacing: "0.1em" }}>EMAIL</span>
              <span className="wf-mono" style={{ fontSize: 14 }}>hello@scuffedhouse.co</span>
            </div>
            <div className="col gap-4">
              <span className="wf-mono" style={{ fontSize: 10, opacity: 0.6, letterSpacing: "0.1em" }}>TEXT</span>
              <span className="wf-mono" style={{ fontSize: 14 }}>(555) 123–4567</span>
            </div>
            <button className="wf-btn" style={{ background: "var(--accent)" }}>DM for a quote →</button>
          </div>
        </div>

        <div className="wf-mono" style={{ fontSize: 10, opacity: 0.5, marginTop: 32, letterSpacing: "0.15em", textAlign: "center" }}>
          © SCFD · SCUFFED HOUSE · CATALOG VOL. 01 · ONE NEEDLE AT A TIME
        </div>
      </footer>
    </div>);

};

window.PatchCatalog = PatchCatalog;
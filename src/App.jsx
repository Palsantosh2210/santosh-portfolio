import { useState } from "react";
import { payload } from "../shared/payload.js";
import { profile, modes, stats, services, freelanceWork, projects, experience, skills, proof } from "./data.js";

// Sample-response box. The stack wraps to the box width automatically (no character limit),
// and every skill comes from the same list the live endpoint returns.
function SampleBox({ p }) {
  const nb = (s) => s.replace(/ /g, "\u00A0"); // keep "Core Java" together on one line
  const items = p.stack.map((x, i) => `"${nb(x)}"${i < p.stack.length - 1 ? "," : ""}`).join(" ");
  return (
    <pre className="resp" aria-label="Profile summary">
      {`GET /developer/santosh-pal      200 OK
{
  "role": "${p.role}",
  "based_in": "${p.based_in}",
  "now": "${p.now}",
  "stack": [`}
      <span className="stk">{items}</span>
      {`  ],
  "freelance": "${p.freelance}"
}`}
    </pre>
  );
}

const ext = (href) => (href && !href.includes("YOUR-") ? href : null);

export default function App() {
  const [mode, setMode] = useState("hire");
  const m = modes[mode];
  const ctaHref = m.ctaHref === "resume" ? profile.resume : m.ctaHref;
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", need: "", msg: "" });

  // Links are built only on tap, so the address and number are not shown as text on the page.
  const openEmail = () => {
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Enquiry from your portfolio")}`;
  };
  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi Santosh, I saw your portfolio and would like to talk.");
    window.open(`https://wa.me/${profile.whatsapp}?text=${msg}`, "_blank", "noopener");
  };

  const send = (e) => {
    e.preventDefault();
    const body = `Hi Santosh,\n\n${f.msg}\n\nProject type: ${f.need}\nFrom: ${f.name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry from " + f.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">{profile.name}</a>
        <nav>
          <a href="#work">Work</a><a href="#services">Services</a>
          <a href="#experience">Experience</a><a href="#contact" className="pill">Hire me</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="copy">
            <div className="who" role="tablist" aria-label="What brings you here">
              {Object.entries(modes).map(([k, v]) => (
                <button key={k} role="tab" aria-selected={mode === k} className={mode === k ? "on" : ""} onClick={() => setMode(k)}>{v.label}</button>
              ))}
            </div>
            <h1>{m.headline}</h1>
            <p className="sub">{m.sub}</p>
            <div className="row">
              <a className="btn" href={ctaHref} {...(mode === "hire" ? { download: true } : {})}>{m.cta}</a>
              <a className="btn ghost" href="#work">See my work</a>
            </div>
          </div>
          <div className="photo"><img src={profile.photo} alt="Santosh Pal" width="320" height="320" /></div>
          <figure className="respwrap">
            <SampleBox p={payload} />
          </figure>
        </section>

        <section className="wrap stats">
          {stats.map(([a, b]) => (<div key={a}><strong>{a}</strong><span>{b}</span></div>))}
        </section>

        <section id="services" className="wrap">
          <h2>What I can build for you</h2>
          <div className="grid4">
            {services.map((s) => (<article key={s.t}><h3>{s.t}</h3><p>{s.d}</p></article>))}
          </div>
        </section>

        <section id="work" className="wrap">
          <h2>Client work</h2>
          <article className="client">
            <div>
              <h3>{freelanceWork.client} <small>{freelanceWork.type}</small></h3>
              {freelanceWork.status && <span className="tag st">{freelanceWork.status}</span>}
              <p>{freelanceWork.summary}</p>
              <ul className="chips">{freelanceWork.built.map((d) => <li key={d}>{d}</li>)}</ul>
              {freelanceWork.link && <a className="link" href={freelanceWork.link}>View live project</a>}
            </div>
            {freelanceWork.quote && <blockquote>{freelanceWork.quote}</blockquote>}
          </article>

          <h2 className="gap">Projects</h2>
          <div className="grid3">
            {projects.map((p) => (
              <article key={p.n}>
                <span className="tag">{p.tag}</span>
                <h3>{p.n}</h3>
                <p>{p.d}</p>
                <ul className="chips">{p.s.map((x) => <li key={x}>{x}</li>)}</ul>
                {p.l && <a className="link" href={p.l}>Source on GitHub</a>}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="wrap two">
          <div>
            <h2>Experience</h2>
            <ol className="tl">
              {experience.map((e) => (
                <li key={e.r + e.p}><b>{e.r}</b><em>{e.c} · {e.p}</em><p>{e.d}</p></li>
              ))}
            </ol>
          </div>
          <div>
            <h2>Skills</h2>
            {Object.entries(skills).map(([k, v]) => (
              <div key={k} className="sk"><h3>{k}</h3><ul className="chips">{v.map((x) => <li key={x}>{x}</li>)}</ul></div>
            ))}
            <h2 className="gap">Recognition</h2>
            <ul className="plain">{proof.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </section>

        <section id="contact" className="wrap contact">
          <div>
            <h2>Tell me about your project</h2>
            <p>I reply within a day. For quick questions, message me on WhatsApp.</p>
            <ul className="plain">
              <li><button type="button" className="cta-link" onClick={openEmail}>Email me <span aria-hidden="true">→</span></button></li>
              <li><button type="button" className="cta-link" onClick={openWhatsApp}>Chat on WhatsApp <span aria-hidden="true">→</span></button></li>
              {ext(profile.linkedin) && <li><a href={profile.linkedin}>LinkedIn</a></li>}
              {ext(profile.github) && <li><a href={profile.github}>GitHub</a></li>}
              {ext(profile.leetcode) && <li><a href={profile.leetcode}>LeetCode</a></li>}
            </ul>
          </div>
          <form onSubmit={send}>
            <label>Your name<input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
            <label>What do you need?
              <select required value={f.need} onChange={(e) => setF({ ...f, need: e.target.value })}>
                <option value="">Choose one</option>
                <option>Website</option><option>Android app</option><option>Backend / API</option><option>Fix or add a feature</option><option>Full-time role</option>
              </select>
            </label>
            <label>Your message<textarea required rows="4" value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} /></label>
            <button className="btn" type="submit">Send by email</button>
            {sent && <p className="note">Your email app should open with the message ready to send.</p>}
          </form>
        </section>
      </main>
      <footer className="wrap foot">© {new Date().getFullYear()} {profile.name}. Built with React.</footer>
    </>
  );
}

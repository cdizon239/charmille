function App() {
  return (
    <main>
      <header>
        <h1>Charmille Coleen Dizon</h1>
        <p className="role">AI Product Engineer</p>
      </header>

      <section>
        <p>
          I build AI products at <a href="https://www.osmo.ai/">Osmo</a>,
          where we&rsquo;re giving computers a sense of smell. My work is
          deliberately holistic &mdash; data-intensive systems, models, and
          interfaces, along with the product decisions that connect them.
        </p>
        <p>
          I got here the long way around &mdash; first as a scientist
          reconstructing 1,500 years of hurricane history from island
          blue-hole sediments, then through data analysis and product
          management, and finally engineering. Every seat I&rsquo;ve sat in
          shows up in how I build.
        </p>
        <p>
          Curiosity drives most of it. I like shipping quickly, working
          across teams, and mentoring engineers along the way.
        </p>
      </section>

      <section className="experience" aria-label="Experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <span className="dates">2023&ndash;</span>
            <span>Senior Software Engineer, <a href="https://www.osmo.ai/">Osmo</a></span>
          </li>
          <li>
            <span className="dates">2022&ndash;23</span>
            <span>Software Engineer, <a href="https://www.indigoag.com/">Indigo</a></span>
          </li>
          <li>
            <span className="dates">2021&ndash;22</span>
            <span>Product Manager, Indigo</span>
          </li>
          <li>
            <span className="dates">2020</span>
            <span>Data Analyst, Indigo</span>
          </li>
          <li>
            <span className="dates">2018</span>
            <span>
              Guest Researcher,{' '}
              <a href="https://www.whoi.edu/">Woods Hole Oceanographic Institution</a>
            </span>
          </li>
        </ul>
      </section>

      <nav className="elsewhere" aria-label="Elsewhere">
        <a href="https://github.com/cdizon239">GitHub</a>
        <a href="https://www.linkedin.com/in/charmille-coleen-dizon/">
          LinkedIn
        </a>
        <a href="mailto:coleencharmille@gmail.com">Email</a>
      </nav>

      <footer>Boston, MA</footer>
    </main>
  )
}

export default App

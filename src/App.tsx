function App() {
  return (
    <main>
      <header>
        <h1>Charmille Coleen Dizon</h1>
        <p className="role">Product Engineer</p>
      </header>

      <section>
        <p>
          I build AI products at <a href="https://www.osmo.ai/">Osmo</a>,
          where we&rsquo;re giving computers a sense of smell &mdash; from
          the data pipelines that carry scent from lab to model, to the
          models themselves, to the interfaces and product decisions built
          on top of them.
        </p>
        <p>
          Before engineering, I worked in data analysis and product
          management. I started out in climate research at Woods Hole
          Oceanographic Institution, reconstructing 1,500 years of hurricane
          activity from blue hole sediments &mdash;{' '}
          <a href="https://www.sciencedirect.com/science/article/pii/S0277379121003334">
            published in <em>Quaternary Science Reviews</em>
          </a>
          . I&rsquo;m most useful where science, product, and software meet.
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
            <div>
              <p>Senior Software Engineer, <a href="https://www.osmo.ai/">Osmo</a></p>
              <p className="blurb">
                Digitizing the sense of smell &mdash; data pipelines from lab
                to model
              </p>
            </div>
          </li>
          <li>
            <span className="dates">2022&ndash;23</span>
            <div>
              <p>Software Engineer, <a href="https://www.indigoag.com/">Indigo</a></p>
              <p className="blurb">
                Technology for sustainable agriculture &mdash; full-stack
                product features
              </p>
            </div>
          </li>
          <li>
            <span className="dates">2021&ndash;22</span>
            <div>
              <p>Product Manager, Indigo</p>
              <p className="blurb">Agronomic tool MVPs and user research</p>
            </div>
          </li>
          <li>
            <span className="dates">2020</span>
            <div>
              <p>Data Analyst, Indigo</p>
              <p className="blurb">
                Metrics and personalized reports for 200+ farmers
              </p>
            </div>
          </li>
          <li>
            <span className="dates">2018</span>
            <div>
              <p>
                Guest Researcher,{' '}
                <a href="https://www.whoi.edu/">Woods Hole Oceanographic Institution</a>
              </p>
              <p className="blurb">
                Ocean research and exploration &mdash; 1,500 years of
                hurricane records from sediment cores
              </p>
            </div>
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

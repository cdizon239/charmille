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
                Data pipelines and services on GCP that move scent data from
                lab instruments to models and products.
              </p>
            </div>
          </li>
          <li>
            <span className="dates">2022&ndash;23</span>
            <div>
              <p>Software Engineer, <a href="https://www.indigoag.com/">Indigo</a></p>
              <p className="blurb">
                Full-stack features for program support and user retention,
                plus the dev tooling and test coverage around them.
              </p>
            </div>
          </li>
          <li>
            <span className="dates">2021&ndash;22</span>
            <div>
              <p>Product Manager, Indigo</p>
              <p className="blurb">
                Shipped MVPs of agronomic tools used by farmers and partners,
                and ran the user research and analytics behind Indigo Carbon
                product decisions.
              </p>
            </div>
          </li>
          <li>
            <span className="dates">2020</span>
            <div>
              <p>Data Analyst, Indigo</p>
              <p className="blurb">
                Built the SQL-powered metrics hub for company objectives and
                delivered personalized agronomic reports to 200+ farmers.
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
                Analyzed 12-meter blue hole sediment cores to reconstruct
                1,500 years of Atlantic hurricane strikes for my honors
                thesis.
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

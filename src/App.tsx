function App() {
  return (
    <main>
      <header>
        <h1>Charmille Coleen Dizon</h1>
        <p className="role">Product Engineer</p>
      </header>

      <section>
        <p>
          I&rsquo;m a product engineer in Boston. I build data-intensive AI
          products end to end &mdash; the pipelines, the models, and the
          interfaces and product decisions on top of them. I&rsquo;m most
          useful where science, product, and software meet.
        </p>
        <p>
          At <a href="https://www.osmo.ai/">Osmo</a>, we&rsquo;re giving
          computers a sense of smell. I build the data pipelines that carry
          scent from lab to model, and the software behind the making and
          fulfillment of physical scent products, integrated with MES and
          ERP systems.
        </p>
        <p>
          Before engineering, I worked in data analysis and product
          management. I started out in climate research at Woods Hole
          Oceanographic Institution, reconstructing 1,500 years of hurricane
          activity from blue hole sediments &mdash;{' '}
          <a href="https://www.sciencedirect.com/science/article/pii/S0277379121003334">
            published in <em>Quaternary Science Reviews</em>
          </a>
          .
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
                Digitize the sense of smell and democratize scent creation through data, ML models, and software products
              </p>
            </div>
          </li>
          <li>
            <span className="dates">2022&ndash;23</span>
            <div>
              <p>Software Engineer, <a href="https://www.indigoag.com/">Indigo</a></p>
              <p className="blurb">
                Development of technology for sustainable agriculture
              </p>
            </div>
          </li>
          <li>
            <span className="dates">2021&ndash;22</span>
            <div>
              <p>Product Manager, Indigo</p>
              <p className="blurb">
                Discovery and launch of digital agronomy products
                for farmers and agriculture enterprises
              </p>
            </div>
          </li>
          <li>
            <span className="dates">2020</span>
            <div>
              <p>Data Analyst, Indigo</p>
              <p className="blurb">
                Automated generation and distribution of personalized
                agronomy reports
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
                Paleotempestology &mdash; reconstructed 1,500 years of
                hurricane strikes from blue hole sediment cores
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

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
          products end to end, from the data pipelines to the ML models to
          the interfaces and product decisions on top of them. I&rsquo;m most
          useful where science, product, and software meet.
        </p>
        <p>
          Today I&rsquo;m at <a href="https://www.osmo.ai/">Osmo</a>, where
          we&rsquo;re giving computers a sense of smell. I build the data
          pipelines that carry scent from lab to model, and the software
          behind the making and fulfillment of physical scent products,
          integrated with MES and ERP systems.
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

        <div className="company">
          <p className="company-name">
            <a href="https://www.osmo.ai/">Osmo</a>
          </p>
          <p className="blurb">
            Digitizing the sense of smell and democratizing scent creation
            through data, ML models, and software products
          </p>
          <ul>
            <li>
              <span className="dates">2023&ndash;</span>
              <span>Senior Software Engineer</span>
            </li>
          </ul>
        </div>

        <div className="company">
          <p className="company-name">
            <a href="https://www.indigoag.com/">Indigo</a>
          </p>
          <p className="blurb">
            Software and data products for sustainable agriculture
          </p>
          <ul>
            <li>
              <span className="dates">2022&ndash;23</span>
              <span>Software Engineer</span>
            </li>
            <li>
              <span className="dates">2021&ndash;22</span>
              <span>Product Manager</span>
            </li>
            <li>
              <span className="dates">2020</span>
              <span>Data Analyst</span>
            </li>
          </ul>
        </div>

        <div className="company">
          <p className="company-name">
            <a href="https://www.whoi.edu/">Woods Hole Oceanographic Institution</a>
          </p>
          <p className="blurb">
            Paleotempestology research reconstructing 1,500 years of hurricane
            activity from blue hole sediments to extend the storm record and
            improve coastal flooding risk assessment
          </p>
          <ul>
            <li>
              <span className="dates">2018</span>
              <span>Guest Researcher</span>
            </li>
          </ul>
        </div>

        <div className="company">
          <p className="company-name">
            <a href="https://www.northeastern.edu/">Northeastern University</a>
          </p>
          <p className="blurb">
            Ran cultural programming with the Office of Global Services and
            mentored international students navigating academic life, while
            tutoring peers alongside my degree
          </p>
          <ul>
            <li>
              <span className="dates">2016&ndash;20</span>
              <span>Global Student Mentor</span>
            </li>
            <li>
              <span className="dates">2016&ndash;19</span>
              <span>Peer Tutor, Chemistry &amp; Physics</span>
            </li>
          </ul>
        </div>
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

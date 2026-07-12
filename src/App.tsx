function App() {
  return (
    <main>
      <header>
        <div className="header-text">
          <h1>Charmille Coleen Dizon</h1>
          <p className="role">Product Engineer</p>
        </div>
        <div className="brand-art">
          <img src="/charmille.jpeg" alt="Charmille Coleen Dizon" />
        </div>
      </header>

      <section>
        <p>
          I build data-intensive AI
          products end to end, from the data pipelines to the ML models to
          the interfaces and product decisions on top of them.
        </p>
        <p>
          Today I&rsquo;m at <a href="https://www.osmo.ai/">Osmo</a>, where
          we&rsquo;re giving computers a sense of smell. I build the data
          pipelines that carry scent from lab to model, bring those models
          into production, and write the software behind the making and
          fulfillment of physical scent products, integrated with MES and
          ERP systems.
        </p>
        <p>
          Before engineering, I worked in data analysis and product
          management, and started out in climate research. At heart I&rsquo;m
          a builder, most useful where science and software meet. Curiosity
          drives most of it. I like shipping fast, working across
          teams, and learning from &amp; learning with people along the way.
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
              <span className="dates">2023&ndash; present</span>
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
            Cultural programming and mentorship for international students,
            plus peer tutoring alongside my degree
          </p>
          <ul>
            <li>
              <span className="dates">2016&ndash;20</span>
              <span>Global Student Mentor</span>
            </li>
            <li>
              <span className="dates">2016&ndash;19</span>
              <span>Chemistry, Physics, and Writing Tutor</span>
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

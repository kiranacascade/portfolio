import projects from '../assets/projects.webp';

function Main() {
    return(
        <div id="main">
        <div className="copy-container">
          <div className="greeting">
            <h1>Hi<span className="coma">,</span></h1>
            <h1>I am <span className="name">Kirana Cascade</span></h1>
            <p>I'm a Visual Communication Design graduate who has ventured into Full Stack Web Development, aspiring to blend design finesse with coding expertise in crafting captivating digital experiences. On a continuous journey of learning and growth, I eagerly explore the dynamic convergence of creativity and technology. Let's embark on this exciting path together!</p>
            <button className="get-in-touch">Get in Touch</button>
            <button className="cv">Download CV</button>
          </div>
        </div>
        <div id="about">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non delectus dolorem sequi, beatae praesentium eum, vero voluptatibus molestias minus dignissimos autem, obcaecati unde optio magnam aspernatur dolor quasi veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, incidunt! Quas, a. Officia officiis autem libero perferendis culpa accusantium at, quidem modi nihil enim nemo cum. Dolor tenetur delectus fugiat?</p>
        </div>
        <div id="experience">
          <div id="exp-year">
            <div className="bold">1+</div>
            <div className="desc">Years of Experience</div>
          </div>
          <div id="client">
            <div className="bold">20+</div>
            <div className="desc">Clients Served</div>
          </div>
        </div>
        <div id="projects">
          <h3>Previous Projects</h3>
          <div id="prev-project">
            <div className="project1"><img src={projects} id="project" alt="project1"/></div>
            <div className="project2"><img src={projects} id="project" alt="project2"/></div>
            <div className="project3"><img src={projects} id="project" alt="project3"/></div>
          </div>
        </div>
        <div id="contact">
          <h3>LET'S MAKE SOMETHING COOL!</h3>
          <h4>WRITE TO ME</h4>
          <div className="messages">
            <textarea defaultValue={"Type your messages here"} />
            <input className="messages-submit" type="submit" defaultValue="Get a quote" />
          </div>
        </div>
      </div>
    )
}

export default Main;
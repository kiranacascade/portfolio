import picture from "../assets/kirana-cascade.png";
import Contact from "./Contact";
import Feeds from "./feeds";
import Projects from "./projects";
import Skills from "./skills";
import cv from "../assets/pdf/cv-kirana-cascade.pdf";
import Header from "./header";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero section */}
      <section id="home" className="pt-36 md:pt-0">
        <div className="container">
          <div className="flex flex-wrap min-h-screen">
            <div data-aos="fade-right" className="w-full self-center px-4 md:w-1/2 lg:w-7/12">
              <h1 className="text-4xl font-bold text-dark lg:text-6xl">
                Hi<span className="text-gray">,</span>
              </h1>
              <h1 className="text-4xl lg:text-6xl font-bold text-dark">
                I am <span className="text-primary">Kirana Cascade</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium pt-2 md:pt-3 lg:pt-4 mb-2 lg:mb-4 text-darkGray">Fullstack Web Developer</h2>
              <p className="text-base text-gray pt-2 mb-10 leading-relaxed">
                A <b>Visual Communication Design graduate</b> exploring <b>Full Stack Web Development</b>, fusing design finesse with coding for captivating digital experiences. On a continuous journey of learning and growth, I eagerly
                explore the dynamic convergence of creativity and technology. Let's embark on this exciting path together!
              </p>
              <a href={cv} download="cv-kirana-cascade.pdf" className="text-white text-base font-semibold bg-primary py-2 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                Download CV
              </a>
            </div>
            <div data-aos="fade-left" className="w-full self-end px-4 md:w-1/2 lg:w-5/12">
              <div className="relative lg:right-0">
                <div className="absolute top-4 -left-4 w-72 h-72 md:scale-125 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-4 right-10 lg:-righ-4 w-72 h-72 md:scale-125 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
                <div className="absolute top-16 left-8 lg:left-24 w-72 h-72 md:scale-125 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-4000"></div>

                <div className="relative mt-10 px-5 md:px-0 lg:px-5">
                  <img src={picture} alt="Kirana Cascade" className="max-w-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="pt-20 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div data-aos="fade-right" className="w-full px-4 mb-10 lg:w-1/2">
              <div className="relative lg:right-0">
                <div className="absolute top-4 -left-0 w-72 h-72 md:scale-125 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
                <div className="absolute top-4 right-10 lg:right-12 w-72 h-72 md:scale-125 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-16 left-16 lg:left-36 w-72 h-72 md:scale-125 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-4000"></div>
                <div className="relative mt-4 lg:mt-10 px-5">
                  <Feeds />
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="w-full mt-4 px-4 lg:w-1/2 my-auto">
              <h2 className="text-3xl font-bold text-darkGray mb-4">ABOUT ME</h2>
              <p className="mb-2 text-darkGray">
                Hello! I'm Kirana Devita Cascade, a Visual Communication Design graduate and a <b>passionate graphic designer evolved into a tech enthusiast</b>. I ventured into crafting diverse designs, including captivating web
                interfaces, which ignited my fervor for technology. Fueled by a belief in its boundless potential, I embarked on a self-guided programming journey, sculpting my coding proficiency.
              </p>
              <p className="mb-2 text-darkGray">
                Armed with a comprehensive <b>Full Stack Web Development education from Purwadhika</b>, I stand at the convergence of creativity and technology. Having delved into real projects, I've honed my skills in{" "}
                <b>HTML, CSS, JavaScript, React.js, Express.js, Node.js, and MySQL</b>. Ready to craft captivating digital stories, I'm poised to contribute to the evolving tech landscape, channeling enthusiasm into impactful innovations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

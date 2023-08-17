import { RocketLaunchIcon } from "@heroicons/react/20/solid";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import mysql from "../assets/mysql.png";
import sequelize from "../assets/sequelize.png";
import git from "../assets/git.png";

const skills = [
  {
    text: "HTML",
    icon: html,
  },
  {
    text: "CSS",
    icon: css,
  },
  {
    text: "JavaScript",
    icon: javascript,
  },
  {
    text: "React",
    icon: react,
  },
  {
    text: "NodeJS",
    icon: nodejs,
  },
  {
    text: "Redux",
    icon: redux,
  },
  {
    text: "MySQL",
    icon: mysql,
  },
  {
    text: "Sequelize",
    icon: sequelize,
  },
  {
    text: "Tailwind",
    icon: tailwind,
  },
  {
    text: "Git",
    icon: git,
  },
];

export default function Skills() {
  return (
    <div className="bg-white pt-0 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-darkGray mb-4">MY SKILLS</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-x-5 gap-y-10 sm:max-w-xl sm:gap-x-4 lg:mx-0 lg:max-w-none">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center rounded-lg py-3 hover:bg-purple-100 hover:-translate-y-2 transition duration-300">
              <img src={skill.icon} alt="skill.text" className="h-8 w-8 mr-3" />
              {/* <RocketLaunchIcon className="h-8 w-8 mr-3" aria-hidden="true" /> */}
              <p className="text-darkGray hover:text-dark text-md font-bold">{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="bg-white pt-0 pb-24">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <h2 className="text-center text-lg font-bold leading-8 text-primary">MY SKILLS</h2>
    //     <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
    //       <div className="flex items-center justify-center rounded-lg py-4 hover:bg-purple-100 hover:-translate-y-2 transition duration-300">
    //         <RocketLaunchIcon className="ml-1 h-8 w-8 mr-3" aria-hidden="true" />
    //         <p className="text-lg font-bold">HTML</p>
    //         {/* <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width={158} height={48} /> */}
    //       </div>
    //       <div className="rounded-lg py-2 hover:bg-slate-200 hover:-translate-y-2 transition duration-300">
    //         <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width={158} height={48} />
    //       </div>
    //       <div className="rounded-lg py-2 hover:bg-slate-200 hover:-translate-y-2 transition duration-300">
    //         <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width={158} height={48} />
    //       </div>
    //       <div className="rounded-lg py-2 hover:bg-slate-200 hover:-translate-y-2 transition duration-300">
    //         <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width={158} height={48} />
    //       </div>
    //       <div className="rounded-lg py-2 hover:bg-slate-200 hover:-translate-y-2 transition duration-300">
    //         <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width={158} height={48} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

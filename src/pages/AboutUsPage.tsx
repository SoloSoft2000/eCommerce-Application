import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Olha from '../assets/images/team-photo/olha.jpg';
import Eugene from '../assets/images/team-photo/eugene.jpg';
import Yana from '../assets/images/team-photo/yana.jpg';

function AboutUsPage(): React.JSX.Element {
  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">About Us</h3>
      <div className="flex flex-wrap justify-around lg:flex-nowrap">
        <div className="w-full lg:w-[28%] flex flex-col items-center gap-4">
          <div className="w-60 h-60 rounded-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Eugene})` }}
            ></div>
          </div>
          <div className="flex justify-between w-full items-center">
            <div>
              <h2 className="font-bold text-2xl">Eugene Solomonyk</h2>
              <p className="text-slate-400 text-base">Team leader</p>
            </div>
            <a
              className="text-5xl hover:text-gray-500 transition-all"
              href="https://github.com/SoloSoft2000"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="self-start">
            <h3 className="font-bold mb-2">
              Key Contributions to the Project:
            </h3>
            <ul className="list-disc ms-3">
              <li>Project configuration</li>
              <li>SDK, and CommerceTools settings.</li>
              <li>User Profile page and forms validation</li>
              <li>Shopping cart integration</li>
            </ul>
          </div>

          <p className="text-justify">
            Eugene, a seasoned technology professional, transitioned from early
            expertise in FoxPro and Visual Basic to becoming a proficient CNC
            programmer using tools like Cimatron, GibbsCam, and SolidWorks. With
            a strong academic foundation and a diverse career, he is actively
            dedicated to continuous learning through RS School, fueling his
            desire to re-enter the dynamic world of IT with updated knowledge
            and skills.
          </p>
        </div>

        <div className="w-full lg:w-[28%] flex flex-col items-center gap-4">
          <div className="w-60 h-60 rounded-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Olha})` }}
            ></div>
          </div>
          <div className="flex justify-between w-full items-center">
            <div>
              <h2 className="font-bold text-2xl">Olga Buksman </h2>
              <p className="text-slate-400 text-base">Front-end developer</p>
            </div>
            <a
              className="text-5xl hover:text-gray-500 transition-all"
              href="https://github.com/Fault1err"
            >
              <AiFillGithub />
            </a>
          </div>

          <div className="self-start">
            <h3 className="font-bold mb-2">
              Key Contributions to the Project:
            </h3>
            <ul className="list-disc ms-3">
              <li>Task Board development</li>
              <li> Jest Testing implementation</li>
              <li> Detailed product page</li>
              <li>Enhanced functionality for the Shopping cart</li>
            </ul>
          </div>

          <p className="text-justify">
            Olha graduated from an institute with a degree in one of the
            humanities disciplines and worked for nearly 10 years in various IT
            companies, primarily in back-office roles. However, she eventually
            decided to transition into programming, specifically focusing on
            front-end development and joined RS School.
          </p>
        </div>

        <div className="w-full lg:w-[28%] flex flex-col items-center gap-4">
          <div className="w-60 h-60 rounded-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Yana})` }}
            ></div>
          </div>

          <div className="flex justify-between w-full items-center">
            <div>
              <h2 className="font-bold text-2xl">Yana Zahoruiko</h2>
              <p className="text-slate-400 text-base">Front-end developer</p>
            </div>
            <a
              className="text-5xl hover:text-gray-500 transition-all"
              href="https://github.com/Yasya23"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="self-start">
            <h3 className="font-bold mb-2">
              Key Contributions to the Project:
            </h3>
            <ul className="list-disc ms-3">
              <li>Registration and Sing-in forms</li>
              <li>Implemented catalog page</li>
              <li>Product filtering functionality</li>
              <li>Infinity scroll for Catalog</li>
            </ul>
          </div>
          <p className="text-justify">
            Yana is currently pursuing a degree in Computer Science and
            possesses a background in graphic design. Her passion lies in
            front-end development, and she has completed several relevant
            courses. In her pursuit of a deeper understanding of JavaScript, she
            made the decision to join RS School to further enhance her skills.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutUsPage;

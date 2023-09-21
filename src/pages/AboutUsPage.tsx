import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Logo from '../сomponents/Logo';
import Olga from '../assets/images/team-photo/olga.jpg';
import Eugene from '../assets/images/team-photo/eugene.jpg';
import Yana from '../assets/images/team-photo/yana.jpg';

function AboutUsPage(): React.JSX.Element {
  return (
    <main className="container mx-auto py-10">
      <div className="w-full flex justify-center items-center gap-4 mb-14 flex-wrap">
        <h3 className="text-3xl font-bold">Meet Our Team</h3>
        <Logo />
      </div>
      <div className="flex justify-between flex-wrap gap-4 mb-20">
        <div className="w-full md:w-[48%] text-justify flex flex-col gap-4">
          <p>
            Greetings from our dedicated team at{' '}
            <a
              className="font-bold hover:text-slate-400"
              href="https://rs.school/"
            >
              RS School
            </a>
            ! As aspiring professionals, we recently faced an exciting challenge
            — our final project at{' '}
            <a
              className="font-bold hover:text-slate-400"
              href="https://rs.school/"
            >
              RS School
            </a>
            . It was an opportunity to put our knowledge and skills to the test,
            and collaboration was at the heart of our success.
          </p>
          <p>
            Utilizing platforms like Discord, Telegram, Google Meet, GitHub, and
            GitHub project board, we seamlessly merged our strengths and
            expertise to collectively drive the project forward. Daily meetings
            played a crucial role, serving as a platform for idea exchange,
            progress updates, and effective task delegation.
          </p>
          <p>
            Within our team, we nurtured a culture of support and unity. If a
            team member encountered a hurdle, we organized extra meetings or
            provided assistance through our collaborative chat. This sense of
            camaraderie ensured that no one felt isolated with their challenges,
            fostering an environment where everyone could thrive.
          </p>
        </div>
        <div className="mb-10 w-full md:w-[48%] text-justify flex flex-col gap-4">
          <p>
            Our ultimate goal extended beyond project completion. We aimed to
            ensure that each team member not only solved complex problems but
            comprehended the solutions and could explain them to others. This
            emphasis on understanding and knowledge sharing propelled our team
            towards success.
          </p>
          <p>
            The culmination of our collaborative efforts was the successful
            completion of our final project at{' '}
            <a
              className="font-bold hover:text-slate-400"
              href="https://rs.school/"
            >
              RS School
            </a>
            . It showcased the power of our teamwork, our ability to adapt, and
            the foundation of collaboration that we've been cultivating
            throughout our time here at{' '}
            <a
              className="font-bold hover:text-slate-400"
              href="https://rs.school/"
            >
              RS School
            </a>
            .
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-around gap-y-12">
        <div className="lg:w-[30%] flex flex-col items-center gap-4 max-w-[500px]">
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
              <li>User Profile Page and Forms validation</li>
              <li>Shopping Cart Integration</li>
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

        <div className="lg:w-[30%] flex flex-col items-center gap-4 max-w-[500px]">
          <div className="w-60 h-60 rounded-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Olga})` }}
            ></div>
          </div>
          <div className="flex justify-between w-full items-center">
            <div>
              <h2 className="font-bold text-2xl">Olga Buksman</h2>
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
              <li>Jest Testing implementation</li>
              <li>Detailed Product Page</li>
              <li>Functionality and design of Basket Page</li>
            </ul>
          </div>

          <p className="text-justify">
            Olga graduated from an institute with a degree in one of the
            humanities disciplines and worked for nearly 10 years in various IT
            companies, primarily in back-office roles. However, she eventually
            decided to transition into programming, specifically focusing on
            front-end development and joined RS School.
          </p>
        </div>

        <div className="lg:w-[30%] flex flex-col items-center gap-4 max-w-[500px]">
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
              <li>Catalog Page</li>
              <li>Product Filtering Functionality</li>
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

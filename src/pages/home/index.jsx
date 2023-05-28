import React, { useEffect } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import Work from "../../components/work";
import { motion } from "framer-motion";

const Home = () => {
  const sentences = [
    { id: 1, txt: "A Product Designer experienced" },
    { id: 2, txt: "in visual design and prototyping" },
    { id: 3, txt: "curious, inclusive oriented with" },
    { id: 4, txt: "communication & marketing" },
    { id: 5, txt: "background" },
  ];

  return (
    <div className="px-10 py-20 w-full mx-auto max-w-screen-2xl">
      <header className="block md:flex">
        <div className="py-20 md:w-1/2 ">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="md:text-2xl text-xl"
          >
            Hello I'm Sofia,
          </motion.h1>
          <div className="line py-10 text-3xl md:text-4xl lg:text-5xl max-w-2xl font-dm leading-tight tracking-wider">
            {sentences.map((sentence, id) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duratiion: 0.3, delay: 0.2 * id }}
                  key={id}
                >
                  {sentence.txt}
                </motion.div>
              );
            })}
          </div>
          <div className="text-lg">
            <div className="flex space-x-2 items-center">
              <BsBoxArrowUpRight />
              <span>view my resume</span>
            </div>
            <div className="flex space-x-2 items-center">
              <GrLocation />
              <span>Lisbon</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:my-16">
          {/* bg-sofia_header bg-no-repeat bg-center  */}
          <div
            className="relative mx-auto pl-10 md:pl-0 w-[293px] h-[399px]  md:w-[460px] md:h-[626px] bg-black rounded-[200px]
                            bg-sofia_header bg-no-repeat bg-center  sm:bg-[length:460px] bg-[length:300px]  "
          >
            <div className="absolute top-0 right-20  md:right-36 w-[293px] h-[399px]  md:w-[460px] md:h-[626px] z-[-1] bg-pink rounded-full " />
          </div>
        </div>
      </header>

      <section id="work" className="my-10 md:my-0">
        <h1 className="text-3xl py-5">Selected Work</h1>
        <Work />
      </section>

      <section id="bio" className="my-10 md:my-0 mx-auto">
        <h1 className="text-3xl">Bio</h1>
        <div className="md:flex py-4">
          <div className="md:w-1/2 w-full md:my-16">
            <div
              className="relative mx-auto pl-10 md:pl-0 w-[359px] h-[273px] bg-black rounded-[200px]
                            bg-sofia_header bg-no-repeat bg-center  bg-[length:550px]"
            >
              <div className="absolute top-0 left-20  w-[359px] h-[273px] z-[-1] bg-pink rounded-full " />
            </div>
          </div>

          <div className="space-y-4 md:w-1/2 w-full text-lg py-5">
            <p>Hello I’m Sofia! </p>
            <p>
              I’m currently based in Lisbon. I believe that good design is
              thoughtful, inclusive and visually pleasing!{" "}
            </p>
            <p>
              I graduated in Digital Creation and Communication! From
              communicating to design, creativity and curiosity are key.{" "}
            </p>
            <p>
              When I’m not designing, you can find me practicing yoga, singing
              or expressing myself through fashion and content creation!
            </p>
            <p>
              I enjoy meeting new people and I have a collaborative spirit.
              Let’s work together and make the word a better place through
              design!{" "}
            </p>
            <div className="flex space-x-2 w-full ">
              <button
                type="button"
                className="bg-black py-3 px-6 text-white rounded-xl"
              >
                {" "}
                Get in touch{" "}
              </button>
              <div className="flex space-x-2 items-center">
                <BsBoxArrowUpRight />
                <span>view my resume</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

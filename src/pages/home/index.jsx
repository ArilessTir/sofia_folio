import React, { useEffect, useRef } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import Work from "../../components/work";
import { gsap } from "gsap";

const Home = () => {
  // Use ref to make useefect run once
  const didLogRef = useRef(false);
  useEffect(() => {
    if (didLogRef.current === false) {
      didLogRef.current = true;

      const tl = gsap.timeline();

      tl.to(".line span ", {
        y: 0,
        duration: 0.5,
        stagger: 0.3,
      });
    }
  }, []);

  return (
    <div className="px-10 py-20 w-full mx-auto max-w-screen-2xl">
      <header className="block md:flex min-h-screen">
        <div className="py-20 md:w-1/2 ">
          <div className="line md:text-2xl text-xl overflow-hidden">
            <span className="inline-block transform translate-y-[100%]">
              Hello I'm Sofia,
            </span>
          </div>

          <div className="wrapper py-10 text-3xl md:text-4xl lg:text-5xl max-w-2xl font-dm leading-tight tracking-wider">
            <div className="line overflow-hidden py-1">
              <span className="inline-block transform translate-y-[100%] ">
                A Product Designer experienced{" "}
              </span>
            </div>
            <div className="line overflow-hidden py-1">
              <span className="inline-block transform translate-y-[100%]">
                in visual design and prototyping{" "}
              </span>
            </div>
            <div className="line overflow-hidden py-1">
              <span className="inline-block transform translate-y-[100%]">
                curious, inclusive oriented with{" "}
              </span>
            </div>
            <div className="line overflow-hidden py-1">
              <span className="inline-block transform translate-y-[100%]">
                communication & marketing background{" "}
              </span>
            </div>
          </div>

          <div className="text-lg">
            <div className="line overflow-hidden py-1 ">
              <span className="flex space-x-2 items-center  transform translate-y-[100%]">
                <BsBoxArrowUpRight />
                <a href="#">view my resume</a>
              </span>
            </div>

            <div className="line overflow-hidden py-1 ">
              <span className="flex space-x-2 items-center  transform translate-y-[100%]">
                <GrLocation />
                <a href="#">Lisbon</a>
              </span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:my-16">
          {/* bg-sofia_header bg-no-repeat bg-center  */}
          <div
            className="relative mx-auto pl-10 md:pl-0 w-[293px] h-[399px]  md:w-[460px] md:h-[626px] bg-black rounded-[200px]
                            bg-no-repeat bg-center  sm:bg-[length:460px] bg-[length:300px]  "
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
                href="mailto:sofiahamdi10@gmail.com"
                className="bg-black py-3 px-6 text-white rounded-xl"
              >
                {" "}
                Get in touch{" "}
              </button>
              <span className="flex space-x-2 items-center ">
                <BsBoxArrowUpRight />
                <a href="#">view my resume</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

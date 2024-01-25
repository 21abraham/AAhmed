import React, { useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import myphoto from '../images/myphoto.jpg'
import coventry from '../images/coventryphoto.jpg'
gsap.registerPlugin(ScrollTrigger);
export default function Clone1() {
    const navigate = useNavigate();
    const navigation = [
        { name: 'Archive', href: '/donate' },
        { name: 'About', id: 'footer' }
    ];
    const scrollanime = () => {
        let sections = gsap.utils.toArray(".panel");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll',
                start: 'top top',
                end: '+='+document.querySelector(".contain").offsetWidth,
                scrub: 1,
                pin: true,
                snap: 1/(sections.length-1),
                markers: true
            }
        });
            tl.to(sections, { xPercent: -100*(sections.length-1), ease: 'none' },'start');
            tl.to('#mainbody', { backgroundColor: 'white', ease: 'power4.inOut' },'start');
            tl.to('h1,#navlist', { color: 'black', ease: 'power4.inOut' },'start');
            return () =>{
         tl.revert();
        }
    }

    let tl = gsap.timeline();
  let cursor = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;
    const mouseimage = () => {
  let isHovered = false;

  const toggleHover = (hover) => {
    isHovered = hover;
  };

  const handleHover = () => {
    toggleHover(true);
    gsap.to(cursor, { opacity: 1 });
  };

  const handleHoverOut = () => {
    toggleHover(false);
    gsap.to(cursor, { opacity: 0 });
  };

  tl.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      if (isHovered) {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursor, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      }
    },
  });

  document.addEventListener("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  // Adding event listeners for hover
  document.getElementById("abraham-ahmed").addEventListener("mouseenter", handleHover);
  document.getElementById("abraham-ahmed").addEventListener("mouseleave", handleHoverOut);

  return () => {
    document.getElementById("abraham-ahmed").removeEventListener("mouseenter", handleHover);
    document.getElementById("abraham-ahmed").removeEventListener("mouseleave", handleHoverOut);
  };
};
    const revealImageOnHover = () => {
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
      },
    });

    tl.fromTo(
      '#myphoto',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
    );

    return tl;
  };
    const animatecircle1 =() =>{
        const moveInRandomTL = gsap.timeline({ repeat: -1, yoyo: true });
    const generateRandomPoints = () => {
      return Array.from({ length: 10 }, () => ({
        x: gsap.utils.random(-1000, 500),
        y: gsap.utils.random(-500, 500),
      }));
    };
    moveInRandomTL.to('#circle1', {
      duration: 50,
      keyframes: generateRandomPoints().map((point, index) => ({
        x: point.x,
        y: point.y,
        offset: index / 9,
      })),
      ease: 'power2.inOut',
    });
    moveInRandomTL.play();
    return () =>{
         moveInRandomTL.revert();
        }
    }
    const animatecircle2 =() =>{
        const moveInRandomTL2 = gsap.timeline({ repeat: -1, yoyo: true });
    const generateRandomPoints2 = () => {
      return Array.from({ length: 10 }, () => ({
        x: gsap.utils.random(-500, 1000),
        y: gsap.utils.random(-500, 500),
      }));
    };
    moveInRandomTL2.to('#circle2', {
      duration: 50,
      keyframes: generateRandomPoints2().map((point, index) => ({
        x: point.x,
        y: point.y,
        offset: index / 9,
      })),
      ease: 'power2.inOut',
    });
    moveInRandomTL2.play();
    return () =>{
         moveInRandomTL2.revert();
        }
    }


  useEffect(() => {
      animatecircle1();
    animatecircle2();
      mouseimage();
      scrollanime();
  }, []);
    return (
        <div id="mainbody" className="text-white bg-black text-base font-normal w-full h-full whitespace-nowrap font-['PP', 'Helvetica', 'Arial', 'sans-serif']">
           <h className="absolute w-96 h-[500px] -z-2 user-select-none pointer-events-none transform translate-x-5 translate-y-5 opacity-0" style={{background: `url(${myphoto}) no-repeat 50% 50%`,backgroundSize: 'cover'}} ref={el => cursor = el}></h>
            <nav className="mynav w-full h-32 grid grid-cols-9 items-center z-[1] top-0 left-0 fixed">
                <div id="abraham-ahmed" className="w-full h-full text-container col-span-2 flex items-center justify-center">
                  <h1 className="leading-6">I'm Abraham Ahmed</h1>
                </div>

                <div className="w-full h-full col-span-5"></div>
                <div className="hidden lg:flex lg:gap-x-12 justify-center items-center col-span-2">
                        {navigation.map((item) => (
                            <button
                                id="navlist"
                                key={item.name}
                                onClick={() => {
                                    if (item.href) {
                                        navigate(item.href);
                                    } else if (item.onClick) {
                                        item.onClick();
                                    }
                                }}
                                className="leading-6"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
            </nav>
           <div className="w-full h-screen px-4 py-4">
        <div className="w-full h-full rounded-2xl relative overflow-hidden">
          <div id="circle1" className="blob w-[700px] h-[700px] -z-1 rounded-full absolute top-0 right-0 bg-gradient-to-br from-transparent via-[#666da5] to-transparent blur-3xl bg-opacity-80"></div>
          <div id={"circle2"} className="blob w-[700px] h-[700px] -z-1 rounded-full absolute bottom-0 left-0 bg-gradient-to-br from-transparent via-[#cd506f] to-transparent blur-3xl opacity-80"></div>
          <h1 className="w-full h-full flex items-center justify-center text-3xl">Code architect and design alchemist, I shape ideas into responsive, dynamic, and elegant web solutions.</h1>
        </div>

      </div>
            <div className="w-full h-full flex relative px-64 py-52">
                <div className="gird grid-rows-2 gap-y-2 w-full h-full">
                    <div className="w-full h-full grid grid-cols-3">
                        <div className="w-full h-full col-span-2"><img className="w-full h-full" src={coventry} alt=""/></div>
                        <div className="w-full h-full"><h1>hello</h1></div>
                    </div>
                    <div className="w-full h-full grid grid-cols-3">
                        <div className="w-full h-full col-span-2"><img className="w-full h-full" src={coventry} alt=""/></div>
                        <div className="w-full h-full"><h1>hello</h1></div>
                    </div>
                </div>
        </div>
            <div className="scroll w-full h-full relative overflow-x-hidden">
                <div className="contain w-[400vw] h-full flex">
                    <div className="panel w-screen h-screen flex items-center justify-center"><h1 className="text-3xl">My</h1></div>
                    <div className="panel w-screen h-screen flex items-center justify-center"><h1 className="text-3xl">Life</h1></div>
                    <div className="panel w-screen h-screen flex items-center justify-center"><h1 className="text-3xl">My</h1></div>
                    <div className="panel w-screen h-screen flex items-center justify-center"><h1 className="text-3xl">Roles</h1></div>
            </div>
            </div>
            <div className="w-full h-screen bg-blue-400 relative"></div>
    </div>
    );
}
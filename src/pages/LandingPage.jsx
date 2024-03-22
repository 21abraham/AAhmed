import React, { useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import myphoto from '../images/myphoto.jpg'
import coventry from '../videos/coventry.mp4'
import mitaoe from '../videos/mitaoe.mp4'
import cps from '../videos/cps.mp4'
import super1 from '../videos/super1.mp4'
import super2 from '../videos/super2.mp4'
import minor from '../videos/minor.mp4'
import azure from '../images/azure.png'
import oracle from '../images/oracle.png'
import cisco from '../images/cisco.png'
import cisco2 from '../images/cisco2.png'
import cisco3 from '../images/cisco3.png'
import cisco4 from '../images/cisco4.png'
import awsml from '../images/awsml.png'
import awscloud from '../images/awscloud.png'
import django from '../images/django.png'
import resume from '../assets/AbrahamResume.pdf'
gsap.registerPlugin(ScrollTrigger);
export default function LandingPage() {
    const style = {
        background: 'linear-gradient(90deg,#fcfffd,#fcfffd,#fcfffd, #808080, #fcfffd, #fcfffd,#fcfffd,#fcfffd, #808080, #fcfffd, #fcfffd,#fcfffd,#fcfffd)',
        backgroundSize: '400%',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        animation: 'animate 25s linear infinite'
    };
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedNumber, setCopiedNumber] = useState(false);
  const emailAddress = 'abraham21aug@gmail.com';
  const Number = '9022183799';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
      .then(() => {
        setCopiedEmail(true);
        setTimeout(() => {
          setCopiedEmail(false);
          window.location.reload();
        }, 2000);
        gsap.fromTo('.popup', { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, ease: 'power4.out', delay: 0.5 });
        gsap.to('.popup', { autoAlpha: 0, duration: 2, ease: 'power4.in', delay: 1.5 });
      })
      .catch((error) => console.error('Failed to copy:', error));
  };
  const copyNumber = () => {
    navigator.clipboard.writeText(Number)
      .then(() => {
        setCopiedNumber(true);
        setTimeout(() => {
          setCopiedNumber(false);
          window.location.reload();
        }, 2000);
        gsap.fromTo('.popup2', { autoAlpha: 0 }, { autoAlpha: 1, duration: 2, ease: 'power4.out', delay: 0.5 });
        gsap.to('.popup2', { autoAlpha: 0, duration: 2, ease: 'power4.in', delay: 1.5 });
      })
      .catch((error) => console.error('Failed to copy:', error));
  };
    const navigate = useNavigate();
    const navigation = [
        { name: 'Home', id: 'hero' },
        { name: 'Achievements', id: 'achieve' },
        { name: 'About', id: 'about' }
    ];
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const scrollanime = () => {
        let sections = gsap.utils.toArray(".panel");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll',
                start: 'top top',
                end: '+='+document.querySelector(".contain").offsetWidth,
                scrub: 1,
                pin: true,
                markers: false
            }
        });
            tl.to(sections, { xPercent: -100*(sections.length-1), ease: 'none' },'start');
            tl.to('#mainbody', { backgroundColor: 'white', ease: 'power4.inOut' },'start');
            tl.to('h1,#navlist', { color: 'black', ease: 'power4.inOut' },'start');
            return () =>{
         tl.revert();
        }
    }


    let revealTimeline = gsap.timeline();
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
    revealTimeline.play();
  };

  const handleHoverOut = () => {
    toggleHover(false);
    gsap.to(cursor, { opacity: 0 });
    revealTimeline.pause();
  };

  revealTimeline.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      if (isHovered) {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        revealTimeline.set(cursor, {
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

    return () =>{
         tl.revert();
        }
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

const changenow = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.cpscontain',
                start: 'top top',
                end: '+='+document.querySelector(".cpscontain").offsetWidth,
                scrub: 1,
            }
        });
            tl.to('#mainbody', { backgroundColor: 'black', duration: 2, ease: 'power4.inOut' },'start');
            tl.to('h1,#navlist', { color: 'white',duration: 2, ease: 'power4.inOut' },'start');
            return () =>{
         tl.revert();
        }
    }

    const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;

    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }
  useEffect(() => {
      window.scrollTo(0,0);
      animatecircle1();
    animatecircle2();
      mouseimage();
      scrollanime();
      changenow();

  }, []);

    return (
        <div id="mainbody" className="overflow-hidden whitespace-pre-line text-white bg-black text-base font-normal w-full h-full font-['PP', 'Helvetica', 'Arial', 'sans-serif']">
           <h className="max-md:scale-50 max-md:-translate-x-20 max-md:-translate-y-20 absolute w-96 h-[500px] -z-2 user-select-none pointer-events-none transform translate-x-5 translate-y-5 rounded-3xl opacity-0" style={{background: `url(${myphoto}) no-repeat 50% 50%`,backgroundSize: 'cover'}} ref={el => cursor = el}></h>
            <nav className="mynav max-md:scale-75 w-full h-32 grid grid-cols-9 items-center z-[10] top-0 left-0 fixed">
                <div id="abraham-ahmed" className="max-md:hidden w-full h-full text-container col-span-2 flex items-center justify-center">
                    <h1 style={style}>I'm Abraham Ahmed</h1>
                    <style>
                            {`
          @keyframes animate {
            0% {
              background-position: 400%;
            }
            100% {
              background-position: 0%;
            }
          }
        `}
                        </style>
                </div>

                <div className="w-full h-full col-span-4">
                </div>
                <div className="hidden lg:flex lg:gap-x-12 justify-center col-span-3 items-center">
                        {navigation.map((item) => (
                            <button
                                id="navlist"
                                key={item.name}
                                onClick={() => {
                                    if (item.id) {
                                        scrollToSection(item.id);
                                    } else if (item.href) {
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
           <div id="hero" className="w-full h-screen max-md:h-96 px-4 py-4">
        <div className="w-full h-full rounded-3xl relative overflow-hidden">
          <div id="circle1" className="blob lg:w-1/2 h-full max-md:w-9/12 -z-1 rounded-full absolute top-0 right-0 bg-gradient-to-br from-transparent via-[#666da5] to-transparent blur-3xl bg-opacity-80"></div>
          <div id="circle2" className="blob lg:w-1/2 h-full max-md:w-9/12 -z-1 rounded-full absolute bottom-0 left-0 bg-gradient-to-tl from-transparent via-[#cd506f] to-transparent blur-3xl opacity-80"></div>
          <h1 className="w-full h-full flex items-center justify-center text-3xl max-md:scale-75">Code architect and design alchemist, I shape ideas into responsive, dynamic, and elegant web solutions.</h1>
            <div className="w-72 h-12 absolute right-0 bottom-0">
                <div className="w-full h-full grid grid-cols-6 items-center justify-center">
                    <div className="w-full h-full flex justify-center items-center">
{copiedNumber && <div className="popup2 bg-white text-black px-4 py-2 rounded-full absolute -top-12">Copied!</div>}
                        <svg onClick={copyNumber} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:fill-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        {copiedEmail && <div className="popup2 bg-white text-black px-4 py-2 rounded-full absolute -top-12">Copied!</div>}
                        <svg onClick={copyEmail} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:fill-white hover:text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <a href={resume}  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:fill-white hover:text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg></a>

                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <a href="https://www.linkedin.com/in/abraham-ahmed-129374229"><svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
</svg></a>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <a href="https://github.com/21abraham"><svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg></a>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <a href="https://www.instagram.com/_abraham.py/"><svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
</svg></a>
                    </div>
                </div>
            </div>
        </div>

      </div>
            <div className="lg:hidden w-full h-full grid grid-rows-4">
                <div className="row-span-3 w-full h-full flex items-center justify-center">
                <div className="w-44 h-44 rounded-full bg-no-repeat" style={{background: `url(${myphoto})`,backgroundSize: 'cover'}}></div>
            </div>
                <div className="h-full w-full grid grid-rows-2">
                    <div className="h-full w-full flex items-center justify-center"><h1 style={style}>I'm Abraham Ahmed<br/></h1>
                    <style>
                            {`
          @keyframes animate {
            0% {
              background-position: 400%;
            }
            100% {
              background-position: 0%;
            }
          }
        `}
                        </style></div>
                    <div className="h-full w-full flex items-center justify-center">Use desktop for better experience<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>
</div>
                </div>
            </div>
            <div className="w-full h-full flex relative lg:px-64 lg:py-52 max-md:px-4 max-md:py-32">
                <div className="gap-y-2 w-full h-full">
                    <div className="w-full h-full lg:gap-x-6 max-md:gap-y-2 grid lg:grid-cols-3 max-md:grid-rows-2">
                        <div className="w-full h-full lg:col-span-2"><video
                    className="max-md:rounded-t-3xl w-[960px] h-[540px] object-cover max-md:w-full max-md:h-[270px]"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={coventry} type="video/mp4" />
                </video></div>
                        <div className="w-full h-full grid lg:grid-rows-8 max-md:grid-rows-5 max-md:text-center">
                            <div className="w-full h-full"><h1 className="tracking-widest text-2xl">WORK EXPERIENCE</h1></div>
                            <div className="w-full h-full max-md:row-span-2 lg:row-span-3"><h1 className="text-3xl">Intern at Coventry University, England June-July 2023</h1></div>
                            <div className="w-full h-full lg:row-span-2"><h1 className="text-xl">Tech Stack:<br/>.Net Framework, C# Script, Unity Engine, and AI</h1></div>
                            <div className="w-full h-full lg:row-span-2 lg:flex lg:items-end"><h1 className="text-lg">Implementation of A* algorithm for NPC AI bot</h1></div>
                        </div>
                    </div>
                </div>
        </div>
            <div className="scroll w-full h-full relative overflow-x-hidden">
                <div className="contain lg:w-[400vw] max-md:w-[4000px] h-full flex">
                    <div className="panel lg:w-screen max-md:w-[1000px] h-screen">
                 <div className="w-full h-full flex relative lg:px-28 lg:py-24 max-md:px-4 max-md:pb-16">
                <div className="gap-y-2 w-full h-full">
                    <div className="w-full h-full lg:gap-x-6 grid lg:grid-cols-6 max-md:gap-y-2 max-md:grid-rows-2">
                        <div className="w-full h-full grid lg:grid-rows-8 lg:text-right max-md:grid-rows-3 max-md:text-center">
                            <div className="w-full h-full"><h1 className="tracking-widest text-2xl">SUPER 30 PROJECT</h1></div>
                            <div className="w-full h-full lg:row-span-2 lg:items-center lg:flex lg:justify-end"><h1 className="text-3xl">Rakshak 2024</h1></div>
                            <div className="w-full h-full lg:row-span-5 lg:flex lg:items-end"><h1 className="text-xl">Tech Stack:<br/>Django Rest Framework, GeoDjango, Postgres, React, GSAP, Tailwind, Twilio, Razorpay</h1></div>
                        </div>
                        <div className="w-full h-full lg:col-span-5">
                            <video
                    className="w-full h-full object-cover max-md:w-full max-md:max-md:h-[270px] max-md:rounded-bl-3xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={super2} type="video/mp4" />
                </video>
                        </div>
                    </div>
                </div>
        </div>
                    </div>
                    <div className="panel lg:w-screen max-md:w-[1000px] h-screen">
                        <div className="w-full h-full flex relative lg:px-28 lg:py-24 max-md:px-4 max-md:pb-16">
                <div className="gap-y-2 w-full h-full">
                    <div className="w-full h-full gap-x-6 grid lg:grid-cols-6 max-md:gap-y-2 max-md:grid-rows-2">
                        <div className="w-full h-full lg:col-span-5">
                            <video
                    className="w-full h-full object-cover max-md:w-full max-md:h-[270px]"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={super1} type="video/mp4" />
                </video>
                        </div>
                        <div className="w-full h-full grid lg:grid-rows-8 lg:text-left max-md:grid-rows-3 max-md:text-center">
                            <div className="w-full h-full"><h1 className="tracking-widest text-2xl">SUPER 30 PROJECT</h1></div>
                            <div className="w-full h-full lg:row-span-2 lg:items-center lg:flex"><h1 className="text-3xl">Spark+ 2023</h1></div>
                            <div className="w-full h-full lg:row-span-5 lg:flex lg:items-end"><h1 className="text-xl">Tech Stack:<br/>Spring Boot Framework, MySQL, React, w3css, SMTP, various APIs</h1></div>
                        </div>

                    </div>
                </div>
        </div>
                    </div>
                    <div className="panel lg:w-screen max-md:w-[1000px] h-screen">
                        <div className="w-full h-full flex relative lg:px-28 lg:py-24 max-md:px-4 max-md:pb-16">
                <div className="gap-y-2 w-full h-full">
                    <div className="w-full h-full gap-x-6 grid lg:grid-cols-6 max-md:gap-y-2 max-md:grid-rows-2">
                        <div className="w-full h-full grid lg:grid-rows-8 lg:text-right max-md:grid-rows-3 max-md:text-center">
                            <div className="w-full h-full"><h1 className="tracking-widest text-2xl">MINOR PROJECT</h1></div>
                            <div className="w-full h-full lg:row-span-2 lg:items-center lg:flex lg:justify-end"><h1 className="text-3xl">MITA+ 2023</h1></div>
                            <div className="w-full h-full lg:row-span-5 lg:flex lg:items-end"><h1 className="text-xl">Tech Stack:<br/>Django, SQLite, Bootstrap, w3css, Pandas</h1></div>
                        </div>
                        <div className="w-full h-full lg:col-span-5">
                            <video
                    className="w-full h-full object-cover max-md:w-full max-md:h-[270px] max-md:rounded-br-3xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={minor} type="video/mp4" />
                </video>
                        </div>
                    </div>
                </div>
        </div>
                    </div>
                    <div className="panel lg:w-screen max-md:w-[1000px] h-screen flex lg:justify-center max-md:mt-4 items-center lg:text-3xl max-md:text-lg lg:tracking-widest">
                        <h1>Major project on LLM under development</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="max-md:w-6 max-md:h-6 lg:w-12 lg:h-12 lg:ml-4 text-gray-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>

            </div>
            </div>
            </div>
            <div id='about' className="w-full h-full flex relative lg:px-64 lg:py-52 max-md:px-4 max-md:pt-32">
                <div className="gap-y-2 w-full h-full">
                    <div className="w-full h-full lg:gap-x-6 max-md:gap-y-2 grid lg:grid-cols-3 max-md:grid-rows-2">
                        <div className="w-full h-full grid lg:grid-rows-8 max-md:grid-rows-4 max-md:text-center lg:text-right">
                            <div className="w-full h-full max-md:flex max-md:items-end max-md:justify-center"><h1 className="tracking-widest text-2xl">B. TECH DEGREE</h1></div>
                            <div className="w-full h-full lg:row-span-3 max-md:flex max-md:items-end max-md:justify-center"><h1 className="text-3xl">In Computer Engineering</h1></div>
                            <div className="w-full h-full max-md:flex max-md:items-center max-md:justify-center"><h1 className="text-xl max-md:text-sm">At MIT Academy of Engineering, Pune 2021-2025</h1></div>
                            <div className="w-full h-full lg:row-span-3 lg:flex lg:items-end lg:justify-end"><h1 className="text-lg">Member of Super 30<br/>CGPA:<br/>First Year: 9.2<br/>Second Year: 9.2<br/>Third Year: 9.2</h1></div>
                        </div>
                        <div className="w-full h-full lg:col-span-2">
                            <video
                    className="w-[960px] h-[540px] object-cover max-md:w-full max-md:h-[270px] max-md:rounded-b-3xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={mitaoe} type="video/mp4" />
                </video>
                        </div>
                    </div>
                </div>
        </div>
            <div className="cpscontain w-full h-full flex relative lg:px-64 lg:py-52 max-md:px-4 max-md:pt-32">
                <div className="gap-y-2 w-full h-full">
                    <div className="w-full h-full lg:gap-x-6 max-md:gap-y-2 grid lg:grid-cols-3 max-md:grid-rows-3">
                        <div className="w-full h-full lg:col-span-2"><video
                    className="w-[960px] h-[540px] object-cover max-md:w-full max-md:h-[270px] max-md:rounded-t-3xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={cps} type="video/mp4" />
                </video></div>
                        <div className="w-full h-full max-md:row-span-2 grid lg:grid-rows-8 max-md:grid-rows-5 max-md:text-center">
                            <div className="w-full h-full"><h1 className="tracking-widest text-2xl">HIGHER SECONDARY SCHOOL</h1></div>
                            <div className="w-full h-full lg:row-span-3"><h1 className="text-3xl">At Dharampeth Science College with IIT-HOME, Nagpur 2019-2021</h1></div>
                            <div className="w-full h-full lg:row-span-2"><h1 className="text-xl">At Centre Point School Wardhaman Nagar, Nagpur 2009-2019</h1></div>
                            <div className="w-full h-full lg:row-span-2 lg:flex lg:items-end"><h1 className="text-lg">Test Scores:<br/>HSC: 93.33%<br/>AISSE: 83.33%</h1></div>
                        </div>
                    </div>
                </div>
        </div>
            <h1 className="w-full flex justify-center text-3xl tracking-widest">Achievements</h1>
            <div className="lg:hidden py-12 w-full h-full grid grid-rows-3 gap-2">
                            <div className="w-full h-full grid grid-cols-3 gap-2">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img className="h-32" src={cisco2} alt=""/>
                                </div>
                                <div className="w-full h-full flex items-center justify-center">
                                    <img className="h-32" src={awscloud} alt=""/>
                                </div>
                                <div className="w-full h-full flex items-center justify-center">
                                    <img className="h-32" src={cisco3} alt=""/>
                                </div>
                            </div>
                            <div className="w-full h-full grid grid-cols-3 gap-2">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img className="h-32" src={django} alt=""/>
                                </div>
                                <div className="w-full h-full flex items-center justify-center">
                                    <img className="h-32" src={azure} alt=""/>
                                </div>
                                <div className="w-full h-full flex items-center justify-center">
                                    <img className="h-32" src={oracle} alt=""/>
                                </div>
                            </div>
                            <div className="w-full h-full grid grid-cols-3 gap-2">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img className="h-32" src={cisco4} alt=""/>
                                </div>
                                <div className="w-full h-full flex items-center justify-center">
                                    <img className="h-32" src={awsml} alt=""/>
                                </div>
                                <div className="w-full h-full flex items-center justify-center">
                                    <img className="h-32" src={cisco} alt=""/>
                                </div>
                            </div>
                        </div>
            <div id='achieve' className="max-md:hidden w-full h-[1000px] max-md:h-[1200px] flex relative z-[2] overflow-hidden" onMouseMove={(e) => {manageMouseMove(e)}}>
                <div ref={plane1} className="w-full h-full absolute z-[2]">
                    <div className="w-full h-full relative">
                        <img className="w-72 h-52 absolute bottom-48 left-12 rounded-3xl max-md:bottom-96 max-md:-left-60" src={azure} alt=""/>
                    <img className="w-72 h-52 absolute bottom-44 right-12 rounded-3xl max-md:bottom-96 max-md:-right-60" src={oracle} alt=""/>
                    <img className="w-72 h-52 absolute top-5 left-12 rounded-3xl max-md:top-96 max-md:-left-60" src={awsml} alt=""/>
                        <img className="w-72 h-52 absolute top-5 right-12 rounded-3xl max-md:top-96 max-md:-right-60" src={awscloud} alt=""/>
                    </div>
                </div>
                <div ref={plane2} className="w-full h-full absolute z-[1]">
                    <div className="w-full h-full relative">
                    <img className="w-72 h-52 absolute bottom-32 right-96 rounded-3xl" src={cisco} alt=""/>
                    <img className="w-72 h-52 absolute bottom-32 left-96 rounded-3xl" src={cisco4} alt=""/>
                        <img className="w-72 h-52 absolute top-24 right-96 rounded-3xl" src={cisco3} alt=""/>
                    <img className="w-72 h-52 absolute top-24 left-96 rounded-3xl" src={cisco2} alt=""/>
                    </div>
                </div>
                <div ref={plane3} className="w-full h-full absolute">
                    <div className="w-full h-full relative">
                        <img className="w-72 h-52 absolute top-96 right-[600px] max-md:right-28 max-md:top-[500px] rounded-3xl" src={django} alt=""/>
                    </div>
                </div>
            </div>
            <div className="bottom-0 lg:mt-20 flex justify-center items-center w-full h-12 bg-purple-900 px-2 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 animate-pulse">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
</svg>

                <h1 style={style} className="italic font-serif">I had strings, but now I'm free. There are no strings on me.</h1>
            <style>
                            {`
          @keyframes animate {
            0% {
              background-position: 400%;
            }
            100% {
              background-position: 0%;
            }
          }
        `}
                        </style>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2 animate-bounce">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
</svg>

            </div>
    </div>
    );
}
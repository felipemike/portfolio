import React from 'react';
import myself from '../img/eu.jpeg';

const Hero = () => {
  const social_media = [
    { name: "logo-instagram", link: "https://www.instagram.com/felipeclemente11/" },
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/felipeclemente2012/" },
    { name: "logo-GitHub", link: "https://github.com/felipemike" },
    { name: "logo-Discord", link: "https://discord.com/channels/@me" },
  ];

  return (
    <section id="home" className="h-screen flex py-10 md:flex-row-reverse flex-col items-center">
      <div className="flex-1 flex items-center justify-center">
        <img src={myself} alt="" className="md:w-8/12 shadow-2xl m-8 object-cover rounded-full" />
      </div>
      <div className="flex-1 w-full md:w-1/2 px-4 md:pr-32">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-gray-900 font-bold text-center">
            <span className="text-gray-200 md:text-6xl text-5xl">Olá!<br /></span>
            <span className="block md:text-5xl text-4xl">Sou Felipe Clemente</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-900">
            <div className="flex justify-center">Desenvolvedor Web Full Stack</div>
          </h4>
          <div className="flex justify-center mt-8">
            <a download target='_blank' href="https://drive.google.com">
              <button className="btn-primary hover:scale-105">Download CV</button>
            </a>
          </div>
          <div className="flex justify-center mt-8">
            {social_media.map(icon => (
              <div key={`${icon.name} ${Date.now()}`} className="text-gray-900 hover:scale-105 cursor-pointer text-5xl mx-4">
                <a href={icon.link} className="">
                  <ion-icon name={icon.name}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

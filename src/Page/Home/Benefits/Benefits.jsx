import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Benefits = () => {
  return (
    <div className="mt-24">
      <SectionTitle Heading="Benefits"></SectionTitle>
      <div className="hero h-[350px] md:h-[450px] bg-base-200">
        <div className="hero-content md:flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/VxTYQnG/side-view-female-musician-home-writing-song-while-playing-acoustic-guitar-23-2148890857.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Skill Development</h1>
            <p className="py-6">
              Music instrument classes provide structured and guided learning
              experiences, allowing you to develop proficiency in playing an
              instrument. Whether you choose to learn the piano, guitar, violin,
              drums, or any other instrument, regular practice and expert
              guidance will help you improve your technical skills, dexterity,
              coordination, and musicality.
            </p>
            
          </div>
        </div>
      </div>
      <div className="hero h-[350px] md:h-[450px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/6Rn6swm/front-view-young-male-sitting-with-guitar-red-wall-music-performance-musician-color-applause-play-li.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Emotional Expression</h1>
            <p className="py-6">
            Music has the power to evoke emotions and serve as a means of self-expression. When you learn to play an instrument, you gain a unique outlet to channel your feelings and communicate through music.
            </p>
            
          </div>
        </div>
      </div>
      <div className="hero h-[350px] md:h-[450px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/2vq8KSt/guy-playing-drums-stroking-with-drumsticks.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Confidence Building</h1>
            <p className="py-6">
            Mastering a musical instrument requires time, effort, and perseverance. As you progress in your music instrument classes and witness your improvement, your self-confidence grows. Performing in front of an audience, whether it's a small group or a larger gathering, can help you overcome stage fright and boost your self-esteem. 
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

import React from 'react';
import './TimeMachine.css';
import heroImage from './assets/hero.svg';
import tmLogo from './assets/tm.svg';

const TimeMachine = () => {
  return (
    <div className="time-machine">
      {/* Header section */}
      <header>
        <img src={heroImage} alt="Hero" className="hero-image" />
        <h1 className="heading">To go forward, go back.</h1>
      </header>

      {/* Main content section */}
      <main>
        <p className="description">
          For most of my life, I've been building and creating all types of things. I've
          launched startups, crafted brand identities, captured moments through my
          lens, and embarked on a handful of creative ventures. And through it all, I've
          learned that every journey forward begins with a glance back.
        </p>
        <p className="description">
          Before I start a new project, I always take the time to look in the rear view
          mirror. I study the work of those who came before me, the pioneers who
          thought to dream big and pave the way. Because I believe that to create
          something truly remarkable, you must first stand on the shoulders of giants.
        </p>
        <p className="description">
          That's the principle that inspired me to build this. It's a testament to my
          conviction that to go forward, you must first understand how we got here.
          Every selection that follows is part of that puzzle, a chapter in the story of
          creation and creativity.
        </p>
        <p className="description">
          Here, the past is not merely celebrated - it serves as a springboard for the
          future. Every creator has the power to shape the world, but to do so, they
          need to understand the context of their own journey. They need to see
          themselves as part of a lineage, a continuum of creating that stretches back
          through time.
        </p>
        <p className="description">
          So whether you're an entrepreneur charting new territory, a photographer
          capturing unseen perspectives, or a designer redefining what's possible,
          Time Machine is here to be your guide. I've curated a collection that doesn't
          just span disciplines - it spans decades. Because to create something truly
          wonderful, you must first learn from the giants who came before you.
        </p>
        <p className="description">To go forward, go back.</p>
      </main>

      {/* Footer section */}
      <footer>
        <div className="signup-form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="submit-button">submit</button>
        </div>
        <img src={tmLogo} alt="Time Machine Logo" className="tm-logo" />
      </footer>
    </div>
  );
};

export default TimeMachine;
import React from 'react';
import photo from '../images/photo.png'
import twitter_logo from '../images/twitter logo.jpeg'

const Home = () => {
    return (
      <div class = "overflow-scroll"> 
        <div class = "flex items-center justify-center mt-8 sm:mt-20">
          <img class = "h-44 sm:h-50" src={photo} alt=""/>
        </div>

        <div class = "flex items-center justify-center mt-3 text-5xl sm:text-6xl text-darkGreen">
          <p>Saad Aziz</p>
        </div>

        <div class = "flex items-center justify-center gap-x-6 mt-3 text-3xl sm:text-4xl text-darkGreen">
          <p>engineer</p>
          <p>|</p>
          <p>designer</p>
        </div>
        
        <div class = "flex justify-center max-w-mob sm:max-w-sm mx-auto mt-8 sm:mt-10 text-lg sm:text-xl">
          <p class = "text-center text-darkGreen">
            I’m a 22 year old software engineer with a passion for
            transforming ideas and sketches to pixels on screens.
          </p>
        </div>
        

          <div class = "flex flex-row justify-center text-base sm:text-xl mt-8">

              <div class = "mr-2">
                  <h2>Twitter</h2>
              </div>

              <div class = "self-center">
                <a href="https://twitter.com/_saadaziz" target="_blank" rel="noopener noreferrer">
                  <img src={twitter_logo} alt="" width="20" height="20"/>
                </a>
              </div>

              <div class = "hover:underline ml-16">
                <h2><a href="https://twitter.com/_saadaziz" target="_blank" rel="noopener noreferrer">@_saadaziz</a></h2>
              </div>

          </div>

      </div>
    );
}

export default Home;


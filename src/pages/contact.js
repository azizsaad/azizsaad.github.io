import React from 'react';
import photo from '../images/photo.png'
import twitter_logo from '../images/twitter logo.jpeg'

const Contact = () => {
  return (

    <>
      <main>

      <div class = "flex items-center justify-center mt-6">
          <img src={photo} alt="" width="75" height="75"/>
        </div>

        <div class = "flex items-center justify-center mt-2 text-3xl text-darkGreen underline">
          <h2>Contact</h2>
        </div>

      <div class = "flex flex-row justify-center mt-6 text-darkGreen">

        <div class = "grid w-64 grid-cols-2 grid-rows-2 gap-x-4 sm:gap-x-8 gap-y-4">

          <div class = "flex flex-row items-center justify-end text-sm sm:text-lg">
            <h2>Email</h2>
          </div>

          <div class = "flex flex-row items-center justify-start text-sm sm:text-lg">
            <h2>saad.saziz@gmail.com</h2>
          </div>

          <div class = "flex flex-row items-center justify-end gap-x-2 text-sm sm:text-lg">
            <h2>Twitter</h2>
            <a href="https://twitter.com/_saadaziz" target="_blank" rel="noopener noreferrer">
              <img src={twitter_logo} alt="" width="20" height="20"/>
            </a>
          </div>

          <div class = "flex flex-row items-center justify-start hover:underline text-sm sm:text-lg">
            <h2><a href="https://twitter.com/_saadaziz" target="_blank" rel="noopener noreferrer">@_saadaziz</a></h2>
          </div>

        </div>

      </div>
 
      </main>
    </>
  );
}

export default Contact;
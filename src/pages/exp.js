import React from 'react';
import photo from '../images/photo.png'
import gc_logo from '../images/gc logo.png'
import bb_logo from '../images/bb logo.png'
import itv_logo from '../images/itv logo.png'
import grade_9_logo from '../images/grade 9 tutors logo.png'
import ucl_logo from '../images/ucl.png'

const Exp = () => {
  return (
  <>

        <div class = "flex items-center justify-center mt-6">
          <img src={photo} alt="" width="75" height="75"/>
        </div>

        <div class = "flex items-center justify-center mt-2 text-3xl text-darkGreen underline">
          <h2>Experience</h2>
        </div>

        <div class = "flex flex-col justify-center text-darkGreen mt-2 sm:mt-0">

          <div class="grid grid-cols-2 grid-rows-5 mt-2 gap-y-1 sm:gap-y-3 gap-x-4 sm:gap-x-14">
            
            <div class = "flex flex-row items-center justify-end">
              <img class = "object-cover h-4 sm:h-6" src={gc_logo} alt=""/>
            </div>            

            <div class = "flex flex-col">
              <p class = "text-ls sm:text-xl">SRE Intern</p>
              <p class = "text-xs sm:text-sm italic">Core Infrastructure Team</p>
              <p class = "text-xs sm:text-sm">Oct '21 - present</p>
            </div>
            
            <div class = "flex flex-row items-center justify-end">
              <img class = "object-cover h-6 sm:h-8" img src={bb_logo} alt=""/>            
            </div>

            <div class = "flex flex-col">
              <p class = "text-ls sm:text-xl">Data Analyst Intern</p>
              <p class = "text-xs sm:text-sm italic">ESG Team</p>
              <p class = "text-xs sm:text-sm">June '21 - September '21</p>
            </div>

            <div class = "flex flex-row items-center justify-end">
              <img class = "object-cover h-8 sm:h-12" src={itv_logo} alt=""/>
              </div>

              <div class = "flex flex-col">
              <p class = "text-ls sm:text-xl">Tech Intern</p>
              <p class = "text-xs sm:text-sm italic">Platform and Distribution Team</p>
              <p class = "text-xs sm:text-sm">April '21 - June '21</p>
            </div>
            
            <div class = "flex flex-row items-center justify-end">
              <img class = "object-cover h-8 sm:h-10" src={grade_9_logo} alt=""/>
            </div>

            <div class = "flex flex-col">
              <p class = "text-ls sm:text-xl">Head of Marketing</p>
              <p class = "text-xs sm:text-sm">Jan '17 - present</p>
            </div>
            
            <div class = "flex flex-row items-center justify-end">
              <img class = "object-cover h-8 sm:h-10" src={ucl_logo} alt=""/>
            </div>
            
            <div class = "flex flex-col">
              <p class = "text-ls sm:text-xl">BEng Mechanical Engineering</p>
              <p class = "text-xs sm:text-sm">Sept '17 - May '21</p>
            </div>

          </div>

          <div class = "flex justify-center text-darkGreen text-lg">
          <p class = "underline">Technologies</p>
        </div>

        <div class = "flex flex-col justify-start place-items-center text-darkGreen">
          <p>HTML, CSS, Javascript, ReactJS</p>
          <p>Python, Go, SQL</p>
          <p>NodeJS, MySQL, Docker, Kubernetes</p>
        </div>

        </div>

        

    </>
  );
}

export default Exp;
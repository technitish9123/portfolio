import React from 'react';
import Button from '@material-ui/core/Button';
import { achievements } from '../data/userData';
import Modal11 from '../components/modal';

export default function Achievements(){
    return(
        <div>
            <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center text-white">
            <h1 class=" title-font mb-2 text-2xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-4xl">
            {" "}
           My  Achievements
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base px-5">
            Here are some of my Achievements in Cyber Security Field
          </p>
        </div>
        <div class="flex flex-wrap px-8 sm:px-0">
        {achievements.map((achievement) => (
            <div class="xl:w-1/3 md:w-1/2 p-4 text-white transform transition-all duration-300 scale-100 hover:-translate-y-5 text-white hover:text-teal">
              <div class="bg-navy p-6 rounded h-96 sm:h-80">
                <div class="h-12 flex justify-between items-center justify-center rounded-full text-teal mb-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center">
                   
                   
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    {" "}
                    <h2 class="text-xl tracking-tight font-bold mb-2">
                      {achievement.name}{" "}
                    </h2>
                    <p class="leading-relaxed text-base text-gray-300">
                      {achievement.desc}
                    </p>
                  </div>
                  <div class="flex flex-wrap text-center flex-col items-center pb-5">
                        <span class="items-center text-xs py-1 text-white-300 tracking-wide ">
                        <Button variant="contained" color="primary" onClick= ""> <Modal11 /> </Button>

                        </span>
                    </div>
                  <div class="absolute bottom-12">

                  </div>
                </div>
                   
              </div>
            </div>
          ))}

        </div>
        </div>
    </div>
    )
}
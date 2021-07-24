import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function footer(){

    return(
        <div>
            <footer class="text-grey-400 body-font">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <p class="text-sm text-gray-200 sm:border-gray-500 sm:mt-0 mt-4 hover:text-teal">
                         Designed  build by
                        <a  class="ml-1"
                            target="_blank"
                            rel="noopener noreferrer" href="www.twitter.com">@technitish</a>
                    
                    </p>
                   
                   <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                   <a href=" http://github.com/technitish9123" class=" ml-3 w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal"> <GitHubIcon /></a> 
                   <a href=" https://mobile.twitter.com/tecnical_nitish " class="ml-3 w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal"> <TwitterIcon/></a> 
                   <a href="  https://instagram.com/tecnicalnitish"   class=" ml-3  w-5 h-5 transform transition-all duration-300 hover:-translate-y-2 text-white hover:text-teal"> <InstagramIcon /></a> 
                   <a href="  https://www.linkedin.com/in/tecnicalnitish/"  class="text-gray-200 ml-3 hover:text-teal transform transition-all duration-300  hover:-translation-y-2"> <LinkedInIcon /></a> 
                       
                    </span>
                </div>
            </footer>
        </div>
    )
}
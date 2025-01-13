import backgroundImage from "./images/george-bakos-83HwuZirc-c-unsplash.jpg"
import {weekDays, hours, specials} from "./info.js";

export const HomePageLoader = function(){

    const contentDiv = document.querySelector("#content");
    const contentBodyDiv = document.createElement("div");
    const homePageDiv = document.createElement("div");
    const hoursDiv = document.createElement("div");
    const image = document.createElement("img");

    const loadHomePage = function(){

        appendBackgroundImage();    
        appendContentBody();
        appendHomePage();
        

    }

    function setAttributes(){
        image.src = backgroundImage
        contentBodyDiv.setAttribute("id", "content-body");
        homePageDiv.setAttribute("id", "home-page");
        hoursDiv.setAttribute("id", "business-hours");
    }

    function appendBackgroundImage(){
        contentDiv.appendChild(image);
    }

    function appendContentBody(){
        
        contentDiv.appendChild(contentBodyDiv);
    }

    function appendHomePage(){
        
        contentBodyDiv.appendChild(homePageDiv);
    }

    function appendHours(){
        
        const header = document.createElement("h1")
        header.textContent = "Business Hours";
        hoursDiv.appendChild(header);
        

        for(let day = 0; day < weekDays.length; day++){
            const bussinessHourDiv = document.createElement("div");
            bussinessHourDiv.classList.add("business-hour");
            
            const dayDiv = document.createElement("div");
            dayDiv.textContent = weekDays[day];
            bussinessHourDiv.appendChild(dayDiv);

            const dayHoursDiv = document.createElement("div");
            dayHoursDiv.textContent = hours[day];
            bussinessHourDiv.appendChild(dayHoursDiv);

            hoursDiv.appendChild(bussinessHourDiv);
        }
        
        homePageDiv.appendChild(hoursDiv);

    }

    function appendSpecials(){
        const header = document.createElement("h1");
        header.textContent = "Sunday Specials";
        homePageDiv.appendChild(header);

        for(let i = 0; i < specials.length; i++){
            const specialsDiv = document.createElement("h3");
            specialsDiv.textContent = specials[i];
            homePageDiv.appendChild(specialsDiv);
        }

    }

    setAttributes();
    appendSpecials();
    appendHours();
    

    return {
        loadHomePage,
    }

}




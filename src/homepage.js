import backgroundImage from "./images/george-bakos-83HwuZirc-c-unsplash.jpg"
import {weekDays, hours} from "./hours.js";

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

    setAttributes();
    appendHours();

    return {
        loadHomePage,
    }

}












/* 
<div id="content-body">
<div id="home-page">
    
    <h1>NFL Sunday Specials</h1>
    <h3>$2 Domestic Beers</h3>
    <h3>$4 Draft Beers</h3>
    <h3>$0.50 Buffalo Wings</h3>
    <h3>$15 Large Pizza</h3>
    <h3>$7 Beef on Weck</h3>
    <div id="business-hours">
        <h1>Business Hours</h1>
        <div class="business-hour">
            <div>Monday</div>
            <div>2pm-1am</div>
        </div>
        <div class="business-hour">
            <div>Tuesday</div>
            <div>2pm-1am</div>
        </div>
        <div class="business-hour">
            <div>Wednesday</div>
            <div>2pm-1am</div>
        </div>
        <div class="business-hour">
            <div>Thursday</div>
            <div>2pm-1am</div>
        </div>
        <div class="business-hour">
            <div>Friday</div>
            <div>2pm-4am</div>
        </div>
        <div class="business-hour">
            <div>Saturday</div>
            <div>11am-4am</div>
        </div>
        <div class="business-hour">
            <div>Sunday</div>
            <div>11am-1am</div>
        </div>
    </div>
    
</div>

</div> 
*/
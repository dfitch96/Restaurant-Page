
import "./styles.css";
import {HomePageLoader} from "./homepage.js";


const ScreenController = function(){

    const contentDiv = document.querySelector("#content");
    const homePageLoader = HomePageLoader();
    const homeButton = document.querySelector("#home-button");
    
    
    
    homeButton.addEventListener("click", () => {
        contentDiv.textContent = "";
        homePageLoader.loadHomePage();
    })
    document.addEventListener("load", homePageLoader.loadHomePage());

}


ScreenController();
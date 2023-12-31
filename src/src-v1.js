
/**
 * Checker
 */
document.addEventListener("DOMContentLoaded", () => {
    if(!window.jQuery){
        alert("BCloud : Error Requirements\n\njQuery is not installed. Please install first with a minimum version of 3.6");
        return false;
    }
});

/**
 * Defer & Declared
 */
$(document).ready(() => {
    const bCloudQuery       = new URLSearchParams(window.location.search);
    const bCloudQueryParam  = bCloudQuery.get("bcloud");

    bCloud.renderElement();
    bCloud.setup(bCloudQueryParam);
    bCloud.route(bCloudQuery);
});

/**
 * Init
 */
const bCloud = {
    renderElement : () => {
        $("body").append(`<div class="bcloud-panel"></div>`);
        $(".bcloud-panel").hide();
    },

    setup : (param) => {
        if(param != null){
            $(".bcloud-on-panel").hide();
            $(".bcloud-panel").show();
        }

        /**
         * Set Other Requirements
         */
        $("head").append(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`);
        $("head").append(`<link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet"/>`);
        $("head").append(`<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>`);
        $("body").append(`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>`);
    },

    route : (path) => {
        switch(path.get("loc")){
            case "home" : 
                bCloudController.home();
                break;
            case "login" : 
                bCloudController.login();
                break;

            // Null Condition
            case null : location.href = baseUrl + "/?bcloud&loc=home"; break;
            default : location.href = baseUrl + "/?bcloud&loc=home"; break;
        }
    }
}

/**
 * Controller
 */
const bCloudController = {
    home : () => {
        console.log("Hola");
    }
}

/**
 * Request
 */
const bCloudRequest = {}

/**
 * Helper
 */
const bCloudHelper = {}
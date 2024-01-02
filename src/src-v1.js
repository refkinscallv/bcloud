
/**
 * Checker
 */
document.addEventListener("DOMContentLoaded", () => {
    if(!window.jQuery){
        alert("BCloud : Error Requirements\n\njQuery is not installed. Please install first with a minimum version of 3.6");
        return false;
    } else {
        $("head").append(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">`);
        $("head").append(`<link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet"/>`);
        $("head").append(`<script src=" https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js "></script>`);
        $("head").append(`<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>`);
        $("body").append(`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>`);
    }
});

/**
 * Global scope
 */
const baseUrl       = window.location.protocol + "//" + window.location.host;
const cookieToken   = "bcloudToken";

/**
 * Defer & Declared
 */
$(document).ready(() => {
    const bcCurrentQuery    = new URLSearchParams(window.location.search);
    const bcGetQuery        = bcCurrentQuery.get("bcloud");

    bCloud.renderElement();
    bCloud.setup(bcGetQuery, bcCurrentQuery);
    bCloud.route(bcCurrentQuery);
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
    },

    route : (path) => {
        if(path.get("bcloud") != null){
            switch(path.get("loc")){
                case "home"     : bcController.home(); break;
                case "login"    : bcController.login(); break;
                case "logout"   : bcController.login(); break;
                case "notfound" : bcController.notfound(); break;
                case null       : location.href = baseUrl + "/?bcloud&loc=home"; break;
                default         : location.href = baseUrl + "/?bcloud&loc=notfound"; break;
            }
        }
    }
}

/**
 * Controller
 */
const bcController = {
    home : () => {
        if(!bcHelper.auth()){
            bcController.logout();
        } else {
        }
    },

    login : () => {
        if(bcHelper.auth()){
            location.href = baseUrl + "/?bcloud&loc=home";
        } else {
        }
    },

    logout : () => {
        Cookies.remove(cookieToken);
        location.href = baseUrl + "/?bcloud&loc=login";
    },

    notfound : () => {
        $(`.bcloud-panel`).html("Page Not Found");
    }
}

/**
 * Request
 */
const bcRequest = {
    getUserSession : (token) => {
        let authStatus  = false;
        $.ajax({
            url         : bcURL + "request/get_user_session/"+ token,
            type        : "POST",
            dataType    : "JSON",
            async       : false,
            success     : (res) => {
                if(res.status){
                    authStatus  = true;
                } else {
                    authStatus  = false;
                }
            },
            error       : () => {
                authStatus  = false;
            }
        });
        return authStatus;
    }
}

/**
 * Helper
 */
const bcHelper = {
    auth : () => {
        if(typeof Cookies.get(cookieToken) !== "undefined"){            
            return bcRequest.getUserSession(Cookies.get(cookieToken));
        } else {
            return false;
        }
    },
}
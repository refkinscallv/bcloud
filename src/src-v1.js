
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
const baseUrl   = window.location.protocol + "//" + window.location.host;

/**
 * Defer & Declared
 */
$(document).ready(() => {
    const bCloudQuery       = new URLSearchParams(window.location.search);
    const bCloudQueryParam  = bCloudQuery.get("bcloud");

    bCloud.renderElement();
    bCloud.setup(bCloudQueryParam, bCloudQuery);
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
    },

    route : (path) => {
        if(path.get("bcloud") != null){
            switch(path.get("loc")){
                case "home"     : bCloudController.home(); break;
                case "login"    : bCloudController.login(); break;
                case "logout"   : bCloudController.login(); break;
                case "notfound" : bCloudController.notfound(); break;
                case null       : location.href = baseUrl + "/?bcloud&loc=home"; break;
                default         : location.href = baseUrl + "/?bcloud&loc=notfound"; break;
            }
        }
    }
}

/**
 * Controller
 */
const bCloudController = {
    home : () => {
        if(!bCloudHelper.auth()){
            bCloudController.logout();
        } else {
            //
        }
    },

    login : () => {},

    logout : () => {
        Cookies.remove("bcloudToken");
        location.href = baseUrl + "/?bcloud&loc=login";
    },

    notfound : () => {}
}

/**
 * Request
 */
const bCloudRequest = {}

/**
 * Helper
 */
const bCloudHelper = {
    auth : () => {
        if(typeof Cookies.get("bcloudToken") !== "undefined"){
            var status = false;
            $.ajax({
                url         : bcloudUrl + "req/get_user_session",
                data        : { token : Cookies.get("bcloudToken") },
                type        : "POST",
                dataType    : "JSON",
                async       : false,
                success     : (res) => {
                    if(res.status){
                        status  = true;
                    } else {
                        status  = false;
                        Swal.fire({
                            icon: "error",
                            title: "Session",
                            html: res.message,
                            confirmButtonColor: "var(--bs-danger)"
                        });
                    }
                },
                error       : () => {
                    status  = false;
                    Swal.fire({
                        icon: "error",
                        title: "Session",
                        html: "System error (client)",
                        confirmButtonColor: "var(--bs-danger)"
                    });
                }
            });

            return status;
        } else {
            return false;
        }
    },
}
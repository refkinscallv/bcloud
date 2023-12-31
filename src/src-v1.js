/**
 * Checker
 */
document.addEventListener("DOMContentLoaded", () => {
    if(!window.jQuery){
        console.log("BCloud : Error Requirements\n\njQuery is not installed. Please install first with a minimum version of 3.6");

        var script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
        script.integrity = "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=";
        script.crossOrigin = "anonymous";
        document.title.appendChild(script);
    }

    bcloudRenderElement();
});

$(document).ready(() => {
    bcloudRenderElement();
});

function setup(){
    const bCloudQuery       = new URLSearchParams(window.location.search);
    const bCloudQueryPanel  = bCloudQuery.get('bcloud');

    if(bCloudQueryPanel != null){
        $(".bcloud-on-panel").hide();
        $(".bcloud-panel").show();
    }
}

function bcloudRenderElement(){
    $("body").append(`<div class="bcloud-panel"></div>`);
    $(".bcloud-panel").hide();
}
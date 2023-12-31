document.addEventListener("DOMContentLoaded", () => {
    if(!window.jQuery){
        console.log("BCloud : Error Requirements\n\njQuery is not installed. Please install first with a minimum version of 3.6");

        var script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
        script.integrity = "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
    }
});

if(window.jQuery){
    alert("sample");
}
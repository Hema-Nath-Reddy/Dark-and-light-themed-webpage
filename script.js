 window.alert("Hello! Please click on one of the buttons to apply a particular theme to the page");
    function loadCSS(link) {
        var head = document.head;
        var linkElement = document.createElement("link");

        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = link;

        head.appendChild(linkElement);
    }
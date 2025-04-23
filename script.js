var playButton = document.getElementById("playButton");
        var xmlContent = document.getElementById("xmlContent");
        var xmlIframe = document.getElementById("xmlIframe");
        var fr = document.getElementById("fr");

        playButton.addEventListener("click", function() {
            playButton.style.display = "none";
            document.body.style.backgroundColor = "white";
            xmlContent.style.display = "block";

            var iframeHTML = fr.getAttribute("data");
            xmlIframe.contentWindow.document.open();
            xmlIframe.contentWindow.document.write(iframeHTML);
            xmlIframe.contentWindow.document.close();
            xmlIframe.style.display = "block";
        });
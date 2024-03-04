const englishButton = document.getElementById("englishButton");
const japaneseButton = document.getElementById("japaneseButton");
const chineseButton = document.getElementById("chineseButton");
const koreanButton = document.getElementById("koreanButton");
const frenchButton = document.getElementById("frenchButton");
const germanButton = document.getElementById("germanButton");
const vietnameseButton = document.getElementById("vietnameseButton");

    englishButton.addEventListener("click", function() {
      japaneseButton.style.display = "block";
      japaneseButton.style.top = `${Math.random() * 90 + 5}%`;
      japaneseButton.style.left = `${Math.random() * 90 + 5}%`;
    });

    japaneseButton.addEventListener("click", function() {
      chineseButton.style.display = "block";
      chineseButton.style.top = `${Math.random() * 90 + 5}%`;
      chineseButton.style.left = `${Math.random() * 90 + 5}%`;
    });

    chineseButton.addEventListener("click", function() {
        koreanButton.style.display = "block";
        koreanButton.style.top = `${Math.random() * 90 + 5}%`;
        koreanButton.style.left = `${Math.random() * 90 + 5}%`;
    });

    koreanButton.addEventListener("click", function() {
        vietnameseButton.style.display = "block";
        vietnameseButton.style.top = `${Math.random() * 90 + 5}%`;
        vietnameseButton.style.left = `${Math.random() * 90 + 5}%`;
    });

    vietnameseButton.addEventListener("click", function(){
        window.location.href = "/love/love.html"
    })
    
const getButton = document.getElementById("getButton");

    getButton.addEventListener("click", function(){
        window.location.href = "/loading/index.html"
    })

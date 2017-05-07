
const candleArr = [
  "Tomato Leaf",
  "Gasoline",
  "Blueberry",
  "Baby Powder",
  "Skunk"
];
let currentCandle = candleArr[0];
let currentCandleIdx = 0;

let thumbnailList = document.getElementsByClassName("thumbnail-item");
Array.prototype.forEach.call(thumbnailList,function(el,idx) {
  el.setAttribute("data-candle-name",candleArr[idx]);
  el.addEventListener("click",function() {
    currentCandle = this.getAttribute("data-candle-name");
    activationObj[currentCandle](candleArr[idx]);
  });
});

let updateThumbnails = function() {
  thumbnailList = document.getElementsByClassName("thumbnail-item");
  Array.prototype.forEach.call(thumbnailList,function(el,idx) {
    console.log(currentCandle);
    if(el.getAttribute("data-candle-name") === currentCandle) {
      el.classList.add("active-thumbnail");
    } else {
      el.classList.remove("active-thumbnail");
    }
  });
};

let activeThumbnail;
let activationObj = {
  "Tomato Leaf": function(candleName) {
    currentCandle = candleName;
    console.log(currentCandle);
    $("body").css("background-image","url('images/candles/tomatoleaf/bg1.jpg')");
    $("#product-image").css("background-image","url('images/tl1.png')");
    $("#product-text p").text("Bring the beautiful simplicity of nature into your home with the natural freshness of the tomato leaf.");
    $("#product-title").text("Tomato Leaf");
    $("#product-title").css("color","rgb(49,165,84)");
    updateThumbnails();
  },
  "Gasoline": function(candleName) {
    currentCandle = candleName;
    console.log(currentCandle);
    $("body").css("background-image","url('')");
    $("#product-image").css("background-image","url('')");
    $("#product-text p").text("Sting the nostrils with the smell of refined petroleum to your heart's content.  Brain damage free.");
    $("#product-title").text("Gasoline");
    $("#product-title").css("color","rgb(49,165,84)");
    updateThumbnails();
  },
  "Blueberry": function() {
    console.log("blueberry activated");
  },
  "Baby Powder": function() {
    console.log("baby powder activated");
  },
  "Skunk": function() {
    console.log("skunk activated");
  },
};

activationObj[currentCandle](candleArr[0]);

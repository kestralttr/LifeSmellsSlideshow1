
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
    currentCandleIdx = candleArr.indexOf(currentCandle);
    console.log(currentCandleIdx);
    activationObj[currentCandle](candleArr[idx]);
  });
});

let updateThumbnails = function() {
  thumbnailList = document.getElementsByClassName("thumbnail-item");
  Array.prototype.forEach.call(thumbnailList,function(el,idx) {
    if(el.getAttribute("data-candle-name") === currentCandle) {
      el.classList.add("active-thumbnail");
    } else {
      el.classList.remove("active-thumbnail");
    }
  });
};


let leftArrow = document.getElementById("left-arrow-section");
leftArrow.addEventListener("click", function() {
  if(currentCandleIdx <= 0) {
    currentCandleIdx = candleArr.length - 1;
  } else {
    currentCandleIdx--;
  }
  currentCandle = candleArr[currentCandleIdx];
  activationObj[currentCandle]();
});

let rightArrow = document.getElementById("right-arrow-section");
rightArrow.addEventListener("click", function() {
  if(currentCandleIdx >= candleArr.length-1) {
    currentCandleIdx = 0;
  } else {
    currentCandleIdx++;
  }
  currentCandle = candleArr[currentCandleIdx];
  activationObj[currentCandle]();
});

let activationObj = {
  "Tomato Leaf": function() {
    $("body").css("background-image","url('images/candles/tomatoleaf/bg1.jpg')");
    $("#product-image").css("background-image","url('images/tl1.png')");
    $("#product-text p").text("Bring the beautiful simplicity of nature into your home with the natural freshness of the tomato leaf.");
    $("#product-title").text("Tomato Leaf");
    $("#product-title").css("color","rgb(49,165,84)");
    updateThumbnails();
  },
  "Gasoline": function() {
    $("body").css("background-image","url('')");
    $("#product-image").css("background-image","url('')");
    $("#product-text p").text("Sting the nostrils with the smell of refined petroleum to your heart's content.  Brain damage free.");
    $("#product-title").text("Gasoline");
    $("#product-title").css("color","orange");
    updateThumbnails();
  },
  "Blueberry": function() {
    $("body").css("background-image","url('')");
    $("#product-image").css("background-image","url('')");
    $("#product-text p").text("Earth's most famous blue fruit gave its life for this lovely candle.");
    $("#product-title").text("Blueberry");
    $("#product-title").css("color","blue");
    updateThumbnails();
  },
  "Baby Powder": function() {
    $("body").css("background-image","url('')");
    $("#product-image").css("background-image","url('')");
    $("#product-text p").text("No longer need you have another child as an excuse to keep buying baby powder.  Fill your almost empty house with its fragrance, commitment free.");
    $("#product-title").text("Baby Powder");
    $("#product-title").css("color","rgb(120,120,120)");
    updateThumbnails();
  },
  "Skunk": function() {
    $("body").css("background-image","url('')");
    $("#product-image").css("background-image","url('')");
    $("#product-text p").text("Some people dream about the scent of skunk.  Whoever you are, you're really weird, but we've got you covered.");
    $("#product-title").text("Skunk");
    $("#product-title").css("color","black");
    updateThumbnails();
  },
};

activationObj[currentCandle]();

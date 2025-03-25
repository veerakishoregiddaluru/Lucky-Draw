const pickNumberBtn = document.getElementById("picknumberbtn");

const lotterySheetContainer = document.getElementById(
  "lottery-sheet-container"
);
const resultBtn = document.getElementById("result");
const randomSound = new Audio("random.mp3");
const finalSound = new Audio("finalsound.mp3");
const gifts = [
  "₹100 cash",
  "Brush",
  "Paste",
  "Coupon",
  "Teddy",
  "Dress",
  "Phant",
  "Shirt",
  "Bike",
  "Bycle",
  "Cups",
  "TV",
  "Phone",
  "Buds",
  "Earphones",
  "Iphod",
  "SmartHome",
  "Toys",
  "Key Chain",
  "Watch",
  "Ring",
  "Bag",
  "Perfume",
  "Bottle",
  "HandBag",
  "Charger",
  "₹200 Cash",
  "Dictionary",
  "Scratch-Off Card",
  "Lucky Winner",
  "Second Chance Draw",

  "Lucky Ticket",
  "Prize Amount",
  "Winning Match",
  "Super Jackpot",
  "Lottery Sales",
  "Lottery Draw Results",

  "Unclaimed Lottery Prize",

  "Eraser",
  "Stapler",
  "Wallet",
  "Mug",
  "Flash Drive",
  "Sunglasses",
  "Desk Lamp",
  "Calculator",
  "Paperclip",
  "Lanyard",
  "Travel Mug",
  "Umbrella",
  "Ring Binder",
  "Planner",
  "Laptop",
  "Post-it Notes",
  "Highlighter",
  "Phone Case",
  "Flashlight",
  "Tumbler",
  "Cushion",
  "Mirror",
];
console.log(gifts);
pickNumberBtn.addEventListener("click", function () {
  for (let i = 1; i < 60; i++) {
    document.getElementById(i).classList.remove("winningBox");
  }
  resultBtn.textContent = "Please Wait.....";

  // setTimeout(function () {
  //   // resultBtn.textContent = "please wait...";
  //   // let randomNum = Math.random() * 60;
  //   // let drawNum = Math.floor(randomNum) + 1;
  //   // let gift = gifts[drawNum - 1];
  //   // resultBtn.textContent = `You have got ${drawNum}, You got ${gift}.`;
  //   // document.getElementById(drawNum).classList.add("winningBox");
  // }, 5000);
  let secondsCount = 0;
  const clrInterval = setInterval(() => {
    randomSound.pause;
    randomSound.currentTime = 0;
    randomSound.play();
    secondsCount = secondsCount + 1;
    const randomBox = Math.floor(Math.random() * 60) + 1;
    for (let i = 1; i < 60; i++) {
      if (i === randomBox) {
        document.getElementById(i).classList.add("highlightedBox");
      } else {
        document.getElementById(i).classList.remove("highlightedBox");
      }
    }
    if (secondsCount === 5) {
      resultBtn.textContent = "please wait...";
      let randomNum = Math.random() * 60;
      let drawNum = Math.floor(randomNum) + 1;
      let gift = gifts[drawNum - 1];
      resultBtn.textContent = `You have got ${drawNum}, You got ${gift}.`;
      document.getElementById(randomBox).classList.remove("highlightedBox");

      document.getElementById(drawNum).classList.add("winningBox");
      finalSound.pause;
      finalSound.currentTime = 0;
      finalSound.play();
      clearInterval(clrInterval);
    }
    console.log(randomBox);
  }, 1000);
});

gifts.forEach(function (value, i) {
  let boxElement = `<div class="box " id="${i + 1}">${i + 1}. ${value}</div>`;

  console.log(boxElement);

  lotterySheetContainer.insertAdjacentHTML("beforeend", boxElement);
});

var minusButtons = document.querySelectorAll(".minus-btn");
var plusButtons = document.querySelectorAll(".plus-btn");
var quantityInputs = document.getElementsByClassName("quantity-number");
var price = document.getElementsByClassName("price");

for (var i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", function(){
        var index = Array.from(plusButtons).indexOf(this);

        valueCount = parseInt(quantityInputs[index].value, 10);
        valueCount++;
        quantityInputs[index].value = valueCount;
        price[index].innerHTML = valueCount + ' $' 

        if (valueCount > 1){
            minusButtons[index].removeAttribute("disabled");
            minusButtons[index].classList.remove("disabled");
        }
        priceTotal();
    });
}

for (var i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", function(){
        var index = Array.from(minusButtons).indexOf(this);

        valueCount = parseInt(quantityInputs[index].value, 10);
        valueCount--;
        quantityInputs[index].value = valueCount;
        price[index].innerHTML = valueCount + ' $' 

        if (valueCount === 1){
            minusButtons[index].setAttribute("disabled", "disabled");
        }
        priceTotal();
    });
}


const modalBtn = document.getElementsByClassName(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const banner = document.querySelector('.banner');

const modalButtons = document.querySelectorAll(".modal-btn");
for (var i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener("click", function () {
      modalOverlay.classList.add("open-modal");
      banner.classList.add('hidden');
    });
}

//Close action
const closeAction = function () {
  modalOverlay.classList.remove("open-modal");
  banner.classList.remove('hidden');
};

//Close with X
closeBtn.addEventListener("click", closeAction);

//Close outside X
modalOverlay.addEventListener("click", closeAction);

//Close with ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    return closeAction();
  }
});

document.getElementById("whatsappButton").addEventListener("click", function() {
    var phoneNumber = '01069984421';
    window.open('https://api.whatsapp.com/send?phone=' + phoneNumber, '_blank');
});const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

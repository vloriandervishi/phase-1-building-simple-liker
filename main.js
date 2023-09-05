// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const like = document.querySelectorAll("span");
const modalMessage = document.getElementById("modal-message");
const modal = document.querySelector("#modal");
const glyph = document.querySelectorAll("span.like-glyph");
glyph.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 3000);
    mimicServerCall()
      .then((response) => {
        if (glyph[index].innerHTML === EMPTY_HEART) {
          console.log(glyph[index].innerHTML);
          glyph[index].textContent = FULL_HEART;
          glyph[index].classList.add("activated-heart");
        } else {
          console.log(glyph[index].innerHTML, false);

          glyph[index].textContent = EMPTY_HEART;
          glyph[index].classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        modalMessage.textContent = error;
      });
  });
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

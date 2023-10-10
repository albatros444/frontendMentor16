const input = document.querySelector(".formInput");
const errMessage = document.querySelector(".errMessage");
const button = document.querySelector(".button");
const form = document.querySelector(".form");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const isValid = emailRegex.test(input.value);
  console.log(isValid);
  if (!isValid) {
    errMessage.style.display = "block";
    input.style.border = "1px solid hsl(354, 76%, 60%)";

    button.style.top = "78px";
  } else {
    errMessage.style.display = "none";
    input.style.border = "1px solid hsl(222, 44%, 85%)";
    input.value = "";

    button.style.top = "45px";
  }
});

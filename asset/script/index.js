const genrateBtn = document.querySelector(".btn");
const passOutput = document.querySelector(".password");
const copyPass = document.querySelector(".material-symbols-outlined");
const textElement = document.getElementById("text");
const copyButton = document.getElementById("copy");
let password = "";

function generateRandomPassword() {
  const length = 8;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  passOutput.textContent = password;
  // console.log("Random Password:", password);
}

const copyText = (e) => {
  window.getSelection().selectAllChildren(textElement);
  document.execCommand("copy");
  alert(`Copied Password is : ${password}`);
};

copyButton.addEventListener("click", (e) => copyText(e));
genrateBtn.addEventListener("click", generateRandomPassword);

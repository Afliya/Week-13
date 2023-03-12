const fullName = document.querySelector("#full-name");
const buttonOne = document.querySelector("#button");
const output = document.querySelector("#output");
const comment = document.getElementById("comment");
const commentOutput = document.getElementById("comment-result");
const avatarResult = document.getElementById("avatar-result");
const currentTime = document.querySelector("#current_time");

function checkName(event) {
  const b = fullName.value;
  output.textContent = b[0].toUpperCase() + b.slice(1);
}

// const b = fullName.value;
// if (b !== "") {
//   output.textContent = checkName();
// } else {
//   output.textContent = "Username";
// }

function checkSpam() {
  commentOutput.textContent = comment.value.replace(/viagra|xxx/gi, "***");
}

function showTime() {
  const now = new Date();
  currentTime.textContent = now;
}

function createComment() {
  checkName();
  checkSpam();
  showTime();
  const imageurl = document.getElementById("avatar-link").value;
  avatarResult.src = imageurl;
}

button.addEventListener("click", createComment);

fullName.value = "";
avatar.value = "";
comment.value = "";

if (messages.childElementCount > 5) {
  messages.removeChild(messages.lastChild);
}



function formatDate(date) {
  if date = new date() - new Date(new Date - 1) {
    console.log('прямо сейчас');
  } else if date =  {

  }

}

console.log(formatDate());

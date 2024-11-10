const button = document.querySelector("button");
const toastes = document.querySelector(".toastes");

const toastText = ["message one", "message two", "message three"];
const classes = ["success", "failure", "random"];

button.addEventListener("click", addToast);

function addToast() {
	console.log(toastes);
	const createdDiv = document.createElement("div");
	createdDiv.innerHTML = randomToast();
	createdDiv.classList.add("toast");

	createdDiv.classList.add(`${classes[Math.floor(Math.random() * classes.length)]}`);
	toastes.appendChild(createdDiv);

	setTimeout(() => {
		createdDiv.remove();
	}, 3000);
}

function randomToast() {
	return toastText[Math.floor(Math.random() * toastText.length)];
}

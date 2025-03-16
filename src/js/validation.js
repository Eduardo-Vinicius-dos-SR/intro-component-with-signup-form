const allFields = document.getElementsByClassName("field");
const submitBtn = document.getElementById("submit-btn");
const items = document.getElementsByTagName("li");

const idToRemove = "submit-btn";

const fields = Array.from(allFields).filter((field) => field.id !== idToRemove);

submitBtn.addEventListener("click", () => {
	let allValid = true;

	fields.forEach((field, indice) => {
		if (field.value == "") {
			items[indice].classList.add("invalid");
			allValid = false;
		} else {
			items[indice].classList.remove("invalid");
		}
	});

	if (!fields[2].checkValidity()) {
		items[2].classList.add("invalid");
		allValid = false;
		alert("Looks like this is not an email");
	}

	let nameOfInvalidFields = ``;

	if (!allValid) {
		const invalidFields = Array.from(fields).filter((field, indice) => items[indice].classList.contains("invalid"));
		console.log(invalidFields);

		invalidFields.forEach((field) => {
			nameOfInvalidFields += `${field.placeholder}, `;
		});

		alert(`${nameOfInvalidFields.slice(0, -2)} cannot be invalid`);
	} else {
		fields.forEach((field) => {
			field.value = "";
		});
		alert("Form data has been sent");
	}

	nameOfInvalidFields = ``;
});

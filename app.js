let complimentData = JSON.parse(localStorage.getItem("complimentData")) || [];
let complaintData = JSON.parse(localStorage.getItem("complaintData")) || [];

let formText = "";

let isComplimentForm = true; // this is to determine if the form is for compliments or complaints, and let us determine which arrays to use. ALSO putting this so high up in scope will allow us to use this bool in conditionals throughout our code

document.querySelectorAll("button[type='submit']").forEach(function(button) {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("button clicked");

    if (e.target.id === "complimentButton") {
      isComplimentForm = true;

      console.log(document.getElementById("complimentForm"));

      formText = document.getElementById("complimentInput").value;

      document.getElementById("complimentInput").value = ""; // this is to clear the text box after submitting, I know it looks useless at first glance but it's not

      displayText(formText, isComplimentForm);

      addTextToLocalStorage(formText, isComplimentForm);
    } else {
      isComplimentForm = false;

      console.log(document.getElementById("complaintForm"));

      formText = document.getElementById("complaintInput").value;

      document.getElementById("complaintInput").value = ""; // this is to clear the text box after submitting, I know it looks useless at first glance but it's not

      displayText(formText, isComplimentForm);

      addTextToLocalStorage(formText, isComplimentForm);
    }
  });
});

function displayText(formText, isCompliment) {
  let newListItem = document.createElement("li");

  newListItem.innerHTML = formText;

  if (isCompliment) {
    document.getElementById("complimentsList").appendChild(newListItem);
  } else {
    document.getElementById("complaintsList").appendChild(newListItem);
  }
}

function addTextToLocalStorage(newText, isCompliment) {
  const newEntry = {
    text: newText
  };

  if (isCompliment) {
    complimentData.push(newEntry);
    localStorage.setItem("complimentData", JSON.stringify(complimentData));
  } else {
    complaintData.push(newEntry);
    localStorage.setItem("complaintData", JSON.stringify(complaintData));
  }
}

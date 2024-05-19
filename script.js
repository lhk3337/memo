const $save_btn = document.querySelector(".save");
const $reset_btn = document.querySelector(".reset");
const $reset_fieldset = document.getElementById("reset_fieldset");

const $tarea = document.getElementById("tarea");

$save_btn.addEventListener("click", () => {
  if ($tarea.value) {
    localStorage.setItem("textContent", $tarea.value);
    $reset_fieldset.style.cursor = "pointer";
    $reset_fieldset.disabled = false;
    alert("The content is saved.");
  } else {
    alert("Please enter the content.");
  }
});

$reset_btn.addEventListener("click", () => {
  if (localStorage.getItem("textContent")) {
    if (confirm("Would you like to delete the content?")) {
      localStorage.clear();
      $tarea.value = "";
      $reset_fieldset.disabled = true;
      $reset_fieldset.style.cursor = "default";
    }
  }
});

if (localStorage.getItem("textContent")) {
  $tarea.value = localStorage.getItem("textContent");
  $reset_fieldset.style.cursor = "pointer";
  $reset_fieldset.disabled = false;
}

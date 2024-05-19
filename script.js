const $save_btn = document.querySelector(".save");
const $reset_btn = document.querySelector(".reset");
const $reset_fieldset = document.getElementById("reset_fieldset");

const $tarea = document.getElementById("tarea");

$save_btn.addEventListener("click", () => {
  if ($tarea.value) {
    localStorage.setItem("textContent", $tarea.value);
    $reset_fieldset.style.cursor = "pointer";
    $reset_fieldset.disabled = false;
    alert("저장 되었습니다.");
  } else {
    alert("내용을 입력해주세요.");
  }
});

$reset_btn.addEventListener("click", () => {
  if (localStorage.getItem("textContent")) {
    if (confirm("삭제 하시겠습니까?")) {
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

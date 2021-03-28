const facebookBtn = document.querySelector(".social-login--facebook");

const handleClick = () => window.alert("현재 사용할 수 없습니다.");

function init() {
  facebookBtn.addEventListener("click", handleClick);
}

if (facebookBtn) {
  init();
}

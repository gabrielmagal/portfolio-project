const subtitle = document.querySelector(".subtitle");
if(subtitle){
  const text = subtitle.textContent;
  subtitle.textContent = "";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 60);
    }
  }
  typeEffect();
}

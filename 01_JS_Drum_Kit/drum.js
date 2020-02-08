function removeTransition(e) {
  if (e.propertyName !== "transform") return; // passando se não for uma transição do tipo transform
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
/* const keys = document.querySelectorAll(".key"); */
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

/* 
1 - pegando a tecla clicada
2 - pegando o KeyCode da tecla 
3 -  associar o audio (html) a tecla correspondente
4 - usar o template string pra pegar a query e pegar tbm o keyCode associado
5 - permitir que o som se repita sempre que eu repeti a tecla por várias vezes(reinicio)
6 - animação do clique
*/

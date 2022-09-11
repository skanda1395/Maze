const alpha = document.getElementById("alpha");
const beta = document.getElementById("beta");
const gamma = document.getElementById("gamma");

window.addEventListener('deviceorientation', (event) => {
    alpha.innerText = Math.floor(event.alpha);
    beta.innerText = Math.floor(event.beta);
    gamma.innerText = Math.floor(event.gamma);
});
  
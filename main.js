const alpha = document.getElementById("alpha");
const beta = document.getElementById("beta");
const gamma = document.getElementById("gamma");

window.addEventListener('deviceorientation', (event) => {
    alpha.innerText = event.alpha;
    beta.innerText = event.beta;
    gamma.innerText = event.gamma;
});
  
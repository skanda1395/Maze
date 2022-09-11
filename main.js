const alpha = document.getElementById("alpha");
const beta = document.getElementById("beta");
const gamma = document.getElementById("gamma");
const ball = document.getElementById("ball");


window.addEventListener('deviceorientation', (event) => {
    alpha.innerText = Math.floor(event.alpha);
    beta.innerText = Math.floor(event.beta);
    gamma.innerText = Math.floor(event.gamma);

    // move ball
    ball.position.top = `${beta}px`;
    ball.position.left = `${gamma}px`
});
  
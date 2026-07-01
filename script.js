function heart(event) {
    const heart = document.createElement("div")

    heart.innerText = "I love you"
    heart.classList.add("heart")

    document.body.appendChild(heart)

    heart.style.left = event.pageX + "px";
    heart.style.top = event.pageY + "px";

    setTimeout(() => {
        heart.remove();
    }, 800);
}

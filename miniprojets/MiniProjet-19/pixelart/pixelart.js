const imageDiv = document.getElementById("image");
for (let j = 0; j < pixels.length; j++) {
    for (let i = 0; i < pixels[j].length; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = colors[pixels[j][i]];
        imageDiv.appendChild(div);
    }
}
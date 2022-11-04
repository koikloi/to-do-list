const images = ["hinabe.JPG","hituji.JPG","nihonnssixyoku.JPG","omuraisu.JPG","ra-menn1.JPG","ra-menn2.JPG","ra-menn3.JPG","ra-menn4.JPG","sirann.JPG","susi.JPG","tamato.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
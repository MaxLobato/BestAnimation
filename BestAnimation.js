var guy = document.getElementById('dude');
var src = document.createAttribute('src');
src.value = "Pictures/Guy_pointing.png";
guy.setAttributeNode(src);

function Animate1() {
    setTimeout(function () {
        src.value = "Pictures/Guy_pointing.png";
    }, 1000);
    setTimeout(function () {
        src.value = "Pictures/canva-businessman-pointing-up-MAAQOXDE2so.png";
    }, 2000);

}
var framerate = setInterval(Animate1, 2000);

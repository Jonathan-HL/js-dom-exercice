// 1
let h1 = document.querySelector("h1");
h1.addEventListener("dblclick",() => {
    document.body.style.backgroundColor = "red";
    h1.style.color = "white";
});
// 2
let h3 = document.querySelector("h3");
h3.addEventListener("mouseover",() => {
    h3.style.fontSize = "small"
})
// 3
let p = document.querySelector("p");
p.addEventListener("click",() => {
    p.style.backgroundColor = "blue"
    p.style.color = "gold"
});
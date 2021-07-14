const colorsFilter = document.querySelector("#card-colors-wrapper");

colorsFilter.addEventListener("click", chooseColor);

function chooseColor(e) {
    
    const active = document.querySelector(".card-color-active");
    const itemFilter = e.target.dataset["filter"];
    const picture = document.querySelector('img[alt="Motorcycle"]');
        
    if (e.target.classList.contains("card-color")) {

        if (active){
            active.classList.remove("card-color-active");
        }

        e.target.classList.add("card-color-active");
       
        picture.setAttribute("src", `./img/motorcycle/${itemFilter}.png`);
    }
}

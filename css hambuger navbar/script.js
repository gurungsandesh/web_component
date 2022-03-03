 function slideIn() {
    const selectRightnav = document.querySelector(".nav-right");
    const selectBurger = document.querySelector(".burger");
    const navlink = document.querySelectorAll(".nav-link")

    selectBurger.addEventListener("click", function () {
        selectRightnav.classList.toggle('nav-move');
        navlink.forEach( (link, index) => {
            link.style.animation = `navlink-fade 2s ease forwards ${ index / 2 + 0.5 }s`;
        });


        // burger animation

        selectBurger.classList.toggle('toggle');
    })


}


slideIn();
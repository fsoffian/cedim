const buttons = document.querySelectorAll("[data-carrousel-button]");
const flechitaDer = document.querySelector('.carrousel-button.next');
const flechitaIzq = document.querySelector('.carrousel-button.prev');
/* const repTexto = document.querySelector */
buttons.forEach(button=> {
    button.addEventListener("click", () => {
        const offset = button.dataset.carrouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carrousel]")
            .querySelector("[data-slides]")
        
        
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})




if (window.innerWidth < 450) {
    flechitaDer.innerText = '>';
    flechitaIzq.innerText = '<';
}



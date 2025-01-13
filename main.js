const btnEl = document.querySelectorAll(".btn")
const accord = document.querySelectorAll(".second-section")

btnEl.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        console.log('clicked')
        const section = accord[index]
        section.style.display = section.style.display === "block" ? "none" : "block";


    })
});
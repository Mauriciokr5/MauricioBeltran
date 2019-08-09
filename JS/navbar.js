const mostrarMen = () => {
    const botop = document.querySelector('.botop');
    const ite = document.querySelector('.ite');
    const ops = document.querySelectorAll(".ite li");

    botop.addEventListener('click', () => {
        ite.classList.toggle("ite-activo");
        ops.forEach((link, index) => {
            console.log(index);
            if (link.style.animation) {
                link.style.animation = '';
                document.getElementById("navs").classList.remove("estadoOtro");
                document.getElementById("navs").classList.add("estadoTop");
            } else {
                link.style.animation = `iteani 0.5s ease forwards ${index/10+.5}s`;
                document.getElementById("navs").classList.add("estadoOtro");
            }

        });

        //anmimacion
        botop.classList.toggle('tog');
    });



}
mostrarMen();


window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navs").classList.add("estadoOtro");
        document.getElementById("navs").classList.remove("estadoTop");
        document.getElementById("flecha").style.display = "none";
    } else {
        document.getElementById("navs").classList.add("estadoTop");
        document.getElementById("navs").classList.remove("estadoOtro");
        document.getElementById("flecha").style.display = "inline";
    }
}
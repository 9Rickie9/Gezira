document.addEventListener("DOMContentLoaded", ()=>{console.log("Welcome to Gezira company!");});
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully");

    // Smooth Scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

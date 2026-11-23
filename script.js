/* =================================
   DENZEL A. BIACO - PORTFOLIO
   JAVASCRIPT INTERACTIONS
================================= */

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // 1. TYPING EFFECT
    const typingElement = document.querySelector(".hero h2");

    if (typingElement) {

        const messages = [
            "BSIT Student | Aspiring Web Developer",
            "Passionate About Technology",
            "Always Learning and Improving"
        ];

        let messageIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentMessage = messages[messageIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentMessage.substring(0, characterIndex + 1);

                characterIndex++;

                if (characterIndex === currentMessage.length) {
                    deleting = true;
                    setTimeout(typeEffect, 1800);
                    return;
                }

            } else {

                typingElement.textContent =
                    currentMessage.substring(0, characterIndex - 1);

                characterIndex--;

                if (characterIndex === 0) {
                    deleting = false;

                    messageIndex =
                        (messageIndex + 1) % messages.length;
                }
            }

            setTimeout(typeEffect, deleting ? 45 : 90);
        }

        typeEffect();
    }


    // 2. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(
        ".section, .info-card, .skill-card, .project-card, .journey-card, .profile-card"
    );

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
        revealElements.forEach(element => {
            element.style.opacity = "1";
        });
    } else {

        revealElements.forEach(element => {
            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        });

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            observer.observe(element);
        });
    }


    // 3. ACTIVE NAVIGATION
    const navigationLinks = document.querySelectorAll(
        ".navbar ul a"
    );

    navigationLinks.forEach(link => {

        link.addEventListener("click", function () {

            navigationLinks.forEach(item => {
                item.style.color = "";
            });

            this.style.color = "#438bff";

        });

    });


    // 4. BACK TO TOP BUTTON
    const backToTop = document.createElement("button");

    backToTop.textContent = "↑";
    backToTop.setAttribute("aria-label", "Back to top");

    backToTop.style.position = "fixed";
    backToTop.style.bottom = "25px";
    backToTop.style.right = "25px";
    backToTop.style.width = "55px";
    backToTop.style.height = "55px";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.background =
        "linear-gradient(100deg, #328aff, #8b65ff)";
    backToTop.style.color = "white";
    backToTop.style.fontSize = "30px";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "999";
    backToTop.style.boxShadow = "0 5px 25px rgba(60,120,255,.4)";

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // 5. FOOTER YEAR
    const footer = document.querySelector("footer");

    if (footer) {

        const footerText = footer.querySelector("p:last-child");

        if (footerText) {
            footerText.textContent =
                "© " + new Date().getFullYear() +
                " Denzel A. Biaco. All Rights Reserved.";
        }

    }


    // 6. CONSOLE MESSAGE
    console.log(
        "Welcome to Denzel A. Biaco's Portfolio Website!"
    );

    console.log("Portfolio successfully loaded.");

});
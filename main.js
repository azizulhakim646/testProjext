let currentLanguage = "en"; // Default language

function switchLanguage() {
    const elements = document.querySelectorAll("[data-en][data-bn]");
    const langButton = document.querySelector('.lang-btn');
    currentLanguage = currentLanguage === "en" ? "bn" : "en";

    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });

    // Update the language button text accordingly
    langButton.textContent = currentLanguage === "en" ? "বাংলা" : "English";
}

// Image Slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initialize EmailJS
emailjs.init("B_kkvf9-k7YPll2vb"); // Replace with your EmailJS User ID

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Send email using EmailJS
    emailjs.sendForm("service_9vxs0xk", "template_d7xpkfu", this)
        .then(function (response) {
            console.log("SUCCESS!", response);
            alert("Your message has been sent successfully!"); // Success message
            document.getElementById("contact-form").reset(); // Reset form after submission
        }, function (error) {
            console.log("FAILED...", error);
            alert("Oops, something went wrong. Please try again later."); // Error message
        });
});

if (typeof document !== "undefined") {
    let currentLanguage = "en"; // Default language

    function switchLanguage() {
        const elements = document.querySelectorAll("[data-en][data-bn]");
        const langButton = document.querySelector('.lang-btn');
        currentLanguage = currentLanguage === "en" ? "bn" : "en";

        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${currentLanguage}`);
        });

        langButton.textContent = currentLanguage === "en" ? "বাংলা" : "English";
    }

    // Image Slider
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.slide');
        let dots = document.querySelectorAll('.dot');
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 3000);
    }

    // Initialize EmailJS
    emailjs.init("B_kkvf9-k7YPll2vb");

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_9vxs0xk", "template_d7xpkfu", this)
            .then(function () {
                alert("Your message has been sent successfully!");
                document.getElementById("contact-form").reset();
            }, function () {
                alert("Oops, something went wrong. Please try again later.");
            });
    });
}

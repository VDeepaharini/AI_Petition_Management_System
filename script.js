function submitPetition() {

    alert(
        "Submit Petition page will be available soon."
    );

}


function aiAnalysis() {

    alert(
        "AI Analysis module will be available soon."
    );

}


function checkStatus() {

    alert(
        "Petition Status page will be available soon."
    );

}


function myPetitions() {

    alert(
        "My Petitions page will be available soon."
    );

}


function showAbout() {

    alert(
        "AI Petition Management System"
    );

}


function goHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function logoutUser() {

    window.location.href = "login.html";

}
function goDashboard() {

    window.location.href = "index.html";

}


document.addEventListener("DOMContentLoaded", function () {

    const petitionForm =
        document.getElementById("petitionForm");

    if (petitionForm) {

        petitionForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const title =
                document.getElementById("title").value;

            const category =
                document.getElementById("category").value;

            const description =
                document.getElementById("description").value;

            const location =
                document.getElementById("location").value;

            alert(
                "Petition submitted successfully!\n\n" +
                "Title: " + title + "\n" +
                "Category: " + category + "\n" +
                "Location: " + location
            );

            petitionForm.reset();

        });

    }

});
function openSubmitPage() {
    window.location.href = "submit.html";
}
document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email && password) {
                window.location.href = "index.html";
            }

        });
    }

});

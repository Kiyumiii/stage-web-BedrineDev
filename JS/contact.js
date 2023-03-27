document.getElementById("formcontact-ctt").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur = false;
    var btnctt = document.querySelector(".submit");

    var prenom = document.getElementById("prenom-ctt");
    var nom = document.getElementById("nom-ctt");
    var email = document.getElementById("email-ctt");
    var message = document.getElementById("message-ctt");

    if (!prenom.value) {
        erreur = true;
        prenom.style = "animation: 1.5s; border: 2px solid #E74C3C;";
    } else {
        prenom.style = "animation: 1.5s; border: 2px solid #48C9B0;";
    }

    if (!nom.value) {
        erreur = true;
        nom.style = "animation: 1.5s; border: 2px solid #E74C3C;";
    } else {
        nom.style = "animation: 1.5s; border: 2px solid #48C9B0;";
    }

    if (!message.value) {
        erreur = true;
        message.style = "animation: 1.5s; border: 2px solid #E74C3C;";
    } else {
        message.style = "animation: 1.5s; border: 2px solid #48C9B0;";
    }

    if (!email.value) {
        erreur = true;
        email.style = "animation: 1.5s; border: 2px solid #E74C3C;";
    } else {
        email.style = "animation: 1.5s; border: 2px solid #48C9B0;";
    }

    if (erreur == false) {
        const postContact = async function (data) {
            let response = await fetch('http://bedrinedev.com/API/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(data)
            });
            let responseData = await response.json();

            if (response.ok) {
                console.log(responseData);
                prenom.value = "";
                nom.value = "";
                email.value = "";
                message.value = "";
                prenom.style = "";
                nom.style = "";
                email.style = "";
                message.style = "";
                swal({
                  text: "Envoyé !",
                  icon: "success",
                })
            } else {
                console.log('Erreur du serveur :', response.status);
                swal("Erreur du serveur veuillez ressayer ultérieurement");
            }
        }

        postContact({
            prenom: prenom.value,
            nom: nom.value,
            email: email.value,
            message: message.value,
        })
    } else {
        swal("Veuillez compléter : votre prénom, votre nom, votre email et le message !");
    }
});

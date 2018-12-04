function getAll() {
    user.getAll()
        .then(response => response.json())
        .then(data => {
            var tuttiutenti = data.results
            disegna(tuttiutenti)
            console.log(tuttiutenti)
        })
        .catch(err => console.log(err));
}
getAll()

function disegna(user) {
    $("#listautenti").html("")
    user.forEach(function (utente) {
        var card = $("<div class='col-3 text-center mb-3 mx-5 rounded bg-dark text-white' >")
        .appendTo("#listautenti")
        var rowimmagine = $("<div class='row'><div class='col-md-12 mt-4 mb-2'><img class='img-fluid rounded-circle' src='" + utente.picture.large + "'></img></div></div>")
        rowimmagine.appendTo(card)
        var rowscritta = $("<div class='row'>")
        var colscritta = $("<div class='col-md-12 text-center'>" + utente.name.title + ' ' + utente.name.first + ' ' + utente.name.last + "</div></div>").appendTo(rowscritta)

        rowscritta.appendTo(card)
        var rowicone = $("<div class='row' ></div>")
        var coliconanome = $(" <div class='col-md-3 icona text-center text-secondary'><i class='py-5 far fa-user fa-2x'></i></div>")
        coliconanome.hover(function () {
            $(this).toggleClass("text-success")
            $(this).toggleClass("text-secondary")
        })

        var coliconaindirizzo = $(" <div class='col-md-3 icona text-center text-secondary'><i class='py-5 far fa-address-card fa-2x'></i></div>")
        coliconaindirizzo.hover(function () {
            $(this).toggleClass("text-success")
            $(this).toggleClass("text-secondary")
            colscritta.html("<div class='col-md-12 text-center'>" + utente.location.street + ' ' + utente.location.city + ' ' + utente.location.state + "</div></div>")
        }, function () {
            colscritta.html(utente.name.title + ' ' + utente.name.first + ' ' + utente.name.last)
            $(this).toggleClass("text-success")
            $(this).toggleClass("text-secondary")
        })
        var coliconaemail = $(" <div class='col-md-3 icona text-center text-secondary'><i class='py-5 fas fa-at fa-2x'></i></div>")
        coliconaemail.hover(function () {
            $(this).toggleClass("text-success")
            $(this).toggleClass("text-secondary")
            colscritta.html("<div class='col-md-12 text-center'>" + utente.email + "</div></div>")
        }, function () {
            colscritta.html(utente.name.title + ' ' + utente.name.first + ' ' + utente.name.last)
            $(this).toggleClass("text-success")
            $(this).toggleClass("text-secondary")
        })
        var coliconatag = $(" <div class='col-md-3 icona text-center text-secondary'><i class='py-5 fas fa-user-tag fa-2x'></i></div>")
        coliconatag.hover(function () {
            $(this).toggleClass("text-success")
            $(this).toggleClass("text-secondary")
            colscritta.html("<div class='col-md-12 text-center'>" + utente.login.username + "</div></div>")
        }, function () {
            colscritta.html(utente.name.title + ' ' + utente.name.first + ' ' + utente.name.last)
            $(this).toggleClass("text-success")
            $(this).toggleClass("text-secondary")
        })

        rowicone.appendTo(card)
        coliconanome.appendTo(rowicone)
        coliconaindirizzo.appendTo(rowicone)
        coliconaemail.appendTo(rowicone)
        coliconatag.appendTo(rowicone)

    })
    
}


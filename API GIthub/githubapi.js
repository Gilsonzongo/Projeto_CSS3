$(document).ready(function () {

    var user = ''

    $("#form").submit(function (evento) {
        evento.preentDefault()

        var username = $("#username").val()

        searchUsers(username)
    })

    $("#username").change(() => {
        var username = $("#username").val()

        searchUsers(username)

    })

    function searchUsers(username) {

        $("#result").empty()

        $.get("https://api.github.com/search/users?q=" + username + "+in:user&per_page=100", function (data) {
            console.log(data)


            data.items.forEach(item => {

               user = '<a target="_blank" href="${item.html_url}"> <img class="img-thumbnail ml-4" width="100" height="100"src="${item.avatar_url}"/></a>'

                $("#result").append(user)

            });


        })

    }
})



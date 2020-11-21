// arrayImg = [
//     "img/avatar_1.jpg",
//     "img/avatar_2.jpg",
//     "img/avatar_3.jpg",
//     "img/avatar_4.jpg",
//     "img/avatar_5.jpg",
//     "img/avatar_6.jpg",
//     "img/avatar_7.jpg",
//     "img/avatar_8.jpg"
// ];
//
// arrayNames = [
//     "Michele",
//     "Fabio",
//     "Samuele",
//     "Alessio",
//     "Antonio",
//     "Luisa",
//     "Carlo",
//     "Fabrizio"
// ];

const root = new Vue ({
    el: ".root",
    data: {
        myUsername: {
            image: "img/avatar_io.jpg",
            name: "Nome Utente",
            userMessage:"",
            messages: []
        },
        userList: [
        {
            image: "img/avatar_1.jpg",
            name: "Michele",
            lastAccess: "Ultimo accesso oggi alle",
            messages: "pippo"
        },
        {
            image: "img/avatar_2.jpg",
            name: "Fabio",
            lastAccess: "Ultimo accesso oggi alle",
            messages: "formaggino"
        },
        {
            image: "img/avatar_3.jpg",
            name: "Samuele",
            lastAccess: "Ultimo accesso oggi alle",
            messages: "caio"
        },
        {
            image: "img/avatar_4.jpg",
            name: "Alessio",
            lastAccess: "Ultimo accesso oggi alle",
            messages: "sempronio"
        }
    ]
    },
    methods: {
        sendMessage: function(input){
            this.myUsername.messages.push(input);
        }

    }
})

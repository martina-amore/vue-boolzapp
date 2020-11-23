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
            userMessage:""
        },
        userList: [
        {
            image: "img/avatar_1.jpg",
            name: "Michele",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
            {
                sent: ["prova inviato Michele", "altra prova inviato"],
                received: ["prova ricevuto Michele", "altra prova ricevuto"],
                date: ""
            }
        ],
            selected: true
        },
        {
            image: "img/avatar_2.jpg",
            name: "Fabio",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
                {
                sent: ["prova inviato Fabio"],
                received: ["prova ricevuto Fabio"],
                date: ""
                }
        ],
            selected: false
        },
        {
            image: "img/avatar_3.jpg",
            name: "Samuele",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
                {
                sent: ["prova inviato Samuele"],
                received: ["prova ricevuto Samuele"],
                date: ""
                }
        ],
            selected: false
        },
        {
            image: "img/avatar_4.jpg",
            name: "Alessio",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
                {
                sent: ["prova inviato Alessio"],
                received: ["prova ricevuto Alessio"],
                date: ""
                }
        ],
            selected: false
        }
    ],
        currentIndex: 0,
    },
    methods: {
        sendMessage: function(input, index){
            // this.userList[index].messages[0].sent.push(input);
            // this.myUsername.messages.push(input);
        },
        changeUserActive: function(index){
            this.currentIndex = index;
            this.userList[index].selected = true;
            // document.getElementById("prova").classList.add("active");
            // document.getElementById("prova").nextSibling.classList.remove("active");
            // this.userList[index].selected = true;
            for (var i = 0; i < this.userList.length; i++) {
                if (this.userList[index].selected == false ) {
                    this.currentIndex = index;
                }
            }
        }
    }
})

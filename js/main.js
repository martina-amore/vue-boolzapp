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
                sent: ['prova inviato Michele'],
                received: ["prova ricevuto Michele", "altra prova ricevuto"],
                date: "23/11/2020 15:12"
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
                date: "23/11/2020 15:12"
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
                date: "23/11/2020 15:12"
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
                    date: "23/11/2020 15:12"
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
        },
        changeUserActive: function(index){
            this.currentIndex = index;
        },
        changeColor: function(){
            this.userList.forEach((element) => {
                element.selected = false;
            });
            this.userList[this.currentIndex].selected = true;
            }
        }

})

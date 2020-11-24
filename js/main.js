const SENT_STATUS = "sent";
const RECEIVED_STATUS = "received";

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
                text: "prova inviato Michele",
                date: "23/11/2020 15:12",
                type: SENT_STATUS
            },
            {
                text: "prova ricevuto Michele",
                date: "23/11/2020 15:12",
                type: RECEIVED_STATUS
            },
            {
                text: "prova ricevuto Michele",
                date: "23/11/2020 15:12",
                type: RECEIVED_STATUS
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
                text: "prova inviato Fabio",
                date: "23/11/2020 15:12",
                type: SENT_STATUS
            },
            {
                text: "prova inviato Fabio",
                date: "23/11/2020 15:12",
                type: SENT_STATUS
            },
            {
                text: "prova ricevuto Fabio",
                date: "23/11/2020 15:12",
                type: RECEIVED_STATUS
            },
        ],
            selected: false
        },
        {
            image: "img/avatar_3.jpg",
            name: "Samuele",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
                {
                    text: "prova ricevuto Samuele",
                    date: "23/11/2020 15:12",
                    type: RECEIVED_STATUS
                },
                {
                    text: "prova inviato Samuele",
                    date: "23/11/2020 15:12",
                    type: SENT_STATUS
                },
                {
                    text: "prova inviato Samuele",
                    date: "23/11/2020 15:12",
                    type: RECEIVED_STATUS
                },
        ],
            selected: false
        },
        {
            image: "img/avatar_4.jpg",
            name: "Alessio",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
                {
                    text: "prova inviato Alessio",
                    date: "23/11/2020 15:12",
                    type: SENT_STATUS
                },
                {
                    text: "prova inviato Alessio",
                    date: "23/11/2020 15:12",
                    type: SENT_STATUS
                },
                {
                    text: "prova ricevuto Alessio",
                    date: "23/11/2020 15:12",
                    type: RECEIVED_STATUS
                },
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

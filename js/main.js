const SENT_STATUS = "sent";
const RECEIVED_STATUS = "received";
const DATE = new Date();

const root = new Vue ({
    el: ".root",
    data: {
        myUsername: {
            image: "img/avatar_io.jpg",
            name: "Martina",
            userMessage:"",
            date: "prova data"
        },
        userList: [
        {
            image: "img/avatar_1.jpg",
            name: "Michele",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
            {
                text: "Puoi prendere il pane?",
                date: "23/11/2020 15:12:35",
                type: SENT_STATUS
            },
            {
                text: "Certo",
                date: "23/11/2020 15:12:37",
                type: RECEIVED_STATUS
            },
            {
                text: "Quanto ne serve?",
                date: "23/11/2020 15:12:49",
                type: RECEIVED_STATUS
            }
        ],
            selected: true,
            researched: true
        },
        {
            image: "img/avatar_2.jpg",
            name: "Fabio",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
            {
                text: "prova inviato Fabio",
                date: "23/11/2020 15:12:35",
                type: SENT_STATUS
            },
            {
                text: "prova inviato Fabio",
                date: "23/11/2020 15:12:37",
                type: SENT_STATUS
            },
            {
                text: "prova ricevuto Fabio",
                date: "23/11/2020 15:12:49",
                type: RECEIVED_STATUS
            },
        ],
            selected: false,
            researched: true
        },
        {
            image: "img/avatar_3.jpg",
            name: "Samuele",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
                {
                    text: "prova ricevuto Samuele",
                    date: "23/11/2020 15:12:35",
                    type: RECEIVED_STATUS
                },
                {
                    text: "prova inviato Samuele",
                    date: "23/11/2020 15:12:37",
                    type: SENT_STATUS
                },
                {
                    text: "prova inviato Samuele",
                    date: "23/11/2020 15:12:49",
                    type: RECEIVED_STATUS
                },
        ],
            selected: false,
            researched: true
        },
        {
            image: "img/avatar_4.jpg",
            name: "Alessio",
            lastAccess: "Ultimo accesso oggi alle",
            messages: [
                {
                    text: "prova inviato Alessio",
                    date: "23/11/2020 15:12:35",
                    type: SENT_STATUS
                },
                {
                    text: "prova inviato Alessio",
                    date: "23/11/2020 15:12:37",
                    type: SENT_STATUS
                },
                {
                    text: "prova ricevuto Alessio",
                    date: "23/11/2020 15:12:49",
                    type: RECEIVED_STATUS
                },
        ],
            selected: false,
            researched: true
        }
    ],
        currentIndex: 0,
        searchUser: "",
    },
    methods: {
        sendMessage: function(index){
            this.userList[index].messages.push(
                {text: this.myUsername.userMessage,
                 date: this.getCurrentDate(),
                 type: "sent"}
            );
            this.autoAnswer(index);
        },
        changeUserActive: function(index){
            this.currentIndex = index;
        },
        changeColor: function(){
            this.userList.forEach((element) => {
                element.selected = false;
            });
            this.userList[this.currentIndex].selected = true;
        },
        autoAnswer: function(index) {
            setTimeout(
                () => {
                let myTime = this.getCurrentDate()
                this.userList[index].messages.push(
                    {text: "prova risposta automatica",
                     date: this.getCurrentDate(),
                     type: "received"});
            }, 3000);
        },
        getCurrentDate: function() {
            let month = DATE.getUTCMonth() + 1;
            let day = DATE.getUTCDate();
            let year = DATE.getUTCFullYear();
            let hours = DATE.getHours();
            let minutes = DATE.getMinutes();
            let seconds = DATE.getSeconds();
            let newdate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
            return newdate;
        },
        filterUser: function () {
            let a = this;
            this.userList.forEach(function (element) {
                if (!element.name.toLowerCase().includes(a.searchUser.toLowerCase())) {
                    element.researched = false;
                }
                else {
                    element.researched = true;
                }
            }
        );
        }
    }
})

const Messagerie = {
    props:['socket'],
    template:`

    <ul ref="messages" id="messages">
        <li  v-for="message in chatMessages">
         {{ message }}
        </li>
    </ul>
       
       
    <form id="form" @submit.prevent = "submitForm"> 
        <div id="barre-message">
            <input ref="input" placeholder="type here..." type="text" v-model="message"/>
            <button type="submit">Send</button>
        </div>
    </form>`,

    data(){
        return  {
            message : '',
            chatMessages : [],
        }
    },
    created(){
        this.socket.on('chat message', (message) => {
            this.add(message)
            window.scrollTo(0, document.body.scrollHeight);
        })
    },
    methods :{
        add(message){
            this.chatMessages.push(message);
        },
        submitForm() {
            if (this.message) {
                this.socket.emit('chat message', this.message);
                this.message = '';
            }
        }
    }
    }

export default Messagerie;
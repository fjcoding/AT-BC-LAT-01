var Participant = function (name) {
    this.name = name;
    this.chatroom = null;
};

Participant.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(from.name + ' to ' + this.name + ': ' + message);
    }
};

var Chatroom = function () {
    var participants = {};

    return {
        register: function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },

        send: function (message, from, to) {
            var key;
            if (to) {                      // single message
                to.receive(message, from);
            } else {                       // broadcast message
                for (key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};

function run () {

    var mia = new Participant('Mia');
    var john = new Participant('John');
    var paul = new Participant('Paul');
    var david = new Participant('David');

    var chatroom = new Chatroom();
    chatroom.register(mia);
    chatroom.register(john);
    chatroom.register(paul);
    chatroom.register(david);

    mia.send('All you need is love.');
    mia.send('I love you John.');
    john.send('Hey, no need to broadcast', mia);
    paul.send('Ha, I heard that!');
    david.send('Paul, what do you think?', paul);
}
run ();
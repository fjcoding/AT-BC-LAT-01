function Mortgage(name) {
    this.name = name;
}

Mortgage.prototype = {

    applyFor: function (amount) {
        var result = 'approved';
        if (!new Bank().verify(this.name, amount)) {
            result = 'denied';
        } else if (!new Credit().get(this.name)) {
            result = 'denied';
        } else if (!new Past().check(this.name)) {
            result = 'denied';
        }
        return this.name + ' has been ' + result + ' for a ' + amount + ' mortgage';
    }
};

function Bank() {
    this.verify = function () {
        return true;
    };
}

function Credit() {
    this.get = function () {
        return true;
    };
}

function Past() {
    this.check = function () {
        return true;
    };
}

export function run() {
    var mortgage = new Mortgage('Joan Templeton');
    var result = mortgage.applyFor('$100,000');

    console.log(result);
}
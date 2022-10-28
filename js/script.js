"use strict";
class Smartphone {
    constructor() {
        this.credit = 0;
        this.numberCall = 0;
        this.totalCallMinutes = 0;
    }
    setCreditRecharge(param) {
        return this.credit += param;
    }
    ;
    setCall(minutes) {
        if (this.credit >= minutes * 0.2) {
            this.numberCall++;
            this.totalCallMinutes += minutes;
            this.credit -= minutes * 0.2;
        }
        else {
            alert(`Il credito per effettuare la chiamata, è insufficiente. Hai solo ${this.credit}€ residuo`);
        }
    }
    ;
    getNumber404() {
        console.log(`Il tuo credito residuo è ${this.credit}€`);
    }
    ;
    getInfoCall() {
        console.log(`Hai effettuato ${this.numberCall} chiamate della durata totale di ${this.totalCallMinutes} minuti`);
    }
    ;
    setResetCall() {
        this.numberCall = 0;
        this.totalCallMinutes = 0;
        console.log('Il numero e la durata totale delle chiamate effettuate è stata azzerata.');
    }
    ;
}
class Xiaomi extends Smartphone {
    constructor() {
        super(...arguments);
        this.credit = 50;
    }
    setCall(minutes) {
        if (this.credit >= minutes * 0.15) {
            this.numberCall++;
            this.totalCallMinutes += minutes;
            this.credit -= minutes * 0.15;
        }
        else {
            alert(`Il credito per effettuare la chiamata, è insufficiente. Hai solo ${this.credit}€ residuo`);
        }
    }
    ;
}
class Samsung extends Smartphone {
}
class Iphone extends Smartphone {
    setCall(minutes) {
        if (this.credit + 10 >= minutes * 0.25) {
            this.numberCall++;
            this.totalCallMinutes += minutes;
            this.credit -= minutes * 0.25;
        }
        else {
            alert(`Il credito per effettuare la chiamata, è insufficiente. Hai solo ${this.credit}€ residuo. Ti ricordiamo che ti offriamo l'opportunità di andare in negativo fino a 10€`);
        }
    }
    ;
}
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
let xiaomi1 = new Xiaomi();
let user1 = new User('Luca', 'Senatore');
user1.smartphone = xiaomi1;
let samsung1 = new Samsung();
let user2 = new User('Persona', 'Normale');
user1.smartphone = samsung1;
let iphone1 = new Xiaomi();
let user3 = new User('Ipersona', 'Inormale');
user1.smartphone = iphone1;
let btn10 = document.querySelector('button:nth-of-type(1)');
btn10.addEventListener('click', function add10() {
    var _a, _b;
    (_a = user1.smartphone) === null || _a === void 0 ? void 0 : _a.setCreditRecharge(10);
    let p = document.querySelector('p');
    p.innerHTML = `Il tuo credito attuale è di ${(_b = user1.smartphone) === null || _b === void 0 ? void 0 : _b.credit} euro.`;
});
let btn20 = document.querySelector('button:nth-of-type(2)');
btn20.addEventListener('click', function add20() {
    var _a, _b;
    (_a = user1.smartphone) === null || _a === void 0 ? void 0 : _a.setCreditRecharge(20);
    let p = document.querySelector('p');
    p.innerHTML = `Il tuo credito attuale è di ${(_b = user1.smartphone) === null || _b === void 0 ? void 0 : _b.credit} euro.`;
});
let btn50 = document.querySelector('button:nth-of-type(3)');
btn50.addEventListener('click', function add50() {
    var _a, _b;
    (_a = user1.smartphone) === null || _a === void 0 ? void 0 : _a.setCreditRecharge(50);
    let p = document.querySelector('p');
    p.innerHTML = `Il tuo credito attuale è di ${(_b = user1.smartphone) === null || _b === void 0 ? void 0 : _b.credit} euro.`;
});
let btnCredit = document.querySelector('button:nth-of-type(4)');
btnCredit.addEventListener('click', function credit() {
    var _a;
    let p = document.querySelector('p');
    p.innerHTML = `Il tuo credito attuale è di ${(_a = user1.smartphone) === null || _a === void 0 ? void 0 : _a.credit} euro.`;
});
let btnInfoCall = document.querySelector('button:nth-of-type(5)');
btnInfoCall.addEventListener('click', function infoCall() {
    var _a, _b;
    let p = document.querySelector('p');
    p.innerHTML = `Hai effettuato ${(_a = user1.smartphone) === null || _a === void 0 ? void 0 : _a.numberCall} chiamate della durata totale di ${(_b = user1.smartphone) === null || _b === void 0 ? void 0 : _b.totalCallMinutes} minuti`;
});

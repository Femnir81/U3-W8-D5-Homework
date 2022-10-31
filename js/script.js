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
    setCall() {
        let randomCall = Math.floor((Math.random() * 10) + 1);
        if (this.credit >= Number((randomCall * 0.2).toFixed(2))) {
            this.numberCall++;
            this.totalCallMinutes += randomCall;
            this.credit -= Number((randomCall * 0.2).toFixed(2));
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
    setCall() {
        let randomCall = Math.floor((Math.random() * 10) + 1);
        if (this.credit >= Number((randomCall * 0.15).toFixed(2))) {
            this.numberCall++;
            this.totalCallMinutes += randomCall;
            this.credit -= Number((randomCall * 0.15).toFixed(2));
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
    setCall() {
        let randomCall = Math.floor((Math.random() * 10) + 1);
        if (this.credit + 10 >= Number((randomCall * 0.25).toFixed(2))) {
            this.numberCall++;
            this.totalCallMinutes += randomCall;
            this.credit -= Number((randomCall * 0.25).toFixed(2));
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
user2.smartphone = samsung1;
let iphone1 = new Iphone();
let user3 = new User('Ipersona', 'Inormale');
user3.smartphone = iphone1;
document.addEventListener("DOMContentLoaded", () => {
    displaySmartphone();
});
let arrUser = [user1, user2, user3];
function displaySmartphone() {
    let divSmartphones = document.querySelector('.smartphones');
    for (let objUser of arrUser) {
        let divSmartphone = document.createElement('div');
        divSmartphone.setAttribute('class', 'smartphone');
        let title = document.createElement('h2');
        title.innerHTML = `Cellulare di ${objUser.name} ${objUser.surname}`;
        let pInfo = document.createElement('p');
        let divButton = document.createElement('div');
        divButton.setAttribute('class', 'divButton');
        // Settaggio Bottone 10 euro
        let btn10e = document.createElement('button');
        btn10e.setAttribute('type', 'button');
        btn10e.innerHTML = '10€';
        btn10e.addEventListener('click', () => {
            var _a, _b;
            (_a = objUser.smartphone) === null || _a === void 0 ? void 0 : _a.setCreditRecharge(10);
            pInfo.innerHTML = `Il tuo credito attuale è di ${(_b = objUser.smartphone) === null || _b === void 0 ? void 0 : _b.credit} euro.`;
        });
        // Settaggio Bottone 20 euro
        let btn20e = document.createElement('button');
        btn20e.setAttribute('type', 'button');
        btn20e.innerHTML = '20€';
        btn20e.addEventListener('click', () => {
            var _a, _b;
            (_a = objUser.smartphone) === null || _a === void 0 ? void 0 : _a.setCreditRecharge(20);
            pInfo.innerHTML = `Il tuo credito attuale è di ${(_b = objUser.smartphone) === null || _b === void 0 ? void 0 : _b.credit} euro.`;
        });
        // Settaggio Bottone 50 euro
        let btn50e = document.createElement('button');
        btn50e.setAttribute('type', 'button');
        btn50e.innerHTML = '50€';
        btn50e.addEventListener('click', () => {
            var _a, _b;
            (_a = objUser.smartphone) === null || _a === void 0 ? void 0 : _a.setCreditRecharge(50);
            pInfo.innerHTML = `Il tuo credito attuale è di ${(_b = objUser.smartphone) === null || _b === void 0 ? void 0 : _b.credit} euro.`;
        });
        // Settaggio Bottone Chiamata
        let btnCall = document.createElement('button');
        btnCall.setAttribute('type', 'button');
        btnCall.innerHTML = 'Call';
        btnCall.addEventListener('click', () => {
            var _a, _b;
            (_a = objUser.smartphone) === null || _a === void 0 ? void 0 : _a.setCall();
            pInfo.innerHTML = `Il tuo credito residuo è di ${(_b = objUser.smartphone) === null || _b === void 0 ? void 0 : _b.credit} euro.`;
        });
        // Settaggio Bottone Credito
        let btnInfoCredit = document.createElement('button');
        btnInfoCredit.setAttribute('type', 'button');
        btnInfoCredit.innerHTML = 'Info Credit';
        btnInfoCredit.addEventListener('click', () => {
            var _a;
            pInfo.innerHTML = `Il tuo credito attuale è di ${(_a = objUser.smartphone) === null || _a === void 0 ? void 0 : _a.credit} euro.`;
        });
        // Settaggio Bottone Info Call
        let btnInfoCall = document.createElement('button');
        btnInfoCall.setAttribute('type', 'button');
        btnInfoCall.innerHTML = 'Info Call';
        btnInfoCall.addEventListener('click', () => {
            var _a, _b;
            pInfo.innerHTML = `Hai effettuato ${(_a = objUser.smartphone) === null || _a === void 0 ? void 0 : _a.numberCall} chiamate della durata totale di ${(_b = objUser.smartphone) === null || _b === void 0 ? void 0 : _b.totalCallMinutes} minuti`;
        });
        // Settaggio Bottone Reset Call
        let btnResetCall = document.createElement('button');
        btnResetCall.setAttribute('type', 'button');
        btnResetCall.innerHTML = 'Reset Call';
        btnResetCall.addEventListener('click', () => {
            var _a, _b, _c;
            (_a = objUser.smartphone) === null || _a === void 0 ? void 0 : _a.setResetCall();
            pInfo.innerHTML = `Hai effettuato ${(_b = objUser.smartphone) === null || _b === void 0 ? void 0 : _b.numberCall} chiamate della durata totale di ${(_c = objUser.smartphone) === null || _c === void 0 ? void 0 : _c.totalCallMinutes} minuti`;
        });
        // Appendo i panni
        divButton.append(btn10e, btn20e, btn50e, btnCall, btnInfoCredit, btnInfoCall, btnResetCall);
        divSmartphone.append(title, pInfo, divButton);
        divSmartphones.append(divSmartphone);
    }
}

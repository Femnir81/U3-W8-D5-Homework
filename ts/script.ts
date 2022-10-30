interface Ismartphone {
    credit: number;
    numberCall: number;
    totalCallMinutes: number;
    setCreditRecharge(param:number): number;
    setCall(): void;
    getNumber404(): void;
    getInfoCall(): void;
    setResetCall(): void;
}

abstract class Smartphone implements Ismartphone {
    credit: number = 0;
    numberCall: number = 0;
    totalCallMinutes: number = 0;

    setCreditRecharge(param:number): number {
        return this.credit += param;
    };

    setCall(): void {
        let randomCall = Math.floor((Math.random() * 10) + 1)
        if (this.credit >= randomCall * 0.2) {
            this.numberCall++;
            this.totalCallMinutes += randomCall;
            this.credit -= randomCall * 0.2;
        } else {
            alert(`Il credito per effettuare la chiamata, è insufficiente. Hai solo ${this.credit}€ residuo`);
        }
    };

    getNumber404(): void {
        console.log(`Il tuo credito residuo è ${this.credit}€`);
    };

    getInfoCall(): void {
        console.log(`Hai effettuato ${this.numberCall} chiamate della durata totale di ${this.totalCallMinutes} minuti`);
    };

    setResetCall(): void{
        this.numberCall = 0;
        this.totalCallMinutes = 0;
        console.log('Il numero e la durata totale delle chiamate effettuate è stata azzerata.');
    };
}

class Xiaomi extends Smartphone {
    credit: number = 50;
    setCall(): void {
        let randomCall = Math.floor((Math.random() * 10) + 1)
        if (this.credit >= randomCall * 0.15) {
            this.numberCall++;
            this.totalCallMinutes += randomCall;
            this.credit -= randomCall * 0.15;
        } else {
            alert(`Il credito per effettuare la chiamata, è insufficiente. Hai solo ${this.credit}€ residuo`);
        }
    };
}

class Samsung extends Smartphone {
    
}

class Iphone extends Smartphone {
    setCall(): void {
        let randomCall = Math.floor((Math.random() * 10) + 1)
        if (this.credit + 10>= randomCall * 0.25) {
            this.numberCall++;
            this.totalCallMinutes += randomCall;
            this.credit -= randomCall * 0.25;
        } else {
            alert(`Il credito per effettuare la chiamata, è insufficiente. Hai solo ${this.credit}€ residuo. Ti ricordiamo che ti offriamo l'opportunità di andare in negativo fino a 10€`);
        }
    };
}

class User {
    name: string;
    surname: string;
    smartphone?: (Smartphone)
    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname
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
    displaySmartphone()
});


let arrUser: User[] = [user1, user2, user3];

function displaySmartphone() {
    let divSmartphones = document.querySelector('.smartphones') as HTMLDivElement;
    for (let objUser of arrUser) {
        let divSmartphone = document.createElement('div') as HTMLDivElement;
        divSmartphone.setAttribute('class', 'smartphone')
        let title = document.createElement('h2') as HTMLHeadingElement;
        title.innerHTML = `Cellulare di ${objUser.name} ${objUser.surname}`;
        let pInfo = document.createElement('p') as HTMLParagraphElement;
        let divButton = document.createElement('div') as HTMLDivElement;
        divButton.setAttribute('class', 'divButton');
        // Settaggio Bottone 10 euro
        let btn10e = document.createElement('button') as HTMLButtonElement;
        btn10e.setAttribute('type', 'button');
        btn10e.innerHTML = '10€';
        btn10e.addEventListener('click', () => {
            objUser.smartphone?.setCreditRecharge(10);
            pInfo.innerHTML = `Il tuo credito attuale è di ${objUser.smartphone?.credit} euro.`
        })
        // Settaggio Bottone 20 euro
        let btn20e = document.createElement('button') as HTMLButtonElement;
        btn20e.setAttribute('type', 'button');
        btn20e.innerHTML = '20€';
        btn20e.addEventListener('click', () => {
            objUser.smartphone?.setCreditRecharge(20);
            pInfo.innerHTML = `Il tuo credito attuale è di ${objUser.smartphone?.credit} euro.`
        })
        // Settaggio Bottone 50 euro
        let btn50e = document.createElement('button') as HTMLButtonElement;
        btn50e.setAttribute('type', 'button');
        btn50e.innerHTML = '50€';
        btn50e.addEventListener('click', () => {
            objUser.smartphone?.setCreditRecharge(50);
            pInfo.innerHTML = `Il tuo credito attuale è di ${objUser.smartphone?.credit} euro.`
        })
        // Settaggio Bottone Chiamata
        let btnCall = document.createElement('button') as HTMLButtonElement;
        btnCall.setAttribute('type', 'button');
        btnCall.innerHTML = 'Call';
        btnCall.addEventListener('click', () => {
            objUser.smartphone?.setCall();
            pInfo.innerHTML = `Il tuo credito residuo è di ${objUser.smartphone?.credit} euro.`;
        })
        // Settaggio Bottone Credito
        let btnInfoCredit = document.createElement('button') as HTMLButtonElement;
        btnInfoCredit.setAttribute('type', 'button');
        btnInfoCredit.innerHTML = 'Info Credit';
        btnInfoCredit.addEventListener('click', () => {
            pInfo.innerHTML = `Il tuo credito attuale è di ${objUser.smartphone?.credit} euro.`
        })
        // Settaggio Bottone Info Call
        let btnInfoCall = document.createElement('button') as HTMLButtonElement;
        btnInfoCall.setAttribute('type', 'button');
        btnInfoCall.innerHTML = 'Info Call';
        btnInfoCall.addEventListener('click', () => {
            pInfo.innerHTML = `Hai effettuato ${objUser.smartphone?.numberCall} chiamate della durata totale di ${objUser.smartphone?.totalCallMinutes} minuti`
        })
        // Settaggio Bottone Reset Call
        let btnResetCall = document.createElement('button') as HTMLButtonElement;
        btnResetCall.setAttribute('type', 'button');
        btnResetCall.innerHTML = 'Reset Call';
        btnResetCall.addEventListener('click', () => {
            objUser.smartphone?.setResetCall();
            pInfo.innerHTML = `Hai effettuato ${objUser.smartphone?.numberCall} chiamate della durata totale di ${objUser.smartphone?.totalCallMinutes} minuti`
        })
        // Appendo i panni
        divButton.append(btn10e, btn20e, btn50e, btnCall, btnInfoCredit, btnInfoCall, btnResetCall);
        divSmartphone.append(title, pInfo, divButton);
        divSmartphones.append(divSmartphone);
    }
}






// let btn10 = document.querySelector('button:nth-of-type(1)') as HTMLButtonElement
// btn10.addEventListener('click', function add10() {
//     user1.smartphone?.setCreditRecharge(10);
//     let p = document.querySelector('p') as HTMLParagraphElement;
//     p.innerHTML = `Il tuo credito attuale è di ${user1.smartphone?.credit} euro.`
// })

// let btn20 = document.querySelector('button:nth-of-type(2)') as HTMLButtonElement
// btn20.addEventListener('click', function add20() {
//     user1.smartphone?.setCreditRecharge(20);
//     let p = document.querySelector('p') as HTMLParagraphElement;
//     p.innerHTML = `Il tuo credito attuale è di ${user1.smartphone?.credit} euro.`
// })

// let btn50 = document.querySelector('button:nth-of-type(3)') as HTMLButtonElement
// btn50.addEventListener('click', function add50() {
//     user1.smartphone?.setCreditRecharge(50);
//     let p = document.querySelector('p') as HTMLParagraphElement;
//     p.innerHTML = `Il tuo credito attuale è di ${user1.smartphone?.credit} euro.`
// })

// let btnCredit = document.querySelector('button:nth-of-type(4)') as HTMLButtonElement
// btnCredit.addEventListener('click', function credit() {
//     let p = document.querySelector('p') as HTMLParagraphElement;
//     p.innerHTML = `Il tuo credito attuale è di ${user1.smartphone?.credit} euro.`
// })

// let btnInfoCall1 = document.querySelector('button:nth-of-type(5)') as HTMLButtonElement
// btnInfoCall1.addEventListener('click', function infoCall() {
//     let p = document.querySelector('p') as HTMLParagraphElement;
//     p.innerHTML = `Hai effettuato ${user1.smartphone?.numberCall} chiamate della durata totale di ${user1.smartphone?.totalCallMinutes} minuti`
// })

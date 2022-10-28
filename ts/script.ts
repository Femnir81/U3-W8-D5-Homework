interface Ismartphone {
    credit: number;
    numberCall: number;
    totalCallMinutes: number;
    setCreditRecharge(param:number): number;
    setCall(param:number): void;
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

    setCall(minutes: number): void {
        if (this.credit >= minutes * 0.2) {
            this.numberCall++;
            this.totalCallMinutes += minutes;
            this.credit -= minutes * 0.2;
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
    setCall(minutes: number): void {
        if (this.credit >= minutes * 0.15) {
            this.numberCall++;
            this.totalCallMinutes += minutes;
            this.credit -= minutes * 0.15;
        } else {
            alert(`Il credito per effettuare la chiamata, è insufficiente. Hai solo ${this.credit}€ residuo`);
        }
    };
}

class Samsung extends Smartphone {
    
}

class Iphone extends Smartphone {
    setCall(minutes: number): void {
        if (this.credit + 10>= minutes * 0.25) {
            this.numberCall++;
            this.totalCallMinutes += minutes;
            this.credit -= minutes * 0.25;
        } else {
            alert(`Il credito per effettuare la chiamata, è insufficiente. Hai solo ${this.credit}€ residuo. Ti ricordiamo che ti offriamo l'opportunità di andare in negativo fino a 10€`);
        }
    };
}

class User {
    name: string;
    surname: string;
    smartphone?: (Xiaomi | Samsung | Iphone)
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
user1.smartphone = samsung1;

let iphone1 = new Xiaomi();
let user3 = new User('Ipersona', 'Inormale');
user1.smartphone = iphone1;

let btn10 = document.querySelector('button:nth-of-type(1)') as HTMLButtonElement
btn10.addEventListener('click', function add10() {
    user1.smartphone?.setCreditRecharge(10);
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerHTML = `Il tuo credito attuale è di ${user1.smartphone?.credit} euro.`
})

let btn20 = document.querySelector('button:nth-of-type(2)') as HTMLButtonElement
btn20.addEventListener('click', function add20() {
    user1.smartphone?.setCreditRecharge(20);
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerHTML = `Il tuo credito attuale è di ${user1.smartphone?.credit} euro.`
})

let btn50 = document.querySelector('button:nth-of-type(3)') as HTMLButtonElement
btn50.addEventListener('click', function add50() {
    user1.smartphone?.setCreditRecharge(50);
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerHTML = `Il tuo credito attuale è di ${user1.smartphone?.credit} euro.`
})

let btnCredit = document.querySelector('button:nth-of-type(4)') as HTMLButtonElement
btnCredit.addEventListener('click', function credit() {
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerHTML = `Il tuo credito attuale è di ${user1.smartphone?.credit} euro.`
})

let btnInfoCall = document.querySelector('button:nth-of-type(5)') as HTMLButtonElement
btnInfoCall.addEventListener('click', function infoCall() {
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerHTML = `Hai effettuato ${user1.smartphone?.numberCall} chiamate della durata totale di ${user1.smartphone?.totalCallMinutes} minuti`
})








function szamol() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("eredmeny").innerHTML = "Nem megfelelő bemenetet adott meg!";
    }
    else {
        let felszin = 2 * ((a * b) + (a * c) + (b * c));
        let terfogat = a * b * c;

        document.getElementById("eredmeny").innerHTML = "Téglatest felszine: " + felszin;
        document.getElementById("eredmeny2").innerHTML = "Téglatest térfogata: " + terfogat;
    }
}

function szamol1() {
    let ora = parseFloat(document.getElementById("ora").value);
    let perc = parseFloat(document.getElementById("perc").value);
    let masodp = parseFloat(document.getElementById("masodp").value);

    if ((ora < 0 || ora >= 24) || (perc < 0 || perc >= 59) || (masodp < 0 || masodp >= 59)) {
        document.getElementById("eredmeny3").innerHTML = "Nem megfelelő bemenetet adott meg!";
    }
    else {
        document.getElementById("eredmeny3").innerHTML = ora + " : " + perc + " : " + masodp;
    }
}

function szamol2() {
    let kg = parseFloat(document.getElementById("kg").value);
    let meter = parseFloat(document.getElementById("meter").value);

    if ((kg < 1 || kg > 300) || (meter < 0.3 || meter > 4)) {
        document.getElementById("eredmeny4").innerHTML = "Nem megfelelő bemenetet adott meg!";
    }
    else {
        let bmi = kg / meter;

        document.getElementById("eredmeny4").innerHTML = "BMI értéke: " + bmi;
    }
}

function szamol3() {
    let evszam = parseFloat(document.getElementById("evszam").value);

    if (evszam % 4 == 0) {
        document.getElementById("eredmeny5").innerHTML = "Szökőév";
    }
    else {
        document.getElementById("eredmeny5").innerHTML = "Nem szökőév";
    }
}

function szamol4() {
    let elso = parseFloat(document.getElementById("elso").value);
    let masodik = parseFloat(document.getElementById("masodik").value);

    if ((elso < 1 || elso > 3) || (masodik < 1 || masodik > 3)) {
        document.getElementById("eredmeny6").innerHTML = "Nem megfelelő bemenetet adott meg!";
    }
    else {
        if (elso == 1 && masodik == 1) {
            document.getElementById("eredmeny6").innerHTML = "A játék döntetlen."
        }
        if (elso == 2 && masodik == 2) {
            document.getElementById("eredmeny6").innerHTML = "A játék döntetlen."
        }
        if (elso == 3 && masodik == 3) {
            document.getElementById("eredmeny6").innerHTML = "A játék döntetlen."
        }
        if (elso == 1 && masodik == 2) {
            document.getElementById("eredmeny6").innerHTML = "A második játékos nyer."
        }
        if (elso == 1 && masodik == 3) {
            document.getElementById("eredmeny6").innerHTML = "Az első játékos nyer."
        }
        if (elso == 2 && masodik == 1) {
            document.getElementById("eredmeny6").innerHTML = "Az első játékos nyer."
        }
        if (elso == 2 && masodik == 3) {
            document.getElementById("eredmeny6").innerHTML = "A második játékos nyer."
        }
        if (elso == 3 && masodik == 1) {
            document.getElementById("eredmeny6").innerHTML = "Az első játékos nyer."
        }
        if (elso == 3 && masodik == 2) {
            document.getElementById("eredmeny6").innerHTML = "A második játékos nyer."
        }
    }
}
const KEYS = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };

const encriptarText = text => {
    return text.split("").map(letter => {
        if (KEYS[letter] !== undefined) {
            return KEYS[letter];
        }
        return letter;
    }).join("");
}

const desencriptarText = text => {
    let solveEncriptarText = "";
    for (let indexLetter = 0; indexLetter < text.length; indexLetter++) {
        let letter = text[indexLetter];

        if (KEYS[letter] !== undefined) {
            let key = KEYS[letter];
            let keyHidenInText = text.slice(indexLetter, indexLetter + key.length);

            if(keyHidenInText === key){
                indexLetter = indexLetter + (key.length - 1);
            }
        }

        solveEncriptarText += letter;
    }
    return solveEncriptarText;
}
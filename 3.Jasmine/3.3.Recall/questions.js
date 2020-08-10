let selectElementsStartingWithA = (array) => {
    let startsWithA = array.filter((array) => array.startsWith("a"));
    return startsWithA
}

let selectElementsStartingWithVowel = (array) => {
    
    let rex = /^[aeiou]/i;///^[aeiou]/idit "Au début de la chaîne ( ^), correspond à a, e, i, o ou u, insensible à la casse (le idrapeau)."
    let startWithVoyel = array.filter(str => rex.test(str));
    return startWithVoyel;
}

let removeNullElements = (array) => {
    return array.filter(element => element !==null);
    // return arry;
}

let removeNullAndFalseElements = (array) => {
    monTAb = array.filter(element => element !==null);
    return monTAb.filter(element => element !== false);
}

let reverseWordsInArray = (array) => {
    let arr = [];
    for(i=0; i< array.length; i++){
        let couperElement = array[i].split("");
        let reversArray = couperElement.reverse();
        let joinedArray = reversArray.join("");
        arr.push(joinedArray);

    }
    return arr;
}

let everyPossiblePair = (array) => {
    let arr = [];
    array.sort();
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                arr.push([array[i], array[j]]);
            }
        }
    }     
    return arr;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3, array.length);   
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    let n = Math.ceil(string.length / 2); //math.ceil permet d'arrondir a un chiffre entier
    return string.substring(0, n);
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === array[i].charAt(array[i].length-1)){
            count++;
        }
    }
    return count;
}

let shortestWord = (array) => {
    let arr = array.reduce(function(a, b){
        return a.length <= b.length ? a : b;
    })
return arr;
}

let longestWord = (array) => {
    let arr = array.reduce(function(a, b){
        return a.length >= b.length ? a : b;
    })
    return arr;
}

let sumNumbers = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let repeatElements = (array) => {
    const multiplyArray = (array, length) => 
        Array.from({ length }, () => array).flat();
        const array2 = multiplyArray(array, 2);//Array.from()pour créer un tableau avec une longueur du multiplicateur, où chaque élément contient le tableau d'origine. Ensuite, utilisez Array.flat()pour convertir en un seul tableau
    return array2;
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length
}

let getElementsUntilGreaterThanFive = (array) => {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 5) {
            arr.push(array[i]);
        }
        else{
            break;
        }
    }   
    return arr;
}

let convertArrayToObject = (array) => {
    let object = {};
    for (let i = 0; i < array.length; i += 2) {
        object[array[i]] = array[i+1];
    }
    return object;
}

let getAllLetters = (array) => {
    let letters = [];
    for (let i = 0; i < array.length; i++) {
        let c = array[i].split("");
        for (let j = 0; j < c.length; j++) {
            letters.push(c[j]);
        }
    }
    return [...new Set(letters.sort())];// ...new Set() permet de faire une copie du tableaux sans les doublons
}

let swapKeysAndValues = (object) => {
    const newObj ={};
    for(let prop in object){
        if(object.hasOwnProperty(prop)){
            newObj[object[prop]] = prop;
        }
    }
    return newObj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    let keys = [...new Set(Object.keys(object))];
    let values = [...new Set(Object.values(object))];
    keys.forEach(elem => sum += Number(elem));
    values.forEach(elem => sum += Number(elem));
    return sum;
}

let removeCapitals = (string) => {
    // char = string.replace( /[^a-z]/g, '' );
    let array = string.split("");
    let newArr = [];
    array.forEach(char => {
        if (char === char.toLowerCase()) {
            newArr.push(char);
        }
    });
    let newString = newArr.join("");
    return newString;
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return `0${date.getUTCDate()}/0${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
}

let getDomainName = (string) => {
    string = string.split("@");
    string = string[1];
    let i = string.lastIndexOf(".");
    string = string.split("");
    let arr = [];
    for (let j = 0; j < i; j++) {
        arr.push(string[j]);
    }
    let newString = arr.join("");
    console.log(arr)
    console.log(newString)
    return newString;   
}

let titleize = (string) => {
    let title = string.toLowerCase().split(' ');
    
    for(let i = 0;i < title.length; i++){
        if(title[i].length> 3 || i == 0 || title[i - 1].indexOf('.') > 0){
            title[i] = title[i].charAt(0).toUpperCase() + title[i].substring(1).toLowerCase();
        }
    }
    return  title.join(' ');
}

let checkForSpecialCharacters = (string) => {
    console.log(string);
    let charSpecRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    let test =  charSpecRegex.test(string)
    console.log(test)
    return test;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let n = 1;
    function factorial(a) {
        if (a === 0) {
            return n;
        }
        else {
            n *= a;
            return factorial(a - 1);
        }
    }
    return factorial(number);
}

let findAnagrams = (string) => {
    function getAnagrams(string) {
        if (string.length === 1)
            return string;
        let anagrams = [];
        for (let i = 0; i < string.length; i++) {
            let s = string[0];
            let newA = getAnagrams(string.slice(1, string.length));
            for (let j = 0; j < newA.length; j++)
                anagrams.push(s + newA[j]);
            string = string.slice(1, string.length) + s;
        }
        return anagrams;
    }
    return getAnagrams(string);
}

let convertToCelsius = (number) => {
    let result = (number - 32) * (5/9);
    return Math.round(result);
}

let letterPosition = (array) => {
    for(let i = 0; i < array.length; i++){
        array[i]= array[i].toLowerCase();
        array[i] = array[i].charCodeAt(0)-96
    }
    return array;
}


let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let concateniation = texte1 + texte2;
    return concateniation;
}
let afficherCar5 =  (texte) => {
    return texte[4];
}
let afficher9Car =  (texte) => {
    let premierC = texte.substr(0, 9);
    return premierC;
}
let majusculeString =  (texte) => {
    let maj = texte.toUpperCase();
    return maj;
}
let minusculeString =  (texte) => {
    let min = texte.toLowerCase();
    return min;
}
let SupprEspaceString =  (texte) => {
    let noneEspace = texte.trim();
    return noneEspace;
}
let IsString =  (texte) => {
    if(typeof texte){
        return true;
    }
}

let AfficherExtensionString =  (texte) => {
    let extension = texte.split('.').pop();//La méthode pop() supprime le dernier élément d'un tableau et retourne cet élément. Attention que cette méthode modifie la longueur du tableau.
    return extension;
}
let NombreEspaceString =  (texte) => {
    nbesp = texte.split(' ').length - 1;
    return nbesp;
}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let monTab = [];
    for(i = 0; i < array.length; i++){
        monTab.push(Math.abs(array[i]));
    }
    return monTab;
}
let sufaceCercle =  (rayon) => {
    let surface = Math.PI * (Math.pow(rayon,2));
    surface = Math.round(surface);
    return surface
}
let hypothenuse =  (ab, ac) => {
    return Math.hypot(ab,ac);
}
let calculIMC =  (poids, taille) => {
    let imc = ((poids / (taille * taille)).toFixed(2));
    return +imc;
}

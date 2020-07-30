let CreationTableauLangages =  () => {
    let langages = ["Html", "CSS", "Java", "PHP"];
    return langages;
}

let CreationTableauNombres =  () => {
    let nombres = [0, 1, 2, 3, 4, 5];
    return nombres;
}

let RemplacementElement =  (langages) => {
    langages.splice(2,1,'Javascript');
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby', 'Python');
    return langages
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-1);
    nombres.unshift(-2);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(',');//spliter a chaque , car dans la chaine de caractere espace n'est pas tout le temp la.
    // console.log(reseaux_sociaux_chaine);
    // console.log(reseaux_sociaux);
    return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
    return langages.join();
}

let TriTableau =  (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

let InversionTableau =  (reseaux_sociaux) =>{
    return reseaux_sociaux.reverse();
}

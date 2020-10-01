// Définition des actions possible
export const INCREMENTATION = 'INCREMENTATION';
export const DECREMENTATION = 'DECREMENTATION';
export const REMISE_A_ZERO = 'REMISE_A_ZERO';

// Définition des méthodes d'action
export const incrementer = (valeur = 1) => {
    // Ajout de Traitement possible 
    return {
        type: INCREMENTATION,
        payload: valeur
    }
};

// Ecriture simplifier avec une lambda qui renvoie un objet
export const decrementer = (valeur = 1) => ({
    type: DECREMENTATION,
    payload: valeur
});

export const remiseZero = () => ({
    type: REMISE_A_ZERO
})
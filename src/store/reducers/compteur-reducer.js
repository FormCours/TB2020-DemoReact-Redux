const { INCREMENTATION, DECREMENTATION, REMISE_A_ZERO } = require("../actions/compteur-action");

// Définition de la valeur initial du store
// pour la categorie "compteur"
const stateInitial = {
    valeur: 0
}

// Création du 'reducer' pour la categorie "compteur"
const compteurReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case INCREMENTATION:
            return {
                valeur: state.valeur + action.payload
            };
        case DECREMENTATION:
            return {
                valeur: state.valeur - action.payload
            };
        case REMISE_A_ZERO:
            return {
                valeur: 0
            };
        default:
            return state;
    }
}

export default compteurReducer;
import React from 'react';
import {connect} from 'react-redux';


const CompteurAfficheur = (props) => {
    const {valeurCompteur} = props;

    return (
        <h1>{valeurCompteur}</h1>
    );
}

const mapStateToProps = (state) => ({
    valeurCompteur: state.compteur.valeur
})


export default connect(mapStateToProps)(CompteurAfficheur);
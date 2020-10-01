import React from 'react';
import { connect } from 'react-redux';
import {remiseZero} from './../../store/actions/compteur-action';

const CompteurReset = (props) => {
    const {valeur, remiseZero} = props;

    return (
        <>
           <button onClick={remiseZero} disabled={valeur === 0}>Remise à Zero</button>
        </>
    );
}

const mapStateToProps = (state) => ({
    valeur : state.compteur.valeur
});

const mapDispatchToProps = {
    remiseZero
};

export default connect(mapStateToProps, mapDispatchToProps)(CompteurReset);
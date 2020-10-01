import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decrementer, incrementer } from '../../store/actions/compteur-action';

const CompteurInteraction = (props) => {
    const {incrementer, decrementer, step} = props;

    return (
        <div>
            <button onClick={() => incrementer(step)}>+</button>
            <button onClick={() => decrementer(step)}>-</button>
        </div>
    );
}

CompteurInteraction.defaultProps = {
    step: 1
}

CompteurInteraction.propTypes = {
    step: PropTypes.number
}

const mapDispatchToProps = {
    incrementer,
    decrementer
}

export default connect(null, mapDispatchToProps)(CompteurInteraction);
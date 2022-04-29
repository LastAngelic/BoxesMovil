import React from 'react';
import {View} from 'react-native';
import styles from '../styles';
import PropTypes from 'prop-types';

function Coolumn({children}) {
    return (
        <View style={styles.coolumn}>
            {children}
        </View>
    );
}

Coolumn.propTypes = {
    children: PropTypes.node.isRequired
}

export default Coolumn;
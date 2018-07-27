
import {TouchableOpacity,Text} from 'react-native'
import PropTypes from 'prop-types';
import style from './styles'
import React from "react";

const MyButton = props => {
    const {text, onPress} = props;
    return (
        <TouchableOpacity style={props.style} onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
};

MyButton.propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string
};
MyButton.defaultProps = {
    style: style.button,
    text: 'BUTTON'
};

export default MyButton


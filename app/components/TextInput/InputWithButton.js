import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableHighlight,
} from 'react-native';
import color from 'color';
import styles from './styles';

//  props ile bir sürü değişkeni buraya vereceğiz
const InputWithButton = (props) => {
  const {
    onPress, buttonText, editable = true, textColor,
  } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText];
  if (textColor) {
    buttonTextStyles.push({ color: props.textColor });
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>
          { buttonText }
        </Text>
      </TouchableHighlight>
      <View style={styles.border} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
};

export default InputWithButton;

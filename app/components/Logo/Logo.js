import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text,
} from 'react-native';
import styles from './styles';

const Logo = (props) => {
  const {
    logoPlace,
    teamNameText,
  } = props;

  const logoTextStyles = [styles.text];
  if (logoPlace === 'down') {
    logoTextStyles.push({ marginTop: 40 });
  }
  let textText = teamNameText;
  if (teamNameText === 'UEFA Champions League') {
    textText = 'deneme 123';
    console.log('worked');
  }


  return (
    <View style={styles.container}>
      <Text style={logoTextStyles}>
        {textText}
      </Text>
    </View>
  );
};
Logo.propTypes = {
  logoPlace: PropTypes.string,
  teamNameText: PropTypes.string,
};

export default Logo;

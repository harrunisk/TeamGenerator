import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text,
} from 'react-native';
import styles from './styles';
import ARGENTINA from '../../data/ARGENTINA';
import AUSTRALIA from '../../data/AUSTRALIA';
import AUSTRIA from  '../../data/AUSTRIA';

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
  if (teamNameText === 'All') {
    textText = 'All';
  } else if (teamNameText === 'UEFA Champions League') {
    textText = 'UEFA Champions League';
  } else if (teamNameText === 'UEFA Europa League') {
    textText = 'UEFA Europa League';
  } else if (teamNameText === 'ARGENTINA') {
    textText = ARGENTINA[Math.floor(Math.random() * ARGENTINA.length)].toString();
  } else if (teamNameText === 'AUSTRALIA') {
    textText = AUSTRALIA[Math.floor(Math.random() * AUSTRALIA.length)].toString();
  } else if (teamNameText === 'AUSTRIA') {
    textText = AUSTRIA[Math.floor(Math.random() * AUSTRIA.length)].toString();
  } else if (teamNameText === 'UEFA Europa League') {
    textText = 'UEFA Europa League';
  } else if (teamNameText === 'UEFA Champions League') {
    textText = 'UEFA Champions League';
  } else if (teamNameText === 'UEFA Europa League') {
    textText = 'UEFA Europa League';
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

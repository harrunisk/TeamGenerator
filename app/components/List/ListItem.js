import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Flag from 'react-native-flags';
import styles from './styles';
import Icon from './Icon';

const ListItem = (props) => {
  const {
    text, onPress,
    selected = false,
    checkmark = true,
    visible = true,
    customIcon = null,
    iconBackground,
  } = props;
  let countryFlag = 'World';
  switch (text) {
    case 'ARGENTINA':
      countryFlag = 'AR';
      break;
    case 'AUSTRALIA':
      countryFlag = 'AU';
      break;
    case 'AUSTRIA':
      countryFlag = 'AT';
      break;
    case 'BELGIUM':
      countryFlag = 'BE';
      break;
    case 'BRAZIL':
      countryFlag = 'BR';
      break;
    case 'CHILE':
      countryFlag = 'CL';
      break;
    case 'CHINA':
      countryFlag = 'CN';
      break;
    case 'COLOMBIA':
      countryFlag = 'CO';
      break;
    case 'DENMARK':
      countryFlag = 'DK';
      break;
    case 'ENGLAND PREMIER LEAGUE':
      countryFlag = 'GB';
      break;
    case 'ENGLAND EFL CHAMPIONSHIP':
      countryFlag = 'GB';
      break;
    case 'ENGLAND FOOTBALL LEAGUE 1':
      countryFlag = 'GB';
      break;
    case 'ENGLAND FOOTBALL LEAGUE 2':
      countryFlag = 'GB';
      break;
    case 'FRANCE LIGUE 1 CONFORAMA':
      countryFlag = 'FR';
      break;
    case 'FRANCE DOMINO’S LIGUE 2':
      countryFlag = 'FR';
      break;
    case 'GERMANY BUNDESLIGA':
      countryFlag = 'DE';
      break;
    case 'GERMANY BUNDESLIGA 2':
      countryFlag = 'DE';
      break;
    case 'GERMANY 3. LIGA':
      countryFlag = 'DE';
      break;
    case 'HOLLAND':
      countryFlag = 'NL';
      break;
    case 'ITALY SERIE A TIM':
      countryFlag = 'IT';
      break;
    case 'ITALY CALCIO B':
      countryFlag = 'IT';
      break;
    case 'JAPAN':
      countryFlag = 'JP';
      break;
    case 'KOREA':
      countryFlag = 'KP';
      break;
    case 'MEXICO':
      countryFlag = 'MX';
      break;
    case 'NORWAY':
      countryFlag = 'NO';
      break;
    case 'POLAND':
      countryFlag = 'PL';
      break;
    case 'PORTUGAL':
      countryFlag = 'PT';
      break;
    case 'REP. IRELAND':
      countryFlag = 'IE';
      break;
    case 'SAUDI ARABIA':
      countryFlag = 'SA';
      break;
    case 'SCOTLAND':
      countryFlag = 'scotland';
      break;
    case 'SPAIN LALIGA SANTANDER':
      countryFlag = 'ES';
      break;
    case 'SPAIN LALIGA 1 | 2 | 3':
      countryFlag = 'ES';
      break;
    case 'SWEDEN':
      countryFlag = 'SE';
      break;
    case 'SWITZERLAND':
      countryFlag = 'CH';
      break;
    case 'TURKEY':
      countryFlag = 'TR';
      break;
    case 'USA / CANADA':
      countryFlag = 'US';
      break;
    default:
      countryFlag = 'olympics';
  }

  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>
          {text}
        </Text>
        {selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} /> : <Icon />}
        <Flag
          code={countryFlag}
          size={32}
          style={styles.flag}
        />
      </View>
    </TouchableHighlight>
  );
};
ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;

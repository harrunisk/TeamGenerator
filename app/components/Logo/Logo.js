import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import LEAGUES from '../../data/leagues';
import LEAGUES2 from '../../data/leagues.1';
import ARGENTINA from '../../data/ARGENTINA';
import AUSTRALIA from '../../data/AUSTRALIA';
import AUSTRIA from '../../data/AUSTRIA';
import BELGIUM from '../../data/BELGIUM';
import BRAZIL from '../../data/BRAZIL';
import CHILE from '../../data/CHILE';
import CHINA from '../../data/CHINA';
import COLOMBIA from '../../data/COLOMBIA';
import DENMARK from '../../data/DENMARK';
import ENGLAND_EFL_CHAMPIONSHIP from '../../data/ENGLAND EFL CHAMPIONSHIP';
import ENGLAND_FOOTBALL_LEAGUE_1 from '../../data/ENGLAND FOOTBALL LEAGUE 1';
import ENGLAND_FOOTBALL_LEAGUE_2 from '../../data/ENGLAND FOOTBALL LEAGUE 2';
import ENGLAND_PREMIER_LEAGUE from '../../data/ENGLAND PREMIER LEAGUE';
import FRANCE_DOMINO_LIGUE_2 from '../../data/FRANCE DOMINO’S LIGUE 2';
import FRANCE_LIGUE_1_CONFORAMA from '../../data/FRANCE LIGUE 1 CONFORAMA';
import GERMANY_3_LIGA from '../../data/GERMANY 3. LIGA';
import GERMANY_BUNDESLIGA_2 from '../../data/GERMANY BUNDESLIGA 2';
import GERMANY_BUNDESLIGA from '../../data/GERMANY BUNDESLIGA';
import HOLLAND from '../../data/HOLLAND';
import ITALY_CALCIO_B from '../../data/ITALY CALCIO B';
import ITALY_SERIE_A_TIM from '../../data/ITALY SERIE A TIM ';
import JAPAN_MEIJI_YASUDA_J1 from '../../data/JAPAN MEIJI YASUDA J1';
import KOREA_K_LEAGUE_1 from '../../data/KOREA K LEAGUE 1';
import MEXICO_LIGA_BANCOMER_MX from '../../data/MEXICO LIGA BANCOMER MX';
import NATIONAL_TEAMS_MEN from '../../data/NATIONAL TEAMS MEN';
import NATIONAL_TEAMS_WOMEN from '../../data/NATIONAL TEAMS WOMEN';
import NORWAY_ELITESERIEN from '../../data/NORWAY ELITESERIEN';
import POLAND_EKSTRAKLASA from '../../data/POLAND EKSTRAKLASA';
import PORTUGAL_LIGA_NOS from '../../data/PORTUGAL LIGA NOS';
import REP_IRELAND_SSE_AIRTRICITY_LEAGUE from '../../data/REP. IRELAND SSE AIRTRICITY LEAGUE';
import REST_OF_WORLD from '../../data/REST OF THE WORLD CLUBS FROM OTHER LEAGUES ';
import SAUDI_ARABIA_ABDUL_LATIF_JAMEEL_LEAGUE from '../../data/SAUDI ARABIA ABDUL LATIF JAMEEL LEAGUE';
import SCOTLAND_SCOTTISH_PREMIERSHIP from '../../data/SCOTLAND SCOTTISH PREMIERSHIP';
import SPAIN_LALIGA_SANTANDER from '../../data/SPAIN LALIGA SANTANDER';
import SPAIN_LALIGA_123 from '../../data/SPAIN LALIGA 1 | 2 | 3';
import SWEDEN from '../../data/SWEDEN ALLSVENSKAN';
import SWITZERLAND from '../../data/SWITZERLAND RAIFFEISEN SUPER LEAGUE';
import TURKEY from '../../data/TURKEY SUPER LIG';
import UEFA_CHAMPIONS_LEAGUE from '../../data/UEFA Champions League';
import UEFA_EUROPA_LEAGUE from '../../data/UEFA Europa League';
import USA from '../../data/USA CANADA MAJOR LEAGUE SOCCER';
import List1 from '../../data/list1';
import List2 from '../../data/list2';


const Logo = (props) => {
  const {
    logoPlace,
    teamNameText,
    animationType,
  } = props;

  let logoTextStyles = [styles.text];
  if (logoPlace === 'Down') {
    logoTextStyles = [styles.textBelow];
  }
  let textText = teamNameText;
  let Randomleague;
  let league;
  const animation = animationType;
  if (teamNameText === 'All') {
    Randomleague = LEAGUES2[Math.floor(Math.random() * LEAGUES2.length)].toString();
    league = Randomleague;
  } else {
    league = teamNameText;
  }

  if (league === 'UEFA Champions League') {
    textText = UEFA_CHAMPIONS_LEAGUE[Math.floor(Math.random() * UEFA_CHAMPIONS_LEAGUE.length)].toString();
  } else if (league === 'UEFA Europa League') {
    textText = UEFA_EUROPA_LEAGUE[Math.floor(Math.random() * UEFA_EUROPA_LEAGUE.length)].toString();
  } else if (league === 'ARGENTINA') {
    textText = ARGENTINA[Math.floor(Math.random() * ARGENTINA.length)].toString();
  } else if (league === 'AUSTRALIA') {
    textText = AUSTRALIA[Math.floor(Math.random() * AUSTRALIA.length)].toString();
  } else if (league === 'AUSTRIA') {
    textText = AUSTRIA[Math.floor(Math.random() * AUSTRIA.length)].toString();
  } else if (league === 'BELGIUM') {
    textText = BELGIUM[Math.floor(Math.random() * BELGIUM.length)].toString();
  } else if (league === 'BRAZIL') {
    textText = BRAZIL[Math.floor(Math.random() * BRAZIL.length)].toString();
  } else if (league === 'CHILE') {
    textText = CHILE[Math.floor(Math.random() * CHILE.length)].toString();
  } else if (league === 'CHINA') {
    textText = CHINA[Math.floor(Math.random() * CHINA.length)].toString();
  } else if (league === 'COLOMBIA') {
    textText = COLOMBIA[Math.floor(Math.random() * COLOMBIA.length)].toString();
  } else if (league === 'DENMARK') {
    textText = DENMARK[Math.floor(Math.random() * DENMARK.length)].toString();
  } else if (league === 'ENGLAND EFL CHAMPIONSHIP') {
    textText = ENGLAND_EFL_CHAMPIONSHIP[Math.floor(Math.random() * ENGLAND_EFL_CHAMPIONSHIP.length)].toString();
  } else if (league === 'ENGLAND FOOTBALL LEAGUE 1') {
    textText = ENGLAND_FOOTBALL_LEAGUE_1[Math.floor(Math.random() * ENGLAND_FOOTBALL_LEAGUE_1.length)].toString();
  } else if (league === 'ENGLAND FOOTBALL LEAGUE 2') {
    textText = ENGLAND_FOOTBALL_LEAGUE_2[Math.floor(Math.random() * ENGLAND_FOOTBALL_LEAGUE_2.length)].toString();
  } else if (league === 'ENGLAND PREMIER LEAGUE') {
    textText = ENGLAND_PREMIER_LEAGUE[Math.floor(Math.random() * ENGLAND_PREMIER_LEAGUE.length)].toString();
  } else if (league === 'FRANCE DOMINO’S LIGUE 2') {
    textText = FRANCE_DOMINO_LIGUE_2[Math.floor(Math.random() * FRANCE_DOMINO_LIGUE_2.length)].toString();
  } else if (league === 'FRANCE LIGUE 1 CONFORAMA') {
    textText = FRANCE_LIGUE_1_CONFORAMA[Math.floor(Math.random() * FRANCE_LIGUE_1_CONFORAMA.length)].toString();
  } else if (league === 'GERMANY 3. LIGA') {
    textText = GERMANY_3_LIGA[Math.floor(Math.random() * GERMANY_3_LIGA.length)].toString();
  } else if (league === 'GERMANY BUNDESLIGA 2') {
    textText = GERMANY_BUNDESLIGA_2[Math.floor(Math.random() * GERMANY_BUNDESLIGA_2.length)].toString();
  } else if (league === 'GERMANY BUNDESLIGA') {
    textText = GERMANY_BUNDESLIGA[Math.floor(Math.random() * GERMANY_BUNDESLIGA.length)].toString();
  } else if (league === 'HOLLAND') {
    textText = HOLLAND[Math.floor(Math.random() * HOLLAND.length)].toString();
  } else if (league === 'ITALY CALCIO B') {
    textText = ITALY_CALCIO_B[Math.floor(Math.random() * ITALY_CALCIO_B.length)].toString();
  } else if (league === 'ITALY SERIE A TIM') {
    textText = ITALY_SERIE_A_TIM[Math.floor(Math.random() * ITALY_SERIE_A_TIM.length)].toString();
  } else if (league === 'JAPAN') {
    textText = JAPAN_MEIJI_YASUDA_J1[Math.floor(Math.random() * JAPAN_MEIJI_YASUDA_J1.length)].toString();
  } else if (league === 'KOREA') {
    textText = KOREA_K_LEAGUE_1[Math.floor(Math.random() * KOREA_K_LEAGUE_1.length)].toString();
  } else if (league === 'MEXICO') {
    textText = MEXICO_LIGA_BANCOMER_MX[Math.floor(Math.random() * MEXICO_LIGA_BANCOMER_MX.length)].toString();
  } else if (league === 'NATIONAL TEAMS MEN') {
    textText = NATIONAL_TEAMS_MEN[Math.floor(Math.random() * NATIONAL_TEAMS_MEN.length)].toString();
  } else if (league === 'NATIONAL TEAMS WOMEN') {
    textText = NATIONAL_TEAMS_WOMEN[Math.floor(Math.random() * NATIONAL_TEAMS_WOMEN.length)].toString();
  } else if (league === 'NORWAY') {
    textText = NORWAY_ELITESERIEN[Math.floor(Math.random() * NORWAY_ELITESERIEN.length)].toString();
  } else if (league === 'POLAND') {
    textText = POLAND_EKSTRAKLASA[Math.floor(Math.random() * POLAND_EKSTRAKLASA.length)].toString();
  } else if (league === 'PORTUGAL') {
    textText = PORTUGAL_LIGA_NOS[Math.floor(Math.random() * PORTUGAL_LIGA_NOS.length)].toString();
  } else if (league === 'REP. IRELAND') {
    textText = REP_IRELAND_SSE_AIRTRICITY_LEAGUE[Math.floor(Math.random() * REP_IRELAND_SSE_AIRTRICITY_LEAGUE.length)].toString();
  } else if (league === 'REST OF THE WORLD') {
    textText = REST_OF_WORLD[Math.floor(Math.random() * REST_OF_WORLD.length)].toString();
  } else if (league === 'SAUDI ARABIA') {
    textText = SAUDI_ARABIA_ABDUL_LATIF_JAMEEL_LEAGUE[Math.floor(Math.random() * SAUDI_ARABIA_ABDUL_LATIF_JAMEEL_LEAGUE.length)].toString();
  } else if (league === 'SCOTLAND') {
    textText = SCOTLAND_SCOTTISH_PREMIERSHIP[Math.floor(Math.random() * SCOTLAND_SCOTTISH_PREMIERSHIP.length)].toString();
  } else if (league === 'SPAIN LALIGA 1 | 2 | 3') {
    textText = SPAIN_LALIGA_123[Math.floor(Math.random() * SPAIN_LALIGA_123.length)].toString();
  } else if (league === 'SPAIN LALIGA SANTANDER') {
    textText = SPAIN_LALIGA_SANTANDER[Math.floor(Math.random() * SPAIN_LALIGA_SANTANDER.length)].toString();
  } else if (league === 'SWEDEN') {
    textText = SWEDEN[Math.floor(Math.random() * SWEDEN.length)].toString();
  } else if (league === 'SWITZERLAND') {
    textText = SWITZERLAND[Math.floor(Math.random() * SWITZERLAND.length)].toString();
  } else if (league === 'TURKEY') {
    textText = TURKEY[Math.floor(Math.random() * TURKEY.length)].toString();
  } else if (league === 'USA / CANADA') {
    textText = USA[Math.floor(Math.random() * USA.length)].toString();
  } else if (league === 'My Teams 1') {
    if (List1.length === 0 || List1 === '' || List1 == null) {
      Alert.alert("Here's a message", 'Team list 1 is empty! Add your team.', [
        { text: 'OK', onPress: () => {} },
      ]);
    } else {
      textText = List1[Math.floor(Math.random() * List1.length)].toString();
    }
  } else if (league === 'My Teams 2') {
    if (List2.length === 0 || List2 === '' || List2 == null) {
      Alert.alert("Here's a message", 'Team list 2 is empty! Add your team.', [
        { text: 'OK', onPress: () => {} },
      ]);
    } else {
      textText = List2[Math.floor(Math.random() * List2.length)].toString();
    }
  }


  return (
    <Animatable.View animation={animation}>
      <Text style={logoTextStyles}>
        {textText}
      </Text>
    </Animatable.View>
  );
};
Logo.propTypes = {
  animationType: PropTypes.string,
  logoPlace: PropTypes.string,
  teamNameText: PropTypes.string,
};

export default Logo;

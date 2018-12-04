import PropTypes from 'prop-types';
// companent is used to add typical REACT component
import React, { Component } from 'react';
// import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { StatusBar, ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { connectAlert } from '../components/Alert';
import { SwipeModal } from '../components/ScrollableSwipeableModal';
import {
  getInitialConversion, giveRandomTeam,
} from '../actions/currencies';


const styles = EStyleSheet.create({
  container: {
    ...EStyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Home extends Component {
    static propTypes = {
      navigation: PropTypes.object,
      dispatch: PropTypes.func,
      baseCurrency: PropTypes.string,
      quoteCurrency: PropTypes.string,
      primaryColor: PropTypes.string,
      alertWithType: PropTypes.func,
      currencyError: PropTypes.string,
      logoPlace: PropTypes.string,
      animationType: PropTypes.string,
    };


    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(getInitialConversion());
    }

    componentWillReceiveProps(nextProps) {
      const { currencyError, alertWithType } = this.props;
      if (nextProps.currencyError && nextProps.currencyError !== currencyError) {
        alertWithType('error', 'Error', nextProps.currencyError);
      }
    }

  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    //  Buraya tıklandığında LeagueList'e yönlendirme yapacak.
    //  aşagıdaki kod
    navigation.navigate('LeagueList', { title: 'Leagues', type: 'base' });
  }

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('LeagueList', { title: 'Leagues', type: 'quote' });
  }


  handleSwapCurrency = () => {
    const { dispatch } = this.props;

    // to-do this.props.dispatch kullanarak yapmam gerekiyor
    // dispatch(swapCurrency());
    dispatch(giveRandomTeam());
  }

  handleOptionPress = () => {
    this.props.openModal;
  }

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      primaryColor,
      logoPlace,
      animationType,
    } = this.props;


    return (
      <ImageBackground
        style={styles.container}
        source={require('../data/9blur.png')}
        imageStyle={{ resizeMode: 'cover' }}

      >
        <StatusBar translucent={false} barStyle="light-content" />
        {/* <Header onPress={this.handleOptionPress} /> */}
        <Logo
          tintColor={primaryColor}
          teamNameText={baseCurrency}
          animationType={animationType}
        />
        <InputWithButton
          buttonText={baseCurrency}
          onPress={this.handlePressBaseCurrency}
          editable={false}
          onChangeText={this.handleTextChange}
          textColor={primaryColor}
        />
        <ClearButton
          text="Generate Teams"
          onPress={this.handleSwapCurrency}
        />
        <InputWithButton
          buttonText={quoteCurrency}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          textColor={primaryColor}
        />
        <Logo
          tintColor={primaryColor}
          logoPlace={logoPlace}
          teamNameText={quoteCurrency}
          animationType={animationType}
        />
        <SwipeModal />
      </ImageBackground>
    );
  }
}
// bu kısımda tuşa bastığında birimleri birbiriyle değiştirecek
// olan yeri yazıyoruz en azından görsel olarak
const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  // ilkine ulaş yoksa boş obje döndür

  return {
    baseCurrency,
    quoteCurrency,
    primaryColor: state.currencies.primaryColor,
    currencyError: state.currencies.error,
    logoPlace: state.currencies.logoPlace,
    animationType: state.currencies.animationType,
  };
};
export default connect(mapStateToProps)(connectAlert(Home));

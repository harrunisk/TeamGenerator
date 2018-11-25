import PropTypes from 'prop-types';
// companent is used to add typical REACT component
import React, { Component } from 'react';
// import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header';

import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { connectAlert } from '../components/Alert';
import { SwipeModal } from '../components/ScrollableSwipeableModal';
import {
  changeCurrencyAmount, getInitialConversion, giveRandomTeam,
} from '../actions/currencies';


class Home extends Component {
    static propTypes = {
      navigation: PropTypes.object,
      dispatch: PropTypes.func,
      baseCurrency: PropTypes.string,
      quoteCurrency: PropTypes.string,
      amount: PropTypes.number,
      conversionRate: PropTypes.number,
      isFetching: PropTypes.bool,
      primaryColor: PropTypes.string,
      alertWithType: PropTypes.func,
      currencyError: PropTypes.string,
      logoPlace: PropTypes.string,
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

  handleTextChange = (text) => {
    const { dispatch } = this.props;
    // to-do this.props.dispatch kullanarak yapmam gerekiyor
    dispatch(changeCurrencyAmount(text));
  }

  handleSwapCurrency = () => {
    const { dispatch } = this.props;

    // to-do this.props.dispatch kullanarak yapmam gerekiyor
    // dispatch(swapCurrency());
    dispatch(giveRandomTeam());
  }

  handleOptionPress = () => {
    this.props.openModal;
    const { navigation } = this.props;
    navigation.navigate('Options');
  }

  render() {
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      primaryColor,
      logoPlace,
    } = this.props;
    let quotePrice = (amount * conversionRate).toFixed(2);

    if (isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        {/* <Header onPress={this.handleOptionPress} /> */}
        <Logo
          tintColor={primaryColor}
          teamNameText={baseCurrency}
        />
        <InputWithButton
          buttonText={baseCurrency}
          onPress={this.handlePressBaseCurrency}
          defaultValue={amount.toString()}
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
          value={quotePrice}
          textColor={primaryColor}
        />
        <Logo
          tintColor={primaryColor}
          logoPlace={logoPlace}
          teamNameText={quoteCurrency}
        />
        <SwipeModal />
      </Container>
    );
  }
}
// bu kısımda tuşa bastığında birimleri birbiriyle değiştirecek
// olan yeri yazıyoruz en azından görsel olarak
const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  // ilkine ulaş yoksa boş obje döndür
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    primaryColor: state.currencies.primaryColor,
    currencyError: state.currencies.error,
    logoPlace: state.currencies.logoPlace,
  };
};
export default connect(mapStateToProps)(connectAlert(Home));

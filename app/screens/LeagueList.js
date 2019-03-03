import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  FlatList, StatusBar, View, Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Separator } from '../components/List';
import leagues from '../data/leagues';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';


class LeagueList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
  }

  handlePress = (currency) => {
    const { navigation, dispatch } = this.props;
    const { type } = navigation.state.params;
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(currency));
    }
    navigation.goBack(null);
  };

  //  onPress altına checkmark={false} yada visible= ekleyerek değiştirebiliriz
  render() {
    const {
      navigation, baseCurrency, quoteCurrency, primaryColor,
    } = this.props;
    let comparisonCurrency = baseCurrency;
    if (navigation.state.params.type === 'quote') {
      comparisonCurrency = quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        {Platform.OS === 'android' && (
        <StatusBar
          barStyle="dark-content"
          animated
          translucent
        />
        )}
        <FlatList
          data={leagues}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.currencies.primaryColor,
});
// dispatch kullanabilmek için oradan gelecek değerleri connect ile bağlamak gerekiyor
export default connect(mapStateToProps)(LeagueList);

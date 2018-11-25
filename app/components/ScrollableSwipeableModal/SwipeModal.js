import React, { Fragment, Component } from 'react';
import {
  View, ScrollView, Text, FlatList, TextInput, TouchableOpacity, Image, Alert,
} from 'react-native';
import Modal from 'react-native-modalbox';
// import { KeyboardAvoidingView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import SegmentedControlTab from 'react-native-segmented-control-tab';
// import Button from '../Buto/Button';
import list0 from '../../data/list1';
import list1 from '../../data/list2';
import InputWithButton from '../qqq/InputWithButton';


import { ListItem, Separator } from '../List';


const styles = EStyleSheet.create({
  container: {
    width: '80%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 6,
    borderWidth: 3,
  },
  SegmentedControlTab: {
    borderRadius: 15,
    borderColor: '#4F6D7A',
    borderWidth: 2,
  },
  description: {
    padding: 20,
    fontSize: 18,
  },
  scrollIndicator: {
    height: 20,
    width: 1,
    backgroundColor: 'red',
    position: 'absolute',
  },
  thresholdIndicator: {
    height: 50,
    width: 1,
    backgroundColor: 'green',
    position: 'absolute',
    right: 0,
  },
  containerIcon: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20,
    },

  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
});

class SwipeModal extends Component {
  state = {
    isOpen: false,
    selectedIndex: 0,
    data: list0,
    label: '',
    value: '',
    teamName: '',
    extraData: '',

  };

  handleChangeText =(text) => {
    this.setState({
      teamName: text,
    });
  }

  handlePress2 = () => {
    if (this.state.teamName === '' || this.state.teamName == null) {
      Alert.alert("Here's a message", "Team name can't be empty", [
        { text: 'OK', onPress: () => {} },
      ]);
    } else {
      this.state.data.push(this.state.teamName);
      this.setState({
        ...this.state,
        data: this.state.data,
      });
      this.setState({
        teamName: '',
      });
    }
  }

  handleIndexChange = (index) => {
    let temp;
    if (index === 0) {
      temp = list0;
    } else if (index === 1) {
      temp = list1;
    }
    this.setState({
      ...this.state,
      selectedIndex: index,
      data: temp,
    });
  }

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <Fragment>

        <Modal
          style={styles.container}
          swipeToClose
          swipeArea={20}
          swipeThreshold={50}
          isOpen={this.state.isOpen}
          onClosed={this.closeModal}
          backdropOpacity={0.1}
        >

          <SegmentedControlTab
            style={styles.SegmentedControlTab}
            values={['My Teams 1', 'My Teams 2']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />


          <FlatList
            data={this.state.data}
            extraData={this.state}
            renderItem={({ item }) => (
              <ListItem
                text={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={Separator}
          />


          <InputWithButton
            buttonText="Add"
            value={this.state.teamName}
            onPress={this.handlePress2}
            onChangeText={this.handleChangeText}
            placeholder="Your Team Name "
          />
          {/* <Button
            color="#75BA75"
            label="Close Modal"
            onPress={this.closeModal}
          /> */}


        </Modal>

        {/* <Button
          color="#8B1E98"
          label="Scrollable + Swipeable"
          onPress={this.openModal}
        /> */}
        <View style={styles.containerIcon}>
          <TouchableOpacity style={styles.button} onPress={this.openModal}>
            <Image resizeMode="contain" style={styles.icon} source={require('./images/add36.png')} />
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}

export default SwipeModal;

import React, { Fragment, Component } from 'react';
import {
  View, ScrollView, StyleSheet, Text, FlatList, TextInput,
} from 'react-native';
import Modal from 'react-native-modalbox';
import { KeyboardAvoidingView } from 'react-native';


import SegmentedControlTab from 'react-native-segmented-control-tab';
import Button from '../Buto/Button';
import list0 from '../../data/list1';
import list1 from '../../data/list2';
import InputWithButton from '../qqq/InputWithButton';


import { ListItem, Separator } from '../List';


const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
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
});

class SwipeModal extends Component {
  state = {
    isOpen: false,
    selectedIndex: 0,
    data: list0,

  };

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
          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
            }}
          >

            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <ListItem
                  text={item}
                  onPress={() => this.handlePress(item)}
                />
              )}
              keyExtractor={item => item}
              ItemSeparatorComponent={Separator}
            />
          </ScrollView>

          <Button
            color="#75BA75"
            label="Close Modal"
            onPress={this.closeModal}
          />


          <InputWithButton
            buttonText="Add"
            onPress={this.handlePressBaseCurrency}
            defaultValue="dfgdfg"
            onChangeText={this.handleChangeText}
          />


        </Modal>

        <Button
          color="#8B1E98"
          label="Scrollable + Swipeable"
          onPress={this.openModal}
        />
      </Fragment>
    );
  }
}

export default SwipeModal;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { addPerson, deletePerson } from './actions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'button for dev menu',
});

class App extends Component {
  state = {
    inputValue: '',
  }
  addPerson = () => {
    if (this.state.inputValue === '') return;
    this.props.dispatchAddPerson({
      name: this.state.inputValue,
    });
    this.setState({ inputValue: '' });
  }
  deletePerson = (person) => {
    this.props.dispatchdeletePerson(person)
  }
  updateInput = (inputValue) => {
    this.setState({ inputValue })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps (state) {
  return {
    people: state.people.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddPerson: (person) => dispatch(addPerson(person)),
    dispatchdeletePerson: (person) => dispatch(deletePerson(person))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
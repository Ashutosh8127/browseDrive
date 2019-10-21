/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import MyStatusBar from './helper/MyStatusBar';
import { api } from '../utils/api';

export default class App extends Component {
  componentDidMount() {
    // api.browseDetails()
    // .then((res) => {
    //   console.log(res);
    // })
  }
  render() {
    return (
      <React.Fragment>
        <MyStatusBar backgroundColor={"#00aeef"} barStyle="light-content" />
          <View style={styles.container}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome To Drive</Text>
            </View>
            <TouchableHighlight
              onPress={() => {console.log('hiiii')}}
              style={styles.driveButton}
              underlayColor={"#00aeef"}
            >
              <Text style={styles.driveButtonText}>Check Drive</Text>
            </TouchableHighlight>
          </View>
      </React.Fragment>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeContainer: {
    marginBottom: 50
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  driveButton: {
    borderRadius: 10,
    width: 200,
    height: 50,
    backgroundColor: "#00aeef",
    justifyContent: 'center'
  },
  driveButtonText: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  }
});

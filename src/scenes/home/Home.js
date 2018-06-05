import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,TouchableOpacity,
} from 'react-native';

export default class Basic extends Component {
    constructor(props) {
      super(props);
  
    }
  
  
    render() {
        return ( 
            <View style={styles.container}>
            <Text style={styles.welcome}>
              Explorer
            </Text>
            <Text style={styles.instructions}>
              FIND PROPERTIES IN UAE ON THE GO
            </Text>
            
            <Text style={styles.instructions}>
              Lets Search 
            </Text>
            <TouchableOpacity
            onPress={this.toggle}
            style={styles.button}
          >
            
          </TouchableOpacity>
          </View>
          
        )}
  }

const styles = StyleSheet.create({

    button: {
      position: 'absolute',
      top: 20,
      padding: 10,
    },
    caption: {
      fontSize: 20,
      fontWeight: 'bold',
      alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',
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



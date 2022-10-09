import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'#000'}
            centerComponent={{
              text: 'Input Text -  React',
              style: { color: '#fff', fontSize: 20, height:55, textAlign:'center', paddingTop:10 },
              
            }}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.setState({ displayText: this.state.text });
            }}>
            <Text style={styles.buttonText}>Inserir</Text>
          </TouchableOpacity>
          <Text>{this.state.displayText}</Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 25,
    backgroundColor: '0',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: "red",
    borderRadius:10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom:5,
    color:'#fff',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
});

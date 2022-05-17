import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '435526833876-9tgs420vl7apb0c1oqihiq3hehvs90j8.apps.googleusercontent.com',
    webClientId: '435526833876-m4b0894ne8rbql62245fsbfn3ovufnj1.apps.googleusercontent.com',
  });
  const[loggedIn,setLoggedIn]=useState("")

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication,type } = response;
      console.log(type)
      setLoggedIn(type)
      }
  }, [response]);

  return (
    <View style={styles.container}>
     <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
    <Text>
    {loggedIn === "success" ? "Logged In" : "Logged Out"}
    </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, Text, View, Image, ScrollView }from 'react-native';
import React from 'react';
import ButtonComponent from './component/button/button';

const App = () => {
 return (
  <View style={{
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Image
    source={require('./assets/hijau.jpg')}
    style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 15,
      opacity: 0.4,
      zIndex: -1,
    }}
    resizeMode="cover"
    />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
        <Image
        source={require('./assets/spotify.png')}
        style={{
          width: 150,
          height: 150,
          marginTop: 20,
          opacity: 1,
          zIndex: 1,
        }}
        resizeMode="cover"
        />
        <Text style={{
          fontSize: 20,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'white',
          position: 'absolute',
          top: 0,
          marginTop: 325,
        }}>Welcome to Spotify</Text>

        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 20,
        }}>layanan musik digital, podcast, dan video yang memberimu akses ke jutaan lagu dan konten lain dari kreator di seluruh dunia. </Text>
          
          <Text style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            marginTop: 20,
          }}>Layanan Spotify Premium menawarkan manfaat tambahan dibandingkan dengan versi gratis.</Text>
           
           <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 40,
           }}>
                <ButtonComponent title="Sign In" color="green"/>
                <ButtonComponent title="Sign Up" color="blue"/>
                </View>
                </ScrollView>
                </View>
                );
              }

export default App;


    
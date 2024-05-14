import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text Ukuran Kecil!</Text>
      <Text style={{
        fontSize: 20,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: 'green',       
      }}> Text Ukuran 20!</Text>
      <Text style={{
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
      }}>Faisal Ganteng </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
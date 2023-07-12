import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>다른 텍스트 입니다!!!</Text>
      </View>
      <Text 
        style={{
          margin: 20, 
          borderWidth: 2, 
          borderColor: 'red', 
          padding: 16
          }}>
            Hello World!!!
      </Text>
      <Button title='눌러보세요!'/>
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

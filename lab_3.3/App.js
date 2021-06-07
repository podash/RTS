import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import Genetic from './Genetic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

export default function App() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [d, setD] = useState(null);
  const [y, setY] = useState(null);
  const [result, setResult] = useState('[]');
  const alert = useAlert();

  if (mutation.value < 1 || mutation.value > 100) alert.show('Можливі значення у проміжку 1 - 100');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput style={styles.expression}
          onChangeText={setA}
          value={a}
          placeholder="a"
          keyboardType="numeric"
        />
        <Text style={styles.expression}>{'*x1 + '}</Text>
        <TextInput style={styles.expression}
          onChangeText={setB}
          value={b}
          placeholder="b"
          keyboardType="numeric"
        />
        <Text style={styles.expression}>{'*x2 + '}</Text>
        <TextInput style={styles.expression}
          onChangeText={setC}
          value={c}
          placeholder="c"
          keyboardType="numeric"
        />
        <Text style={styles.expression}>{'*x3 + '}</Text>
        <TextInput style={styles.expression}
          onChangeText={setD}
          value={d}
          placeholder="d"
          keyboardType="numeric"
        />
        <Text style={styles.expression}>{'*x4 = '}</Text>
        <TextInput style={styles.expression}
          onChangeText={setY}
          value={y}
          placeholder="y"
          keyboardType="numeric"
        />
      </View>

          <input style={styles.mutation}
            placeholder="Оберіть % мутації від 1 до 100"
            name="mutation"
            type="number"
            min="1"
            max="100"
            value={mutation}
          />

      <Text style={styles.result}>
        {`[x1, x2, x3, x4] = ${result}`}
      </Text>
      <View style={styles.btn}>
        <Button
          title="Calculate"
          color="#fff"
          onPress={() => setResult(new Genetic([a, b, c, d], y).solve())}
        />
      </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '90%',
    top: 200,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expression: {
    fontSize: 25
  },
  result: {
    alignSelf: 'center',
    top: 269,
    fontSize: 25
  },
  time: {
    alignSelf: 'center',
    top: 320,
    fontSize: 22
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 400,
    height: 50,
    width: 150,
    backgroundColor: '#9d9fe7',
    borderRadius: 10,
  },
  mutation: {
  width: '90%',
  backgroundColor: '#FFFFFF',
  border: 2,
  borderColor: '#9D9FE7',
  borderRadius: 10,
  color: '#575757',
  },
});
import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

export default function Profile() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const greeting = name ? `Hello, ${name}!` : 'Hello, friend!';
  const counterMessage =
    count > 5
      ? 'You are on a roll!'
      : count > 0
      ? 'Nice progress!' 
      : count === 0
      ? 'Start counting by pressing plus.'
      : 'Too low — try increasing it!';

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/profile.jpg')}
        style={styles.photo}
      />

      <TextInput
        style={styles.input}
        placeholder="Type your name..."
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.greeting}>{greeting}</Text>
      <Text style={styles.course}>Mobile App Development · CS126</Text>
      <View style={styles.counterCard}>
        <Text style={styles.counterLabel}>Counter</Text>
        <Text style={styles.counterValue}>{count}</Text>
        <View style={styles.buttonRow}>
          <View style={styles.buttonWrapper}>
            <Button title="+" onPress={() => setCount((prev) => prev + 1)} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="-" onPress={() => setCount((prev) => prev - 1)} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Reset" onPress={() => setCount(0)} />
          </View>
        </View>
      </View>

      <Text style={styles.message}>{counterMessage}</Text>
      <Text style={styles.bio} numberOfLines={3}>
        Passionate mobile app student building interactive experiences with React
        Native and Expo. Loves learning and sharing knowledge.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f7f7f7',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    maxWidth: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 14,
    color: '#111',
  },
  course: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },
  counterCard: {
    width: '80%',
    maxWidth: 320,
    marginTop: 18,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  counterLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  counterValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
  message: {
    fontSize: 14,
    color: '#333',
    marginTop: 14,
    textAlign: 'center',
    maxWidth: 320,
  },
  bio: {
    fontSize: 14,
    color: '#444',
    marginTop: 12,
    textAlign: 'center',
    maxWidth: 360,
  },
});

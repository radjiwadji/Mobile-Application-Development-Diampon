import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default function Profile() {
  const [name, setName] = useState('');

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
      <Text style={styles.greeting}>Hello, {name || 'friend'}!</Text>
      <Text style={styles.course}>Mobile App Development · CS126</Text>
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
  name: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  },
  course: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },
  bio: {
    fontSize: 14,
    color: '#444',
    marginTop: 10,
    textAlign: 'center',
    maxWidth: 360,
  },
});

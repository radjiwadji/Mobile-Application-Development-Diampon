import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/profile.jpg')}
        style={styles.photo}
      />
      <Text style={styles.name}>Radji Wadji</Text>
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
    marginBottom: 12,
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

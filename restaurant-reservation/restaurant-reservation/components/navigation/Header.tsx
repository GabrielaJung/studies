import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logoIcon from '../../assets/images/logoIcon.png';

const Header = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Image source={logoIcon} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    padding: 10,
  },
  logo: {
    width: 90,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'var(--color)',
  },
});

export default Header;

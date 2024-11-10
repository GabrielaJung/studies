import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface CustomInputProps {
  label: string;
  multiline?: boolean;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  placeholder?: string;
  type?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  multiline = false,
  inputStyle,
  containerStyle,
  placeholder = '',
  type = 'text',
}) => {
  let children = (
    <TextInput
      style={[styles.input, inputStyle]}
      multiline={multiline}
      placeholder={placeholder}
    />
  );

  // TODO: permitir diferentes tipos de input

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 'var(--border-radius)',
  },
  label: {
    fontSize: 14,
    color: 'var(--color-shade)',
  },
  input: {
    height: 40,
    borderColor: 'var(--stroke)',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 'var(--border-radius)',
    backgroundColor: 'var(--background)',
  },
});

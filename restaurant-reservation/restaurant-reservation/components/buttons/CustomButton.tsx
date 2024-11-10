import React, { forwardRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  color: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

// Usamos forwardRef para permitir que o componente receba uma referência opcional
export const CustomButton = forwardRef<TouchableOpacity, CustomButtonProps>(
  ({ title, color, onPress, style, textStyle }, ref) => {
    return (
      <TouchableOpacity
        ref={ref} // ref é opcional e será `undefined` se não for passado
        style={[styles.button, { backgroundColor: color }, style]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
);
const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 'var(--border-radius)',
    alignItems: 'center',
  },
  buttonText: {
    color: 'var(--background)',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

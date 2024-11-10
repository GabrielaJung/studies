import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomInput } from '@/components/forms/CustomInput';
import { CustomButton } from '@/components/buttons/CustomButton';

export const FormNewReservation: React.FC = () => {
  return [
    <View style={styles.container}>
      <CustomInput label='Nome completo' />
      <CustomInput label='Contato' />
      <CustomInput label='Data de reserva' />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Horários</Text>
        <View style={styles.row}>
          <CustomInput label='Entrada' containerStyle={styles.halfWidth} />
          <CustomInput label='Saída' containerStyle={styles.halfWidth} />
        </View>
      </View>

      <CustomInput label='Quantidade de pessoas' />
      <CustomInput
        label='Observação'
        multiline={true}
        inputStyle={styles.observationInput}
      />
    </View>,
    <View style={styles.buttonContainer}>
      <CustomButton title='Limpar' color='var(--secondary)' />
      <CustomButton title='Confirmar' color='var(--primary)' />
    </View>,
  ];
};

const styles = StyleSheet.create({
  container: {
    width: 'calc(100% - 24px)',
    padding: 12,
    backgroundColor: 'var(--shade)',
    borderRadius: 'var(--border-radius)',
    shadowColor: 'var(--shadow-color)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 3,
    borderColor: 'var(--stroke)',
    borderWidth: 1,
  },
  section: {
    backgroundColor: 'var(--tint)',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  sectionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'var(--color)',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  observationInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    width: 'calc(100% - 24px)',
    gap: 8,
  },
});

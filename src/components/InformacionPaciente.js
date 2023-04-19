import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, StyleSheet } from 'react-native';
import { formatearFecha } from '../helpers';

function InformacionPaciente({paciente, setModalPaciente, setPaciente}) {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text style={styles.titulo}>
        Mas información sobre {''}
        <Text style={styles.tituloBold}>{paciente.paciente}</Text>
      </Text>

      <View>
        <TouchableOpacity
          onPress={() => {
            setModalPaciente(false);
            setPaciente({});
          }}
          style={styles.btnCerrar}
        >
          <Text style={styles.btnCerrarTexto}>x Cerrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente:</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.valor}>{paciente.emailPropietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha de alta: </Text>
          <Text style={styles.valor}>{formatearFecha(paciente.date)}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas:</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
  btnCerrar:{
    marginTop: 20,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCerrarTexto:{
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '800',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginTop: 10,
  },
  tituloBold: {
    fontWeight: 'bold',
    color: '#6D28D9',
    fontSize: 40,
  },
  contenido: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '500',
    fontSize: 12,
  },
  valor: {
    fontWeight: '700',
    fontSize: 18,
    color: '#334155',
  },
});

export default InformacionPaciente;

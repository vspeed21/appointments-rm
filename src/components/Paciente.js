import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { formatearFecha } from '../helpers';

function Paciente({item, setPaciente, setShowModal, handleEliminar, setModalPaciente}) {
  const { paciente, date, propietario, emailPropietario } = item;

  function handleEditar() {
    setShowModal(true);
    setPaciente(item);
  }

  return (
    <Pressable
      onPress={() => {
        setModalPaciente(true);
        setPaciente(item);
      }}
    >
      <View style={styles.container}>
        <Text
          style={styles.paciente}
        >
          {paciente}
        </Text>

        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.fecha}>{propietario}</Text>

        <Text style={styles.label}>Contacto propietario:</Text>
        <Text style={styles.fecha}>{emailPropietario}</Text>

        <Text style={styles.label}>Fecha de Alta:</Text>
        <Text style={styles.fecha}>{formatearFecha(date)}</Text>

        <View style={styles.botones}>
          <TouchableOpacity
            style={[styles.btn, styles.btnEditar]}
            onPress={handleEditar}
          >
            <Text style={styles.btnText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, styles.btnEliminar]}
            onPress={() => handleEliminar(item.id)}
          >
            <Text style={styles.btnText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#000',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  label: {
    textTransform: 'uppercase',
  },
  paciente: {
    color: '#6D28D9',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  fecha: {
    color: '#374151',
    marginBottom: 10,
    fontSize: 15,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    borderRadius: 5,
    fontWeight: '700',
  },
  btnEditar: {
    backgroundColor: '#6D28D9',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    color: '#FFF',
    textTransform: 'uppercase',
  },
});

export default Paciente;

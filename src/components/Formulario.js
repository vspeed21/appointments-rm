import React, { useState, useEffect } from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

function Formulario({showModal, setShowModal, pacientes, setPacientes, paciente:pacienteEditar, setPaciente: setPacienteEditar}) {
  const [id, setId] = useState('');
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [emailPropietario, setEmailPropietario] = useState('');
  const [date, setDate] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  useEffect(() => {
    if (pacienteEditar?.paciente) {
      setId(pacienteEditar.id);
      setPaciente(pacienteEditar.paciente);
      setPropietario(pacienteEditar.propietario);
      setEmailPropietario(pacienteEditar.emailPropietario);
      setDate(pacienteEditar.date);
      setSintomas(pacienteEditar.sintomas);
    }
  }, [pacienteEditar]);

  function handleCita() {
    if ([paciente, propietario, emailPropietario, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    //Detectar si es un registro nuevo o quiere editar
    const nuevoPaciente = {
      paciente,
      propietario,
      emailPropietario,
      date,
      sintomas,
    };

    if (id) {
      //Editando
      nuevoPaciente.id = id;
      const pacientesActualizado = pacientes.map(paci => paci.id === nuevoPaciente.id ? nuevoPaciente : paci );
      setPacientes(pacientesActualizado);
      setPacienteEditar({});
    } else {
      //Nuevo registro
      nuevoPaciente.id = Date.now();
      setPacientes([...pacientes, nuevoPaciente]);
    }

    setShowModal(false);

    setPaciente('');
    setPropietario('');
    setEmailPropietario('');
    setDate(new Date());
    setId('');
    setSintomas('');
  }

  const handleCancelar = () => {
    setPacienteEditar({});
    setShowModal(false);
    setPaciente('');
    setPropietario('');
    setEmailPropietario('');
    setDate(new Date());
    setId('');
    setSintomas('');
  };

  return (
    <Modal
        animationType="slide"
        visible={showModal}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.titulo}>
              {pacienteEditar.id ? 'Editar' : 'Nueva'} {''}
              <Text style={styles.tituloBold}>Cita</Text>
            </Text>

            <Pressable
              style={styles.btnCancelar}
              onPress={handleCancelar}
            >
              <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
            </Pressable>

            <View style={styles.campo}>
              <Text style={styles.label}>Nombre paciente</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese el nombre del paciente"
                placeholderTextColor="#666"
                value={paciente}
                onChangeText={setPaciente}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Nombre propietario</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese el nombre del propietario"
                placeholderTextColor="#666"
                value={propietario}
                onChangeText={setPropietario}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Email propietario</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese el email del propietario"
                placeholderTextColor="#666"
                keyboardType="email-address"
                value={emailPropietario}
                onChangeText={setEmailPropietario}
              />
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Fecha de Alta</Text>
              <View style={styles.fecha}>
                <DatePicker
                  date={date}
                  onDateChange={setDate}
                  locale="es"
                  textColor="#000"
                  fadeToColor="none"
                  androidVariant="nativeAndroid"
                />
              </View>
            </View>

            <View style={styles.campo}>
              <Text style={styles.label}>Sintomas</Text>
              <TextInput
                style={[styles.input, styles.sintomas]}
                placeholder="Sintomas paciente"
                placeholderTextColor="#666"
                value={sintomas}
                onChangeText={setSintomas}
                multiline
                numberOfLines={4}
              />
            </View>

            <Pressable
              style={styles.btnEnviar}
              onPress={handleCita}
            >
              <Text style={styles.btnEnviarTexto}>{id ? 'Guardar paciente' : 'Agregar Paciente'}</Text>
            </Pressable>
          </ScrollView>

        </SafeAreaView>
      </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D28D9',
  },
  titulo: {
    fontWeight: '600',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar:{
    marginTop: 20,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarTexto:{
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '800',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    color: '#000',
  },
  sintomas: {
    height: 90,
  },
  fecha: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  btnEnviar: {
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: '#5a28a8',
    padding: 10,
    borderRadius: 10,
  },
  btnEnviarTexto: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#FFF',
  },
});

export default Formulario;

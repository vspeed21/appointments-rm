import React, { useState } from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable, FlatList, Alert, Modal} from 'react-native';
import Formulario from './src/components/Formulario';
import InformacionPaciente from './src/components/InformacionPaciente';
import Paciente from './src/components/Paciente';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modalPaciente, setModalPaciente] = useState(false);

  const handleEliminar = id => {
    Alert.alert(
      '¿Quieres eliminar este paciente?',
      'No se podra recuperar la informacion',
      [
      {text: 'Cancelar'},
      {text: 'Confirmar', onPress: () => {
        const pacientesActualizados = pacientes.filter(paci => paci.id !== id );
        setPacientes(pacientesActualizados);
      }}]
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citaaaas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        style={styles.btnCita}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.btnTextoCita}>Nueva cita</Text>
      </Pressable>

      {showModal && (
        <Formulario
          showModal={showModal}
          setShowModal={setShowModal}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      )}

      {pacientes.length ? (
        <>
          <Text style={styles.tituloPacientes}>Listado de pacientes</Text>

          <FlatList
            style={styles.listado}
            data={pacientes}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <Paciente
                  item={item}
                  setShowModal={setShowModal}
                  setPaciente={setPaciente}
                  handleEliminar={handleEliminar}
                  setModalPaciente={setModalPaciente}
                />
              );
            }}
          />
        </>
      ) : <Text style={styles.tituloPacientes}>No hay pacientes aún. Agrega uno</Text>}

      <Modal
        animationType="fade"
        visible={modalPaciente}
      >
        <InformacionPaciente
          paciente={paciente}
          setPaciente={setPaciente}
          setModalPaciente={setModalPaciente}
        />
      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F6',
    flex: 1,
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
  },
  btnCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoCita: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 18,
    color: '#FFF',
    textTransform: 'uppercase',
  },
  tituloPacientes:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  listado: {
    marginTop: 30,
    marginHorizontal: 30,
  },
});

export default App;

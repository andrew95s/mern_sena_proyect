import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateTramites = () => {
  const [Municipio, setMunicipio] = useState('');
  const [Numero_Predial, setNumero_Predial] = useState('');
  const [Numero_Radicacion, setNumero_Radicacion] = useState('');
  const [Tipo_Tramite, setTipo_Tramite] = useState('');
  const [Folio_Matricula, setFolio_Matricula] = useState('');
  const [Ejecutor, setEjecutor] = useState('');
  const [Fecha_inicio_tarea_de_ejecucion, setFecha_inicio_tarea_de_ejecucion] = useState('');
  const [Fecha_fin_tarea_de_ejecucion, setFecha_fin_tarea_de_ejecucion] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveTramite = () => {
    const data = {
      Municipio,
      Numero_Predial,
      Numero_Radicacion,
      Tipo_Tramite,
      Folio_Matricula,
      Ejecutor,
      Fecha_inicio_tarea_de_ejecucion,
      Fecha_fin_tarea_de_ejecucion,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/tramites', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Tramite Creado con Exito', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Crear Tramite Nuevo</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Municipio</label>
          <input
            type='text'
            value={Municipio}
            onChange={(e) => setMunicipio(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Numero Predial</label>
          <input
            type='text'
            value={Numero_Predial}
            onChange={(e) => setNumero_Predial(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Numero Radicacion</label>
          <input
            type='text'
            value={Numero_Radicacion}
            onChange={(e) => setNumero_Radicacion(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Tipo de Tramite</label>
          <input
            type='text'
            value={Tipo_Tramite}
            onChange={(e) => setTipo_Tramite(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Folio Matricula</label>
          <input
            type='text'
            value={Folio_Matricula}
            onChange={(e) => setFolio_Matricula(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Ejecutor</label>
          <input
            type='text'
            value={Ejecutor}
            onChange={(e) => setEjecutor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Fecha inicio tarea de ejecucion</label>
          <input
            type='text'
            value={Fecha_inicio_tarea_de_ejecucion}
            onChange={(e) => setFecha_inicio_tarea_de_ejecucion(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Fecha fin tarea de ejecucion</label>
          <input
            type='text'
            value={Fecha_fin_tarea_de_ejecucion}
            onChange={(e) => setFecha_fin_tarea_de_ejecucion(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveTramite}>
          Registrar Tramite
        </button>
      </div>
    </div>
  );
}

export default CreateTramites
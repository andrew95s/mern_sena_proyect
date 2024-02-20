import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowTramite = () => {
  const [tramites, setTramite] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://190.70.245.166:5555/tramites/${id}`)
      .then((response) => {
        setTramite(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Informacion del Tramite</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{tramites._id}</span>
          </div>


          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Municipio</span>
            <span>{tramites.Municipio}</span>
          </div>


          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Numero Predial</span>
            <span>{tramites.Numero_Predial}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Numero Radicacion</span>
            <span>{tramites.Numero_Radicacion}</span>
          </div>


          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Fecha inicio tarea de ejecucion</span>
            <span>{tramites.Fecha_inicio_tarea_de_ejecucion}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Fecha fin tarea de ejecucion</span>
            <span>{tramites.Fecha_fin_tarea_de_ejecucion}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowTramite;

import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const TramiteModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.Municipio}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.Numero_Predial}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.Numero_Radicacion}</h2>
        </div>
        <p className='mt-4'>Tramite de Conservacion Territorial CALDAS</p>
        <p className='my-2'>
          PRUEBA DE SOFTWARE PARA EL FRONTEND DE REGISTRO DE TRAMITES DE CONSERVACION IGAC- TERRITORIAL CALDAS
          
          <h1>SENA 2024</h1>
          <h1></h1>
        <h1>ANDRES FELIPE OSORIO BASTIDAS</h1>
          
        </p>
      </div>
    </div>
  );
};

export default TramiteModal;

/*import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const TramiteModal = ({ tramite, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {tramite.Municipio}
        </h2>
        <h4 className='my-2 text-gray-500'>{tramite._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{tramite.Numero_Predial}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{tramite.Numero_Radicacion}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{tramite.Tipo_Tramite}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{tramite.Folio_Matricula}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{tramite.Ejecutor}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{tramite.Fecha_inicio_tarea_de_ejecucion}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{tramite.Fecha_fin_tarea_de_ejecucion}</h2>
        </div>

        <p className='mt-4'>Anything You want to show</p>
        <p className='my-2'>
          
        </p>
      </div>
    </div>
  );
};

// Agrega PropTypes validation
TramiteModal.propTypes = {
  tramite: PropTypes.object.isRequired, // Asegura que tramite sea un objeto y requerido
  onClose: PropTypes.func.isRequired // Asegura que onClose sea una función y requerida
};

export default TramiteModal;
*/
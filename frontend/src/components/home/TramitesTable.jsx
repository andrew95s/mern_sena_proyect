import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const TramitesTable = ({ tramites }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
        <th className='border border-slate-600 rounded-md'>#</th>
          <th className='border border-slate-600 rounded-md'>Municipio</th>
          <th className='border border-slate-600 rounded-md'>Numero Predial</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
          Numero Radicacion
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
          Tipo Tramite
          </th>
          <th className='border border-slate-600 rounded-md'>Folio Matricula</th>
          <th className='border border-slate-600 rounded-md'>Ejecutor</th>
          <th className='border border-slate-600 rounded-md'>Fecha I</th>
          <th className='border border-slate-600 rounded-md'>Fecha F</th>
        </tr>
      </thead>
      <tbody>
        {tramites.map((tramite, index) => (
          <tr key={tramite._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {tramite.Municipio}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {tramite.Numero_Predial}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {tramite.Numero_Radicacion}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {tramite.Tipo_Tramite}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {tramite.Folio_Matricula}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {tramite.Ejecutor}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {tramite.Fecha_inicio_tarea_de_ejecucion}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {tramite.Fecha_fin_tarea_de_ejecucion}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/tramites/details/${tramite._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/tramites/edit/${tramite._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/tramites/delete/${tramite._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Add PropTypes validation
TramitesTable.propTypes = {
  tramites: PropTypes.array.isRequired // Ensure tramites is an array and required
};

export default TramitesTable;

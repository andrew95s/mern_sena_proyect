import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import TramiteSingleCard from './TramiteSingleCard';

const TramitesCard = ({ tramites }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {tramites.map((item) => (
        <TramiteSingleCard key={item._id} tramite={item} />
      ))}
    </div>
  );
};

// Agrega PropTypes validation
TramitesCard.propTypes = {
  tramites: PropTypes.array.isRequired // Asegura que tramites sea una matriz y requerida
};

export default TramitesCard;

import mongoose from 'mongoose';

// Define un esquema de Mongoose para los tramites
const tramitesSchema = mongoose.Schema(
  {
    // Define los campos del esquema con sus respectivos tipos y opciones
    Municipio: { type: String, required: true, trim: true }, // Nombre del municipio, tipo String, requerido y se elimina el espacio en blanco alrededor
    Numero_Predial: { type: String, required: true }, // Número predial, tipo String, requerido
    Numero_Radicacion: { type: String, required: true }, // Número de radicación, tipo String, requerido
    Tipo_Tramite: { type: String, required: true }, // Tipo de trámite, tipo String, requerido
    Ejecutor: { type: String, required: true }, // Ejecutor del trámite, tipo String, requerido
    Folio_Matricula: { type: String, required: true }, // Folio de matrícula, tipo String, requerido
    Fecha_inicio_tarea_de_ejecucion: { type: String }, // Fecha de inicio de tarea de ejecución, tipo String
    Fecha_fin_tarea_de_ejecucion: { type: String }, // Fecha de fin de tarea de ejecución, tipo String
  },
  /*{
    timestamps: true, // Opcional: activa la generación automática de campos 'createdAt' y 'updatedAt'
  }*/
);

// Exporta un modelo de Mongoose llamado "registros" basado en el esquema tramitesSchema
export default mongoose.model("registros", tramitesSchema);

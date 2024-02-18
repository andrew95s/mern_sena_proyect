import mongoose from 'mongoose';

const tramitesSchema = mongoose.Schema(
  {
    Municipio: { type: String, required: true, trim: true },
    Numero_Predial: { type: String, required: true },
    Numero_Radicacion: { type: String, required: true },
    Tipo_Tramite: { type: String, required: true },
    Ejecutor: { type: String, required: true },
    Folio_Matricula: { type: String, required: true },
    Fecha_inicio_tarea_de_ejecucion: { type: String },
    Fecha_fin_tarea_de_ejecucion: { type: String },
  },
  /*{
    timestamps: true,
  }*/
);

//export const Tramite = mongoose.model('registros', tramitesSchema);
export default mongoose.model("registros", tramitesSchema);

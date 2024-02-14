import tramiteModel from "../models/tramiteModel.js";

export const getRegistros = async (req, res) => {
  const registros = await tramiteModel.find();
  res.json(registros);
};

export const getRegistro = async (req, res) => {
  const registro = await tramiteModel.findById(req.params.id);
  res.json(registro);
};

export const createRegistro = async (req, res) => {
  const { Municipio, Numero_Predial, Tipo_Tramite, Ejecutor, Folio_Matricula, Fecha_inicio_tarea_de_ejecucion, Fecha_fin_tarea_de_ejecucion } = req.body;
  const registro = new tramiteModel({ Municipio, Numero_Predial, Tipo_Tramite, Ejecutor, Folio_Matricula, Fecha_inicio_tarea_de_ejecucion, Fecha_fin_tarea_de_ejecucion });
  await registro.save();
  return res.json(registro);
};

export const updateRegistro = async (req, res) => {
  const updatedRegistro = await tramiteModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(updatedRegistro);
};

export const deleteRegistro = async (req, res) => {
  const deletedRegistro = await tramiteModel.findByIdAndRemove(req.params.id);
  if (!deletedRegistro) return res.status(404).json({ message: "Registro not found" });
  return res.sendStatus(204);
};

export default tramiteModel;
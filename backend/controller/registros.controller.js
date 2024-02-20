// Importa el modelo de tramite desde el archivo tramiteModel.js ubicado en el directorio "../models/"
import tramiteModel from "../models/tramiteModel.js";

// Función asincrónica para obtener todos los registros de tramiteModel
export const getRegistros = async (req, res) => {
  const registros = await tramiteModel.find();
  res.json(registros);
};

// Función asincrónica para obtener un registro específico de tramiteModel por su ID
export const getRegistro = async (req, res) => {
  const registro = await tramiteModel.findById(req.params.id);
  res.json(registro);
};

// Función asincrónica para crear un nuevo registro en tramiteModel
export const createRegistro = async (req, res) => {
  // Extrae los datos necesarios del cuerpo de la solicitud
  const { Municipio, Numero_Predial, Numero_Radicacion, Tipo_Tramite, Ejecutor, Folio_Matricula, Fecha_inicio_tarea_de_ejecucion, Fecha_fin_tarea_de_ejecucion } = req.body;
  // Crea una nueva instancia de tramiteModel con los datos proporcionados
  const registro = new tramiteModel({ Municipio, Numero_Predial, Numero_Radicacion, Tipo_Tramite, Ejecutor, Folio_Matricula, Fecha_inicio_tarea_de_ejecucion, Fecha_fin_tarea_de_ejecucion });
  // Guarda el nuevo registro en la base de datos
  await registro.save();
  // Envía la respuesta con el registro creado
  return res.json(registro);
};

// Función asincrónica para actualizar un registro en tramiteModel por su ID
export const updateRegistro = async (req, res) => {
  // Busca y actualiza el registro por su ID con los datos proporcionados en el cuerpo de la solicitud
  const updatedRegistro = await tramiteModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Devuelve el registro actualizado
  });
  // Envía la respuesta con el registro actualizado
  return res.json(updatedRegistro);
};

// Función asincrónica para eliminar un registro en tramiteModel por su ID
export const deleteRegistro = async (req, res) => {
  // Busca y elimina el registro por su ID
  const deletedRegistro = await tramiteModel.findByIdAndRemove(req.params.id);
  // Verifica si se encontró y eliminó el registro
  if (!deletedRegistro) return res.status(404).json({ message: "Registro not found" });
  // Envía una respuesta de éxito (sin contenido) con el código de estado 204
  return res.sendStatus(204);
};

// Exporta el modelo de tramiteModel
export default tramiteModel;

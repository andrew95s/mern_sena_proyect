import express from 'express';
const router = express.Router();

import { Router } from "express";
import {
  createRegistro,
  deleteRegistro,
  getRegistro,
  getRegistros,
  updateRegistro,
} from "../controller/registros.controller.js";


// GET all Registros
router.get("/", getRegistros);

// GET all Registros
router.get("/:id", getRegistro);

// ADD a new Registro
router.post("/", createRegistro);

// UPDATE a new Registro
router.put("/:id", updateRegistro);

router.delete("/:id", deleteRegistro);


export default router;

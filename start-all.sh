#!/bin/bash

# Iniciar backend
echo "Iniciando backend..."
cd backend
npm run start &
cd ..

# Iniciar frontend
echo "Iniciando frontend..."
cd frontend
npm run dev &
cd ..

# Iniciar login
echo "Iniciando login..."
cd Login
npm run start &
cd ..

echo "Procesos iniciados exitosamente."

import axios from 'axios';

const API = 'http://localhost:3000/api/auth';

export async function login(email, password) {
  const res = await axios.post(`${API}/login`, { email, password });
  console.log('Respuesta del backend:', res.data);
  return res.data.data; // { token, usuario }
}

export function guardarSesion(token, usuario) {
  localStorage.setItem('token', token);
  localStorage.setItem('usuario', JSON.stringify(usuario));
}

export function obtenerSesion() {
  const token = localStorage.getItem('token');
  const usuarioRaw = localStorage.getItem('usuario');
  if (!token || !usuarioRaw || usuarioRaw === 'undefined') return null;
  try {
    return { token, usuario: JSON.parse(usuarioRaw) };
  } catch {
    return null;
  }
}

export function cerrarSesion() {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
}

export function haySession() {
  return !!localStorage.getItem('token');
}
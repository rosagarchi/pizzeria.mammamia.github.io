import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="contenedorProfile">
    <div>Pagina no encontrada</div>
    <div><Link to="/pizzeria.mammamia.github.io/">Volver al home</Link></div>
</div>
  )
}

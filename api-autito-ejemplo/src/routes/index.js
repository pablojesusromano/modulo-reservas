const { Router } = require('express');
const router = Router();
const { getUsers, findOne, setUser} = require('../controller/usuario.controller');
const { getTiposDeportes, getTiposDepartamentos, getTiposSalones, getTipos, setTipo} = require('../controller/tipoespacio.controller');
const { getEmpresas,setEmpresa} = require('../controller/empresaController');
const { getEspacios,setEspacio} = require('../controller/espacio.controller');
const { getHorarios,setHorario} = require('../controller/horarios.controller');
const { getReservas,setReserva} = require('../controller/reserva.controller');
const { getServicios,setServicio} = require('../controller/servicio.controller');
const { getEspacioServicios,setEspacioServicio} = require('../controller/espacioservicio.controller');
const { getReservasHorarios,setReservaHorario} = require('../controller/reservashorarios.controller');

//Getters
router.get('/empresas', getEmpresas);
router.get('/espacio', getEspacios);
router.get('/horarios', getHorarios);
router.get('/reservas', getReservas);
router.get('/servicios', getServicios);
router.get('/espacioservicio', getEspacioServicios);
router.get('/reservashorarios', getReservasHorarios);

//routes get usuarios
router.get('/usuarios', getUsers);
router.get('/usuario/:id',findOne);

//routes get tipos
router.get('/tipodeportes', getTiposDeportes);
router.get('/tipodepartamentos', getTiposDepartamentos);
router.get('/tiposalones', getTiposSalones);
router.get('/tipo', getTipos);


//SETTERS
router.post('/setEmpresa', setEmpresa);
router.post('/setEspacio', setEspacio);
router.post('/setHorario', setHorario);
router.post('/setReserva', setReserva);
router.post('/setServicio', setServicio);
router.post('/setEspacioServicio', setEspacioServicio);
router.post('/setReservaHorario', setReservaHorario);

router.post('/setTipo', setTipo);
router.post('/setUser', setUser);

module.exports = router;
# Agenda

Ejecicio:

Un sistema de administración de agendas de servicios cuenta con un módulo que permite la
programación de citas para dichos servicios. Estas citas deben tener una duración mínima de 30
minutos y una duración máxima de 90 minutos. El horario de atención del sistema se encuentra
entre las 9:00 y las 17:00 horas.
Se proporciona un archivo JSON como entrada, el cual contiene un array que hace referencia al día
de la semana, la hora de inicio y la duración de la cita programada.
En este contexto, se requiere la creación de un método que tome como parámetro el día de la
semana que se desea consultar y devuelva el cálculo del total de espacios disponibles para ese día,
teniendo en cuenta que la duración mínima de una cita es de 30 minutos.


para ejecutar instalar dependencias de node.js
npm install node-fetch

Ejemplo JSON

[
    {
      "Day": "lunes",
      "Hour": "09:15",
      "Duration": "60"
    },
    {
      "Day": "lunes",
      "Hour": "10:30",
      "Duration": "45"
    },
    {
      "Day": "lunes",
      "Hour": "12:00",
      "Duration": "90"
    },
    {
      "Day": "lunes",
      "Hour": "16:15",
      "Duration": "30"
    },
    {
      "Day": "martes",
      "Hour": "09:00",
      "Duration": "45"
    },
    {
      "Day": "martes",
      "Hour": "10:00",
      "Duration": "45"
    },
    {
      "Day": "martes",
      "Hour": "11:00",
      "Duration": "45"
    },
    {
      "Day": "martes",
      "Hour": "12:00",
      "Duration": "45"
    },
    {
      "Day": "martes",
      "Hour": "13:00",
      "Duration": "45"
    },
    {
      "Day": "martes",
      "Hour": "14:00",
      "Duration": "45"
    },
    {
      "Day": "martes",
      "Hour": "15:00",
      "Duration": "45"
    },
    {
      "Day": "martes",
      "Hour": "18:00",
      "Duration": "45"
    },
    {
      "Day": "miércoles",
      "Hour": "09:00",
      "Duration": "30"
    },
    {
      "Day": "miércoles",
      "Hour": "10:30",
      "Duration": "60"
    },
    {
      "Day": "miércoles",
      "Hour": "12:00",
      "Duration": "45"
    },
    {
      "Day": "miércoles",
      "Hour": "14:00",
      "Duration": "60"
    },
    {
      "Day": "jueves",
      "Hour": "09:00",
      "Duration": "45"
    },
    {
      "Day": "jueves",
      "Hour": "10:30",
      "Duration": "90"
    },
    {
      "Day": "jueves",
      "Hour": "12:00",
      "Duration": "30"
    },
    {
      "Day": "jueves",
      "Hour": "14:00",
      "Duration": "60"
    },
    {
      "Day": "viernes",
      "Hour": "09:00",
      "Duration": "60"
    },
    {
      "Day": "viernes",
      "Hour": "10:30",
      "Duration": "30"
    },
    {
      "Day": "viernes",
      "Hour": "12:00",
      "Duration": "60"
    },
    {
      "Day": "viernes",
      "Hour": "14:00",
      "Duration": "45"
    }
  ]

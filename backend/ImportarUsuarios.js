/**
 * Script de importación y verificación de usuarios Directivos y Gerentes en la base de datos Google Sheets.
 * Utiliza DRIVE_CONFIG.SPREADSHEET_ID definido en backend/Drive.js.
 * Operación 100% idempotente: no duplica registros existentes.
 */

const USUARIOS_NUEVOS_DIRECTIVOS_GERENTES = [
  {
    "id": 5,
    "nombre": "Adriana Sanchez Sanchez",
    "email": "asanchez@oxohotel.com",
    "passwordHash": "6+WyvH8E1WgBPQ+kcyw5yYRI7VdJG4NhNSN0Hpgs0ys=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 6,
    "nombre": "Aleck Santamaría de la Cruz",
    "email": "asantamaria@oxohotel.com",
    "passwordHash": "/4sHO4Yb7L4dYrO9CBi+BYZzngvSPer45qHNWzNuTz4=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 7,
    "nombre": "Alejandra Castañeda",
    "email": "acastaneda@oxohotel.com",
    "passwordHash": "l24gaU0ywURkSJ5ZSIfi46xdkSu1kI/xfixxjOGI9C8=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 8,
    "nombre": "Christian Florez",
    "email": "cflorez@oxohotel.com",
    "passwordHash": "uUj8+rGWXziDpHPy/uctYJKNFflUShG4XbsHEXVD5cw=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 9,
    "nombre": "Daniel James Ostler Sarasti",
    "email": "dostler@oxohotel.com",
    "passwordHash": "H+fB4YHFhGosJN1MsRm9VcisNAre7o9clJlUP+7XhNY=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 10,
    "nombre": "Henry Alberto Tobon Vargas",
    "email": "htobon@oxohotel.com",
    "passwordHash": "KEqIZ+nLwXfLDWn5iyCdZkS6qOQdz/d0/CfOJWDfMxI=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos y Gerentes"
  },
  {
    "id": 11,
    "nombre": "Iris Delgado",
    "email": "idelgado@oxohotel.com",
    "passwordHash": "Vq8XRdRTFYa3En1Lk7qW55PgBjZFHphxpu3ixnDZAI4=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos y Gerentes"
  },
  {
    "id": 12,
    "nombre": "Ivonne Bohorquez",
    "email": "ibohorquez@oxohotel.com",
    "passwordHash": "w94LZR7A1um8l47w/jR/lrexGDWLwIYcT5EwsDm9l3U=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 13,
    "nombre": "Jaisson Villamil",
    "email": "jvillamil@oxohotel.com",
    "passwordHash": "Cts2EAyt/Y9R9//HboC7+Y/Cswafu8KnzFLJlNIuQWo=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 14,
    "nombre": "Juan Carlos Galindo",
    "email": "jcgalindo@oxohotel.com",
    "passwordHash": "25FotuAY0yHftOeOqecYTl9tTKyDU8L6i9YYtn9wTEk=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 15,
    "nombre": "Juan Pablo Lineros",
    "email": "jlineros@oxohotel.com",
    "passwordHash": "AaFExMEe0DWJC101eIRBQHy/qurV1EuaJAVb4BxKHLg=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 16,
    "nombre": "Juliana Maria Granados Gutierrez",
    "email": "jgranados@oxohotel.com",
    "passwordHash": "TB3pg4uajfKknF3Z/3UWKYsGZ0AkdgZ4J+jdbQ6Ptmk=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 17,
    "nombre": "Lina Maritza Vargas Suarez",
    "email": "lvargas@oxohotel.com",
    "passwordHash": "dRKtPII/QNJfqxUjqicA6OpM/VHnS5pNFp3RfGxSuLY=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos y Gerentes"
  },
  {
    "id": 18,
    "nombre": "Lynda Julie Murillo Gutierrez",
    "email": "lmurillo@oxohotel.com",
    "passwordHash": "xghcTWQJG7MBLhXoLUeseAiEFVvemZBSGA9pUloeGXg=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 19,
    "nombre": "Maria Fernanda Carrillo",
    "email": "mcarrillo@oxohotel.com",
    "passwordHash": "teSVQLRYooZ+eX/NjrUT6bYXHToNRtoEdjKb2Nki6p8=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 20,
    "nombre": "Ximena Gomez",
    "email": "xgomez@oxohotel.com",
    "passwordHash": "IfJK8dQMZmirsuThwuXuQnFKVUsovYbPTmZqRW84z0M=",
    "rol": "Administrador",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Directivos"
  },
  {
    "id": 21,
    "nombre": "Alejandro Ospina",
    "email": "aospinar@oxohotel.com",
    "passwordHash": "EYpUcUgJ9Dclzs40EiJhosih7+O4mwpf+/XXJxJPv0Q=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 22,
    "nombre": "Andres Coneo",
    "email": "aconeo@oxohotel.com",
    "passwordHash": "LT6ZKxmXP9cjVB19FZAYudeY9XjrqgSfkOH6mhmMkf8=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 23,
    "nombre": "Andrey Brijaldo",
    "email": "abrijaldo@oxohotel.com",
    "passwordHash": "I6aYNWTILwqMHA81O/798KUYQg203eoDm5sCSFuPv9E=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 24,
    "nombre": "Camilo Gómez",
    "email": "cgomez@oxohotel.com",
    "passwordHash": "3cczyfOsPmoZutTJt8ch40OOnFLME05mJlg5zQ4nGTU=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 25,
    "nombre": "Carlos Felipe Santos",
    "email": "csantos@oxohotel.com",
    "passwordHash": "nMCYqVV2nAg015Q+qlsUXCW3AIq95oT2oD0P0hInn74=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 26,
    "nombre": "Carlos Guevara",
    "email": "cguevara@oxohotel.com",
    "passwordHash": "bL5WNig/tmd8Xyehh8BgYzCPdCJQ5VgLCP/Iqe2kktY=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 27,
    "nombre": "Catherine Medina",
    "email": "cmedina@oxohotel.com",
    "passwordHash": "RajK8+54/00LoluI2RDVXRNFlV/YhFREESMc/VY3jtg=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 28,
    "nombre": "Clara Patarroyo",
    "email": "cpatarroyo@oxohotel.com",
    "passwordHash": "Z6WipFFEsRZzY+IQB8GYtgY4PdU78iOVAezTR+sJb28=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 29,
    "nombre": "César Augusto Bernal Vélez",
    "email": "cbernal@oxohotel.com",
    "passwordHash": "YozczPHjIdmBBC52QDmgk7NsojWtO3v2v4VZTi7IF0c=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 30,
    "nombre": "Daniel Felipe Piñeros",
    "email": "dpineros@oxohotel.com",
    "passwordHash": "P6wTzoYp6Nv824skvOVO0szxOpvEmtybrHQUh7G+mJc=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 31,
    "nombre": "Daniel Martinez Chaves",
    "email": "dmartinez@oxohotel.com",
    "passwordHash": "9zccvrLwlAhLq/BZtqTz/iytCBBaMzTP5a3kqYBGQMo=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 32,
    "nombre": "Darko Kudeljnjak",
    "email": "darko@oxohotel.com",
    "passwordHash": "U49RcG2OXcbkzYPOJq1gbevIFOu7Fp5Ks7ue+cyvOR8=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 33,
    "nombre": "Estefanía Gomez Quintero",
    "email": "egomez@oxohotel.com",
    "passwordHash": "y3pp9ZF15kHuGcX851puCOoi3KlQpBE0HtgMo29e2dQ=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 34,
    "nombre": "Giancarlo Gamboni",
    "email": "ggamboni@oxohotel.com",
    "passwordHash": "Cj3UUWWpF2FxzXqJuEaCwWXmGaSStaGdUp4yQXWWnc0=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 35,
    "nombre": "Hugo Santos Caldera",
    "email": "hsantos@oxohotel.com",
    "passwordHash": "An7flFkP8vAIYV5T5rbEPsxs5KoxKSwIjNk5RTh3qAc=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 36,
    "nombre": "Javier Mahecha",
    "email": "jmahecha@oxohotel.com",
    "passwordHash": "pevhELFfbR0WSeE7FMaGYU2wBCXtu5kk1OXIyENQ930=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 37,
    "nombre": "Jose Feliciano Caraballo Munera",
    "email": "jcaraballo@oxohotel.com",
    "passwordHash": "HBRHGXypGyTRzltKwm8F6IyljBEXGnvXD8nEJn7kIqY=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 38,
    "nombre": "Jose Labrador",
    "email": "jlabrador@oxohotel.com",
    "passwordHash": "Fbne8Q5pnNV6lUAJEZM0Q0QhzlLBXnn8BIbMYqhMFKA=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 39,
    "nombre": "Juan Diego Lopez Verano",
    "email": "jlopez@oxohotel.com",
    "passwordHash": "tEl05S6za6Gmagl4O299Fgjq4RQUGZcOko8c3H//SGk=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 40,
    "nombre": "Juan Pablo Becker",
    "email": "jbecker@oxohotel.com",
    "passwordHash": "rzDuumffZuxiFzmSORvSVLcv++HEIZmRLLgfievJG7w=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 41,
    "nombre": "Leandro Suarez",
    "email": "lsuarez@oxohotel.com",
    "passwordHash": "+NNCk9aUASuJBIuEOMw8h3MQv/yPwmr2TJR8Xz9gzXs=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 42,
    "nombre": "Luis Baracaldo",
    "email": "lbaracaldo@oxohotel.com",
    "passwordHash": "9RWqvYmYnnc6OP3auTDmxbAUd2L0MJucdhCqKzLZZo0=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 43,
    "nombre": "María Alejandra Pombo",
    "email": "mpombo@oxohotel.com",
    "passwordHash": "fZSjL8cvtJExerGv8DEhuGwNRgZ3wtN0Twt4H0o6rp0=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 44,
    "nombre": "Milton Leon",
    "email": "mleon@oxohotel.com",
    "passwordHash": "uydl8JHzQZaNyB2Ke0WuImMbNihF0uAPb1vgSQFGd64=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 45,
    "nombre": "Milton Mendoza",
    "email": "mmendoza@sirenishotels.com",
    "passwordHash": "mSg+7bW6PsawAQ0GzaSHhwLNhmf9r0CGCOMq+4MLo8o=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 46,
    "nombre": "Oscar Pardo",
    "email": "opardo@oxohotel.com",
    "passwordHash": "qmiHcevSfycNrUWw+DkvTQ2hvTwaiRe8lAZACwOp+EM=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 47,
    "nombre": "Santiago Pinzon Rodriguez",
    "email": "spinzon@oxohotel.com",
    "passwordHash": "JzCAH+gRs0T3TU1RzIowLZXDyiNUbJdCDnr/QUH1ZKk=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 48,
    "nombre": "Santiago Vanegas",
    "email": "svanegas@oxohotel.com",
    "passwordHash": "1e3e8W7ddCxoSL/phesvkDNLpGONs2f3B5hGh1nh6bI=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  },
  {
    "id": 49,
    "nombre": "Ángel Correa",
    "email": "acorrea@oxohotel.com",
    "passwordHash": "FsvaboqhLYnW72p1wOcFe6Z6afJUCNVZxgw1jBnQupQ=",
    "rol": "Usuario",
    "estado": "Activo",
    "fechaRegistro": "2026-08-27",
    "grupo": "Gerentes"
  }
];

/**
 * Inserta todos los usuarios de Directivos y Gerentes en la hoja 'Usuarios'.
 * Si el usuario ya existe por email, omite la inserción.
 */
function importarUsuariosDirectivosYGerentes() {
  try {
    const ss = SpreadsheetApp.openById(DRIVE_CONFIG.SPREADSHEET_ID);
    const hoja = ss.getSheetByName('Usuarios');
    if (!hoja) {
      Logger.log('❌ Hoja Usuarios no encontrada en el Spreadsheet: ' + DRIVE_CONFIG.SPREADSHEET_ID);
      return { success: false, message: 'Hoja Usuarios no encontrada' };
    }

    const datos = hoja.getDataRange().getValues();
    const encabezados = datos[0];
    const indexEmail = encabezados.indexOf('Email');
    const indexId = encabezados.indexOf('ID_Usuario');

    const emailsExistentes = new Set();
    let maxIdExistente = 0;

    for (let i = 1; i < datos.length; i++) {
      if (datos[i][indexEmail]) {
        emailsExistentes.add(String(datos[i][indexEmail]).trim().toLowerCase());
      }
      const idVal = parseInt(datos[i][indexId]);
      if (!isNaN(idVal) && idVal > maxIdExistente) {
        maxIdExistente = idVal;
      }
    }

    Logger.log('ℹ️ Total usuarios existentes en Sheets: ' + emailsExistentes.size + '. Max ID actual: ' + maxIdExistente);

    let agregados = 0;
    let omitidos = 0;

    USUARIOS_NUEVOS_DIRECTIVOS_GERENTES.forEach(function(u) {
      const emailNorm = String(u.email).trim().toLowerCase();
      if (emailsExistentes.has(emailNorm)) {
        Logger.log('⏭️ Omitiendo usuario ya existente: ' + u.email);
        omitidos++;
        return;
      }

      maxIdExistente++;
      const fila = [
        maxIdExistente,
        u.nombre,
        u.email,
        u.passwordHash,
        u.rol,
        u.estado,
        u.fechaRegistro
      ];

      hoja.appendRow(fila);
      emailsExistentes.add(emailNorm);
      agregados++;
      Logger.log('✅ Usuario agregado: ID ' + maxIdExistente + ' - ' + u.nombre + ' (' + u.email + ') [' + u.rol + ']');
    });

    Logger.log('🎉 Proceso finalizado: ' + agregados + ' usuarios agregados, ' + omitidos + ' omitidos.');
    return {
      success: true,
      agregados: agregados,
      omitidos: omitidos,
      totalActual: emailsExistentes.size
    };
  } catch (error) {
    Logger.log('❌ Error en importarUsuariosDirectivosYGerentes: ' + error.toString());
    return { success: false, message: error.toString() };
  }
}

/**
 * Función de prueba para simular login y validar permisos de los usuarios importados.
 */
function probarAutenticacionUsuariosImportados() {
  Logger.log('🧪 Iniciando prueba de autenticación y permisos...');

  const casos = [
    { email: 'jcgalindo@oxohotel.com', pass: 'OxoJuan2026*B0J', rolEsperado: 'Administrador' },
    { email: 'abrijaldo@oxohotel.com', pass: 'OxoAndrey2026*lDn', rolEsperado: 'Usuario' }
  ];

  const resultados = [];

  casos.forEach(function(c) {
    Logger.log('Probando usuario: ' + c.email);
    const res = validarCredenciales(c.email, c.pass);
    const item = { email: c.email, loginOk: res.success, rolEsperado: c.rolEsperado };
    if (res.success && res.user) {
      item.nombre = res.user.Nombre_Completo;
      item.rol = res.user.Rol;
      item.estado = res.user.Estado;
      item.permisoVer = usuarioTienePermiso(res.user.ID_Usuario, 'Ver_Documentos');
      item.permisoSubir = usuarioTienePermiso(res.user.ID_Usuario, 'Subir_Documentos');
      item.permisoGestionarUsuarios = usuarioTienePermiso(res.user.ID_Usuario, 'Gestionar_Usuarios');
      item.permisoGestionarRoles = usuarioTienePermiso(res.user.ID_Usuario, 'Gestionar_Roles');
    } else {
      item.error = res.message;
    }
    resultados.push(item);
  });

  return { success: true, pruebas: resultados };
}

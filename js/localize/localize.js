
var app = angular.module('localize', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider,$rootScope) {
  $translateProvider.translations('en', {
    'USERS': 'USERS',
    'LANGUAGE':'Español'

  });
 
  $translateProvider.translations('es', {
  	'DO_THIS_ACTION':'¿Estas seguro de hacer esta acción?',
    'USERS': 'Usuarios',
    'FREQUENCIES': 'Frecuencias',
    'FREQUENCY': 'Frecuencias',
    'UPLOAD_FILE':'Subir Archivo',
    'SELECTE_ONE':'Seleccione uno',
    'USER': 'Usuario',
    'OWNER': 'Dueño',
    'TAGS': 'Tags',
    'SELECT':'Seleccionar',
    'TAG': 'Tag',
    'ADD_TAG': 'Agregar Tag',
    'VIEW_TAGS': 'Ver Tags',
    'STATE':'Estado',
    'URL':'Url',
    'TYPE':'Tipo',
    'ADDRESS':'Dirección',
    'ORGANIZATIONS': 'Organizaciones',
    'ORGANIZATION':'Organización',
    'CATEGORIES': 'Categorías',
    'CATEGORY':'Categoría',
    'STATUSES': 'Status',
    'STATUS':'Status',
    'FILE_TYPES': 'Tipos de archivos',
    'FILES': 'Archivos',
    'FILE': 'Archivo',
    'DATABASES': 'Bases de datos',
    'DATABASE': 'Base de datos',

    'DATASETS': 'Set de datos',
    'DATASET': 'Set de Datos',
    'ADD_USER': 'Agregar Usuario',
    'VIEW_USERS': 'Ver Usuarios',
    'ADD_ORGANIZATIONS': 'Agregar Organizaciones',
    'VIEW_ORGANIZATIONS': 'Ver Organizaciones',
    'ADD_CATEGORIES': 'Agregar Categorias',
    'VIEW_CATEGORIES': 'Ver Categorias',
    'ADD_STATUSES': 'Agregar status',
    'VIEW_STATUSES': 'Ver Status',
    'ADD_FILETYPES': 'Agregar Tipos de Archivos',
	'VIEW_FILETYPES':'Ver Tipos de Archivos',
	'ADD_FILES':'Agregar Archivos',
	'VIEW_FILES':'Ver Archivos',
	'ADD_DATABASE':'Agregar Bases de Datos',
	'VIEW_DATABASES':'Ver bases de datos',
	'ADD_DATASET':'Agregar Set De Datos',
	'VIEW_DATASET':'Ver Set de datos',
	'ID':'Id',
	'NAME':'Nombre',
	'CREATED_BY':'Creado por',
	'ACTIVE':'Activo',
	'DESCRIPTION':'Descripción',
	'COLLECTION':'Colección',
	'ACTIONS':'Acciones',
	'VIEW':'Ver',
	'ADD':'Agregar',
	'EDIT':'Editar',
	'DELETE':'Borrar',
	'BACK':'Atras',
	'SAVE':'Guardar',
	'DETAILS_FOR':'Detalles para',
	'NOTES':'Notas',
	'VISIBILITY':'Visibilidad',
	'STARRED':'Destacado',
	'ADD_OPTION':'Agregar Opción',
	'THIS_FIELD_IS_REQUIRED':'Este campo es requerido',
	'THIS_FIELD_IS_TOO_SHORT':'Este campo es muy corto',
	'THIS_FIELD_IS_TOO_LONG':'Este campo es muy largo',
	'THIS_NEEDS_TO_BE_A_VALID_MAIL':'Este campo necesita ser un email válido',
	'LANGUAGE':'English',
	'USER_NAME':'Nombre de usuario',
	'EMAIL':'Correo Electrónico',
	'PASSWORD':'Contraseña',
	'ADD_NEW':'Agregar Nuevo',
	'FIRST_NAME':'Nombre',
	'LAST_NAME':'Apellido',
	'ACTIVE':'Activo',
	'PLACE':'Escribe',
	'HERE':'Aquí',
    'COMPLETE':'Completado',
	'HOME':'Inicio',
    'OPTIONAL':'Opcional',
    'ADD_OPTION':'Agregar Opción',
    'SELECT_ONE':'Seleccione una opción'
  });
 console.log($rootScope);
  $translateProvider.preferredLanguage('es');
}]);

  app.controller("localizeController", function($scope) {
  	console.log($scope)

  }); 
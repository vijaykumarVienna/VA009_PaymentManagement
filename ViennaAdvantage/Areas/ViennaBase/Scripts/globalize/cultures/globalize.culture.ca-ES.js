/*
 * Globalize Culture ca-ES
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "ca-ES", "default", {
	name: "ca-ES",
	englishName: "Catalan (Catalan)",
	nativeName: "català (català)",
	language: "ca",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "NeuN",
		negativeInfinity: "-Infinit",
		positiveInfinity: "Infinit",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
				namesAbbr: ["dg.","dl.","dt.","dc.","dj.","dv.","ds."],
				namesShort: ["dg","dl","dt","dc","dj","dv","ds"]
			},
			months: {
				names: ["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre",""],
				namesAbbr: ["gen","feb","març","abr","maig","juny","jul","ag","set","oct","nov","des",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"d.C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, d' / 'MMMM' / 'yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd, d' / 'MMMM' / 'yyyy HH:mm",
				F: "dddd, d' / 'MMMM' / 'yyyy HH:mm:ss",
				M: "dd MMMM",
				Y: "MMMM' / 'yyyy"
			}
		}
	},
	messages: {
	    "Connection": "Connexió",
    "Defaults": "Predeterminats",
    "Login": "Accés",
    "File": "Fitxer",
    "Exit": "Sortir",
    "Help": "Ajuda",
    "About": "Referent",
    "Host": "Servidor",
    "Database": "Base de Dades",
    "User": "ID Usuari",
    "EnterUser": "Entrar ID Usuari Aplicació",
    "Password": "Contrasenya",
    "EnterPassword": "Entrar Contrasenya Usuari Aplicació",
    "Language": "Idioma",
    "SelectLanguage": "Seleccioneu el Vostre Idioma",
    "Role": "Rol",
    "Client": "Client",
    "Organization": "Organització",
    "Date": "Data",
    "Warehouse": "Magatzem",
    "Printer": "Impressora",
    "Connected": "Connectat",
    "NotConnected": "No Connectat",
    "DatabaseNotFound": "No s'ha trobat la Base de Dades",
    "UserPwdError": "No coincidèix l'Usuari i la Contrasenya",
    "RoleNotFound": "Rol no trobat/completat",
    "Authorized": "Autoritzat",
    "Ok": "D'Acord",
    "Cancel": "Cancel.lar",
    "VersionConflict": "Conflicte Versions:",
    "VersionInfo": "Servidor <> Client",
    "PleaseUpgrade": "Sisplau Actualitzeu el Programa",

    //New Resource

    "Back": "esquena",
    "SelectRole": "Seleccioneu Paper",
    "SelectOrg": "Seleccioneu Organització",
    "SelectClient": "Seleccioneu Inquilí",
    "RememberMe": "Recordeu-vos De Mi",
	}
});

}( this ));

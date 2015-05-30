var fs = require('fs');	// importa módulo file system

if (process.argv.length < 4) {	// parámetros mal
	console.log('	syntax: "node merge <dest> <f1> ... <fn>"');
	process.exit();	// finaliza el proceso node
}

for (var i = 0; i < process.argv.length - 3; i++) { // recorre los ficheros
	fs.readFile(
		process.argv[i+3],			// fichero <fi>
		function (err, data) {		// callback de finalización
			fs.appendFile(
				process.argv[2],	// fichero <dest>
				data,				// contenido de <fi>
				function (err) {	// callback de finalización
					if (err) {
						throw err;
					}
					console.log('	file merged');
				}
			);
		}
	);
}
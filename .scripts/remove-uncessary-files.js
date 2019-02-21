const fs = require('fs');

fs.unlinkSync('node_modules/pdfjs-dist/build/pdf.js');
fs.unlinkSync('node_modules/pdfjs-dist/build/pdf.worker.js');
fs.unlinkSync('node_modules/blockstack/dist/blockstack.js');

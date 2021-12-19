const multer = require('multer');
const path = require('path');


// USUARIOS -> configuración de guardado de archivos

let storage = multer.diskStorage({
    destination: (req, file, callback)=>{
    let fileDestination = path.join(__dirname, '../public/images/imgUsers')
    callback(null, fileDestination)
    },
    filename:(req, file, callback)=>{
        console.log(file);
        let fileName = "imgUser-" + Date.now() + path.extname(file.originalname)
        callback(null, fileName)
    },
});

const usersFileUpload = multer({ storage: storage });

module.exports = usersFileUpload;
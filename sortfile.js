var fs = require("fs");
var path = require("path");
//read sort path
var dirName = "C:/Users/g0970/Downloads";
//mkdir dir
fs.mkdirSync(`${dirName}/images`, { recursive: true });
fs.mkdirSync(`${dirName}/documents`, { recursive: true });
fs.mkdirSync(`${dirName}/pdf`, { recursive: true });
fs.mkdirSync(`${dirName}/media`, { recursive: true });
fs.mkdirSync(`${dirName}/zip`, { recursive: true });
fs.mkdirSync(`${dirName}/exe`, { recursive: true });
//readdir foreach find extname 
fs.readdir(dirName, function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }
    files.forEach(function (file, index) {
        console.log(path.extname(file));

        if (path.extname(file) === ".pdf" || path.extname(file) === ".PDF") {
            let fromPath = path.join(dirName, file);
            let toPath = path.join(`${dirName}/pdf`, file);
            fs.rename(fromPath, toPath, function (error) {
                if (error) {
                    console.error("File moving error.", error);
                } else {
                    console.log(`Moved file ${fromPath} to ${toPath}.`);
                }
            });
        }

        if (path.extname(file) === ".jpg" || path.extname(file) === ".png" || path.extname(file) === ".svg" || path.extname(file) === ".gif") {
            let fromPath = path.join(dirName, file);
            let toPath = path.join(`${dirName}/images`, file);
            fs.rename(fromPath, toPath, function (error) {
                if (error) {
                    console.error("File moving error.", error);
                } else {
                    console.log(`Moved file ${fromPath} to ${toPath}.`);
                }
            });
        }

        if (path.extname(file) === ".mp3" || path.extname(file) === ".mp4") {
            let fromPath = path.join(dirName, file);
            let toPath = path.join(`${dirName}/media`, file);
            fs.rename(fromPath, toPath, function (error) {
                if (error) {
                    console.error("File moving error.", error);
                } else {
                    console.log(`Moved file ${fromPath} to ${toPath}.`);
                }
            });
        }
        if (path.extname(file) === ".zip" || path.extname(file) === ".rar"|| path.extname(file) === ".7z") {
            let fromPath = path.join(dirName, file);
            let toPath = path.join(`${dirName}/zip`, file);
            fs.rename(fromPath, toPath, function (error) {
                if (error) {
                    console.error("File moving error.", error);
                } else {
                    console.log(`Moved file ${fromPath} to ${toPath}.`);
                }
            });
        }
        if (path.extname(file) === ".exe" || path.extname(file) === ".msi") {
            let fromPath = path.join(dirName, file);
            let toPath = path.join(`${dirName}/exe`, file);
            fs.rename(fromPath, toPath, function (error) {
                if (error) {
                    console.error("File moving error.", error);
                } else {
                    console.log(`Moved file ${fromPath} to ${toPath}.`);
                }
            });
        }
        if (
            path.extname(file) === ".xlsx" ||
            path.extname(file) === ".csv" ||
            path.extname(file) === ".docx" || 
            path.extname(file) === ".doc" || 
            path.extname(file) === ".txt" || 
            path.extname(file) === ".pptx"
        ) {
            let fromPath = path.join(dirName, file);
            let toPath = path.join(`${dirName}/documents`, file);
            fs.rename(fromPath, toPath, function (error) {
                if (error) {
                    console.error("File moving error.", error);
                } else {
                    console.log(`Moved file ${fromPath} to ${toPath}.`);
                }
            });
        }
    })
})
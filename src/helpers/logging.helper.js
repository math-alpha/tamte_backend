const path = require('path');

const {loggingConfig} = require('../../config')
const {createFile, createFolder, writeFile} = require("./filemander");

const baseDir = '../../';

const getCurrentLogFolderName = () => "/" + new Date().getFullYear().toString() + "/" + (new Date().getMonth() + 1);
const getCurrentYearLogFolderName = () => new Date().getFullYear().toString();
const getCurrentMonthLogFolderName = () => (new Date().getMonth() + 1).toString();
const getCurrentLogFileName = () => new Date().getDate() + ".log";
const getCurrentTime = () => new Date().toGMTString();


const createMonthlyLoggingFolder = () => {

    createFolder(getCurrentMonthLogFolderName(), path.join(__dirname, baseDir + loggingConfig.BASE_ERROR_DIR + "/" + new Date().getFullYear().toString() + "/"), (err) => {
        console.log(err)
    });
    createFolder(getCurrentMonthLogFolderName(), path.join(__dirname, baseDir + loggingConfig.BASE_ACCESS_DIR + "/" + new Date().getFullYear().toString() + "/"), (err) => {
        console.log(err)
    });
    createFolder(getCurrentMonthLogFolderName(), path.join(__dirname, baseDir + loggingConfig.BASE_ACTIONS_DIR + "/" + new Date().getFullYear().toString() + "/"), (err) => {
        console.log(err)
    });
    createFolder(getCurrentMonthLogFolderName(), path.join(__dirname, baseDir + loggingConfig.BASE_JOBS_DIR + "/" + new Date().getFullYear().toString() + "/"), (err) => {
        console.log(err)
    });

}


const createYearlyLoggingFolder = () => {

    createFolder(getCurrentYearLogFolderName(), path.join(__dirname, baseDir + loggingConfig.BASE_ERROR_DIR + "/"), (err) => {
        console.log(err)
    });
    createFolder(getCurrentYearLogFolderName(), path.join(__dirname, baseDir + loggingConfig.BASE_ACCESS_DIR + "/"), (err) => {
        console.log(err)
    });
    createFolder(getCurrentYearLogFolderName(), path.join(__dirname, baseDir + loggingConfig.BASE_ACTIONS_DIR + "/"), (err) => {
        console.log(err)
    });
    createFolder(getCurrentYearLogFolderName(), path.join(__dirname, baseDir + loggingConfig.BASE_JOBS_DIR + "/"), (err) => {
        console.log(err)
    });


}


const createLoggingFiles = () => {

    let name = getCurrentLogFileName();
    let initial_content = loggingConfig.LOG_HEADER +  getCurrentTime();

    createFile( name, path.join(__dirname, baseDir + loggingConfig.BASE_ERROR_DIR + "/" + getCurrentLogFolderName() + "/"), initial_content);
    createFile( name, path.join(__dirname, baseDir + loggingConfig.BASE_ACCESS_DIR + "/" + getCurrentLogFolderName() + "/"), initial_content);
    createFile( name, path.join(__dirname, baseDir + loggingConfig.BASE_JOBS_DIR + "/" + getCurrentLogFolderName() + "/"), initial_content);
    createFile( name, path.join(__dirname, baseDir + loggingConfig.BASE_ACTIONS_DIR + "/" + getCurrentLogFolderName() + "/"), initial_content);
}


module.exports = {
    createLoggingFiles,
    getCurrentLogFolderName,
    createMonthlyLoggingFolder,
    createYearlyLoggingFolder
}
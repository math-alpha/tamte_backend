const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path')

const getLicenseDoc = (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '../../../media/documents/legal/' + req.body.file_name));
    } catch (e) {
        console.log(e);
    }
}

const setLicenseDoc = async (req, res) => {
    try{

        await createPdfFile(req.body.user_id, 'legal/', 'Signed: '+req.body.user_full_name);

        // impact user table

        res.status(201).send({
            status: "OK",
            code: 201,
            file: req.body.user_id + '.pdf'
        })
    } catch (e) {
        console.log(e);
    }
}

/**
 * @param name: name of the file to be saved (usually the _id)
 * @param folder: folder type of the file to be saved (either legal/ or result/)
 * @param content: content of the file to be saved (text only)
 *
 * @returns status
 * **/
const createPdfFile = (name, folder, content) => {

    const pdfFile = new PDFDocument;

    pdfFile.pipe(fs.createWriteStream(path.join(__dirname, '../../../media/documents/' + folder + name + '.pdf')));

    pdfFile.text(content, {
        align: 'justify'
    });

    pdfFile.end();

}

module.exports = {
    getLicenseDoc,
    setLicenseDoc
}
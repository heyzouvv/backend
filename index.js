"use strict";
/* ini adalah file utama dimana ada proses menjalankan server backend */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* memanggil library express */
const express_1 = __importDefault(require("express"));
const validateCube_1 = require("./middleware/validateCube");
const bangunDatar_1 = __importDefault(require("./route/bangunDatar"));
const bangunRuang_1 = __importDefault(require("./route/bangunRuang"));
/* buat wadah untuk inisiasi express */
const app = (0, express_1.default)();
/* mendefinisikan PORT berjalannya servel*/
/*PORT sebuah kode yang menandakan berjalannya server */
const PORT = 8000;
/** allow to read JSON as request */
app.use(express_1.default.json());
/**proses pertama untuk handle request  */
app.get(`/serena`, (request, response) => {
    /**ini adalah proses handle request dengan
     * url/address: http://localhost:8000/serena
     * method: GET
     */
    /**memberi response */
    return response.status(200).json({
        message: `Pengajian RT 10 hebat, kuat, dan bersahaja `
    });
});
/**read a query request */
app.get(`/moklet`, (request, response) => {
    var _a, _b;
    /**asumsikan adalah nama yang dikirim adalah nama dan umur */
    let nama = (_a = request.query.nama) === null || _a === void 0 ? void 0 : _a.toString();
    let umur = (_b = request.query.umur) === null || _b === void 0 ? void 0 : _b.toString();
    let message = `My name is ${nama} and Im ${umur} years old`;
    return response.status(200).json(message);
});
/** read data request from parameter*/
app.get(`/telkom/:nama/:gender`, (request, response) => {
    let nama = request.params.nama;
    let gender = request.params.gender;
    let message = `My name is ${nama} and I'm ${gender}`;
    return response.status(200).json(message);
});
/** read a request from body */
app.post(`/moklet`, (request, response) => {
    /**asumsikan data yang dikirim adalah
     * panjang dan lebar
     */
    let panjang = request.body.panjang;
    let lebar = request.body.lebar;
    let luasPersegipanjang = panjang * lebar;
    let message = `Luas persegi Panjang adalah ${luasPersegipanjang}`;
    return response.status(200).json(message);
});
/**buatlah sebuah request untuk menginversi
 * suhu celcius ke farenheit, kelvin, dan reamur
 * menggunakan parameter
 * exp: http//localhost:8000/celcius/80
 * (80 adalah nilai celciusnya)
 * respon data ->
 * {reamur: ?,farenheit: ?, kelvin: ?}
 */
app.get(`celcius` / 80, (request, response) => {
    let celcius = request.params.celcius;
    let reamur = celcius * 4 / 5;
    let farenheit = (celcius * 9 / 5) + 32;
    let kelvin = (celcius + 273.15);
    let message = `hasil conversi dari ${celcius} celcius adalah, ${reamur}reamur , ${farenheit} farenheit, ${kelvin} kelvin`;
    return response.status(200).json(message);
});
/** create request for count volume of long cube */
app.post(`/balok`, validateCube_1.validateCube, (request, response) => {
    /**read panjang, lebar, tinggi */
    let panjang = Number(request.body.panjang);
    let lebar = Number(request.body.lebar);
    let tinggi = Number(request.body.tinggi);
    let volume = panjang * lebar * tinggi;
    return response.status(200).json({
        panjang, lebar, tinggi, volume
    });
});
/** meregister route of bangun datar */
app.use(bangunDatar_1.default);
app.use(bangunRuang_1.default);
/* run sever*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

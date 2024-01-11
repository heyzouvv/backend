/* ini adalah file utama dimana ada proses menjalankan server backend */ 

/* memanggil library express */
import express, { Request, Response } from "express" 
import { request } from "http";
import { validateCube } from "./middleware/validateCube";
import routerBangunDatar from "./route/bangunDatar"
import routerBangunRuang from "./route/bangunRuang"

/* buat wadah untuk inisiasi express */
const app = express()

/* mendefinisikan PORT berjalannya servel*/
/*PORT sebuah kode yang menandakan berjalannya server */
const PORT = 8000

/** allow to read JSON as request */
app.use(express.json())

/**proses pertama untuk handle request  */
app.get(`/serena`, (request:Request, response:Response)=> {
    /**ini adalah proses handle request dengan 
     * url/address: http://localhost:8000/serena 
     * method: GET
     */
    /**memberi response */
    return response.status(200).json({
        message: `Pengajian RT 10 hebat, kuat, dan bersahaja `
    })
});

/**read a query request */
app.get(`/moklet`,(request: Request, response:Response) => {
    /**asumsikan adalah nama yang dikirim adalah nama dan umur */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let message: string = `My name is ${nama} and Im ${umur} years old`
    return response.status(200).json(message) 
})

/** read data request from parameter*/
app.get(`/telkom/:nama/:gender`,(request:Request, response:Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let message: string = `My name is ${nama} and I'm ${gender}`
    return response.status(200).json(message)
})

/** read a request from body */
app.post(`/moklet`,(request:Request, response:Response) => {
    /**asumsikan data yang dikirim adalah 
     * panjang dan lebar
     */
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar

    let luasPersegipanjang: number = panjang*lebar
    let message = `Luas persegi Panjang adalah ${luasPersegipanjang}`
    return response.status(200).json(message)
})

/**buatlah sebuah request untuk menginversi
 * suhu celcius ke farenheit, kelvin, dan reamur
 * menggunakan parameter
 * exp: http//localhost:8000/celcius/80
 * (80 adalah nilai celciusnya)
 * respon data ->
 * {reamur: ?,farenheit: ?, kelvin: ?}
 */
app.get(`celcius/80`,(request:Request, response:Response) => {
    let celcius : any = request.params.celcius

    let reamur: any = celcius*4/5
    let farenheit: any = (celcius *9/5) +32
    let kelvin: any = (celcius +273.15)
    let message: string = `hasil conversi dari ${celcius} celcius adalah, ${reamur}reamur , ${farenheit} farenheit, ${kelvin} kelvin`
    return response.status(200).json(message)

   
})

/** create request for count volume of long cube */
app.post(`/balok, validateCube` ,(request:Request, response:Response) => {
    /**read panjang, lebar, tinggi */
    let panjang: number = Number(request.body.panjang)
    let lebar: number = Number(request.body.lebar)
    let tinggi: number = Number(request.body.tinggi)

    let volume: number = panjang * lebar * tinggi
    return response.status(200).json({
        panjang, lebar, tinggi, volume
    })
})

/** meregister route of bangun datar */
app.use(routerBangunDatar)
app.use(routerBangunRuang)

/* run sever*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
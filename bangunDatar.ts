import express from "express"
import { kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang, luasSegitiga } from "../controller/bangunDatar"
const app = express()

/**  allow read a body */
app.use(express.json())

/** fungsi use digunakan untuk menerapkan sebuah fungsi pada object express. 
 * fungsi tersebut akan otomatis dijalankan */

app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingakaran/keliling`, kelilingLingkaran)
app.post(`/Persegi/luas`,luasPersegi)
app.post(`/Persegi/keliling`,kelilingPersegi)
app.post(`PersegiPanjang/luas`,luasPersegiPanjang)
app.post(`PersegiPanjang/keliling`,kelilingPersegiPanjang)
app.post(`/Segitiga/luas`,luasSegitiga)
export default app
import express from "express"
import { volumeTabung, luaspermukaanTabung, volumeKubus, luaspermukaanKubus , volumeBalok, luaspermukaanBalok, volumeBola, luaspermukaanBola } from "../controller/bangunRuang"
const app = express()

app.use(express.json())

app.post(`/Tabung/volume`, volumeTabung)
app.post(`/Tabung/luaspermukaan`, luaspermukaanTabung)
app.post(`/Kubus/volume`,volumeKubus)
app.post(`/Kubus/luaspermukaan`,luaspermukaanKubus)
app.post(`Balok/volume`,volumeBalok)
app.post(`Balok/luaspermukaan`,luaspermukaanBalok)
app.post(`/Bola/volume`,volumeBola)
app.post(`/Bola/luaspermukaan`,luaspermukaanBola)
export default app
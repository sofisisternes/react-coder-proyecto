import { useState } from "react"
import Productos from "../mock/data.json"

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Productos)
        }, 1000)
    })
}
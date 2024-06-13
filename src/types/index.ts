export type Gasto = {
    id: string,
    categoria: string,
    fecha: Date,
    monto: number,
    descripcion: string,
}

export type GastoForm = Omit<Gasto,'id'>
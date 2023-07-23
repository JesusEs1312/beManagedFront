export interface Compra {
    id?: number,
    nombreProducto: string,
    precio: number,
    tipoProducto: string,
    cantidad: number,
    tipo: TipoCompra,
    metodo: FormasPago,
    repetido: string,
    motivo: string,
    comentario: string,
    imagen:string
}

export enum FormasPago {
    Efectivo = 'Efectivo',
    BbvaAzulita = 'BBVA Azulita',
    BbbvaAzul = 'BBVA Azul',
    Nu = 'NU',
    RappiCard = 'RAPPI CARD'
}

export enum TipoCompra {
    Habitual = 'Habitual',
    Impulsiva = 'Impulsiva',
    Ocasional = 'Ocasional',
    Proximidad = 'Proximidad',
    Descarte = 'Descarte',
    Compleja = 'Compleja'
}
export interface Compra {
    id?: number,
    nombreProducto: string,
    precio: number,
    tipoProducto: string,
    cantidad: number,
    tipo: TipoCompra,
    metodo: FormasPago,
    lugar: string,
    repetido: string,
    motivo: string,
    comentario: string,
    imagen:string
}

export enum FormasPago {
    Efectivo = 'Efectivo',
    BbvaAzulita = 'BBVA Azulita',
    BbvaAzul = 'BBVA Azul',
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

export enum TipoProducto  {
    ConvivenciaCB = 'Convivencia(consumo basico)',
    ConvivenciaI  = 'Convivencia(impulso)',
    ConvivenciaU  = 'Convivencia(urgencia)',
    Comparacion   = 'Comparacion',
    Especialidad  = 'Especialidad',
    NoBuscado     = 'No buscado'
}
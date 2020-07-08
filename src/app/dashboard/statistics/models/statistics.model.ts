//Respuesta de petición de datos para gráficas.
export interface BasicGraph {
  name: string;
  sales: string;
}

// Estructura que reciben las gráficas implementadas.
export interface GraphResult {
  name?: string;
  value?: number;
}

//Respuesta de petición de datos para tabla.
export interface Commerce {
  id: number;
  address: string;
  days: string;
  name: string;
  nit: string;
  owner: string;
  phone: string;
  sales: string;
  schedule: string;
}

// Estructura que reciben la tabla implementada.
export interface CommerceResult {
  id: number;
  address: string;
  days: string;
  name: string;
  nit: string;
  owner: string;
  phone: string;
  sales: number;
  schedule: string;
}
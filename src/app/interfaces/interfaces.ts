//Respuesta de petición de datos para gráficas.
export interface BasicGraph {
  name: string;
  sales: string;
}

// Estructura que reciben las gráficas implementadas.
export interface GraphResult {
  name: string;
  value: number;
}
//Respuesta de petición de capa de datos para mapa.
export interface Layer {
  type: string;
  features: Feature[];
}

interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

interface Geometry {
  type: string;
  coordinates: number[];
}

interface Properties {
  id?: number;
  name?: string;
  nit?: string;
  address?: string;
  phone?: string;
  owner?: string;
  schedule?: string;
  days?: string;
  sales?: string;
  icon?: string;
}
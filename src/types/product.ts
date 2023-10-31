export interface IProductoDTO {
  description: string;
  id: number;
  title: string;
  url_image: string;
  value: number;
}

export interface IProducto {
  description: string;
  id: number;
  title: string;
  url_image: string;
  value: number;
  isFavorite?: boolean;
}

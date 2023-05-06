export interface SearchInfo {
  textSnippet: string;
}
interface ImageLinks {
  thumbnail: string;
  smallThumbnail: string
}
export interface VolumeInfo {
  title?: string | undefined;
  authors?: string[] | undefined;
  subtitle?: string | undefined;
  publisher?: string | undefined;
  publishedDate?: string | undefined;
  description?: string | undefined;
  imageLinks?: ImageLinks | undefined 
}

export interface Volume {
  id: string | undefined;
  volumeInfo: VolumeInfo ;
}
export interface Response {
  kind?: string | null
  totalItems?: number | null
  items?:Volume[] | [];
}

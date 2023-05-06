export interface BookCardProps {
    isFavorite?: boolean;
    onFavoriteClick?: () => void;
  }
export interface Thumbnail {
  smallThumbnail?: string
  thumbnail?:string
}
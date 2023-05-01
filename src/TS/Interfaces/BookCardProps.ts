export interface BookCardProps {
    title: string;
    subtitle?: string;
    thumbnail?: string;
    searchInfo?: string;
    isFavorite?: boolean;
    onFavoriteClick?: () => void;
  }
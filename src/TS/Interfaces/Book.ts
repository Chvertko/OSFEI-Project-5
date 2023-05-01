export interface Book {
  id: Date
  items: {
    id: string
    volumeInfo: {
      title: string
      authors?: string[]
      publisher?: string
      publishedDate?: string
      description?: string
      pageCount?: number
      categories?: string[]
      imageLinks?: {
        smallThumbnail?: string
        thumbnail?: string
      }
    }
  }
  }  
export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  imageLinks: { thumbnail: string };
}

export interface Volume {
  id: string;
  volumeInfo: VolumeInfo;
}
export interface VolumesQueryArg {
  q: string;
}
export interface Response {
  items: Volume[];
}

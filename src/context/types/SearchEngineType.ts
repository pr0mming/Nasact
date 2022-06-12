export type PictureType = {
    nasaId: string;
    url: string;
}

export type PictureContextType = {
    pictures: PictureType[],
    setPictures: (pictures: PictureType[]) => void
}
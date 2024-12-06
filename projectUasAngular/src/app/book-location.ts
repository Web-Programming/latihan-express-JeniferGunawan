export interface BookLocation {
    id: number;
    judul: string;
    penulis: string;
    kategori: string;
    tahunTerbit: number;
    isbn: string;
    deskripsi: string;
    gambarSampul: string;
    formatDigital: boolean;
    tag?: string[]; // Optional field
}

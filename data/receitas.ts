export interface Receita {
  id: number;
  titulo: string;
  descricao: string;
  regiao: string;
  dieta: string;
  imagem: string;
  avaliacao: number;
  comentarios: string[];
}

export const receitas: Receita[] = [
  {
    id: 1,
    titulo: "Paella Valenciana",
    descricao: "Prato tradicional espanhol com arroz, frutos do mar e açafrão.",
    regiao: "Europa",
    dieta: "Omnívoro",
    imagem: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/5b475ae0-d4d3-4080-95c3-839835e5877d.jpg",
    avaliacao: 5,
    comentarios: ["Deliciosa!", "Fácil de fazer."]
  },
  {
    id: 2,
    titulo: "Feijoada Brasileira",
    descricao: "Feijão preto com carnes, tradicional do Brasil.",
    regiao: "América do Sul",
    dieta: "Omnívoro",
    imagem: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/2a730c12-abbc-4c2a-ad19-509c41db7e37.jpg",
    avaliacao: 4.5,
    comentarios: ["Autêntica!", "Perfeita para fins de semana."]
  },
  {
    id: 3,
    titulo: "Ratatouille Francesa",
    descricao: "Legumes assados ao estilo provençal.",
    regiao: "Europa",
    dieta: "Vegetariana",
    imagem: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/5d3f7f0f-57cf-47e8-927e-4aa039ab00d7.jpg",
    avaliacao: 4,
    comentarios: ["Saudável e saborosa."]
  },
  // Adicionar mais receitas conforme necessário
];
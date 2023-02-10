export const fetchRickMortyApi = async (category: string) => {
   const baseUrl: string = `https://rickandmortyapi.com/api/${category}`;
   
   const resp = await fetch(baseUrl);
   const data = await resp.json();

   return data;
}
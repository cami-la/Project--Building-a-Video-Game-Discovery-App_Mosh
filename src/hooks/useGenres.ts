import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({ data: genres, error: null, isLoading: false });

export default useGenres;

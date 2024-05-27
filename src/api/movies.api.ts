export const getMoviesBySearch = async (search: string, page: number) => {
  const response = await fetch(`http://localhost:4001/api/movies?search=${search}&page=${page}`);

  if (!response.ok) {
    throw new Error('Someting went wrong. ' + response.json());
  }

  return response.json();
};

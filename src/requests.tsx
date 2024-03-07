const apiKey = "2a41be38cf4e873b54fce8c7ff94a6f5"
const requests = {
  fetchDisney: `list/5905?api_key=${apiKey}&language=es-ES`,
  fetchDisneyClassics: `list/33?api_key=${apiKey}&language=es-ES`,
  fetchDisneyNews: `list/95101?api_key=${apiKey}&language=es-ES`,
  fetchPixar: `list/9095?api_key=${apiKey}&language=es-ES`,
  fetchNationalGeographic: `list/7067613?api_key=${apiKey}&language=es-ES`,
  fetchMarvel: `list/1?api_key=${apiKey}&language=es-ES`,
  fetchMarvelPhaseOne: `list/1271?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchMarvelPhaseTwo: `list/3204?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchMarvelPhaseThree: `list/7067552?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchToyStory: `list/7067603?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchCars: `list/7067605?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchStarWars: `list/8136?api_key=${apiKey}&language=es-ES`,
  fetchStarWarsLego: `list/7067607?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
};
export default requests;

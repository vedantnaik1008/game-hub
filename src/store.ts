import { create } from "zustand";
import { Genre } from "./entities/Genre";
import { Platform } from "./entities/Platform";
import { Publisher } from "./entities/Publisher";
import { Trailer } from "./entities/Trailer";

interface GameQuery{
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }

  interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    publishers: Publisher[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    trailers: Trailer;
}

interface GameQueryStore{
    gameQuery:  GameQuery;
    game: {
        game: Game[];  
        add: (item: Game) => void;
        remove: (id: number) => void;   
        clear: () => void;     
    }
    
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}


const useGameQueryStore = create<GameQueryStore>(set => {
    const storedGames = localStorage.getItem('games');
    const initialGames: Game[] = storedGames ? JSON.parse(storedGames) : [];
  
    return {
      gameQuery: {},
      setSearchText: (searchText) => set((store) => ({
        gameQuery: { searchText },
        game: store.game
      })),
      setGenreId: (genreId) => set(store => ({
        gameQuery: { ...store.gameQuery, genreId },
        game: store.game
      })),
      setPlatformId: (platformId) => set(store => ({
        gameQuery: { ...store.gameQuery, platformId },
        game: store.game
      })),
      setSortOrder: (sortOrder) => set((store) => ({
        gameQuery: { ...store.gameQuery, sortOrder },
        game: store.game
      })),
      game: {
        game: initialGames,
        add: (item: Game) => {
          set(store => {
            const newGame = [...store.game.game, item];
            localStorage.setItem('games', JSON.stringify(newGame));
            return {
              game: {
                ...store.game,
                game: newGame
              }
            };
          });
        },
        remove: (id: number) => {
          set(store => {
            const newGame = store.game.game.filter(game => game.id !== id);
            localStorage.setItem('games', JSON.stringify(newGame));
            return {
              game: {
                ...store.game,
                game: newGame
              }
            };
          });
        },
        clear: () => {
          set(store => {
            const newGame: Game[] = [];
            localStorage.setItem('games', JSON.stringify(newGame));
            return {
              game: {
                ...store.game,
                game: newGame
              }
            };
          });
        },
      }
    };
  });
  
 export default useGameQueryStore;
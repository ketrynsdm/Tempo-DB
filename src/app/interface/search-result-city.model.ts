import { CityResult } from "./city.result.model";

export interface SearchResultCity {
    total_count: number;
    incomplete_results: boolean,
    items: CityResult[];
  }
export interface DataInterface {
  name: string,
  gender: string,
  birth_year: string,
  height: string,
  mass: string,
  homeworld: string,
  skin_color: string,
  films: string[],
  starships: string[]
}

export interface MainPageInterface {
  isReadyData: boolean, 
  filteredData: DataInterface[], 
  dataLength: number, 
  currentPage: number, 
  setCurrentPage: any, 
  setInputValue: any,
  setDetailedInfo: any
}

export interface DetailsPageInterface {
  data: DataInterface
}

export interface PaginationInterface {
  currentPage: number,
  totalCards: number,
  setCurrentPage: any
}
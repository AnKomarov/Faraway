export interface Data {
  name: string,
  gender: string,
  birth_year: string,
  height: string,
  mass: string,
}

export interface MainPage {
  isReadyData: boolean, 
  filteredData: Data[], 
  dataLength: number, 
  currentPage: number, 
  setCurrentPage: any, 
  setInputValue: any,
  setDetailedInfo: any
}

export interface DetailsPage {
  data: Data
}
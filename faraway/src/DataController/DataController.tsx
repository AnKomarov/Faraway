export const getData = async (category: string, setState: any, setIsReadyData: any) => {
  const result = await fetch(`https://swapi.dev/api/${category}`);
  const data = await result.json();

  setState(data.results);
  setIsReadyData(true);
}

export const getDataArr = async (urls: string[], setState: any, setIsReadyData: any) => {
  const requests = urls.map((url) => fetch(url)); 
  const responses = await Promise.all(requests); 
  const promises = responses.map((response) => response.json());
  const resolvedPromises = await Promise.all(promises);

  setState(resolvedPromises);
  setIsReadyData(true);
}

export default getData;

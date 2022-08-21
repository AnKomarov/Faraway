const getData = async (category: string, setState: any, setIsReadyData: any) => {
  const result = await fetch(`https://swapi.dev/api/${category}`);
  const data = await result.json();

  setState(data.results[0]);
  setIsReadyData(true);
}

export default getData;
import {useEffect, useState} from "react";


export const filterInputData = (data, value: string) => {
  return data.filter(d => d.name.toLowerCase().includes(value.toLowerCase()))
}

export const useDebounce = (value, delay) =>  {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value]
  );

  return debouncedValue;
}

import {useEffect, useState} from "react";
import { DataInterface } from "@/Constants/Interfaces";

export const filterInputData = (data: DataInterface[], value: string) => {
  return data.filter((d: DataInterface) => d.name.toLowerCase().includes(value.toLowerCase()))
}

export const useDebounce = (value: string, delay: number) =>  {
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

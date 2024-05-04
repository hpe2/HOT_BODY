import { useEffect, useState } from "react";

// 사용자가 input 태그에 값을 입력할 때마다 api 호출을 방지하기 위해서 
// 사용자가 값을 입력하고 delay(ms)동안 다음 입력을 멈췄을 때 검색 값을 갱신하고 api를 호출하기 위한 hook
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // delay 시간이 지나면 value 값 갱신
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    }

  }, [value, delay]);

  return debouncedValue;
}

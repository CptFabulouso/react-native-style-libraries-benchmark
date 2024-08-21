import { useState } from "react";

export const COUNT = 1000;
export const ORIGINAL_COUNT = 1000;
export const BOX_SIZE = 5;

const createCountHolder = () => {
  let currentCount = COUNT;

  const listener = (() => {
    let listeners: ((count: number) => void)[] = [];

    return {
      onChange(callback: (count: number) => void) {
        listeners.push(callback);
      },
      notify(count: number) {
        listeners.forEach((callback) => callback(count));
      },
    };
  })();

  return {
    getCount() {
      return currentCount;
    },
    setCount(value: number | string) {
      const nextValue = parseInt(value.toString(), 10);
      if (!Number.isNaN(nextValue)) {
        currentCount = nextValue;
        listener.notify(nextValue);
      }
    },
    useCount() {
      const [count, setCount] = useState(currentCount);

      listener.onChange((newCount) => {
        setCount(newCount);
      });
      return count;
    },
  };
};

export const countHolder = createCountHolder();

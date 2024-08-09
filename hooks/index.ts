import { useCallback, useEffect, useRef, useState } from "react";

export const useTest = ({
  numberOfSteps = 100,
  name = "test",
  onTestComplete,
}: {
  name?: string;
  numberOfSteps?: number;
  onTestComplete?: (data: { average: number }) => void;
}) => {
  const [iteration, setIteration] = useState(0);
  const [average, setAverage] = useState(0);
  const timeStart = useRef(0);
  const testAverage = useRef(0);

  const runTest = useCallback(() => {
    testAverage.current = 0;
    timeStart.current = Date.now();
    setAverage(0);
    setIteration(1);
  }, []);

  useEffect(() => {
    if (iteration === 0) {
      return;
    }
    const stepTime = (Date.now() - timeStart.current) / 1000;
    // ignore initial render during first iteration
    if (iteration !== 1) {
      testAverage.current += stepTime;
      // console.log('iteration', iteration - 1, stepTime);
    }
    if (iteration === numberOfSteps + 1) {
      const av = testAverage.current / (iteration - 1);
      const averageRounded = Math.round(av * 1000);
      onTestComplete?.({ average: averageRounded });
      setAverage(averageRounded);
      setIteration(0);
      return;
    }

    setTimeout(() => {
      timeStart.current = Date.now();
      setIteration((c) => c + 1);
    }, 0);
  }, [iteration, name, numberOfSteps, onTestComplete]);

  return { runTest, iteration, testRunning: iteration > 0, average };
};

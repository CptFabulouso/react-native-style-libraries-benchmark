import React, { useCallback, useEffect } from "react";
import { Button, View as RNView } from "react-native";

import { staticStyles } from "./RenderTests.styles";
import { useTest } from "@/hooks";
import { COUNT } from "@/utils";

const arr = new Array(COUNT).fill(0);

export type TestComponentProps = {
  index: number;
  iteration: number;
  color: "red" | "blue";
};

type TestProps = {
  testName: string;
  testGroupName: string;
  runningTestName: string | undefined;
  onRunTest: (test: string) => void;
  onFinishTest: (t: undefined) => void;
  Component: React.FC<TestComponentProps>;
};
const TestComponent = ({
  testName,
  testGroupName,
  onRunTest,
  onFinishTest,
  runningTestName,
  Component,
}: TestProps) => {
  const handleTestComplete = useCallback(
    ({ average }: { average: number }) => {
      onFinishTest(undefined);
      // eslint-disable-next-line no-console
      console.log(
        `GROUP: ${testGroupName} TEST: ${testName} AVERAGE: ${average}`,
      );
    },
    [onFinishTest, testName],
  );

  const { iteration, runTest, testRunning, average } = useTest({
    numberOfSteps: 100,
    onTestComplete: handleTestComplete,
  });

  const handleRunTest = useCallback(() => {
    onRunTest(testName);
  }, [onRunTest, testName]);

  useEffect(() => {
    if (testName === runningTestName) {
      runTest();
    }
  }, [runTest, runningTestName, testName]);

  return (
    <RNView style={staticStyles.testContainer}>
      {testRunning &&
        arr.map((_, index) => (
          <Component
            index={index}
            iteration={iteration}
            key={index}
            color={index % 2 === (iteration % 2 === 0 ? 0 : 1) ? "red" : "blue"}
          />
        ))}
      {!runningTestName && (
        <Button
          onPress={handleRunTest}
          title={
            "Run test - " + testName + (average ? ": " + average + "ms" : "")
          }
        />
      )}
    </RNView>
  );
};

export default TestComponent;

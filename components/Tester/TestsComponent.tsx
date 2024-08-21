import React, { useCallback, useRef, useState } from "react";
import { View as RNView, Button, Text as RNText } from "react-native";

import { staticStyles } from "./RenderTests.styles";
import TestComponent, { TestComponentProps } from "./TestComponent";

export type TestsComponentProps = {
  name: string;
  tests: {
    testName: string;
    componentRender: React.FC<TestComponentProps>;
  }[];
};

const TestsComponent = ({ tests, name }: TestsComponentProps) => {
  const [runningTest, setRunningTest] = useState<string>();
  const runningAllTests = useRef(false);
  const runningTestRef = useRef(runningTest);

  const handleRunAllTests = useCallback(() => {
    runningAllTests.current = true;
    setRunningTest(tests[0].testName);
  }, [tests]);

  runningTestRef.current = runningTest;
  const handleFinishTest = useCallback(() => {
    if (runningAllTests.current) {
      const nextTestIndex =
        tests.findIndex((test) => test.testName === runningTestRef.current) + 1;
      if (nextTestIndex < tests.length) {
        setRunningTest(tests[nextTestIndex].testName);
      } else {
        runningAllTests.current = false;
        setRunningTest(undefined);
      }
    } else {
      setRunningTest(undefined);
    }
  }, [tests]);

  return (
    <RNView>
      {!!runningTest && (
        <RNText style={staticStyles.title}>Running test {runningTest}</RNText>
      )}
      <Button title="Run all tests" onPress={handleRunAllTests} />
      {tests.map((test) => (
        <TestComponent
          key={test.testName}
          testGroupName={name}
          onRunTest={setRunningTest}
          onFinishTest={handleFinishTest}
          runningTestName={runningTest}
          Component={test.componentRender}
          {...test}
        />
      ))}
    </RNView>
  );
};

export default TestsComponent;

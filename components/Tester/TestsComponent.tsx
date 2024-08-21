import React, { useCallback, useRef, useState } from "react";
import { View as RNView, Button, Text as RNText, View } from "react-native";

import { staticStyles } from "./RenderTests.styles";
import TestComponent, { TestComponentProps } from "./TestComponent";
import TimedRender from "./TimedRender";
import { countHolder } from "@/utils";

export type TestsComponentProps = {
  name: string;
  tests: {
    testName: string;
    componentRender: React.FC<TestComponentProps>;
  }[];
  OriginalTest: React.FC;
};

const TestsComponent = ({ OriginalTest, tests, name }: TestsComponentProps) => {
  const countValue = countHolder.useCount();
  const [runningTest, setRunningTest] = useState<string>();
  const runningAllTests = useRef(false);
  const runningTestRef = useRef(runningTest);
  const [runOriginal, setRunOriginal] = useState(false);

  const handleRunTest = useCallback((test: string) => {
    setRunOriginal(false);
    setRunningTest(test);
  }, []);

  const handleRunAllTests = useCallback(() => {
    runningAllTests.current = true;
    setRunningTest(tests[0].testName);
  }, [tests]);

  const handleRunOriginalTest = useCallback(() => {
    setRunOriginal(true);
    setRunningTest(undefined);
  }, []);

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
          onRunTest={handleRunTest}
          onFinishTest={handleFinishTest}
          runningTestName={runningTest}
          Component={test.componentRender}
          numberOfElements={countValue}
          {...test}
        />
      ))}
      <View style={staticStyles.testContainer}>
        <Button title="Run original test" onPress={handleRunOriginalTest} />
      </View>
      {runOriginal ? (
        <>
          <TimedRender key={name} />
          <View style={staticStyles.originalContainer}>
            {new Array(countValue).fill(0).map((_, i) => (
              <OriginalTest key={i} />
            ))}
          </View>
        </>
      ) : null}
    </RNView>
  );
};

export default TestsComponent;

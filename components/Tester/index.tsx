import TestsComponent from "./TestsComponent";
import { TestComponentProps } from "./TestComponent";

export const createTestScreen = ({
  name,
  renderInlineStyle,
  renderPredefinedStyle,
  OriginalTest,
}: {
  name: string;
  renderInlineStyle: React.FC<TestComponentProps>;
  renderPredefinedStyle?: React.FC<TestComponentProps>;
  OriginalTest: React.FC;
}) => {
  const Tests = [
    {
      testName: "Inline Style",
      componentRender: renderInlineStyle,
    },
  ];

  if (renderPredefinedStyle) {
    Tests.push({
      testName: "Predefined styles",
      componentRender: renderPredefinedStyle,
    });
  }

  return function Renderer() {
    return (
      <TestsComponent tests={Tests} name={name} OriginalTest={OriginalTest} />
    );
  };
};

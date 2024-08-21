import {
  BoxProps,
  createBox,
  createRestyleComponent,
  createVariant,
  ThemeProvider,
  VariantProps,
} from "@shopify/restyle";
import theme, { Theme } from "@/themes/restyle-theme";
import { BOX_SIZE } from "@/utils";
import { TestComponentProps } from "../Tester/TestComponent";
import { createTestScreen } from "../Tester";

const Box = createBox();

const boxVariant = createVariant<Theme, "boxVariants">({
  themeKey: "boxVariants",
});

const BoxVariant = createRestyleComponent<
  VariantProps<Theme, "boxVariants"> & BoxProps<Theme>,
  Theme
>([boxVariant], Box);

const InlineStyleRenderer = (props: TestComponentProps) => {
  return (
    <Box backgroundColor={props.color} width={BOX_SIZE} height={BOX_SIZE} />
  );
};

const PredefinedStyleRenderer = (props: TestComponentProps) => {
  return <BoxVariant variant={props.color} />;
};

const OriginalTestRenderer = () => {
  return <Box padding="xs" borderColor="red" borderWidth={2} />;
};

const TestScreen = createTestScreen({
  name: "Restyle",
  renderInlineStyle: InlineStyleRenderer,
  renderPredefinedStyle: PredefinedStyleRenderer,
  OriginalTest: OriginalTestRenderer,
});

const Restyle = () => {
  return (
    <ThemeProvider theme={theme}>
      <TestScreen />
    </ThemeProvider>
  );
};

export default Restyle;

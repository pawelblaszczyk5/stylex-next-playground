import { tokens } from "./theme.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    color: "blue",
    fontSize: tokens.fontSize,
  },
});

const HomePage = () => <h1 {...stylex.props(styles.base)}>Hello world</h1>;

export default HomePage;

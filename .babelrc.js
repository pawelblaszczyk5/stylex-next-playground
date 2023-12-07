module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: process.env.NODE_ENV === "development",
        runtimeInjection: false,
        genConditionalClasses: true,
        unstable_moduleResolution: {
          type: "experimental_crossFileParsing",
          rootDir: __dirname,
        },
      },
    ],
  ],
};

export const imgPath = (fileName: string, theme = "light") =>
  `${process.env.PUBLIC_URL}/assets/images/${theme}/${fileName}`;

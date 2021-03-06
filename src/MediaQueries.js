export const BreakPoints = {
  xs: 375,
  sm: 600,
  md: 1000,
  lg: 1300,
  xl: 1500,
};

export const MediaQuery = (key) => {
  return (style) => `@media (max-width: ${BreakPoints[key]}px) { ${style} }`;
};

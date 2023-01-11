interface JSS {
  [key: string]: string | number;
}

export const ConvertToJSS = (input: string) => {
  const css = input.split(';');
  const jss: JSS = {};
  css.forEach((line) => {
    if (line.trim() !== '') {
      const property = line.split(':')[0].trim();
      const value = line.split(':')[1].trim();

      // Convert to camelCase
      const camelCaseProperty = property.replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
      });

      jss[camelCaseProperty] = value;
    }
  });
  return jss;
};

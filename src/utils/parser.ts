export const parseJsonToInterfaces = (
  json: JSON,
  name: string = 'Root',
): string => {
  let result = `export interface ${name}{\n`;
  const interfaces: string[] = [];

  for (let key in json) {
    // @ts-ignore
    const item = json[key];
    const name = key[0].toUpperCase() + key.slice(1);

    if (typeof item === 'object' && !Array.isArray(item)) {
      interfaces.push(parseJsonToInterfaces(item, name));

      result += `  ${key} : ${name} \n`;
    } else if (Array.isArray(item)) {
      if (typeof item[0] === 'object') {
        interfaces.push(parseJsonToInterfaces(item[0], name));

        result += `  ${key} : ${name}[] \n`;
      } else {
        result += `  ${key} : ${typeof item[0]}[] \n`;
      }
    } else {
      result += `  ${key} : ${typeof item}\n`;
    }
  }

  result += '}\n';

  return result + '\n' + interfaces.join('');
};

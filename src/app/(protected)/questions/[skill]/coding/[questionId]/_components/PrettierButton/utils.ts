import prettier from 'prettier/standalone';
import { Options } from 'prettier';

const plugins = {
  html: require('prettier/plugins/html'),
  css: require('prettier/plugins/postcss'),
  babel: require('prettier/plugins/babel'),
  esTree: require('prettier/plugins/estree'),
};

const getPrettierOptions = (filename: string): Options => {
  const fileType = filename.split('.').pop();

  const defaults: Options = {
    trailingComma: 'all',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    printWidth: 80,
  };

  switch (fileType) {
    case 'html':
      return {
        parser: 'html',
        plugins: [plugins.html],
        ...defaults,
      };
    case 'css':
      return {
        parser: 'css',
        plugins: [plugins.css],
        ...defaults,
      };
    case 'jsx':
    case 'js':
      return {
        parser: 'babel',
        plugins: [plugins.babel, plugins.esTree],
        ...defaults,
      };
    default:
      return {};
  }
};

export const formatCodeWithPrettier = async (code: string, file: string) => {
  const prettierOptions = getPrettierOptions(file);
  const prettyCode = await prettier.format(code, prettierOptions);

  return prettyCode;
};

import { useActiveCode, useSandpack } from '@codesandbox/sandpack-react';
import { Options } from 'prettier';
import prettier from 'prettier/standalone';
import React from 'react';

const plugins = {
  html: require('prettier/plugins/html'),
  css: require('prettier/plugins/postcss'),
  babel: require('prettier/plugins/babel'),
  esTree: require('prettier/plugins/estree'),
};

function getPrettierOptions(filename: string): Options {
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
}

async function formatCodeWithPrettier(code: string, file: string) {
  const prettierOptions = getPrettierOptions(file);
  const prettyCode = await prettier.format(code, prettierOptions);

  return prettyCode;
}

export default function usePrettier() {
  const { code, updateCode, readOnly } = useActiveCode();
  const {
    sandpack: { activeFile },
  } = useSandpack();

  const prettify = React.useCallback(async () => {
    try {
      if (readOnly) return;

      const prettyCode = await formatCodeWithPrettier(code, activeFile);
      updateCode(prettyCode);
    } catch (e) {
      console.error(e);
    }
  }, [activeFile, code, readOnly, updateCode]);

  return { prettify, readOnly };
}

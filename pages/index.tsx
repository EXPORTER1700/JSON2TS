import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import Editor, { OnChange } from '@monaco-editor/react';
import { parseJsonToInterfaces } from 'src/utils/parser';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { ThemeTypes } from 'src/store/theme';
import { useCheckMobile } from 'src/hooks/useCheckMobile';
import { initialJson } from 'src/constants/json';
import classes from 'styles/HomePage.module.scss';

const Home: NextPage = () => {
  const [response, setResponse] = useState(() =>
    parseJsonToInterfaces(JSON.parse(initialJson)),
  );
  const { theme } = useAppSelector((state) => state.themeReducer);
  const isMobile = useCheckMobile();

  const handleEditorChange: OnChange = (value, event) => {
    try {
      if (value) {
        const parsedObject = JSON.parse(value);

        const response = parseJsonToInterfaces(parsedObject);

        setResponse(response);
      }
    } catch (error) {
      setResponse('');
    }
  };

  return (
    <div className={classes.container}>
      <p className={classes.title}>
        This service help you for create TypeScript interfaces based on JSON
      </p>
      <div
        className={classes.editors}
        style={{ flexDirection: isMobile ? 'column' : 'row' }}
      >
        <Editor
          height="65vh"
          width={isMobile ? '100%' : '48%'}
          theme={theme === ThemeTypes.LIGHT ? 'light' : 'vs-dark'}
          defaultLanguage={'json'}
          defaultValue={initialJson}
          onChange={handleEditorChange}
        />
        <Editor
          height="65vh"
          width={isMobile ? '100%' : '48%'}
          theme={theme === ThemeTypes.LIGHT ? 'light' : 'vs-dark'}
          defaultLanguage="typescript"
          defaultValue="// response"
          value={response || '// Not valid JSON'}
        />
      </div>
    </div>
  );
};

export default Home;

import type { NextPage } from 'next';
import Editor from '@monaco-editor/react';
import { initialJson } from 'src/constants/json';
import classes from 'styles/HomePage.module.scss';
import { useParser } from 'src/hooks/useParser';

const Home: NextPage = () => {
  const {
    editorTheme,
    handleEditorChange,
    editorWidth,
    editorsContainerDirection,
    response,
  } = useParser();

  return (
    <div className={classes.container}>
      <p className={classes.title}>
        This service help you for create TypeScript interfaces based on JSON
      </p>
      <div
        className={classes.editors}
        style={{ flexDirection: editorsContainerDirection }}
      >
        <Editor
          height="65vh"
          width={editorWidth}
          theme={editorTheme}
          defaultLanguage="json"
          defaultValue={initialJson}
          onChange={handleEditorChange}
        />
        <Editor
          height="65vh"
          width={editorWidth}
          theme={editorTheme}
          defaultLanguage="typescript"
          defaultValue="// response"
          value={response || '// Not valid JSON'}
        />
      </div>
    </div>
  );
};

export default Home;

import { useMemo, useState } from 'react';
import { parseJsonToInterfaces } from 'src/utils/parser';
import { initialJson } from 'src/constants/json';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useCheckMobile } from 'src/hooks/useCheckMobile';
import { OnChange } from '@monaco-editor/react';
import { ThemeTypes } from 'src/store/theme';
import { Property } from 'csstype';
import FlexDirection = Property.FlexDirection;

export const useParser = () => {
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

  const editorTheme = useMemo(() => {
    return theme === ThemeTypes.LIGHT ? 'light' : 'vs-dark';
  }, [theme]);

  const editorWidth = useMemo(() => {
    return isMobile ? '100%' : '48%';
  }, [isMobile]);

  const editorsContainerDirection = useMemo<FlexDirection>(() => {
    return isMobile ? 'column' : 'row';
  }, [isMobile]);

  return {
    response,
    editorWidth,
    editorTheme,
    editorsContainerDirection,
    handleEditorChange,
  };
};

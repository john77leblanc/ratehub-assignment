import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import { theme } from '../theme/theme';

import TodoList from './TodoList/index.js';


const CONFIG = {
  title: 'Demo',
  component: TodoList,
};

export default CONFIG;
export function Todo(args) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoList
        {...args}
      />
    </ThemeProvider>
  );
}

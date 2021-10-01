import React from 'react'
import GlobalStyle from '../theme/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

import TodoList from './TodoList'


const CONFIG = {
    title: 'Demo',
    component: TodoList,
    // argTypes: {
    //     // backgroundColor: { control: 'color' },
    // },
}

export default CONFIG;
export function Todo(args) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <TodoList 
                {...args} 
            />
        </ThemeProvider>
    )
}

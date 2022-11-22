import React from 'react';

import { ProviderProps } from '../@types/contexts/ProviderProps';

import { AppThemeProvider } from './AppColorContext';

function AppProvider({children}: ProviderProps){
    return(
        <AppThemeProvider>
            {children}
        </AppThemeProvider>
    )
}

export {AppProvider}
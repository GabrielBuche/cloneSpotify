import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThemeProvider } from 'styled-components';

import themes from '../themes';

interface AppThemeProviderProps {
    children: ReactNode;
}

interface AppThemeProps {
    isDark: boolean
    setIsDark: (value: boolean) => void
    handleChangeThemeApp: () => Promise<void>
}

const AppTheme = createContext<AppThemeProps>({} as AppThemeProps)

export function AppThemeProvider({ children }: AppThemeProviderProps) {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        async function loadData() {
            const dataIsDark = await AsyncStorage.getItem('@App:IsDarkTheme')
            dataIsDark && setIsDark(JSON.parse(dataIsDark))
        }
        loadData()
    }, [])

    async function handleChangeThemeApp() {
        await AsyncStorage.setItem(
            '@App:IsDarkTheme', JSON.stringify(!isDark)
        )
        setIsDark((prevState) => !prevState)
    }

    return (
        <AppTheme.Provider
            value={{
                isDark,
                setIsDark,
                handleChangeThemeApp
            }}
        >
            <ThemeProvider theme={isDark ? themes.darkTheme : themes.lightTheme}>
                {children}
            </ThemeProvider>

        </AppTheme.Provider>
    )
}

export function useAppTheme(){
    const context =useContext(AppTheme)
    return context;
}
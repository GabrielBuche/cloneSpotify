import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './src/contexts';
import Routes from './src/routes/index';
import themes from './src/themes';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <Routes />
        <StatusBar
          style="light"
          translucent
        />
      </AppProvider>
    </SafeAreaProvider>
  );
}

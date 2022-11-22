import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './src/contexts';
import Routes from './src/routes/index';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <Routes />
        <StatusBar />
      </AppProvider>
    </SafeAreaProvider>
  );
}

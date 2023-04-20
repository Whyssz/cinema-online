import { Navigation } from '@/navigation';
import { AuthProvider } from '@/providers/auth/AuthProvider';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style='light' />
		</>
	);
}

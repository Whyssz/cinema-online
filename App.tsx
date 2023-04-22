import { Toast } from '@/components/ui/toast';
import { Navigation } from '@/navigation';
import { AuthProvider } from '@/providers/auth/AuthProvider';
import { Query } from '@/providers/query-client';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<Query>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style='light' />
			<Toast />
		</Query>
	);
}

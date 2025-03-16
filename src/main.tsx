import { createRoot } from 'react-dom/client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from './queryClient.ts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { ServicesManagementApp } from './ServicesManagementApp.tsx';

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<ServicesManagementApp />
		<ReactQueryDevtools />
	</QueryClientProvider>
);

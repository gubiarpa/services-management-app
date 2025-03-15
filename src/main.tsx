import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { ServicesManagementApp } from './ServicesManagementApp.tsx';

createRoot(document.getElementById('root')!).render(<ServicesManagementApp />);

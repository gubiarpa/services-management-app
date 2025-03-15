import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { IoMdLogOut } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

export const MainNavbar = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate('/login', { replace: true });
	};

	return (
		<Navbar
			expand='lg'
			className='bg-body-tertiary'
			bg='dark'
			data-bs-theme='dark'
		>
			<Container>
				<Link
					className='navbar-brand'
					style={{ marginBottom: '0.1rem' }}
					to='/'
				>
					Control de Servicios
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse
					id='basic-navbar-nav'
					className='d-sm-flex'
				>
					<Nav className='me-auto'>
						<NavLink
							className='nav-item nav-link'
							to='/services'
						>
							Servicios
						</NavLink>
						<NavLink
							className='nav-item nav-link'
							to='/receipts'
						>
							Recibos
						</NavLink>
					</Nav>
					<Form>
						<Button
							variant='outline-danger'
							onClick={handleLogout}
						>
							<IoMdLogOut style={{ marginBottom: '0.1rem', marginRight: '0.3rem' }} />
							Salir
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

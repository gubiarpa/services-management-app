import { Button, Form, InputGroup, ListGroup } from 'react-bootstrap';
import { useAccount } from '../../hooks/account';
import { Account } from '../../types/account';

import { LuUser } from 'react-icons/lu';
import { MdOutlinePhone } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import { IoHomeOutline } from 'react-icons/io5';
import { GoKey } from 'react-icons/go';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';

export const PageAccount = () => {
	const { isLoading, isError, data } = useAccount();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	const account = data as Account;

	return (
		<Form className='mt-3'>
			{/* Nombre */}
			<Form.Group
				className='mb-3'
				controlId='formBasicEmail'
			>
				<Form.Label className='ms-2'>
					<LuUser style={{ marginBottom: '0.2rem', marginRight: '0.5rem' }} />
					Nombre
				</Form.Label>
				<Form.Control
					type='text'
					placeholder='Ej. Isaac Newton'
					value={account.fullname}
					readOnly
				/>
				{!account.fullname && <Form.Text className='text-muted'>No se ha registrado un nombre completo.</Form.Text>}
			</Form.Group>

			{/* Teléfono */}
			<Form.Group
				className='mb-3'
				controlId='formBasicEmail'
			>
				<Form.Label className='ms-2'>
					<MdOutlinePhone style={{ marginBottom: '0.2rem', marginRight: '0.5rem' }} />
					Teléfono
				</Form.Label>
				<InputGroup>
					<Form.Control
						type='tel'
						placeholder='Ej. +51987654321'
						value={account.phone.value}
						readOnly
					/>
					<Button
						variant={account.phone.verified ? 'outline-secondary' : 'outline-success'}
						disabled={account.phone.verified}
					>
						<IoShieldCheckmarkOutline style={{ marginBottom: '0.1rem' }} />
						{!account.phone.verified && <span style={{ marginLeft: '0.3rem' }}>Verificar</span>}
					</Button>
				</InputGroup>
			</Form.Group>

			{/* Email */}
			<Form.Group
				className='mb-3'
				controlId='formBasicEmail'
			>
				<Form.Label className='ms-2'>
					<CiMail style={{ marginBottom: '0.2rem', marginRight: '0.5rem' }} />
					Correo electrónico
				</Form.Label>
				<InputGroup>
					<Form.Control
						type='tel'
						placeholder='Ej. +51987654321'
						value={account.email.value}
						readOnly
					/>
					<Button
						variant={account.email.verified ? 'outline-secondary' : 'outline-success'}
						disabled={account.email.verified}
					>
						<IoShieldCheckmarkOutline style={{ marginBottom: '0.1rem' }} />
						{!account.phone.verified && <span style={{ marginLeft: '0.3rem' }}>Verificar</span>}
					</Button>
				</InputGroup>
			</Form.Group>

			{/* Buildings */}
			<Form.Group
				className='mb-3'
				controlId='formBasicEmail'
			>
				<Form.Label className='ms-2'>
					<IoHomeOutline style={{ marginBottom: '0.2rem', marginRight: '0.5rem' }} />
					Domicilio{account.buildings.length > 1 && 's'}
				</Form.Label>
				<ListGroup>
					{account.buildings.map((building, index) => (
						<ListGroup.Item key={index}>{building}</ListGroup.Item>
					))}
				</ListGroup>
			</Form.Group>

			{/* Roles */}
			<Form.Group
				className='mb-3'
				controlId='formBasicEmail'
			>
				<Form.Label className='ms-2'>
					<GoKey style={{ marginBottom: '0.2rem', marginRight: '0.5rem' }} />
					Roles
				</Form.Label>
				<ListGroup>
					{account.roles.map((role, index) => (
						<ListGroup.Item key={index}>{role}</ListGroup.Item>
					))}
				</ListGroup>
			</Form.Group>
			<Button
				variant='primary'
				type='submit'
			>
				Submit
			</Button>
		</Form>
	);
};

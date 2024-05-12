import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
	const sessionToken = cookies().get('next-auth.session-token');
	if (sessionToken) {
		redirect('/dashboard');
	}
	return <RegisterForm />
};

export default RegisterPage;

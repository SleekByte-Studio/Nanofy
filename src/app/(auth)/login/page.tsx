import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import LoginForm from './LoginForm';

const LoginPage = () => {
	const sessionToken = cookies().get('next-auth.session-token');
	if (sessionToken) {
		redirect('/dashboard');
	}

	return <LoginForm />;
};

export default LoginPage;

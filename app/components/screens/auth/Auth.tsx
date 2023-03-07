import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Meta } from 'utils/meta/Meta';

import styles from './Auth.module.scss';
import { AuthFields } from './AuthFields';
import { IAuthInput } from './auth.interface';
import { useAuthRedirect } from './useAuthRedirect';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useIsAuth';
import { Button } from '@/ui/form-element/button/Button';
import { Heading } from '@/ui/heading/Heading';

const Auth: FC = () => {
	useAuthRedirect();

	const { isLoading } = useAuth();
	const [type, setType] = useState<'loading' | 'register'>('loading');

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({ mode: 'onChange' });

	const { login, register } = useActions();

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'loading') {
			login(data);
		} else {
			register(data);
		}

		reset();
	};

	return (
		<>
			<Meta title="Auth"></Meta>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('loading')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Auth;

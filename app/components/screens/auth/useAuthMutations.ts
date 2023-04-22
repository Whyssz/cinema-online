import { constAuth } from '@/config/query.config';
import { useAuth } from '@/hooks/useAuth';
import { AuthService } from '@/service/auth/auth.service';
import { IAuthFormData } from '@/shared/types/auth.interface';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { UseFormReset } from 'react-hook-form';

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth();

	const { mutate: loginSync, isLoading: isLoginLoading } = useMutation(
		[constAuth.login],
		({ email, password }: IAuthFormData) =>
			AuthService.main('login', email, password),
		{
			onSuccess: data => {
				setTimeout(() => {
					setUser(data.user);
					reset();
				});
			},
		}
	);

	const { mutate: registerSync, isLoading: isRegisterLoading } = useMutation(
		[constAuth.register],
		({ email, password }: IAuthFormData) =>
			AuthService.main('reg', email, password),
		{
			onSuccess: data => {
				setTimeout(() => {
					setUser(data.user);
					reset();
				});
			},
		}
	);

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading,
		}),
		[isLoginLoading, isRegisterLoading]
	);
};

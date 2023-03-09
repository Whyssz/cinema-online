import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'api/api-helper';
import { toastr } from 'react-redux-toastr';
import { toastrError } from 'utils/toastr/toaster-error';

import { IAuthResponse, IEmailPassword } from './user.interface';
import { AuthService } from '@/services/auth/auth.service';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkAPi) => {
		try {
			const response = await AuthService.register(email, password);
			toastr.success('Registration', 'Successfully completed!');
			return response.data;
		} catch (error) {
			toastrError(error);
			return thunkAPi.rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkAPi) => {
		try {
			const response = await AuthService.login(email, password);
			toastr.success('Login', 'Successfully completed!');

			return response.data;
		} catch (error) {
			toastrError(error);
			return thunkAPi.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	AuthService.logout();
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPi) => {
		try {
			const response = await AuthService.getNewToken();
			return response.data;
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorization is finished, please sign in again.'
				);
				thunkAPi.dispatch(logout());
			}
			return thunkAPi.rejectWithValue(error);
		}
	}
);

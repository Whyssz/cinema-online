import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Meta } from 'utils/meta/Meta';

import { AuthFields } from '../auth/AuthFields';

import styles from './Profile.module.scss';
import { IProfileInput } from './profile.interface';
import { useProfile } from './useProfile';
import { Button } from '@/components/ui/form-element/button/Button';
import { SkeletonLoading } from '@/components/ui/heading/SkeletonLoading';
import { Heading } from '@/ui/heading/Heading';

const Profile: FC = () => {
	const { handleSubmit, setValue, register, formState } =
		useForm<IProfileInput>({ mode: 'onChange' });

	const { isLoading, onSubmit } = useProfile(setValue);

	return (
		<Meta title="Profile">
			<Heading title="Profile" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoading count={2} />
				) : (
					<>
						<AuthFields formState={formState} register={register} />
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};

export default Profile;

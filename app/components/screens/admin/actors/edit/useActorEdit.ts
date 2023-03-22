import { useRouter } from 'next/router';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';
import { getKeys } from 'utils/object/getKeys';
import { toastrError } from 'utils/toastr/toaster-error';

import { IActorEditInput } from './actor-edit.interface';
import { adminUpdActor } from '@/config/constantsQuery';
import { getAdminUrl } from '@/config/url.config';
import { ActorService } from '@/services/actor.service';

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { query, push } = useRouter();

	const actorId = String(query.id);

	const { isLoading } = useQuery(
		[actorId, actorId],
		() => ActorService.getById(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => setValue(key, data[key]));
			},
			onError: (error) => {
				toastrError(error, 'Get actor');
			},
			enabled: !!actorId,
		}
	);

	const { mutateAsync } = useMutation(
		adminUpdActor,
		(data: IActorEditInput) => ActorService.update(actorId, data),
		{
			onSuccess: () => {
				toastr.success('Actor update', 'Update was successful');
				push(getAdminUrl('actors'));
			},
			onError: (error) => {
				toastrError(error, 'Actor update');
			},
		}
	);

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data);
	};

	return { isLoading, onSubmit };
};

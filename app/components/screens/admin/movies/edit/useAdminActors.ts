import { useQuery } from 'react-query';
import { toastrError } from 'utils/toastr/toaster-error';

import { listActors } from '@/config/constantsQuery';
import { ActorService } from '@/services/actor.service';
import { IOption } from '@/ui/form-element/select/select-interface';

export const useAdminActors = () => {
	const queryData = useQuery(listActors, () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor): IOption => ({
					value: actor._id,
					label: actor.name,
				})
			),
		onError: (error) => {
			toastrError(error, 'Select by actors');
		},
	});

	return queryData;
};

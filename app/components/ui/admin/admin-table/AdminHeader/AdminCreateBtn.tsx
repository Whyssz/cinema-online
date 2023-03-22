import { FC } from 'react';

import { Button } from '@/ui/form-element/button/Button';

export const AdminCreateBtn: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <Button onClick={onClick}>Create new</Button>;
};

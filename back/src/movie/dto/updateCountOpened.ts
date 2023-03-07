import { IsNotEmpty } from 'class-validator';

export class UpdateCountOpened {
	@IsNotEmpty({ message: 'Empty slug' })
	slug: string;
}

import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCountOpened {
	@IsString()
	slug: string;
}

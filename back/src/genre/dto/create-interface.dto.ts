import { IsString } from 'class-validator';

export class CreateGenreDto {
	@IsString()
	name: string;
 
	@IsString()
	slug: string;

	@IsString()
	icon: string;

	@IsString()
	description: string;
}

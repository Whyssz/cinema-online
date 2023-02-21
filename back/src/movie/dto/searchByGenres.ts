import { IsNotEmpty, MinLength } from 'class-validator';
import { Types } from 'mongoose';

export class SearchByGenreIds {
	@IsNotEmpty()
	@MinLength(24, { each: true })
	genreIds: Types.ObjectId[];
}

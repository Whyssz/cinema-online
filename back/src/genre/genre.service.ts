import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateGenreDto } from './dto/create-interface.dto';
import { GenreModel } from './genre.model';

@Injectable()
export class GenreService {
	constructor(
		@InjectModel(GenreModel) private readonly GenreModel: ModelType<GenreModel>
	) {}

	async bySlug(slug: string) {
		return await this.GenreModel.findOne({ slug }).exec();
	}

	async getAll(searchTerm?: string) {
		let options = {};

		if (options) {
			options = {
				$or: [
					{
						name: new RegExp(searchTerm, 'i'),
					},
					{
						slug: new RegExp(searchTerm, 'i'),
					},
					{
						description: new RegExp(searchTerm, 'i'),
					},
				],
			};
		}

		return this.GenreModel.find(options).select('-updatedAt -__v').sort({
			createdAt: 'desc',
		});
	}

	// Admin place

	async byId(_id: string) {
		const genre = await this.GenreModel.findById(_id);

		if (!genre) throw new NotFoundException('Genre not found!');

		return genre;
	}

	async create() {
		const defaultValue: CreateGenreDto = {
			name: '',
			slug: '',
			icon: '',
			description: '',
		};
		const genre = await await this.GenreModel.create(defaultValue);

		return genre._id;
	}

	async getCollections() {
		const genre = this.getAll();
		const collections = genre;
		// Need will write

		return collections;
	}

	async update(_id: string, dto: CreateGenreDto) {
		const updateDoc = await this.GenreModel.findByIdAndUpdate(_id, dto, {
			new: true,
		}).exec();

		if (!updateDoc) throw new NotFoundException('Genre not found');

		return updateDoc;
	}

	async delete(id: string) {
		const deleteDoc = await this.GenreModel.findByIdAndDelete(id).exec();

		if (!deleteDoc) throw new NotFoundException('Genre not found');

		return deleteDoc;
	}
}

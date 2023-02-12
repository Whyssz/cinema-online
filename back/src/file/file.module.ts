import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}`,
			serveRoot: '/uploads',
		}),
	],
	providers: [FileService],
	controllers: [FileController],
})
export class FileModule {}

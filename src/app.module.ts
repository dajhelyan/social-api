import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
// import { MongooseModule } from '@nestjs/mongoose';

import { PostsModule } from './posts/posts.module';
import { join } from 'path';

@Module({
  imports: [
    PostsModule,
    // config of path autoschema
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    // mongoDb setup conecction
    // MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

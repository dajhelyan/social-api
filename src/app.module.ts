import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
// import { MongooseModule } from '@nestjs/mongoose';

import { PostsModule } from './posts/posts.module';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // config of path autoschema
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // playground: true,
    }),
    // mongoDb setup conecction
    MongooseModule.forRoot(
      'mongodb+srv://user:9rMR6D1BNu46XPTa@cluster0.gmqdp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

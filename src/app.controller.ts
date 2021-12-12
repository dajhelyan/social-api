import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // Get route /new
  // @Get('new')
  // newEndpoind() {
  //   return 'My first get on nest';
  // }

  // @Get('hola')
  // getPosts() {
  //   return 'My first get on post';
  // }

  // Get with params
  // @Get('posts/:id')
  // getPost(@Param('id') id: string) {
  //   return `post/${id}`;
  // }
}

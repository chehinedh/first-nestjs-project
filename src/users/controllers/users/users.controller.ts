import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Chehine', email: 'chehine@gmail.com' };
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Chehine',
        email: 'chehine@gmail.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: [],
      },
    ];
  }

  @Post('create')
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('Created');
  }
}

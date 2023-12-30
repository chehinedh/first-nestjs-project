import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
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
  createUser(@Body() userData: createUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id);
    return { id, postId };
  }
}

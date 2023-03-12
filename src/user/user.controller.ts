import { Body, Controller, Get, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { Serialize} from 'src/interceptors/serializer-interceptor';
import { UserRequest } from './dto/user-request';
import { UserResponse } from './dto/user-response';
import { UserService } from './user.service';

@Controller('user')
@Serialize(UserResponse)
export class UserController {

    constructor(private userService: UserService) { }

    @Post("/signup")
    createUser(@Body() userRequest: UserRequest): string {
        console.log(userRequest);
        return this.userService.createUser(userRequest);
    }

    @Get("/all")
    getUsers(@Query('email') email: string) {
        console.log(email)
        return this.userService.getUsers(email);
    }

    @Serialize(UserResponse)
    @Get("/:id")
    getUser(@Param('id') id: string) {
        return this.userService.findUser(Number(id))
    }
}

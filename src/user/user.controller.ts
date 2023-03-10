import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserRequest } from './dto/user-request';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Post("/signup")
    createUser(@Body() userRequest: UserRequest): string {
        console.log(userRequest);
        return this.userService.createUser(userRequest);
    }

    @Get("/all")
    getUsers() {
        return this.userService.getUsers();
    }

    @Get("/:id")
    getUser(@Param() id: number) {
        return this.userService.findUser(id)
    }
}

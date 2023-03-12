import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsUtils, Repository } from 'typeorm';
import { UserRequest } from './dto/user-request';
import { User } from './user-entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(req: UserRequest): string {
        const email = req.email;
        const password = req.password;
        const user = this.userRepository.create({ email, password });
        this.userRepository.save(user);
        console.log("User Saved")
        return "User Created Successfully"
    }

    async findUser(id: number) {
        const user = await this.userRepository.findOneBy(id);
        if (!user) {
            throw new NotFoundException(`User with ${id} not found`);
        } else {
            return user;
        }
    }

    async getUsers(email:string) {
        return await this.userRepository.findBy({email})
    }

    async updateUser(id: number, attr: Partial<User>) {
        const user = this.userRepository.findOneBy(id);
        if (!user) throw new NotFoundException();
        Object.assign(user, attr);
        return this.userRepository.save(user);
    }
}

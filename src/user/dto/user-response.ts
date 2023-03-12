import { Expose } from "class-transformer";

export class UserResponse {
    @Expose()
    public id: number;
    @Expose()
    public email: string
}
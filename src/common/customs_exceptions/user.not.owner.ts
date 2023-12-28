import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotOwner extends HttpException {
    constructor(idT: number) {
      super('The user is not the owner of task: '+idT+'.', HttpStatus.UNAUTHORIZED);
    }
}
import { HttpException, HttpStatus } from "@nestjs/common";

export class IdNotFound extends HttpException {
    constructor(id: number) {
      super('The id: '+id+', not exists.', HttpStatus.NOT_FOUND);
    }
}
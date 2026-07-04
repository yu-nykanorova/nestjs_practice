import { Request } from 'express';
import { IJWTPayload } from './jwt-payload.interface';

export interface IUserRequest extends Request {
  user: IJWTPayload;
}

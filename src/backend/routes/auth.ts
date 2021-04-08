import { Request, Response, NextFunction } from 'express';
import * as User from '../controllers/user';

export class AuthRouter {

  public authRouter(app): void {
    app.route('/api/user/register').post((req: Request, res: Response, next: NextFunction) => {
      User.register(req, res);
    });

    app.route('/api/user/login').post((req: Request, res: Response, next: NextFunction) => {
      User.login(req, res);
    });

  }

}

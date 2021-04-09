import { Request, Response, NextFunction } from 'express';
import * as User from '../controllers/user';

export class AuthRoute {

  public authRouter(app:any): void {
    app.route('/api/user/register').post((req: Request, res: Response, next: NextFunction) => {
      User.register(req, res);
    });

    app.route('/api/user/login').post((req: Request, res: Response, next: NextFunction) => {
      User.login(req, res);
    });

  }

}

import { Request, Response, NextFunction } from 'express';
import * as User from '../controllers/user';
import * as express from 'express';
import auth from './verifyToken';
export class AuthRoute {

  public authRouter(app: express.Application): void {
    app.route('/api/user/register').post((req: Request, res: Response, next: NextFunction) => {
      User.register(req, res);
    });

    app.route('/api/user/login').post((req: Request, res: Response, next: NextFunction) => {
      User.login(req, res);
    });

    app.route('/api/user/verify')
      .post((req: Request, res: Response, next: NextFunction) => {

        auth(req, res, next);
    },
      (req: Request, res: Response, next: NextFunction) => {
        res.send({isAuthenticated: true});
      });
  }

}

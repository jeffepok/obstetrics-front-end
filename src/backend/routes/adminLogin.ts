import { Request, Response, NextFunction } from 'express';


export class AdminLoginRoute {

  public adminLoginRoute(app): void {
    app.route('/').get((req: Request, res: Response, next: NextFunction) => {
      res.render('index', { title: 'Admin Panel' });
    });
  }
  
}

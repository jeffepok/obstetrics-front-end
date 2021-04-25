import { Request, Response, NextFunction } from 'express';
import * as PregnantWoman from '../controllers/pregnantWoman';
import auth from './verifyToken';
import * as express from 'express';
export class PregnantWomanRoute {
  public pregnantWomanRouter(app: express.Application): void {
    app.route('/api/biodata/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response) => {
        PregnantWoman.updateBiodata(req, res);
      }
    );

    app.route('/api/antenatalrecord/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.updateAntenatalRecord(req, res);
      }
    );
    app.route('/api/currentpregnancy/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.updateCurrentPregnancy(req, res);
      }
    );
    app.route('/api/familyhistory/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.updateFamilyHistory(req, res);
      }
    );
    app.route('/api/maternalmedicalhistory/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.updateMaternalMedicalHistory(req, res);
      }
    );
    app.route('/api/medicalstaff/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.updateMedicalStaff(req, res);
      }
    );
    app.route('/api/obstetrichistory/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.updateObstetricHistory(req, res);
      }
    );
    app.route('/api/pregnancyhistory/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.updatePregnancyHistory(req, res);
      }
    );
    app.route('/api/pregnancyinvestigation/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.updatePregnancyInvestigation(req, res);
      }
    );
    app.route('/api/socialhistory/update').post(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.updateSocialHistory(req, res);
      }
    );
    app.route('/api/pregnantwoman/fetch').get(
      (req: Request, res: Response, next: NextFunction) => {
        auth(req, res, next);
      },
      (req: Request, res: Response, next: NextFunction) => {
        PregnantWoman.fetchPregnantWomanData(req, res, "")
      }
    )
  }
}

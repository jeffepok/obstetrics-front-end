import { Request, Response, NextFunction } from 'express';
import * as User from '../controllers/user';
import * as PregnantWoman from '../controllers/pregnantWoman';

export class PregnantWomanRoute {

  public pregnantWomanRouter(app): void {
    app.route('/api/biodata/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updateBiodata(req,res);
    });

    app.route('/api/antenatalrecord/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updateAntenatalRecord(req, res);
    });
    app.route('/api/currentpregnancy/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updateCurrentPregnancy(req, res);
    });
    app.route('/api/familyhistory/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updateFamilyHistory(req, res);
    });
    app.route('/api/maternalmedicalhistory/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updateMaternalMedicalHistory(req, res);
    });
    app.route('/api/medicalstaff/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updateMedicalStaff(req, res);
    });
    app.route('/api/obstetrichistory/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updateObstetricHistory(req, res);
    });
    app.route('/api/pregnancyhistory/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updatePregnancyHistory(req, res);
    });
    app.route('/api/pregnancyinvestigation/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updatePregnancyInvestigation(req, res);
    });
    app.route('/api/socialhistory/update').post((req: Request, res: Response, next: NextFunction) => {
      PregnantWoman.updateSocialHistory(req, res);
    });
  }

}

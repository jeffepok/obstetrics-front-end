// Import models
import PregnantWoman from '../models/PregnantWoman';
import FamilyHistory from '../models/FamilyHistory';
import ObstetricHistory from '../models/ObstetricHistory';
import MaternalMedicalHistory from '../models/MaternalMedicalHistory';
import HIVHBRoutineRecord from '../models/HIVHBRoutineRecord';
import PregnancyHistory from '../models/PregnancyHistory';
import PregnancyInvestigation from '../models/PregnancyInvestigation';
import AntenatalRecord from '../models/AntenatalRecord';
import MedicalStaff from '../models/MedicalStaff';
import SocialHistory from '../models/SocialHistory';
import CurrentPregnancy from '../models/CurrentPregnancy';
import User from '../models/User';

// An async function that updates the pregnant woman data
async function updatePregnantWomanData(req: any, field: any, model: any){
    const user: any = await User.findById(req.user._id);
    // Get the pregnant woman collection
    const pregnantWoman = await PregnantWoman.findById(user.pregnantWoman._id);
    // Check if there is data in that field already
    if (!pregnantWoman[field]){
        // If there is no field create an empty object
        let newData: any = {};
        // loop through the request body and assign the data to the newData object created
        for (const field of Object.keys(req.body)) {
            newData[field] = req.body[field];
        }
        // Assign the pregnant woman field of the new data field with id of the user's pregnant woman field
        // This is done to establish a relationship between the smaller data and the big big pregnant woman data
        newData.pregnantWoman = user.pregnantWoman._id;
        // Create a model of the new data
        newData = new model(newData);
        // Save to database
        await newData.save();
        // Assign the new data to the field in the pregnant woman
        pregnantWoman[field] = newData;
        // Save the pregnant woman to database
        await pregnantWoman.save();
    }
    else{
        // if the field exist already get the field object from the model using the id from the pregnant woman
        field = await model.findById(pregnantWoman[field]);

        // loop through the keys of request body and update the model parameter one after the other
        for (const fieldOfRequest of Object.keys(req.body)) {
            await model.updateOne({_id: field._id}, {[fieldOfRequest] : req.body[fieldOfRequest]});
        }
    }
}

export async function fetchPregnantWomanData(req: any, res:any, model:any){

  const user: any = await User.findById(req.user._id);
  const pregnantWoman = await PregnantWoman.findById(user.pregnantWoman._id);

  res.status(200).send(pregnantWoman);
}

export async function updateBiodata(req: any, res: any): Promise<any>{

        const user: any = await User.findById(req.user._id);
        if (!user.pregnantWoman){
            let pregnantWoman: any = {};
            for (const field of Object.keys(req.body)) {
                pregnantWoman[field] = req.body[field];
            }
            pregnantWoman = new PregnantWoman(pregnantWoman);
            await pregnantWoman.save();
            user.pregnantWoman = pregnantWoman;
            await user.save();
            res.status(200).send('Created new biodata');
        }
        else{
            const pregnantWoman = await PregnantWoman.findById(user.pregnantWoman);
            for (const field of Object.keys(req.body)) {
                await PregnantWoman.updateOne({_id: pregnantWoman._id}, {[field] : req.body[field]});
            }
            res.status(200).send('Updated biodata');
        }

    }
export async function updateFamilyHistory(req: any, res: any){
        await updatePregnantWomanData(req, 'familyHistory', FamilyHistory);
        res.status(200).send('Updated familyHistory');
    }
export async function updateObstetricHistory(req: any, res: any){
        await updatePregnantWomanData(req, 'obstetricHistory', ObstetricHistory);
        res.status(200).send('Updated obstetricHistory');
    }
export async function updateMaternalMedicalHistory(req: any, res: any){
        await updatePregnantWomanData(req, 'maternalMedicalHistory', MaternalMedicalHistory);
        res.status(200).send('Updated maternalMedicalHistory');
    }
export async function updateHIVHBRoutineRecord(req: any, res: any){
        await updatePregnantWomanData(req, 'hIVHBRoutineRecord', HIVHBRoutineRecord);
        res.status(200).send('Updated HIVHBRoutineRecord');
    }
export async function updatePregnancyHistory(req: any, res: any){
        await updatePregnantWomanData(req, 'pregnancyHistory', PregnancyHistory);
        res.status(200).send('Updated pregnancyHistory');
    }
export async function updatePregnancyInvestigation(req: any, res: any){
        await updatePregnantWomanData(req, 'pregnancyInvestigation', PregnancyInvestigation);
        res.status(200).send('Updated pregnancyInvestigation');

    }
export async function updateAntenatalRecord(req: any, res: any){
        await updatePregnantWomanData(req, 'antenatalRecord', AntenatalRecord);
        res.status(200).send('Updated antenatalRecord');

    }
export async function updateMedicalStaff(req: any, res: any){
        await updatePregnantWomanData(req, 'medicalStaff', MedicalStaff);
        res.status(200).send('Updated medicalStaff');

    }
export async function updateSocialHistory(req: any, res: any){
        await updatePregnantWomanData(req, 'socialHistory', SocialHistory);
        res.status(200).send('Updated socialHistory');

    }
export async function updateCurrentPregnancy(req: any, res: any){
        await updatePregnantWomanData(req, 'currentPregnancy', CurrentPregnancy);
        res.status(200).send('Updated currentPregnancy');

    }



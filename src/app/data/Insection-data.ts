import { Inspection } from "./Inspection";

let inspections: Array<Inspection> = []


function addNewInspection(newInspection : Inspection) {
    newInspection.id = inspections.length + 1;
    inspections.push(newInspection);
}


function getInspectionById(inspectionId : number) {
    const findInspection = inspections.find((data) => data.id === inspectionId )

    return findInspection;
}

function removeInspection(inspectionId : number) {
    const findInspection = getInspectionById(inspectionId);

    if (findInspection as Inspection) {
        inspections.filter((data) => data.id === inspectionId );

        return true;
    }

    return false;
}

function getAll() {
    return inspections;
}

function updateInspection(updateValue : Inspection) {
    inspections = inspections.map((item) => {
        if(item.id === updateValue.id){
            return {...item, ...updateValue}
        }
        return {...item}
    })
}


export const InspectionData = {addNewInspection, getInspectionById, removeInspection, getAll, updateInspection}
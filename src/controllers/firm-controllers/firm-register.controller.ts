import { Request, Response } from "express";
import _ from "lodash";
import prisma from "../../config/db";
import { handleBadRequestResponse, handleSuccessResponse } from "../../helpers/responses";
import { registerValidationSchema } from "../../validation/firm-schema.validation";
import { bcryptPassword } from "../../helpers/generative";
import { ZodError } from "zod";

const FirmRegister = async (req: Request, res: Response) => {
    try {
        const receivedData =  registerValidationSchema.parse(req.body);

        const { name, industryType, companyType, numberOfStaff, email, password, contactNumber, address, zipCode } = receivedData
        
        // search if firm alredy exist 
        const doesFirmExist = await prisma.firm.findUnique({
            where:{
                email:email
            }
        })
        
        if(doesFirmExist){
            return handleBadRequestResponse(res, "Firm Alredy Exists");
        }
         //hashing password with bcrypt
        const hashedPassword = await bcryptPassword(password)

        const registerFirm = await prisma.firm.create({
            data: {
                name,
                industryType,
                companyType,
                numberOfStaff,
                email,
                password:hashedPassword,
                contactNumber,
                address,
                zipCode
            }
        });

        if (!registerFirm) {
            return handleBadRequestResponse(res, "Failed to register firm");
        }

        // Omit password field from response object
        const updatedDataObj = _.omit(registerFirm,["password"]);
        
        return handleSuccessResponse(res, 200, "Firm registered successfully", updatedDataObj);
        
    } catch (error) {
        // Handle ZodError specifically
        if (error instanceof ZodError) {
            return handleBadRequestResponse(res, error.errors);
        }
        // Log and handle other errors
        console.error("Error registering firm:", error);
        return handleBadRequestResponse(res, "Something went wrong");
    }
};

export  {
    FirmRegister
};

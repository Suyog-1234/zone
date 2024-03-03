import { Response } from 'express';

// Function for handling success responses
export const handleSuccessResponse = (res: Response, statusCode: number, message: any, data: any) => {
    return res.status(statusCode).json({ success: true, message, data });
};

// Function for handling unauthorized responses
export const handleUnauthorizedResponse = (res: Response, message: any) => {
    return res.status(401).json({ success: false, message });
};

// Function for handling forbidden responses
export const handleForbiddenResponse = (res: Response, message: any) => {
    return res.status(403).json({ success: false, message });
};

// Function for handling bad request responses
export const handleBadRequestResponse = (res: Response, message: any) => {
    return res.status(400).json({ success: false, message });
};


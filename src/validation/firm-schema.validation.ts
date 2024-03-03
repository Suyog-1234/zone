import {number, object, string} from "zod";

export const registerValidationSchema = object({
    name:string({required_error:"name is required"}),
    industryType:string({required_error:"industryType is required"}),
    companyType:string({required_error:"companyType is required"}),
    numberOfStaff:number({required_error:"numberOfStaff is required"}),
    email:string({required_error:"email is required"}).email("not a valid email"),
    password:string({required_error:"password is required"}).min(6,"password is too short"),
    contactNumber:string({required_error:"contactNumber is required"}),
    address:string({required_error:"address is required"}),
    zipCode:string({required_error:"zipCode is required"})
})

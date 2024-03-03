import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const bcryptPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword
}

export const comparePassword = async (password: string, hashedPassword: string) => {
    const doesMatched = bcrypt.compare(password, hashedPassword);
    return doesMatched
}

export const generateOtp = (length: number) => {
    var chars = "0123456789";
    var otp = "";
    for (var i = 0; i < length; i++) {
        otp += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return otp;
}

export const generateAccessToken = (id:string) => {
    const token = jwt.sign({
        data: id
    }, process.env.ACCESS_TOKEN_SECRETE!);
    return token
}

export const generateRefreshToken = (id:string) => {
    const token = jwt.sign({
        data: id
    }, process.env.REFRESH_TOKEN_SECRETE!);
    return token
}
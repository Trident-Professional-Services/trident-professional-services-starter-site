import { FluidObject } from "gatsby-image";
export default interface IContactPersonProps {
    name: string;
    profileImage?: FluidObject;
    title: string;
    emailAddress: string;
    telephone?: string;
    linkedIn?: string;
    twitter?: string;
}

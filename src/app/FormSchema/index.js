import * as Yup from 'yup';

export const profileSchema= Yup.object({
    firstName:Yup.string().min(2).max(25).required("Please enter your first name"),
    lastName: Yup.string().min(2).max(25).required("Please enter your last name"),
    email: Yup.string().email().required("Please enter your email"),
    phone:Yup.number().min(10).required("Please enter valid phone number"),
    password:Yup.string().min(6).required("password must atleast 6 charactor"),
    colledge_start:Yup.date().required("Please enter your start date"),
    colledge_end:Yup.date().required("Please en ter your end date"),
    file:Yup.string().required("Please upload file"),
})
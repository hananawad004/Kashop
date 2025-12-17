import * as yup from 'yup';
const SendCodeSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email is required"),
});
export default SendCodeSchema
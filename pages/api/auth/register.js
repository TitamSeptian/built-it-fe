import axios from "axios";

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            return await register(req, res);
        default:
            return res.status(400).json({ message: "bad request" });
    }
}

const register = async (req, res) => {
    const {
        email,
        password,
        firstName,
        lastName,
        passwordConfirmation,
        phone,
        address,
    } = req.body;
    try {
        // form data body
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("full_name", firstName + " " + lastName);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("password_confirmation", passwordConfirmation);
        const user = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BACKEND}/api/customers/register`,
            formData
        );
        res.status(201).json(user);
    } catch (error) {
        switch (error.response.status) {
            case 422:
                return res
                    .status(422)
                    .json({ error: error.response.data.message });
            case 500:
                return res
                    .status(500)
                    .json({ error: error.response.data.message });
            default:
                return res.status(500).json({ error: error.message });
        }
    }
};

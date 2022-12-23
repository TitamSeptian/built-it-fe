import axios from "axios";
import FormData from "form-data";

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            // return res.status(200).json({ data: req.body });
            return await login(req, res);
        default:
            return res.status(400).json({ message: "bad request" });
    }
}

const login = async (req, res) => {
    try {
        // console.log(req.body);
        const user = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BACKEND}/api/login`,
            {
                email: req.body.email,
                password: req.body.password,
            }
        );
        const result = await user.data;
        return res.status(200).json({ data: result });
    } catch (error) {
        if (error.response) {
            console.log("res ##", error.response);
        } else if (error.request) {
            console.log("req ##", error.request);
        } else if (error.message) {
            console.log("msg ##", error.message);
            //do something other than the other two
        }
        console.log(error);
        return res.status(500).json({ error });
    }
};

// export const config = {
//     api: {
//         bodyParser: false, // Defaults to true. Setting this to false disables body parsing and allows you to consume the request body as stream or raw-body.
//         responseLimit: false, // Determines how much data should be sent from the response body. It is automatically enabled and defaults to 4mb.
//         externalResolver: true, // Disables warnings for unresolved requests if the route is being handled by an external resolver like Express.js or Connect. Defaults to false.
//     },
// };

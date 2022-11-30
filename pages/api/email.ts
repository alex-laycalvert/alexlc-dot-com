import { sendEmail } from "../../utils/email";
import handler from "../../utils/nextConnect";

handler.post(async (req, res) => {
    try {
        const response = await sendEmail(req.body);

        if (!response.info) {
            throw response.error;
        }

        res.status(200).json({
            message: "Email Sent",
            data: response.info,
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server Error",
            error: e,
        });
    }
});

export default handler;

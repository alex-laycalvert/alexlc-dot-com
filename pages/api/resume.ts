import handler from "../../utils/nextConnect";
import pdfParse from "pdf-parse";
import fs from "fs";

handler.get(async (req, res) => {
    try {
        const filename = "public/assets/documents/resume.pdf";
        const buffer = fs.readFileSync(filename);
        const pdf = await pdfParse(buffer);
        const content = pdf.text.split("\n");
        res.json({
            message: "Returned Resume",
            data: content,
        });
    } catch (e) {
        res.json({
            message: "Error",
            error: e,
        });
    }
});

export default handler;

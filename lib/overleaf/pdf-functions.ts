import path from "path"
import { writeFile } from "fs/promises";
import { getDownloadDetails, getUploadDetails, getTinyTexPathDetails } from "@/lib/supabase/getPathDetails";
import { execFile } from "child_process";

export class PdfGenerator {
    texFull: string
    uploadPath: string
    downloadPath: string
    tinyTexPath: string

    constructor(text: string) {
        this.texFull = text;
        this.uploadPath = ""
        this.downloadPath = ""
        this.tinyTexPath = ""
    }

    public setTexFull(text: string) {
        this.texFull = text;
    }

    public async getPaths() {
        this.uploadPath = await getUploadDetails();
        this.downloadPath = await getDownloadDetails();
        this.tinyTexPath = await getTinyTexPathDetails();
    }
 
    public async writeTex() {
        await writeFile(this.uploadPath, this.texFull, "utf-8"); 
    }

    public async generatePDF() {
        const pdflatexPath = path.join(this.tinyTexPath);
        const texFilePath = path.join(this.uploadPath) 
        const outputPath = path.join(this.downloadPath)

        await new Promise<void>((resolve, reject) => {
            execFile(
            pdflatexPath,
            ["-interaction=nonstopmode", "-output-directory", outputPath, texFilePath],
            (error, stdout, stderr) => {
                console.log("stdout:", stdout);
                console.error("stderr:", stderr);

                if (error) {
                return reject(error);
                }

                resolve();
            }
            );
        });

        return new Response("Successfully saved file")
    }
}

import { execFile } from "child_process";
import path from "path";

export async function GET(){
    const pdflatexPath = path.join("C:/Projects/ResumeCustomizer/resume-builder/public/textbin/TinyTeX/bin/windows","pdflatex.exe");
    const texFilePath = path.join("C:/Projects/ResumeCustomizer/resume-builder/lib/overleaf", "test.tex")
    const outputPath = path.join("C:/Projects/ResumeCustomizer/resume-builder/lib/overleaf")

    await new Promise<void>((resolve, reject) => {
      execFile(
        pdflatexPath,
        ["-interaction=nonstopmode", "-output-directory", outputPath, texFilePath],
        (error, stdout, stderr) => {
          console.log("stdout:", stdout);
          console.error("stderr:", stderr);

          if (error) {
            console.error("execFile error:", error);
            return reject(error);
          }

          resolve();
        }
      );
    });

    return new Response(`pdflatex path: ${pdflatexPath}`);
}
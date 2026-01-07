import { Experience } from "@/data/experience-data";
import { Project } from "@/data/project-data";
import { TexResume } from "@/lib/overleaf/tex-functions";
import { PdfGenerator } from "@/lib/overleaf/pdf-functions";

export async function POST(req: Request){
  const body = await req.json()

  const texEditor = new TexResume()

  const experiences: Experience[] = body.experience;
  const projects: Project[] = body.project;
  texEditor.setExperiences(experiences)
  texEditor.setProjects(projects)
  const texFullScript = texEditor.getFullTex();

  const pdfGenerator = new PdfGenerator(texFullScript)
  await pdfGenerator.getPaths()
  await pdfGenerator.writeTex()
  
  const resp = await pdfGenerator.generatePDF()
  return new Response(await resp.text());
}
import fs from "node:fs";
import path from "node:path";

export default function SourceMarkup({ file }: { file: string }) {
  const filePath = path.join(process.cwd(), "src", "content", file);
  const markup = fs.readFileSync(filePath, "utf8");

  return <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />;
}

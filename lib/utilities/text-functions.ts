export function cleanTextForTex(text: string) {
    text = text.replaceAll("#", "\\#")
    text = text.replaceAll("%", "\\%")
    return text;
}
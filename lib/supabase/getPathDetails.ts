export async function getUploadDetails() {
    return process.env.UPLOAD_FILE_PATH
}

export async function getDownloadDetails() {
    return process.env.DOWNLOAD_FILE_PATH
}

export async function getTinyTexPathDetails() {
    return process.env.TINYTEX_FILE_PATH
}
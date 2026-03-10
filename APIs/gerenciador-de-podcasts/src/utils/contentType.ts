export enum ContentType {
  // Dados estruturados
  JSON = "application/json",
  XML = "application/xml",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",

  // Texto
  TEXT = "text/plain",
  HTML = "text/html",
  CSS = "text/css",
  CSV = "text/csv",
  JAVASCRIPT = "application/javascript",

  // Arquivos
  PDF = "application/pdf",
  ZIP = "application/zip",
  OCTET_STREAM = "application/octet-stream",

  // Imagens
  PNG = "image/png",
  JPEG = "image/jpeg",
  JPG = "image/jpg",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",

  // Áudio
  MP3 = "audio/mpeg",
  WAV = "audio/wav",

  // Vídeo
  MP4 = "video/mp4",
  WEBM = "video/webm"
}
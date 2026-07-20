const WHATSAPP_PHONE = "553137872337";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de solicitar um orçamento.";

export const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}&type=phone_number&app_absent=0`;

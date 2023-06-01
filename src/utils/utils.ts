import moment from "moment";

export function getNumbers(text: string) {
  return (text.match(/[0-9]/g) || [""]).join("");
}

export function formatCnpj(text: string) {
  return text.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

export function formatCpf(text: string) {
  return text.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function formatDate(date: string, format?: string) {
  return moment(date).format(format || "DD/MM/YYYY HH:mm");
}

export function getValueOf(date: string) {
  return new Date(date).valueOf();
}

export function milissecondsToHour(from: number, to: number) {
  return Math.round((to - from) / 1000 / 60 / 60);
}

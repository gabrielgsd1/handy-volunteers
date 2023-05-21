export function getNumbers(text: string) {
  return (text.match(/[0-9]/g) || [""]).join("");
}

export function formatCnpj(text: string) {
  return text.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

export function formatCpf(text: string) {
  return text.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export default function maskPhone2(value: any) {
  let v = value
  v = v.replace(/\D/g, '') //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2') //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, '$1-$2') //Coloca hífen entre o quarto e o quinto dígitos
  return v
}

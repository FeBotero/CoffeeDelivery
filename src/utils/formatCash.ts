export function formatCash(value:number){
  return value.toLocaleString("pt-BR",{
    minimumFractionDigits:2
  })
}
// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

verificaDiaUtil = dia => {
    if (!(dia == 1) || dia == 7) return 'Fim de Seamana!'
    else if (1 < dia && dia < 7) return 'Dia Útil!'
    else return 'Dia inválido!'
}

console.log(verificaDiaUtil(1))
// 2. Напишіть функцію "helloColleagues", яка повинна приймати два параметри "company" і "team" і повинна повертати стр/інгу - "Я працюю в "company" компанії в чудовій команді " team "` . Використовуйте синтаксис темплейт стрінгів для параметризації змінних всередині стрінги - ``
function helloColleagues(company, team) { // set default param
    return `I am working in ${company} company in amazing team ${team}`
}

console.log(helloColleagues('amazon', 'AWS' ))


const helloColleagues = (company = 'amazon', team = 'AWS') => { // set default param
    return `I am working in ${company} company in amazing team ${team}`
}

console.log(helloColleagues('Google'));
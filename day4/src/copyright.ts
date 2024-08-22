const year=document.getElementById('year') as HTMLSpanElement
// const year=document.getElementById('year')!
const thisYear=new Date().getFullYear()
year.setAttribute("dateTime",(thisYear as unknown) as string)

year.textContent=(thisYear as unknown) as string
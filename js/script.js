document.ready = quote();
function quote(){
const all=[`Where there is [will] CODE,\nThere is a [way] BUG.`,
	   `Programming =  Coffee × Code`,
	   `It is not a BUG,\nIt is a FEATURE.`,
	   `There is no "Ctrl+Z" in Life.`,
	   `10 type of people in the world.\n1) Who understand binary.\n2) Who don't.`,
	   `There is no place like [home] 127.0.0.1 .`,
	   `"!false" . This is called true.`,
	   `In school:  Write 3 pages or you'll fail.\nIn life:       Explain it in 30secs or I'm out.`,
	   `Coding = 10% writing code\n             + 90% debugging.`,
	   `Doctor :  I love Injection.\nHacker :  Me also.`];

let any = all[Math.floor(Math.random() * 10)];
let b = all[9]
alert("Quote of the day :-\n\n" + any); }

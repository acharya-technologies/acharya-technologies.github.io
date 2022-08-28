document.ready = quote();
function quote(){
const all=[`Where there is <s>will</s> <i>CODE</i> ,<br>There is a <s>Way</s> <i>BUG</i>.`,
	   `Programming =  Coffee × Code`,
	   `It is not a <b>BUG</b> ,<br> It is a <i> FEATURE</i>.`,
	   `There is no <button class='rounded border-2 border-black bg-gray-100 px-1'>Ctrl + Z</button> in <i>Life.</i>`,
	   `<kbd>10</kbd> type of people in the world.<br><kbd>1)</kbd>Who understand binary. <kbd>2)</kbd>Who don't.</li>`,
	   `There is no place like <s>HOME</s> <k>127.0.0.1</k> .`,
	   `<b class='text-red-500'>!</b> <code>false</code> . This is called <code>true</code>.`,
	   `<code>In school:</code> Write 3 pages or you'll fail.<br><code>In life:</code> Explain it in 30secs or I'm out.`,
	   `Coding = <code>10%</code> writing code<br>+ <code>90%</code> debugging.`,
	   `<code>Doctors</code>: I love <i>Injection</i>.<br><code>Hacker</code>: Me also.`];

let any = all[Math.floor(Math.random() * 10)];
let b = all[9]
quoteAny.innerHTML = any; }

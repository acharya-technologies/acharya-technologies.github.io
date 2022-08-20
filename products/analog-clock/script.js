setInterval(() => {
	d = new Date();
	ht = d.getHours();
	mt = d.getMinutes();
	st = d.getSeconds();
	hrotation = 30*ht + mt/2;
	mrotation = 6*mt;
	srotation = 6*st;

	hour.style.transform = `rotate(${hrotation}deg)`;
	minute.style.transform = `rotate(${mrotation}deg)`;
	second.style.transform = `rotate(${srotation}deg)`;




},1)

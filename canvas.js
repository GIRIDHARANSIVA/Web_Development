function draw(){
	const canvas=document.getElementById('mycanvas');

	if(canvas.getContext){
		const ctx=canvas.getContext('2d');

	
		
		ctx.beginPath();
		ctx.arc(180,250,110,0*Math.PI,1.5*Math.PI,false)
		ctx.fillStyle="#ffa31a"
		ctx.fill()
		ctx.closePath()

		ctx.beginPath();
		ctx.arc(200,250,110,0*Math.PI,1.5*Math.PI,false)
		ctx.fillStyle="#ffffff"
		ctx.fill()
		ctx.closePath()

		ctx.beginPath();
		ctx.arc(200,250,100,0,2*Math.PI,true)
		ctx.fillStyle="#330066"
		ctx.fill()
		ctx.closePath()

		ctx.beginPath();
		ctx.rect(100,215,200,13);
		ctx.fillStyle="#ffffff"
		ctx.fill()
		ctx.strokeStyle="#ffffff"
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.rect(100,245,200,13);
		ctx.fillStyle="#ffffff"
		ctx.fill()
		ctx.strokeStyle="#ffffff"
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.rect(100,275,200,13);
		ctx.fillStyle="#ffffff"
		ctx.fill()
		ctx.strokeStyle="#ffffff"
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();

		ctx.arc(200,193,114,1,6.7/Math.PI,false)
		ctx.fillStyle="#8000ff"
		ctx.fill()
		ctx.closePath()

		

	}
}
	
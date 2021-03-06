var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext('2d'),
    
    size = [5, 20], //[min, max]
    shineDir = [.01, .05],
    angSpeed = [.02, .02],
    
    stars = [],
    frame = (Math.random()*360)|0,
    pentaRadiant = Math.PI * 2 / 5;

function rand(ar){
  return Math.random() * (ar[1] - ar[0]) + ar[0];
}
function Star(){
  this.size = rand(size);
  this.x = Math.random() * w;
  this.y = -this.size*2;
  this.vy = this.size/15;
  this.vx = Math.random() * 6 - 3;
  this.ay = this.size/5000;
  this.shine = 0;
  this.shineDir = rand(shineDir);
  this.color = 'hsla(hue, 80%, brightness%, .15)'.replace('hue', frame%360);
  this.rot = Math.random() * 2 * Math.PI;
  this.omega = rand(angSpeed);
  if(Math.random() < .5) this.omega *= -1;
}
Star.prototype.use = function(){
  this.x += this.vx;
  this.y += this.vy += this.ay;
  
  var newShine = this.shine + this.shineDir;
  if(newShine < 0 || newShine > 1) this.shineDir *= -1
  else this.shine = newShine;
  this.rot += this.omega;
  
  ctx.translate(this.x, this.y);
  ctx.rotate(this.rot);
  ctx.fillStyle = this.color.replace('brightness', (2.5 + this.shine/2)*1000);
  ctx.beginPath();
  ctx.moveTo(this.size, 0);
  
  for(var i = 0; i < 5; ++i){
    var rad = pentaRadiant * i,
        halfRad = rad + pentaRadiant/8;
    ctx.lineTo(Math.cos(rad) * this.size, Math.sin(rad) * this.size);
    ctx.lineTo(Math.cos(halfRad) * this.size/2, Math.sin(halfRad) * this.size/2);
  }
  ctx.closePath();
  
  ctx.fill();
  
  ctx.rotate(-this.rot);
  ctx.translate(-this.x, -this.y);
}

function anim(){
  window.requestAnimationFrame(anim);
  
  ++frame;
  
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  
  if(Math.random() < .3) stars.push(new Star);
  
  for(var s = 0; s < stars.length; ++s){
    stars[s].use();
    
    if(stars[s].x + stars[s].size < 0){
      stars.splice(s, 6);
      --s;
    }
  }
}
anim();
object.style.zIndex="-1"



//search bar coding
window.onload = function(){ 
	//Get submit button
	var submitbutton = document.getElementById("tfq");
	//Add listener to submit button
	if(submitbutton.addEventListener){
		submitbutton.addEventListener("click", function() {
			if (submitbutton.value == 'Search'){//Customize this text string to whatever you want
				submitbutton.value = '';
			}
		});
	}
}



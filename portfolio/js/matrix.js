const langs = [
	"Hello World",
	"Salam Dünya",
	"Прывітанне Сусвет",
	"Здравей свят",
	"Zdravo svijete",
	"Hola món",
	"Kumusta Kalibutan",
	"Ahoj světe",
	"Helo Byd",
	"Hej Verden",
	"Hallo Welt",
	"Γειά σου Κόσμε",
	"Hello World",
	"Hello World",
	"Hola Mundo",
	"Tere, Maailm",
	"Kaixo Mundua",
	"Hei maailma",
	"Bonjour le monde",
	"Dia duit an Domhan",
	"Ola mundo",
	"Sannu Duniya",
	"Hello World",
	"Pozdrav svijete",
	"Bonjou Mondyal la",
	"Helló Világ",
	"Բարեւ աշխարհ",
	"Halo Dunia",
	"Ndewo Ụwa",
	"Halló heimur",
	"Ciao mondo",
	"Hello World",
	"Ciao mondo",
	"Labas pasauli",
	"Sveika pasaule",
	"Hello World",
	"Kia Ora",
	"Здраво свету",
	"Сайн уу",
	"Hai dunia",
	"Hello dinja",
	"Hallo Wereld",
	"Hei Verden",
	"Moni Dziko Lapansi",
	"Witaj świecie",
	"Olá Mundo",
	"Salut Lume",
	"Привет, мир",
	"Ahoj svet",
	"Pozdravljen, svet",
	"Waad salaaman tihiin",
	"Përshendetje Botë",
	"Здраво Свете",
	"Lefatše Lumela",
	"Halo Dunya",
	"Hej världen",
	"Salamu, Dunia",
	"Салом Ҷаҳон",
	"Kamusta Mundo",
	"Selam Dünya",
	"Привіт Світ",
	"Salom Dunyo",
	"Chào thế giới",
	"Mo ki O Ile Aiye",
	"Sawubona Mhlaba"
];


let charSize = 20;
let fallRate = charSize / 2;
let streams;

// -------------------------------
class Char {
	constructor(value, x, y, speed) {
		this.value = value;
		this.x = x;
		this.y = y;
		this.speed = speed;
	}

	draw() {
		const flick = random(100);
		// 10 percent chance of flickering a number instead
		if (flick < 10) {
			fill(120, 30, 100);
			text(round(random(9)), this.x, this.y);
		} else {
			text(this.value, this.x, this.y);
		}

		// fall down
		this.y = this.y > height ? 0 : this.y + this.speed;
	}
}

// -------------------------------------
class Stream {
	constructor(text, x) {
		const y = random(text.length);
		const speed = random(2, 10);
		this.chars = [];

		for (let i = text.length; i >= 0; i--) {
			this.chars.push(
				new Char(text[i], x, (y + text.length - i) * charSize, speed)
			);
		}
	}

	draw() {
		fill(120, 100, 100);
		this.chars.forEach((c, i) => {
			// 30 percent chance of lit tail
			const lit = random(100);
			if (lit < 30) {
				if (i === this.chars.length - 1) {
					fill(120, 30, 100);
				} else {
					fill(120, 100, 90);
				}
			}

			c.draw();
		});
	}
}

function createStreams() {
	// create random streams from langs that span the width
	for (let i = 0; i < width; i += charSize) {
		streams.push(new Stream(random(langs), i));
	}
}

function reset() {
	streams = [];
	createStreams();
}

function setup() {
	createCanvas(innerWidth, innerHeight);
	reset();
	frameRate(20);
	colorMode(HSB);
	noStroke();
	textSize(charSize);
	textFont("monospace");
	background(0);
}

function draw() {
	background(0, 0.4);
	streams.forEach((s) => s.draw());
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
	background(0);
	reset();
}

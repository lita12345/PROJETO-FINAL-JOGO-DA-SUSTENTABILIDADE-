// https://youtu.be/wMGUN_DGYc4
// vídeo explicativo do código do jogo

//https://docs.google.com/document/d/1IRDZlYWr4ZQFu66Hi91EsbwF0AD8T-V7q0sk19smGbM/edit
// SGDD do jogo
var parque1,parque2,parque3,grama,painelsolar,floramarela,florrosa,florvermelha,garrafaplastica,gasnatural,lixeiranaosustentavel,lixeirasustentaveis,lixinhoo,lixinho2, lixinho3,lixinho4,lixinho5,lixinho6,semlixeira,
papelão,plantamorta,sujo;

let lixeiracerta=false;
let lixeiraerrada=false;
let plasticonolixo=false;
let lixomaisum=false;
let mangueiranolixo=false;
let papelaonolixo=false;
let lixinho1=false;
let trashhzinho2=false;
let   trashhzinho3=false;
let trashhzinho4=false;
let trashhzinho5=false;
let trashhzinho6=false;




var tela;

var apple, bananan, paper, glass, lixovermelho,lixoamarelo, lixomarrom,lixoazul,lixoverde;

let jogarmaçanolixo=false;
let jogarbanananolixo=false;
let jogarvidronolixo=false;
let jogarpapelnolixo=false;
let jogandomaçanolixo=false;
let jogandobanananolixo=false;
let   jogandovidronolixo=false;
let jogandopapelnolixo=false;



var faseinicial, sustentabilidadetelainicial, banana, maça, garrafa, papel, lixeira, luz, instructions, creditos, regarplantas, gameover, bananajogo,maçajogo,garrafajogo,papeljogo, apple, quartolimpo;

var click, nature;

let roomlight=false;

let bananinha=false, maçazinha=false, garrafinha=false, papelzinho=false, plantinha=false, luzinha=false, lixinho=false;


var timer = 30;
let resetTime=timer;

let pontos=0;
let resetPontos=pontos;

var name;



function preload(){
  sustentabilidadetelainicial=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/sustentabilidade.png')
       faseinicial=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/quarto.png');
  
  
  quartolimpo=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/faseinicial.png')
       instructions=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/instructions.png'); 
         creditos=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/créditos.png');
           gameover=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/gameover.png')
  
            banana=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/banana.png');
            maça=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/maça.png');
            garrafa=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/garrafa.png');
            papel=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/papel.png');
            lixeira=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixo.png');
            luz=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/luzdesligada.png');
            regarplantas=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/regarplantas.png');

  
  apple=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/apple.png');

  bananan=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/bananan.png')
  
  paper=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/paper.png')
  
   glass=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/glass.png')
  
  lixovermelho=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixovermelho.png')
    
    lixoamarelo=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixoamarelo.png')
  
  lixomarrom=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixomarrom.png')
  
  lixoazul=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixoazul.png')
  
  lixoverde=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixoverde.png')
  
  
   parque1=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/parque.png')
  grama=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/grama.png')
  painelsolar=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/painelsolar.png')
  floramarela=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/floramarela.png')
  florrosa=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/florrosa.png')
  
garrafaplastica=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/garrafaplastica.png')

  gasnatural=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/gasnatural.png')

  lixeiranaosustentavel=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixeiranaosustentavel.png')
  
  lixeirasustentaveis=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixeirasustentaveis.png')
  
  lixinhoo=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixinho.png')
  
  lixinho2=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixinho.png')
  
  lixinho3=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixinho.png')
  
  lixinho4=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixinho.png')
  
  lixinho5=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixinho.png')
  
  lixinho6=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/lixinho.png')

   
  papelão=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/papelão.png')
  
  plantamorta=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/plantamorta.png')

florvermelha=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/florvermelha.png')
  parque3=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/parque3(2).png')
  
  parque4=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/parque4(1).png')
  
  
  parque2=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/parque2(1).png')
  
  parque5=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/parque5.png')
  
  parque6=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/parque6(1).png')
  
  
  semlixeira=loadImage('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/semlixeira.png')

           

  nature=loadSound('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/nature.mp3')
    click=loadSound('https://raw.githubusercontent.com/lita12345/PROJETO-FINAL2-LOP/master/O_JOGO_DA_SUSTENTABILIDADE_PARTE_1_copy_2024_08_13_17_45_44/click.mp3')

}


function setup() {
  

    buttonstart = createButton('Começar')
  buttonstart.mouseClicked(Começo)
  buttonstart.size(120,60);
  buttonstart.position(140,350);
  buttonstart.style("font-family", "Oswald");
  buttonstart.style("font-size", "25px");
  buttonstart.style("color", "white");
  buttonstart.style("background-color","#007800");
  
  
    buttoninstructions = createButton('Instruções')
  buttoninstructions.mousePressed(Instruções)
  buttoninstructions.size(120,60);
  buttoninstructions.position(340,350);
  buttoninstructions.style("font-family", "Oswald");
  buttoninstructions.style("font-size", "25px");
  buttoninstructions.style("color", "white");
  buttoninstructions.style("background-color","purple");
  
    buttonexit = createButton('Saída')
  buttonexit.mousePressed(Saída)
  buttonexit.size(120,60);
  buttonexit.position(540,350);
  buttonexit.style("font-family", "Oswald");
  buttonexit.style("font-size", "25px");
  buttonexit.style("color", "white");
  buttonexit.style("background-color","red");
  
    buttonexit2 = createButton('Saída')
  buttonexit2.mousePressed(Saída2)
  buttonexit2.size(80,40);
  buttonexit2.position(720,410);
  buttonexit2.style("font-family", "Oswald");
  buttonexit2.style("font-size", "20px");
  buttonexit2.style("color", "white");
  buttonexit2.style("background-color","red");
    
    buttonmenu=createButton('Menu Principal');
  buttonmenu.mousePressed(Menu)
  buttonmenu.size(140,40);
  buttonmenu.position(6,10);
  buttonmenu.style("font-family", "Oswald");
  buttonmenu.style("font-size", "20px");
  buttonmenu.style("color", "rgb(12,11,11)");
  buttonmenu.style("background-color","rgb(19,230,19)");
  
   buttongameover=createButton('Jogar novamente');
  buttongameover.mousePressed(Gameover)
  buttongameover.size(200,60);
  buttongameover.position(50,10);
  buttongameover.style("font-family", "Oswald");
  buttongameover.style("font-size", "25px");
  buttongameover.style("color", "rgb(255,255,255)");
  buttongameover.style("background-color","rgb(19,115,230)");
  
  
  
  
  
  
    buttontrash=createButton('Colocar banana no lixo?')
  buttontrash.mouseClicked(bananalixo)
  buttontrash.size(70,50);
  buttontrash.position(15,380);
  buttontrash.style("font-family", "Oswald");
  buttontrash.style("font-size", "12px");
  buttontrash.style("color", "rgb(24,23,23)");
  buttontrash.style("background-color","rgb(245,199,11)");
  
  
    buttonmaça=createButton('')
  buttonmaça.mousePressed(maçalixo)
  buttonmaça.size(20,20)
  buttonmaça.position(90,375)
  buttonmaça.style("font-family", "Oswald");
  buttonmaça.style("font-size", "28px");
  buttonmaça.style("color", "rgb(12,11,11)");
  buttonmaça.style("background-color","rgba(73,143,46,0)");
  
  
    buttongarrafa=createButton('')
  buttongarrafa.mousePressed(garrafalixo)
  buttongarrafa.size(40,20)
  buttongarrafa.position(135,390)
  buttongarrafa.style("background-color","rgba(86,3,11,0)");
  
  
    buttonpapel=createButton('')
  buttonpapel.mousePressed(papelixo)
  buttonpapel.size(20,20)
  buttonpapel.position(100,410)
  buttonpapel.style("background-color","rgba(86,3,11,0)");
  
  
    buttonlixo=createButton('')
  buttonlixo.mousePressed(lixo)
  buttonlixo.size(20,20)
  buttonlixo.position(140,330)
  buttonlixo.style("background-color","rgba(86,3,11,0)");
  
  
    buttonlight=createButton('')
  buttonlight.mouseClicked(desligarluz)
  buttonlight.size(20,20)
  buttonlight.position(750,290)
  buttonlight.style("background-color","rgba(86,3,11,0)");
  
  
    buttonregarplantas=createButton('');
  buttonregarplantas.mouseClicked(regandoplantas)
  buttonregarplantas.size(30,20)
  buttonregarplantas.position(270,330)
  buttonregarplantas.style("background-color","rgba(86,3,11,0)");
  
  
  
  applered=createButton('');
   applered.position(90,400)
  applered.size(10,10)
  applered.style("background-color","rgba(233,175,112,0)")
  applered.mousePressed(throwappleinthetrash)
  
  glassgreen=createButton('');
   glassgreen.position(690,400)
  glassgreen.size(10,10)
  glassgreen.style("background-color","rgba(233,175,112,0)")
  glassgreen.mousePressed(throwglassinthetrash)
  
  paperwhite=createButton('')
  paperwhite.position(490,400)
  paperwhite.size(10,10)
  paperwhite.style("background-color","rgba(233,175,112,0)")
  paperwhite.mousePressed(throwpaperinthetrash)
    
  browntrash=createButton('')
  browntrash.position(400,100)
  browntrash.size(10,10)
  browntrash.style("background-color","rgba(251,251,251,0)");
  browntrash.mousePressed(throwingappleinthetrash)
  
  redtrash=createButton('')
  redtrash.position(250,100)
  redtrash.size(10,10)
  redtrash.style("background-color","rgba(251,251,251,0)");
 redtrash.mousePressed(throwingglassinthetrash)
  
  bluetrash=createButton('')
  bluetrash.position(550,100)
  bluetrash.size(10,10)
  bluetrash.style("background-color","rgba(251,251,251,0)");
 bluetrash.mousePressed(throwingpaperinthetrash)
  
  
  bananayellow=createButton('')
  bananayellow.position(290,400)
  bananayellow.size(10,10)
  bananayellow.style("background-color","rgba(233,175,112,0)")
  bananayellow.mousePressed(throwbananainthetrash)
  
  
  grass=createButton('');
  grass.position(915,540);
  grass.size(20,50);
  grass.style('background-color','rgba(72,125,34,0)')
  grass.mouseClicked(arbusto)
  
  solarpanel=createButton('')
  solarpanel.position(890,370);
  solarpanel.size(50,20);
  solarpanel.style('background-color','rgba(72,125,34,0)')
  solarpanel.mouseClicked(energiasolar);
  
  pinkflower=createButton('')
  pinkflower.position(845,170);
  pinkflower.size(20,20);
  pinkflower.style('background-color','rgba(72,125,34,0)')
  pinkflower.mouseClicked(plantandorosa);
  
  redflower=createButton('')
  redflower.position(910,250);
  redflower.size(20,20);
  redflower.style('background-color','rgba(72,125,34,0)')
  redflower.mouseClicked(plantandovermelho);

  yellowflower=createButton('')
  yellowflower.position(920,170);
  yellowflower.size(20,20);
  yellowflower.style('background-color','rgba(72,125,34,0)')
  yellowflower.mouseClicked(plantandoamarelo);

  
  plasticbottle=createButton('')
  plasticbottle.position(340,315);
  plasticbottle.size(10,10);
  plasticbottle.style('background-color','rgba(72,125,34,0)')
 plasticbottle.mousePressed(colocandoplasticonolixo);
  
  
  cardboard=createButton('')
   cardboard.position(420,316);
  cardboard.size(20,10);
  cardboard.style('background-color','rgba(72,125,34,0)')
 cardboard.mouseClicked(colocandopapelaonolixo);
  
  trashzinho1=createButton('')
  trashzinho1.position(135,141);
  trashzinho1.size(30,20);
  trashzinho1.style('background-color','rgba(72,125,34,0)')
 trashzinho1.mouseClicked(colocandolixinho1nolixo);
  
  
  trashzinho2=createButton('')
  trashzinho2.position(190,320);
  trashzinho2.size(30,20);
  trashzinho2.style('background-color','rgba(72,125,34,0)')
 trashzinho2.mouseClicked(colocandolixinho2nolixo);
  
  trashzinho3=createButton('')
  trashzinho3.position(135,565);
  trashzinho3.size(30,20);
  trashzinho3.style('background-color','rgba(72,125,34,0)')
 trashzinho3.mouseClicked(colocandolixinho3nolixo);
  
  trashzinho4=createButton('')
  trashzinho4.position(485,245);
  trashzinho4.size(30,20);
  trashzinho4.style('background-color','rgba(72,125,34,0)')
 trashzinho4.mouseClicked(colocandolixinho4nolixo);
  
  trashzinho5=createButton('')
  trashzinho5.position(657,285);
  trashzinho5.size(30,20);
  trashzinho5.style('background-color','rgba(72,125,34,0)')
 trashzinho5.mouseClicked(colocandolixinho5nolixo);
  
  trashzinho6=createButton('')
  trashzinho6.position(687,490);
  trashzinho6.size(30,20);
  trashzinho6.style('background-color','rgba(72,125,34,0)')
 trashzinho6.mouseClicked(colocandolixinho6nolixo);
  
  
   nonsustainabletrash=createButton('')
  nonsustainabletrash.position(980,135);
  nonsustainabletrash.size(50,50);
  nonsustainabletrash.style('background-color','rgba(72,125,34,0)')
  nonsustainabletrash.mouseClicked(colocandolixonaosustentavel);
  
   sustainabletrash=createButton('')
  sustainabletrash.position(920,380);
  sustainabletrash.size(200,50);
  sustainabletrash.style('background-color','rgba(72,125,34,0)')
  sustainabletrash.mouseClicked(colocandolixosustentavel);
  
  trashred=createButton('')
  trashred.position(465,631);
  trashred.size(20,20);
  trashred.style('background-color','rgba(72,125,34,0)')
 trashred.mouseClicked(clicandonolixovermelho);
  
  
  trashblue=createButton('')
  trashblue.position(720,631);
  trashblue.size(20,20);
  trashblue.style('background-color','rgba(72,125,34,0)')
 trashblue.mouseClicked(clicandonolixoazul);
  
  
   trashcommon=createButton('')
  trashcommon.position(700,586);
  trashcommon.size(40,20);
  trashcommon.style('background-color','rgba(72,125,34,0)')
 trashcommon.mouseClicked(clicandonolixocomum);
  
  
  secondphase=createButton('IR PARA A SEGUNDA FASE?')
  secondphase.position(600,200);
  secondphase.size(150,60);
  secondphase.style('background-color','blue')
  secondphase.style('font-size','15px')
  secondphase.style('color','white')
 secondphase.mouseClicked(indoprasegundafase);
  
  tela=1;
   nature.play();
  
  
}

function nome(){
  name=prompt('Qual o seu nome?')
}
    nome()

function tempo(){
       fill('white')
  circle(755, 45, 40);
   textAlign(LEFT);
  textStyle(BOLD)
  fill('black')
  textSize(20);
  textFont('Oswald')
  text(timer, 745, 50);
    
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
   tela=16;
  }
}
function pontuacao(){
  if(bananinha===true || maçazinha===true || garrafinha===true || papelzinho===true || plantinha===true || luzinha===true || lixinho===true || jogandomaçanolixo===true || jogandobanananolixo===true || jogandovidronolixo===true || jogandopapelnolixo===true || lixeiracerta===true || lixomaisum===true){
    pontos=pontos+1;
      
    bananinha=false;
    maçazinha=false;
    garrafinha=false;
    papelzinho=false;
    plantinha=false;
    luzinha=false;
        lixinho=false;
    jogandomaçanolixo=false;
    jogandobanananolixo=false;
    jogandovidronolixo=false;
    jogandopapelnolixo=false;
  lixeiracerta=false;
    lixomaisum=false;

  }
  if(lixeiraerrada===true){
    pontos=pontos-1;
    lixeiraerrada=false;
  }
  
  fill('white')
  rect(15,130, 100, 50);
   textAlign(LEFT);
  textStyle(BOLD)
  fill('black')
  textSize(20);
  textFont('Oswald')
  text('Pontuação', 20, 150)
  text(pontos, 60, 175);

}


function draw() {
      background('white');
      createCanvas(1500, 700);
  
  if(tela==1){
    
    
secondphase.hide()
  buttonstart.show();
  buttoninstructions.show();
  buttonexit.show();
    
     buttonexit2.hide();
     buttonmenu.hide();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
    
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    
  imageMode(CORNER)
  image(sustentabilidadetelainicial,0, 0, 800, 450)
    
  
  }
    
  
  
  if(tela==2){
  secondphase.hide()
    
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.show();
     buttonmenu.show();

    buttongameover.hide();
    
         buttontrash.hide();
    
         buttonmaça.hide();
         buttongarrafa.hide()
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
   
     applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
        image(faseinicial,0, 0, 800, 450)
    
    tempo();
    pontuacao();

    
     }
  
  if(tela==3){
secondphase.hide()
     
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
    buttontrash.hide();
    buttonexit2.show();
    
    buttongameover.hide();
    
         buttonmenu.show();
         buttonmaça.show();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
     applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
   grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    
      createCanvas(1700, 950);
    
    
   image(banana,0, 0, 800, 450)
    
  
     tempo();
    pontuacao();
  

    
  }
  
  
  
  if(tela==4){
secondphase.hide()
    
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
    buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.show();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonlight.hide();
         buttonregarplantas.hide();
    
     applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
  grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
 bluetrash.hide()

  bananayellow.hide()


    
    
 image(maça, 0, 0, 800, 450)
     tempo();

    pontuacao();
    
  }
  
  
  
  if(tela==5){
secondphase.hide()
    
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.show();
     buttonmenu.show();
    
    buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.show();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
     applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    image(garrafa, 0, 0, 800, 450)
     tempo();
    pontuacao();

    
  }
  
  
  
  if(tela==6){
secondphase.hide()
    
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.show();
     buttonmenu.show();
    
    buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.show();
         buttonregarplantas.hide();
         buttonlight.hide();

   applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
   image(papel, 0, 0, 800, 450)
     tempo();
    pontuacao();

    
  }
  
  
  
  if(tela==7){
secondphase.hide()
    
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.show();
     buttonmenu.show();
    
    buttongameover.hide();
   
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();  
         buttonlixo.hide();
         buttonregarplantas.show();
         buttonlight.hide();
    
     applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
    
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
      imageMode(CORNER)
    image(quartolimpo, 0, 0, 800, 450)
     tempo();
    pontuacao();

    
  }
  
  
  
  if(tela==8){
secondphase.show()

    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
  
     buttonexit2.hide();
     buttonmenu.hide();
    
    buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();

   applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    image(luz, 0, 0, 800, 450)
     tempo();
        pontuacao();


    
  }
  
  
  
  if(tela==9){
    
    exitbutton=true;
  
    if(exitbutton===true){
      secondphase.hide()

       buttonexit.hide();
       buttoninstructions.hide();
       buttonstart.hide();
       
          buttonmenu.show();
          buttonexit2.hide();
      
      buttongameover.hide();
      
            buttontrash.hide();
            buttonmaça.hide();
            buttongarrafa.hide();
            buttonpapel.hide();
            buttonlixo.hide();
                       buttonregarplantas.hide();
            buttonlight.hide();  
      
       applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
       grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    background('black')
       fill('green');
       rect(100, 200, 640, 90);
          textSize(30)
          textStyle(BOLD)
          textAlign(CENTER)
          fill(255);
          text('Até outro dia meu amigo sustentável', 400, 250)
    
   }
 } 
  
  
  
  if(tela==10){
    instructionsbutton=true;
  
      if(instructionsbutton===true){
        secondphase.hide()

        buttonmenu.show()
        buttonexit2.show()
        buttonstart.hide()
        buttoninstructions.hide()
        buttonexit.hide()
        buttongameover.hide();
        
           buttonregarplantas.hide();
        
 applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
         grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
        
           image(instructions,0, 0, 800, 450)
              fill('green')
              rect(70, 150, 660, 150);
                  textSize(22);
                  textStyle(BOLD)
                  fill('white')
                  textAlign(CENTER)
                  textFont('Ceveat Regular')
                  text('Clique em locais presentes no cenário com o qual você poderá ter uma'+'\n'+' ação sustentável, por exemplo: clicar em um papel no chão, pra jogar'+'\n'+'no lixo, porém você só terá 30 segundos para concluir as tarefas', 400,200)
     
   }
 }
   
  
  
  if(tela==12){
    secondphase.hide()

     image(faseinicial,0, 0, 800, 450)
    buttontrash.show()
    buttongameover.hide();
     applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
     tempo();
       pontuacao();


  }
  
  
  
  if(tela==14){
  background('black');
    image(creditos,0, 0, 800, 450)
secondphase.hide()
    
        buttonregarplantas.hide();
        buttonstart.hide();
        buttoninstructions.hide();
        buttonexit.hide();
  
            buttonexit2.hide();
            buttonmenu.show();
    
    buttongameover.hide();
    
                buttontrash.hide();
                buttonmaça.hide();
                buttongarrafa.hide();
                buttonpapel.hide();
                buttonlixo.hide();
                buttonlight.hide();
               
     applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    
    buttonregarplantas.hide();
        pontuacao();
    
  

    
  }
  
  
  
  if(tela==15){
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
secondphase.hide()
  
      buttonexit2.show();
      buttonmenu.show();
    
    buttongameover.hide();
    
          buttontrash.hide();
          buttonmaça.hide();
          buttongarrafa.hide();
          buttonpapel.hide();
          buttonlixo.hide();
          buttonregarplantas.hide();
          buttonlight.show();
    
     applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()

    image(regarplantas,0, 0, 800, 450)
     tempo();
    pontuacao();
 grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()

   }
  
  
  
  if(tela==16){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
secondphase.hide()
  
      buttonexit2.hide();
      buttonmenu.hide();
  
  buttongameover.show();
    
          buttontrash.hide();
          buttonmaça.hide();
          buttongarrafa.hide();
          buttonpapel.hide();
          buttonlixo.hide();
          buttonregarplantas.hide();
          buttonlight.hide();
    
    
     applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
        imageMode(CORNER)
    image(gameover,0, 0, 800, 450)
    
    
}
    if(tela==20){
    createCanvas(800,450);
  background('black');
    imageMode(CENTER)
    image(apple,100,400,800,450)
        image(bananan,300,400,800,450)
            image(paper,500,400,800,450)
            image(glass,700,400,800,450)
    
secondphase.hide()
    
    image(lixoverde,100,100,700,350)
    image(lixovermelho,250,100,700,350)
        image(lixomarrom,400,100,700,350)
        image(lixoazul,550,100,700,350)
            image(lixoamarelo,700,100,700,350)
    applered.show()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.show()
  
 redtrash.show()
  
 
 bluetrash.show()

  bananayellow.hide()
       grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
      pontuacao()
      tempo()
  
  }
  if(tela==23){
    createCanvas(800,450);
  background('black');
     imageMode(CENTER)
        image(bananan,300,400,800,450)
            image(paper,500,400,800,450)
            image(glass,700,400,800,450)
    
    
    image(lixoverde,100,100,700,350)
    image(lixovermelho,250,100,700,350)
        image(lixomarrom,400,100,700,350)
        image(lixoazul,550,100,700,350)
            image(lixoamarelo,700,100,700,350)
        applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.show()
  
 redtrash.show()
  
 
 bluetrash.show()

  bananayellow.show()
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
     pontuacao()
secondphase.hide()

    tempo()
     }
  
  if(tela==24){
    createCanvas(800,450);
  background('black');
    imageMode(CENTER)
        image(bananan,300,400,800,450)
            image(paper,500,400,800,450)
            image(glass,700,400,800,450)
    
secondphase.hide()
    
    image(lixoverde,100,100,700,350)
    image(lixovermelho,250,100,700,350)
        image(lixomarrom,400,100,700,350)
        image(lixoazul,550,100,700,350)
            image(lixoamarelo,700,100,700,350)
    
 applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.show()
  
 redtrash.show()
  
 
 bluetrash.show()

  bananayellow.show()
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
     pontuacao()
      tempo()
  }
  if(tela==25){
    createCanvas(800,450);
  background('black');
    imageMode(CENTER)
            image(paper,500,400,800,450)
            image(glass,700,400,800,450)
    
    
    image(lixoverde,100,100,700,350)
    image(lixovermelho,250,100,700,350)
        image(lixomarrom,400,100,700,350)
        image(lixoazul,550,100,700,350)
            image(lixoamarelo,700,100,700,350)
       applered.hide()
  
  glassgreen.show()
  
  paperwhite.hide()
    
  browntrash.show()
  
 redtrash.show()
  
 
 bluetrash.show()

  bananayellow.hide()
 grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
     pontuacao()
secondphase.hide()

    tempo()
  }
  
  if(tela==26){
    createCanvas(800,450);
  background('black');
    imageMode(CENTER)
            image(paper,500,400,800,450)
    
    
    image(lixoverde,100,100,700,350)
    image(lixovermelho,250,100,700,350)
        image(lixomarrom,400,100,700,350)
        image(lixoazul,550,100,700,350)
            image(lixoamarelo,700,100,700,350)
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.show()
    
  browntrash.show()
  
 redtrash.show()
  
 
 bluetrash.show()

  bananayellow.hide()
    
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    
     pontuacao()
      tempo()
    
    secondphase.hide()

  }
  
  if(tela==27){
    createCanvas(800,450);
  background('black');
    image(lixoverde,100,100,700,350)
    image(lixovermelho,250,100,700,350)
        image(lixomarrom,400,100,700,350)
        image(lixoazul,550,100,700,350)
            image(lixoamarelo,700,100,700,350)
    
     pontuacao()
      tempo()
  }
  
   if(tela==30){
     
     resetTime=timer;
     
     
     buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
    grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    trashred.hide()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashblue.hide()
cardboard.hide()
    trashcommon.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()

    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
            image(garrafaplastica,150,180,400,300)
                image(lixinhoo,470,140,400,300)
     image(lixinho2,0,180,400,300)
         image(lixinho3,-50,0,400,300)
             image(lixinho4,-50,420,400,300)
             image(lixinho5,500,350,400,300)
             image(lixinho6,300,100,400,300)

    image(papelão,280,220,300,200)


      tempo()
     secondphase.hide()



}
 
  if(tela==31){
secondphase.hide()
    
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
    
    grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
cardboard.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()

    
    trashred.hide()
    nonsustainabletrash.show()
    sustainabletrash.show()
        trashblue.hide()
        trashcommon.show()



    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
            image(garrafaplastica,150,180,400,300)
                image(lixinhoo,470,140,400,300)
     image(lixinho2,0,180,400,300)
         image(lixinho3,-50,0,400,300)
             image(lixinho4,-50,420,400,300)
             image(lixinho5,500,350,400,300)
             image(lixinho6,300,100,400,300)

    image(papelão,280,220,300,200)
    
     image(lixeirasustentaveis,800,200,500,400);

    image(lixeiranaosustentavel,800,0,400,300)
    
          tempo()

  }
  
  if(tela==32){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
secondphase.hide()
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
    
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.show()
   cardboard.hide()
trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    
    trashred.show()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
        trashblue.show()
    trashcommon.show()


    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
            image(garrafaplastica,150,180,400,300)
                image(lixinhoo,470,140,400,300)
     image(lixinho2,0,180,400,300)
         image(lixinho3,-50,0,400,300)
             image(lixinho4,-50,420,400,300)
             image(lixinho5,500,350,400,300)
             image(lixinho6,300,100,400,300)

    image(papelão,280,220,300,200)
    
     image(lixeirasustentaveis,400,480,400,300);
    
    
          tempo()

  }
 
      
if(tela==33){
  buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
secondphase.hide()
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
  
   grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
   plasticbottle.hide()
    cardboard.show()
      trashcommon.show()

trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
  
    trashred.show()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
      trashblue.show()

    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
                image(lixinhoo,470,140,400,300)
     image(lixinho2,0,180,400,300)
         image(lixinho3,-50,0,400,300)
             image(lixinho4,-50,420,400,300)
             image(lixinho5,500,350,400,300)
             image(lixinho6,300,100,400,300)

    image(papelão,280,220,300,200)
    
     image(lixeirasustentaveis,400,480,400,300);
        tempo()

}
  
  
  if(tela==34){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
secondphase.hide()
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
    
    grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    
     plasticbottle.hide()
   
trashred.show()
       trashblue.show()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
        trashcommon.show()
    trashzinho1.show()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()

    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
                image(lixinhoo,470,140,400,300)
     image(lixinho2,0,180,400,300)
         image(lixinho3,-50,0,400,300)
             image(lixinho4,-50,420,400,300)
             image(lixinho5,500,350,400,300)
             image(lixinho6,300,100,400,300)
    
     image(lixeirasustentaveis,400,480,400,300);
    
          tempo()

  }
  
  if(tela==35){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
secondphase.hide()
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
    
    
    grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    
     plasticbottle.hide()
   
    trashred.show()
    trashblue.show()
    trashcommon.show()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashzinho1.hide()
        trashzinho2.show()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()

    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
                image(lixinhoo,470,140,400,300)
     image(lixinho2,0,180,400,300)
             image(lixinho4,-50,420,400,300)
             image(lixinho5,500,350,400,300)
             image(lixinho6,300,100,400,300)

    
     image(lixeirasustentaveis,400,480,400,300);
          tempo()

  }
  
  if(tela==36){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
secondphase.hide()
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
    
    
     grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    
     plasticbottle.hide()
   
    trashred.show()
    trashblue.show()
    trashcommon.show()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.show()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
                image(lixinhoo,470,140,400,300)
             image(lixinho4,-50,420,400,300)
             image(lixinho5,500,350,400,300)
             image(lixinho6,300,100,400,300)

    
     image(lixeirasustentaveis,400,480,400,300);
          tempo()

  }
  
  if(tela==37){
secondphase.hide()
    
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
        grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.show()
    trashzinho5.hide()
    trashzinho6.hide()
     plasticbottle.hide()
   
    trashred.show()
    trashblue.show()
    trashcommon.show()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashzinho1.hide()
secondphase.hide()

    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
                image(lixinhoo,470,140,400,300)
             image(lixinho5,500,350,400,300)
             image(lixinho6,300,100,400,300)

     image(lixeirasustentaveis,400,480,400,300);
          tempo()

  }
  
  if(tela==38){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
secondphase.hide()
 
 bluetrash.hide()

  bananayellow.hide()
           grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    
     plasticbottle.hide()
   
    trashred.show()
    trashblue.show()
    trashcommon.show()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.show()
    trashzinho6.hide()
    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
                image(lixinhoo,470,140,400,300)
             image(lixinho5,500,350,400,300)

     image(lixeirasustentaveis,400,480,400,300);
          tempo()

  }
  if(tela==39){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
secondphase.hide()
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
           grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
    plasticbottle.hide()
    
     plasticbottle.hide()
   
    trashred.show()
    trashblue.show()
    trashcommon.show()
    nonsustainabletrash.hide()
    sustainabletrash.hide()
    trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.show()
    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
             image(lixinho5,500,350,400,300)

     image(lixeirasustentaveis,400,480,400,300);
          tempo()

  }
  
  if(tela==40){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
secondphase.hide()
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
     grass.show()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
    
    image(parque1,0,0,800,700)
    image(semlixeira,0,0,800,700)
    image(grama,900,0,800,700)
  image(painelsolar,800,0,800,700)
    image(floramarela,600,-400,800,700)
    image(florrosa,600,-400,800,700)
        image(florvermelha,520,-100,800,700)
                  tempo()


  }
  
  if(tela==41){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
secondphase.hide()
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
     grass.hide()
    solarpanel.show()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()

    image(parque2,0,0,800,700)
     image(painelsolar,800,0,800,700)
    image(floramarela,600,-400,800,700)
    image(florrosa,600,-400,800,700)
        image(florvermelha,520,-100,800,700)
          tempo()


  }
  
  if(tela==42){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
secondphase.hide()
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
    grass.hide()
    solarpanel.hide()
    pinkflower.show()
    redflower.hide()
        yellowflower.hide()
trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()

    image(parque3,0,0,800,700)
    image(floramarela,600,-400,800,700)
    image(florrosa,600,-400,800,700)
        image(florvermelha,520,-100,800,700) 
    
    
          tempo()

  }
  if(tela==43){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
secondphase.hide()
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
         grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.show()
    yellowflower.hide()
trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
secondphase.hide()
    
    image(parque4,0,0,800,700)
    image(floramarela,600,-400,800,700)
        image(florvermelha,520,-100,800,700)
  }
  
  if(tela==44){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
 
 bluetrash.hide()

  bananayellow.hide()
 grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
    yellowflower.show()
  trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
secondphase.hide()
    
  image(parque5,0,0,800,700)
    image(floramarela,600,-400,800,700)
    
          tempo()

  }
  
  if(tela==45){
    buttonstart.hide();
  buttoninstructions.hide();
  buttonexit.hide();
    
     buttonexit2.show();
     buttonmenu.show();
    
       buttongameover.hide();
    
         buttontrash.hide();
         buttonmaça.hide();
         buttongarrafa.hide();
         buttonpapel.hide();
         buttonlixo.hide();
         buttonregarplantas.hide();
         buttonlight.hide();
    
    applered.hide()
  
  glassgreen.hide()
  
  paperwhite.hide()
    
  browntrash.hide()
  
 redtrash.hide()
  
secondphase.hide()
 
 bluetrash.hide()

  bananayellow.hide()
    grass.hide()
    solarpanel.hide()
    pinkflower.hide()
    redflower.hide()
        yellowflower.hide()
trashzinho1.hide()
        trashzinho2.hide()
    trashzinho3.hide()
    trashzinho4.hide()
    trashzinho5.hide()
    trashzinho6.hide()
  
  image(parque6,0,0,800,700)
          tempo()

}

}



function Instruções(){
  click.play();
stop();

  tela=10;
}


function Saída(){
  click.play();
stop();

  tela=9;
}


function Menu(){
  click.play();
stop();

  tela=1; 

timer=resetTime
  pontos=resetPontos;
  
}

function Saída2(){
  click.play();
stop();

  tela=9;
}

  function Gameover(){
    
    click.play();
stop();

  tela=1;
    
     if(timer==0){
timer=resetTime
       
  }
    pontos=resetPontos;
    
  }



function Começo(){
   click.play();
stop();

timer=resetTime

tela=2;
  
}




function mousePressed(){
  if(mouseIsPressed===true && mouseX>0 && mouseX<50 && mouseY>400 && mouseY<600){
    click.play();
stop();

   tela=12;
   }
  
  if(tela==30){
    if(mouseIsPressed===true && mouseX>300 && mouseX<400 && mouseY<370 && mouseY>270){
tela=31;
    }
}
 }


function bananalixo(){
  click.play();
stop();
bananinha=true;
      tela=3;
  
    
}

function maçalixo(){
  click.play();
stop();
  maçazinha=true;

    tela=4;

  }

function garrafalixo(){
click.play();
stop();

  garrafinha=true;
  tela=5;
   

}

function papelixo(){
  click.play();
stop();

  tela=6;
 papelzinho=true;

}

function lixo(){
click.play();
stop();

  tela=20;
  buttonlixo.hide()
   lixinho=true;
}

function throwappleinthetrash(){
  click.play();
stop();
jogarmaçanolixo=true;
}

function throwbananainthetrash(){
  click.play();
stop();
  jogarbanananolixo=true;
  tela=24;
}

function throwingappleinthetrash(){
  click.play();
stop();
  if(jogarmaçanolixo===true){
    jogandomaçanolixo=true;
  tela=23;
}
  if(jogarbanananolixo===true){
    jogandobanananolixo=true;
    tela=25;
  }
}



function throwglassinthetrash(){
  click.play();
stop();
  jogarvidronolixo=true;
}

function throwingglassinthetrash(){
  click.play();
stop();
  if(jogarvidronolixo===true){
    jogandovidronolixo=true;
    tela=26;
  }
}

function throwpaperinthetrash(){
  click.play();
stop();
jogarpapelnolixo=true;
}

function throwingpaperinthetrash(){
  click.play();
stop();
  if(jogarpapelnolixo===true){
    jogandopapelnolixo=true;
    tela=7;
  }
}



function regandoplantas(){
  click.play();
stop();

plantinha=true;
  tela=15;
}
  
function desligarluz(){
  click.play();
stop();

  luzinha=true;
          buttonexit2.hide()
          tela=8;
}


function indoprasegundafase(){
  timer=resetTime
  tela=30;
}
function colocandolixonaosustentavel(){
  click.play();
stop();
lixeiraerrada=true;
  alert('Vai mesmo escolher a lixeira não sustentável? Tente novamente')
}
  
function colocandolixosustentavel(){
  click.play();
stop();
lixeiracerta=true;
  tela=32;
}


function colocandoplasticonolixo(){
  click.play();
stop();
  plasticonolixo=true;
}

function clicandonolixovermelho(){
  click.play();
stop();
  if(plasticonolixo===true){
    lixomaisum=true;
    tela=33;
  }
}


function colocandopapelaonolixo(){
  click.play();
stop();
  papelaonolixo=true;
}

function clicandonolixoazul(){
  click.play();
stop();
  if(papelaonolixo===true){
    lixomaisum=true;
    tela=34;
  }
}

function colocandolixinho1nolixo(){
  click.play();
stop();
  lixinho1=true;
}

function colocandolixinho2nolixo(){
  click.play();
stop();
  trashhzinho2=true;
}

function colocandolixinho3nolixo(){
  click.play();
stop();
  trashhzinho3=true;
}

function colocandolixinho4nolixo(){
  click.play();
stop();
  trashhzinho4=true;
}

function colocandolixinho5nolixo(){
  click.play();
stop();
    trashhzinho5=true;
}

  function colocandolixinho6nolixo(){
    click.play();
stop();
     trashhzinho6=true;
  }

function clicandonolixocomum(){
  click.play();
stop();
  if(lixinho1===true){
    lixomaisum=true;
    tela=35;
  }
  if(trashhzinho2===true){
    click.play();
stop();
    lixomaisum=true;
    tela=36
  }
  if(trashhzinho3===true){
    click.play();
stop();
    lixomaisum=true;
    tela=37;
  }
  if(trashhzinho4===true){
    click.play();
stop();
    lixomaisum=true;
    tela=38
  }
  if(trashhzinho5===true){
    click.play();
stop();
    tela=39
  }
  if(trashhzinho6===true){
    click.play();
stop();
    tela=40
  }
}


function arbusto(){
  click.play();
stop();
tela=41;
  lixomaisum=true;
}
function energiasolar(){
  click.play();
stop();
  tela=42;
    lixomaisum=true;

}

function plantandorosa(){
  click.play();
stop();
  tela=43;
    lixomaisum=true;

}

function plantandovermelho(){
  click.play();
stop();
  tela=44;
    lixomaisum=true;

}

function plantandoamarelo(){
  click.play();
stop();
  tela=45;
    lixomaisum=true;
  fill('white')
  textSize('28')
  
  alert('Parabéns '+name)
  tela=14;

}


function keyPressed(){
     if(keyCode==ESCAPE){
       tela=1;
       pontos=resetPontos;
   }
}









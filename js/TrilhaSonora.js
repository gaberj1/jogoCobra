class TrilhaSonora {
    constructor(){
        this.jogandoJogo = new Audio();
        this.jogandoJogo.src= "mp3\\ost.mp3";
        this.cobraComeu = new Audio();
        this.cobraComeu.src= "mp3\\comeu.mp3";
        this.fimJogo = new Audio();
        this.fimJogo.src= "mp3\\morreu.mp3";
    }
    tocar(trilha){
        if (trilha == "ost") this.jogandoJogo.play();
        if (trilha == "comeu")  this.cobraComeu.play();
        if (trilha == "morreu")  this.fimJogo.play();
    }
}
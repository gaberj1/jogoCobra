const tela = {
    largura: 360,
    altura: 600,
    cor: "#126d00ff",
    desenhar(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(0,30,this.largura,this.altura)
    }
}


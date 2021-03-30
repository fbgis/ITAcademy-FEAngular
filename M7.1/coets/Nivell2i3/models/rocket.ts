class Rocket{
    code:string;
    propellers:number[]=new Array();
    currentOutput:number[];
    
    constructor(code:string,propellers:number[]){
        this.code=code;
        this.propellers=propellers;
        this.currentOutput=new Array(propellers.length).fill(0);
    }

    //Retorna un String amb els valors del coet
    showRocket(){
        let text:string=this.code + ': ';
        this.propellers.forEach(function (value){
            text = text + String(value) + ',';
        });
        return text;
    }

    //Calcula la potència màxima del coet
    calcMaxPower(){
        let maxPower:number=0;
        this.propellers.forEach(function (value){
            maxPower=maxPower+value;
        });
        return maxPower;
    }
    
    //Calcula la potència actual del coet
    calcCurrentPower(){
        let currentPower:number=0;
        this.currentOutput.forEach(function (value){
            currentPower=currentPower+value;
        });
        return currentPower;
    }


    //Mètode accelerar
    speedUp(){
        for(let i:number=0;i<this.propellers.length;i++){
            if(this.currentOutput[i]<this.propellers[i]){
                this.currentOutput[i]=this.currentOutput[i]+10;
            }
        }
    }

    //Mèrode per a frenar
    braking(){
        for(let i:number=0;i<this.propellers.length;i++){
            if(this.currentOutput[i]>0){
                this.currentOutput[i]=this.currentOutput[i]-10;
            }
        }
    }


}
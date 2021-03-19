let car:Car;
let cars:Car[]=[];

function afegirCotxe(){
    //recuperem els valors introduits al formulari
    let plate=(<HTMLInputElement>document.getElementById('inputPlate')).value;
    let color=(<HTMLInputElement>document.getElementById('inputColor')).value;
    let brand=(<HTMLInputElement>document.getElementById('inputBrand')).value;

    //Verificació de la matrícula
    let re_matricula= /[0-9]{4}[a-zA-Z]{3}$/;

    if (re_matricula.test(plate)){
        //creem una nova instància de la classe Car
        car=new Car(plate,color,brand);

        //Afegir el nou cotxe a l'array de cotxes
        cars.push(car);

        //Mostrem els atributs del nou Car
        let resultat=document.getElementById('resultat') as HTMLDivElement;
        resultat.innerHTML=`Plate: ${car.plate}  --  Brand: ${car.brand}  --  Color: ${car.color}`;

        //Actualitzem el llistat de cotxes
        let allCars=document.getElementById('allCars') as HTMLUListElement;
        allCars.innerHTML='';

        cars.forEach(function (item){
            let newli=document.createElement('li');
            newli.innerHTML=`Plate: ${item.plate}  --  Brand: ${item.brand}  --  Color: ${item.color}`;
            allCars.appendChild(newli);
        });
        

        //Ocultem el primer formulari
        let formCotxe = <HTMLFormElement>document.getElementById('formCotxes');
        formCotxe.className='d-none';

        //Mostrem el segon formulari
        let formRodes = <HTMLFormElement>document.getElementById('formRodes');
        formRodes.className='d-block';

        //Mostrem el botó afegir nou cotxe
        let btnNewCar = <HTMLFormElement>document.getElementById('newCar');
        btnNewCar.className='d-block';

    }else{
        let inputplate=(<HTMLInputElement>document.getElementById('inputPlate'));
        inputplate.classList.add("is-invalid");
        let divErrorPlate = <HTMLFormElement>document.getElementById('errorPlate');
		divErrorPlate.textContent = "Cal que la matrícula contingui 4 números i 3 caràcters";
    }

    return false;
}


function afegirRodes(){
    
    //recuperem els valors introduits al formulari
    let marques:string[]=new Array(4);
    let diametres:number[]=new Array(4);
    for(let i=1;i<5;i++){
        let idBrand:string='inputBrand'+String(i);
        marques[i-1]=(<HTMLInputElement>document.getElementById(idBrand)).value;
        let idDiametre:string='inputDiam'+String(i);
        diametres[i-1]=Number((<HTMLInputElement>document.getElementById(idDiametre)).value);
    }
    
    //Comprovo que el diàmetre de totes les rodes sigui correcte
    let rodes:boolean=true
    for(let i=1;i<5;i++){
        if(diametres[i-1]<0.4 || diametres[i-1]>2){
            let idDiametre:string='inputDiam'+String(i);
            let inputdiametre=(<HTMLInputElement>document.getElementById(idDiametre));
            inputdiametre.classList.add("is-invalid");
            let idError:string='errorDiam'+String(i);
            let divErrorPlate = <HTMLFormElement>document.getElementById(idError);
		    divErrorPlate.textContent = "El diàmetre ha de ser un valor entre 0,4 i 2.";
            rodes=false
        }
    }

    //Si totes les ordes tenen el diàmetre correcte les afegeixo al cotxe i les mostro
    if(rodes){
        for(let i=1;i<5;i++){
            //afegim les rodes a la instància de la classe Car
            car.addWheel(new Wheel(diametres[i-1],marques[i-1]));
            //Mostrem les rodes del Car
            let idResultatRodes:string='resultatRodes'+String(i);
            let resultatRodes = <HTMLDivElement>document.getElementById(idResultatRodes);
            resultatRodes.innerHTML=`Wheel ${i}: <br>    Brand: ${car.wheels[i-1].brand} -- Diameter: ${car.wheels[i-1].diameter}`;
            //resultatRodes.innerHTML=`Wheel ${i}: <br>    Brand: ${car.wheels[i].brand} -- Diameter: ${car.wheels[i].diameter}`;
        }
    }

    return false;

}

function newCar(){
    //Mostrem el primer formulari
    let formCotxe = <HTMLFormElement>document.getElementById('formCotxes');
    formCotxe.className='d-block';
    formCotxe.reset();

    //Ocultem el segon formulari
    let formRodes = <HTMLFormElement>document.getElementById('formRodes');
    formRodes.className='d-none';

    //Ocultem el botó afegir nou cotxe
    let btnNewCar = <HTMLFormElement>document.getElementById('newCar');
    btnNewCar.className='d-none';

    //Netejem el contingut de l'alert resultat
    let resultat=document.getElementById('resultat') as HTMLDivElement;
    resultat.innerHTML='';

    //Netejem el contingut de les alert whells
    for(let i=1;i<5;i++){
        let idResultatRodes:string='resultatRodes'+String(i);
        let resultatRodes = <HTMLDivElement>document.getElementById(idResultatRodes);
        resultatRodes.innerHTML='';
    }
}
    





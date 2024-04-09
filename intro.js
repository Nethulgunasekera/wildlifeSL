const main={
  
}

fetch ('intro.json')
    .then (response => response.json())
    .then (data =>{
        main.title1=data.title1;
        main.title2=data.title2;
        main.title3=data.title3;
        main.title4=data.title4;
        main.title5=data.title5;
        main.title6=data.title6;
        main.title6=data.title6;
        main.title7=data.title7;
        main.title8=data.title8;
        main.title9=data.title9;
        main.title10=data.title10;
        main.title11=data.title11;
        main.title12=data.title12;
        main.title13=data.title13;

        const mainString = JSON.stringify(main);
        localStorage.setItem('main', mainString);

    })
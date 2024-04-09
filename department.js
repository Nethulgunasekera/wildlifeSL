const main={
  
}

fetch ('department.json')
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
        main.title14=data.title14;
        main.title15=data.title15;
        main.title16=data.title16;
        main.title17=data.title17;
        main.title18=data.title18;
        main.title19=data.title19;
        main.title20=data.title20;
        main.title21=data.title21;
        main.title22=data.title22;
        main.title23=data.title23;
        main.title24=data.title24;
        main.title25=data.title25;
        main.title26=data.title26;
        main.title27=data.title27;
        main.title28=data.title28;
        main.title29=data.title29;

        const mainString = JSON.stringify(main);
        localStorage.setItem('main', mainString);

    })
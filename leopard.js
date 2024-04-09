const main={
  
}

fetch ('leopard.json')
    .then (response => response.json())
    .then (data =>{
        main.title1=data.title1;
        main.title2=data.title2;
        main.title3=data.title3;
        main.title4=data.title4;
        main.title5=data.title5;


        const mainString = JSON.stringify(main);
        localStorage.setItem('main', mainString);




    })
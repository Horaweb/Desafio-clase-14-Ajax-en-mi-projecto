$.ajax({


    url:'http://api.openweathermap.org/data/2.5/weather',
    type:"GET",
    data:{
        q:'Tandil',
        appid: 'bbf8893c6e8030e157bb633d11a66e17',
        dataType:"jsonp",
        units: 'metric'
    },
    success:function(data){

        console.log( data);
        let icono = data.weather[0].icon;
        let iconoURL = "http://openweathermap.org/img/w/" + icono + ".png";
        $("#icono").attr("src" , iconoURL);
        let contenido= `<div> 
                            <p>${data.name}</p>                            
                            <p>${data.weather[0].main}</p>
                            <p>TEMPERATURA: ${data.main.temp}</p>
                            <p>HUMEDAD: ${data.main.humidity}</p>
                        </div>`;


        $("#caja").append(contenido);



    }


})
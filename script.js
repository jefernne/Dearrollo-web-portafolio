let menuVisible=false;
//Funcion que oculta o muestra el menu
function mostrar(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementsById("nav").classList ="responsive";
        menuVisible = true;

    }
}


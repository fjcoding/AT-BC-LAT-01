class Article {
    constructor (){
        this.observadores = [];
    }

    observar(ojos){
        this.observadores.push(ojos);
    }

    dejarDeObservar(ojos){
        //console.log( this.observadores )
        //console.log("Ojos "+ojos)
        this.observadores = this.observadores.filter(
            observador => observador instanceof ojos !== true);
        //console.log( this.observadores[1] instanceof ojos )
        //console.log(this.observadores)
    }

    notificar (articulos){
        this.observadores.forEach(observador => {
            observador.notificar(articulos);
        });
    }
}

class Articles extends Article {
    constructor(){
        super();
        this.datos = [];
    }

    agregarNuevo (article){
        this.datos[this.datos.length]=article;
        this.notificar(this);
    }

}

class MensajeArticuloNuevo {
    notificar(articulos) {
        console.log(`El nuevo articulo es ${articulos.datos[articulos.datos.length-1]}`);
    }
}

class MensajeListaActualizada {
    notificar(articulos) {
        console.log(`La lista de articulos actuales es ${articulos.datos}`);
    }
}

// Instanciamos al sujeto
let dataExample = new Articles();

// Le suscribimos sus suscriptores o listeners
dataExample.observar(new MensajeArticuloNuevo());
dataExample.observar(new MensajeListaActualizada());

dataExample.agregarNuevo('Manzana');
dataExample.agregarNuevo('Pera');

dataExample.dejarDeObservar(MensajeListaActualizada);
dataExample.agregarNuevo('Durazno');
dataExample.agregarNuevo('Mango');


class Article {
    constructor (){
        this.observers = [];
    }

    stayTuned(eyes){
        this.observers.push(eyes);
    }

    stopStayTuned(eyes){
        this.observers = this.observers.filter(
            observer => observer instanceof eyes !== true);
    }

    notify (articles){
        this.observers.forEach(observer => {
            observer.notify(articles);
        });
    }
}

class Articles extends Article {
    constructor(){
        super();
        this.data = [];
    }

    addNew (article){
        this.data[this.data.length]=article;
        this.notify(this);
    }

}

class NewArticleMessage {
    notify(articles) {
        console.log(`The new article is ${articles.data[articles.data.length-1]}`);
    }
}

class UpdatedListMessage {
    notify(articles) {
        console.log(`The article's list is ${articles.data}`);
    }
}

// Instanciate the Subject
let dataExample = new Articles();

// Subscribe to notifications 
dataExample.stayTuned(new NewArticleMessage());
dataExample.stayTuned(new UpdatedListMessage());

dataExample.addNew('Manzana');
dataExample.addNew('Pera');

// Unsubscribe to notifications of list message
dataExample.stopStayTuned(UpdatedListMessage);
dataExample.addNew('Durazno');
dataExample.addNew('Mango');


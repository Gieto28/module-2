
class Livro {
    constructor(
        // parametros
        id, 
        title, 
        author,
        alreadyRead,
        imageUrl,
        imageUrlGr
        ){
            this.id                 = id;
            this.title              = title;
            this.author             = author;
            this.alreadyRead        = alreadyRead;
            this.imageUrl           = imageUrl;
            this.imageUrlGr         = imageUrlGr;

    }
}








let livros = [
    {
        id: 0,
        title: 'Angular com Typescript',
        author: "Yakov Fain",
        alreadyRead: true,
        imageUrl: 'angular.jpg',
        imageUrlGr: 'angularGr.png',
    },
    {
        id: 1,
        title: 'Blockchain com JS',
        author: "Someone Else",
        alreadyRead: false,
        imageUrl: 'blockchain.jpg',
        imageUrlGr: 'blockchainGr.png',
    },
    {
        id: 2,
        title: 'DeepLearning com JS',
        author: "Someone Else",
        alreadyRead: true,
        imageUrl: 'deeplearning.jpg',
        imageUrlGr: 'deeplearningGr.png',
    },
    {
        id: 3,
        title: 'Joy of Javascript',
        author: "Someone Else",
        alreadyRead: true,
        imageUrl: 'joj.jpg',
        imageUrlGr: 'jojGr.png',
    },
    {
        id: 4,
        title: 'React Hooks',
        author: "Someone Else",
        alreadyRead: false,
        imageUrl: 'reacthooks.jpg',
        imageUrlGr: 'reacthooksGr.png',
    },
];
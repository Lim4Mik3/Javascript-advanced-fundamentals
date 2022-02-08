"use strict";

const {
  watch,
  promises: { readFile },
} = require("fs");

class File {
  watch(event, filename) {
    console.log("arguments", Array.prototype.slice.call(arguments));
    this.showContent(filename);
  }

  async showContent(filename) {
    console.log((await readFile(filename)).toString());
  }
}

const file = new File();
// Dessa forma, ele ignora o 'this' da classe File
// herda o this do watch
// watch(__filename, file.watch)

// alternativa para não herdar o this da funcao
// mas fica feio
// watch(__filename, (event, filename) => file.watch(event, filename))

// podemos deixar explicitor qual é o contexto que a funcao deve seguir
// o bind retorna uma funcao com o this que se mantem de file, ignorando o watch
// watch(__filename, file.watch.bind(file));

// A diferenca entre um e outro, é que um vc passa os argumentos como array e outro uma lista de argumentos
file.watch.call(
  { showContent: () => console.log("Call: hey sinon!") },
  null,
  __filename
);
file.watch.apply({ showContent: () => console.log("Call: hey sinon!") }, [
  null,
  __filename,
]);

function criarElemento(pai, atributes) {
  daddy = document.getElementById(pai);
  elemento = document.createElement(atributes[0]);
  a = 1;
  if (atributes[1] == "innerHTML") {
    elemento.innerHTML = atributes[2];
    a += 2;
  }
  while (a < atributes.length) {
    elemento.setAttribute(atributes[a], atributes[a + 1]);
    a += 2;
  }
  try {
    return daddy.insertBefore(elemento, pai.nextSibling);
  }
  catch (erro) {
    return (
      console.error("O elemento não existe!"),
      console.error(erro) 
      )
  }
}
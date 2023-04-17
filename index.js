function copiar() {
  var texto = document.getElementById("text");
  texto.select();
  document.execCommand("copy");
}

function limpar() {
  document.getElementById("text").value = "";
}

function converterTextoParaBaseDeDados(text) {
    const baseDeDados = {
      a: "!@",
      á: "#*",
      b: "!$",
      c: "!%",
      d: "!¨",
      e: "!&",
      é: "#(",
      f: "!*",
      g: "!(",
      h: "!-",
      i: "!)",
      í: "#-",
      j: "!_",
      k: "@!",
      l: "@#",
      m: "@$",
      n: "@%",
      o: "@¨",
      ó: "#)",
      p: "@&",
      q: "@*",
      r: "@(",
      s: "@-",
      t: "@)",
      u: "@_",
      ú: "#_",
      v: "#!",
      w: "#$",
      x: "#%",
      y: "#¨",
      z: "#&",
      0: "*!",
      1: "*$",
      2: "*%",
      3: "*¨",
      4: "*&",
      5: "**",
      6: "*(",
      7: "*-",
      8: "*)",
      9: "*_",
      " ": " "
    };
  
    let resultado = "";
    for (let i = 0; i < text.length; i++) {
      const caractere = text.charAt(i);
      resultado += baseDeDados[caractere] || caractere;
    }
    return resultado;
  }

function desconverterTextoDaBaseDeDados(text) {
    const baseDeDados = {
      "!@": "a",
      "#*": "á",
      "!$": "b",
      "!%": "c",
      "!¨": "d",
      "!&": "e",
      "#(": "é",
      "!*": "f",
      "!(": "g",
      "!-": "h",
      "!)": "i",
      "#-": "í",
      "!_": "j",
      "@!": "k",
      "@#": "l",
      "@$": "m",
      "@%": "n",
      "@¨": "o",
      "#)": "ó",
      "@&": "p",
      "@*": "q",
      "@(": "r",
      "@-": "s",
      "@)": "t",
      "@_": "u",
      "#_": "ú",
      "#!": "v",
      "#$": "w",
      "#%": "x",
      "#¨": "y",
      "#&": "z",
      "*!": "0",
      "*$": "1",
      "*%": "2",
      "*¨": "3",
      "*&": "4",
      "**": "5",
      "*(": "6",
      "*-": "7",
      "*)": "8",
      "*_": "9",
      " ": " "
    };
  
    let resultado = "";
    let i = 0;
    while (i < text.length) {
      const doisCaracteres = text.substr(i, 2);
      const caractereOriginal = baseDeDados[doisCaracteres];
      resultado += caractereOriginal || doisCaracteres.charAt(0);
      i += caractereOriginal ? 2 : 1;
    }
    return resultado;
  }
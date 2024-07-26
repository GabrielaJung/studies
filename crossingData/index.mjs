import { registros } from "./registros.mjs";

// console.table(registros);

const countRespostasSexo = registros.reduce((prev, next) => {
  const currentAsk = prev.find(
    (pergunta) => pergunta.idResposta === next.idResposta
  );

  if (!!currentAsk) {
    const indexOfCurrentAsk = prev.findIndex(
      (pergunta) => pergunta.idResposta === next.idResposta
    );
    prev[indexOfCurrentAsk].count++;
  } else {
    prev.push({
      idPergunta: next.idResposta,
      idResposta: next.idResposta,
      count: 1,
    });
  }

  return prev;
}, []);

console.table(countRespostasSexo);

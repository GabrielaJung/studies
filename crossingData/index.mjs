import { perguntas } from "./perguntas.mjs";
import { registros } from "./registros.mjs";
import { respostas } from "./respostas.mjs";

/**
 * Counts how many times each ask appears
 * */
const countRespostas = Object.assign(registros)
  .reduce((prev, next) => {
    // searching index of current ask
    const indexOfCurrentAsk = prev.findIndex(
      (pergunta) => pergunta.idResposta === next.idResposta
    );

    // if current ask is in array yet, increase the count
    if (indexOfCurrentAsk >= 0) {
      prev[indexOfCurrentAsk].count++;
    } else {
      // searches the ask description
      const perguntaDescricao = perguntas.find(
        (pergunta) => pergunta.id == next.idPergunta
      ).descricao;

      // searches the answer description
      const respostaDescricao = respostas.find(
        (resposta) => resposta.id == next.idResposta
      ).descricao;

      // add in array the new ask x answer
      prev.push({
        idPergunta: next.idPergunta,
        perguntaDescricao,
        idResposta: next.idResposta,
        respostaDescricao,
        count: 1,
      });
    }

    return prev;
  }, [])
  // ordering data by answer description
  .sort((a, b) => a.respostaDescricao.localeCompare(b.respostaDescricao))
  // ordering data by ask id
  .sort((a, b) => a.idPergunta - b.idPergunta);

// printing result on console
console.table(countRespostas);

/**
 * Register's data grouped by idAgrupamento
 *
 * @type {{idAgrupamento:number[], respostaUm:number, respostaDois:number}[]}
 */
const groupingRegisters = Object.assign(registros).reduce((prev, next) => {
  // gets the index of current grouping
  const indexOfCurrentGrouping = prev.findIndex(
    (group) => group.idAgrupamento == next.idAgrupamento
  );

  if (indexOfCurrentGrouping >= 0) {
    // add respostaDois on currentGrouping
    prev[indexOfCurrentGrouping].respostaDois = next.idResposta;
  } else {
    // add new current grouping
    prev.push({
      idAgrupamento: [next.idAgrupamento],
      respostaUm: next.idResposta,
    });
  }

  // avoiding empty item
  return prev.flatMap((group) => group);
}, []);

/**
 * Makes the cross data of asks grouped on groupingRegisters (idade x sexo)
 *
 * @type {{quantidade:number, idade:String, sexo:String}[]}
 */
const crossingIdadeXSexo = Object.assign(groupingRegisters)
  .reduce((prev, next) => {
    // getting index of the set/group
    const indexOfSet = prev.findIndex((group) => {
      return (
        group.respostaUm == next.respostaUm &&
        group.respostaDois == next.respostaDois
      );
    });

    if (indexOfSet >= 0) {
      // add current idAgrupamento
      prev[indexOfSet].idAgrupamento.push(next.idAgrupamento[0]);
    } else {
      // add new set on result
      prev.push(next);
    }

    // avoiding empty data item
    return prev.flatMap((group) => group);
  }, [])
  .map((set) => {
    // converting in a presentable table data, with the answers descriptions
    const presentableTableData = {
      quantidade: set.idAgrupamento.length,
      idade: respostas.find((resposta) => resposta.id == set.respostaUm)
        .descricao,
      sexo: respostas.find((resposta) => resposta.id == set.respostaDois)
        .descricao,
    };
    return presentableTableData;
  })
  // ordering data by sexo's description
  .sort((a, b) => a.sexo.localeCompare(b.sexo))
  // ordering data by idade's description
  .sort((a, b) => a.idade.localeCompare(b.idade));

// printing result on console
console.table(crossingIdadeXSexo);

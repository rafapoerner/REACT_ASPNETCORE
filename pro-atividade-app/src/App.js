import { useState, useEffect } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

// let initialState = [
//   { id: 1, prioridade: "3", titulo: "Título", descricao: "Atividade 1" },
//   { id: 2, prioridade: "3", titulo: "Título", descricao: "Atividade 2" },
// ];

function App() {
  const [index, setIndex] = useState(0)
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id:0});

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) :
      setIndex(Math.max.apply(Math, atividades.map(item => item.id)) + 1,)
  }, [atividades])


  function addAtividade(ativ) {
    setAtividades([...atividades, 
      { ...ativ, id: index }]);
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 })
  }

  function atualizarAtividade(ativ) {
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item))
    setAtividade({ id: 0 })
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(
      (atividade) => atividade.id !== id
    );
    setAtividades([...atividadesFiltradas]);
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0])
  }

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        cancelarAtividade={cancelarAtividade}
        atualizarAtividade={atualizarAtividade}
        ativSelecionada={atividade}
        atividades={atividades}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  );
}
export default App;

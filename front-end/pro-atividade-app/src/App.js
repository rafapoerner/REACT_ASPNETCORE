import "./App.css";
import Atividade from "./pages/atividades/Atividade";
import { Switch, Route } from 'react-router-dom';
import Cliente from './pages/clientes/Cliente';
import ClienteForm from './pages/clientes/ClienteForm';
import Dashboard from './pages/dashboard/Dashboard';

export default function App() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/atividade/lista' component={Atividade} />
      <Route path='/cliente/lista' component={Cliente} />
      <Route path='/cliente/detalhe' component={ClienteForm} />
    </Switch>
  );
}

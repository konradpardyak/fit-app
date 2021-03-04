import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './Menu/Menu';
import Day from './Day/Day';
import Training from './Training/Training';
import Settings from './Settings/Settings';

const App = () => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" children={<Menu />} />
          <Route path="/day/:id" children={<Day />} />
          <Route path="/training/:id/" children={<Training />} />
          <Route path="/settings" children={<Settings />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

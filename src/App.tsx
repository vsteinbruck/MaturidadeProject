import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import EventList from './pages/Tab1';
import RegisterEmailPage from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/EventList">
            <EventList />
          </Route>
          <Route exact path="/RegisterEmailPage">
            <RegisterEmailPage />
          </Route>
          {/* <Route path="/tab3">
            <Tab3 />
          </Route> */}
          <Route exact path="/">
            <Redirect to="/EventList" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="EventList" href="/EventList">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Lista de Eventos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="RegisterEmailPage" href="/RegisterEmailPage">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Registro de E-mail</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

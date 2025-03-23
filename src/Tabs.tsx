import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonTabs, IonRouterOutlet, IonTabBar, IonTabButton,
  IonIcon, IonLabel
} from '@ionic/react';
import { list, camera, personAdd } from 'ionicons/icons';

import SignupForm from './pages/SignupForm';
import LongList from './pages/LongList';
import CameraCapture from './pages/CameraCapture';

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/signup" component={SignupForm} exact />
        <Route path="/list" component={LongList} exact />
        <Route path="/camera" component={CameraCapture} exact />
        <Redirect exact from="/" to="/signup" />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="signup" href="/signup">
          <IonIcon icon={personAdd} />
          <IonLabel>Signup</IonLabel>
        </IonTabButton>

        <IonTabButton tab="list" href="/list">
          <IonIcon icon={list} />
          <IonLabel>List</IonLabel>
        </IonTabButton>

        <IonTabButton tab="camera" href="/camera">
          <IonIcon icon={camera} />
          <IonLabel>Camera</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;

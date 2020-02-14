import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonText } from '@ionic/react';
import { Link } from 'react-router-dom'

const Tab2: React.FC<any> = ({goHome}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonButton onClick={goHome}>Back</IonButton>
          </IonButtons>
          <IonTitle>Tab Two</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          <IonItem routerLink="/tabs/tab2/details">
            <IonLabel>
              <h2>Go to detail</h2>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonText>
          <Link to="/tabs/tab2/details">Link to details (WORKS)</Link>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
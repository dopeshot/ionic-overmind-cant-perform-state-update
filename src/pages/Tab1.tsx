import { IonButton, IonContent, IonHeader, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useAppState, useActions } from '..';

const Tab1: React.FC = () => {
  const { count } = useAppState()
  const { increaseCount } = useActions()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRouterLink routerLink='/tab1/page1'>1. Go to another page</IonRouterLink>

        <IonText><p>{count}</p></IonText>
        <IonButton onClick={() => increaseCount()}>4. Increase again</IonButton>
      </IonContent>
    </IonPage>
  );

};

export default Tab1;

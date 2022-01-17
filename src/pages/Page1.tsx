import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { useActions, useAppState } from ".."

export const Page1: React.FC = () => {
    const { count } = useAppState()
    const { increaseCount } = useActions()
  

    return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>3. Go back to page</IonTitle>
      </IonToolbar>
    </IonHeader>
        <IonContent>
            <IonText><p>Count: {count}</p></IonText>
            <IonButton onClick={() => increaseCount()} >2. Click increase</IonButton>
        </IonContent>
    </IonPage>
}
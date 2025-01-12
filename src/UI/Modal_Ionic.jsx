import React, { useState, useRef, useEffect } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonCheckbox,
} from '@ionic/react';

function ModalIonic({children,isModalOpen}) {
  const modal = useRef(null);
  const page = useRef(undefined);

  const [canDismiss, setCanDismiss] = useState(false);


  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonPage ref={page}>
      <IonContent className="ion-padding">
        <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss} isOpen={isModalOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {children}
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default ModalIonic;
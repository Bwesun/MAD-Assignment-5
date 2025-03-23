import {
    IonPage, IonHeader, IonToolbar, IonTitle,
    IonContent, IonButton, IonImg
  } from '@ionic/react';
  import { Camera, CameraResultType } from '@capacitor/camera';
  import { useState } from 'react';
  
  const CameraCapture: React.FC = () => {
    const [photo, setPhoto] = useState<string | null>(null);
  
    const takePicture = async () => {
      try {
        const photo = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri,
        });
        setPhoto(photo.dataUrl!);
        console.log(photo.webPath);
      } catch (error) { 
        console.log('Camera error:', error);
      }
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Camera Access</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <IonButton expand="block" onClick={takePicture}>
            Take Picture
          </IonButton>
  
          {photo && (
            <IonImg src={photo} style={{ marginTop: '20px', borderRadius: '12px' }} />
          )}
        </IonContent>
      </IonPage>
    );
  };
  
  export default CameraCapture;
  
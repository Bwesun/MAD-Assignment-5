import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { Virtuoso } from 'react-virtuoso';

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const LongList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Optimized List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <Virtuoso
          style={{ height: '100%' }}
          totalCount={items.length}
          itemContent={index => (
            <div style={itemStyle}>{items[index]}</div>
          )}
        />
      </IonContent>
    </IonPage>
  );
};

const itemStyle: React.CSSProperties = {
  padding: '12px 16px',
  borderBottom: '1px solid #ccc',
  fontSize: '1rem',
};

export default LongList;

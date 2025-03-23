import {
    IonPage, IonHeader, IonToolbar, IonTitle,
    IonContent, IonItem, IonLabel, IonInput,
    IonButton, IonText
  } from '@ionic/react';
  import { useForm } from 'react-hook-form';
  import { z } from 'zod';
  import { zodResolver } from '@hookform/resolvers/zod';
  import './SignupForm.css';
  
  // Zod Schema for validation
  const schema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });
  
  type FormData = z.infer<typeof schema>;
  
  const SignupForm: React.FC = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(schema),
    });
  
    const onSubmit = (data: FormData) => {
      alert(`Signup Successful!\nName: ${data.name}\nEmail: ${data.email}`);
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Signup Form</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput {...register('name')} />
            </IonItem>
            {errors.name && <IonText color="danger"><p>{errors.name.message}</p></IonText>}
  
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput {...register('email')} />
            </IonItem>
            {errors.email && <IonText color="danger"><p>{errors.email.message}</p></IonText>}
  
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" {...register('password')} />
            </IonItem>
            {errors.password && <IonText color="danger"><p>{errors.password.message}</p></IonText>}
  
            <IonButton expand="block" type="submit" className="signup-btn">Sign Up</IonButton>
          </form>
        </IonContent>
      </IonPage>
    );
  };
  
  export default SignupForm;
  
import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import  app  from '../../services/firebaseConfig';

import style from './List.module.css'
import { Header } from '../Header';




const List: React.FC = () => {
  const [pets, setPets] = useState<any[]>([]);

  useEffect(() => {
    const firestore =getFirestore();
    const db = getFirestore(app);
    const fetchPets = async () => {
      const petsRef = collection(firestore,'pets');
      try {
        const snapshot = await getDocs(petsRef);
        const petsData = snapshot.docs.map((doc: { id: any; data: () => any; }) => ({ id: doc.id, ...doc.data() }));
        setPets(petsData);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  const sortBy = (type: string) => {
    const sortedPets = [...pets];
    if (type === 'id') {
      sortedPets.sort((a, b) => a.id - b.id);
    } else if (type === 'type') {
      sortedPets.sort((a, b) => a.type.localeCompare(b.type));
    } else if (type === 'price') {
      sortedPets.sort((a, b) => a.price - b.price);
    }
    setPets(sortedPets);
  };
  

  return (
    <section>
      <Header></Header>
      <main className={style.mainContainer}>
        

          <section className={style.buttonContainer}>
          <h5>Ordenar por</h5>
            <button onClick={() => sortBy('id')}>
              <label>
               ID
              </label>
            </button>
            <button onClick={() => sortBy('type')}>
              <label>
                Tipo
             </label>
            </button>
            <button onClick={() => sortBy('price')}>
             <label>
                Preço
              </label>
            </button>
            </section> 
            
            {pets.map((pet, index) => (
              <section key={index} className={style.listContainer}>
                <p>{pet.id}</p>
                <p>{pet.type}</p>
                <p>{pet.price}</p>
            </section>
            
          ))}
        
        
        </main>
        </section>
  
  );
};

export default List;
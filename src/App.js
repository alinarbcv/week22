import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <React.Fragment>
      <Items
        title="Бэтмен"
        description="Бэ́тмен (англ. Batman) — вымышленный супергерой, персонаж комиксов издательства DC Comics. Изначально Бэт-мэн (англ. Bat-man, рус. Человек-летучая мышь)."
        imgLink="<https://images.app.goo.gl/SfcbGwppgDCVZk1B9>"
    />
         <Items
        title="Женщина кошка"
        description="Женщина-кошка  — персонаж вселенной DC Comics. Тайное Альт-эго Селины Кайл. Первоначально была суперзлодейкой, но позже стала героиней"
        imgLink="<https://images.app.goo.gl/71DysHUPmP1ZcXkPA>"
    />
         <Items
        title="Супермен"
        description="Супермен - супергерой, защитник города Метрополиса. По происхождению - инопланетянин. Его родная планета - Криптон. Будучи ребёнком, после взрыва родной планеты, был отпрален на Землюс"
        imgLink="<https://images.app.goo.gl/ZdfkkhoAtwshQ19n9>"
    />
    </React.Fragment>
    </div>
  );
}

export default App;

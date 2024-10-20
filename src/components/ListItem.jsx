import React from 'react';
import Items from "./Items";
import batmanImage from '../img/Batman.jpg';
import catwoman from '../img/catwoman.jpeg';
import superman from '../img/superman.jpeg';


function ListItem() {
    return (
        <React.Fragment>
      <Items
        title="Бэтмен"
        description="Бэ́тмен (англ. Batman) — вымышленный супергерой, персонаж комиксов издательства DC Comics. Изначально Бэт-мэн (англ. Bat-man, рус. Человек-летучая мышь)."
        imgLink={batmanImage}
        imgClass="small-image"
    />
         <Items
        title="Женщина кошка"
        description="Женщина-кошка  — персонаж вселенной DC Comics. Тайное Альт-эго Селины Кайл. Первоначально была суперзлодейкой, но позже стала героиней"
        imgLink={catwoman}
        imgClass="small-image"
    />
         <Items
        title="Супермен"
        description="Супермен - супергерой, защитник города Метрополиса. По происхождению - инопланетянин. Его родная планета - Криптон. Будучи ребёнком, после взрыва родной планеты, был отпрален на Землюс"
        imgLink={superman}
        imgClass="small-image"
    />
    </React.Fragment>
    );
}

export default ListItem;


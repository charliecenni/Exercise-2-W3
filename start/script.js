/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

/* crea un'array vuoto nel quale posso push di oggetti con proprietà stringa task e priorità (task, priorità) tramite una funzione che verrà richiamata ogni volta che voglio mettere una nuova task.
e stampa l'oggetto e in base a valore della proprità background-color di li avrà un colore diverso
prendi le proprietà priorità (per ogni elemento) e aggiungici stile di css con for e funzione
data la metto nell'oggetto di array tasks
*/

/* OR */

const lista = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');

const myTask =[
  {
    titoloTask:'Pagare le bollette',
    priorita:'alta',
    data: new Date (),
  },
  {
    titoloTask:'Studiare JavaScript',
    priorita:'media',
    data: new Date (),
  },
  {
    titoloTask:'Comprare il pane',
    priorita:'bassa',
    data: new Date (),
  },
  {
    titoloTask:'Chiamare il dentista',
    priorita:'alta',
    data: new Date (),
  },
  {
    titoloTask:'Riposarsi',
    priorita:'bassa',
    data: new Date (),
  },
]; 


function aggiungiTask(){
  myTask.forEach((task) => {
    const newLi = document.createElement('li'); // creo un li e ad ognuno(forEach) do una classe legata alla priorità
    newLi.classList.add(`priorita-${task.priorita}`);

    const textSpan = document.createElement('span'); // crea uno span con il testo della task
    textSpan.textContent = task.titoloTask;
    newLi.appendChild(textSpan); //nell'li metti il risultato di textSpan

    const badge = document.createElement('span'); // crea uno span in cui ci metto priorita e gli do la classe per stile badge
    badge.classList.add('badge');
    badge.textContent = task.priorita;
    newLi.appendChild(badge);//all'li aggiungi il risultato di badge

    const taskDate = document.createElement('span'); // creo uno span con due classi che ha al suo interno la data della task formattata
    taskDate.classList.add('data' ,'divData');
    taskDate.textContent = task.data.toLocaleString('it-IT');

    const elimina = document.createElement('button');
    elimina.textContent = 'Elimina';
    taskDate.appendChild(elimina); //dopo taskDate ci metti elimina
    newLi.appendChild(taskDate); //nel'li ci metto la data

    lista.appendChild(newLi); // metti newLi e tutto quello legato(append) a quello legato a lista che è stata assegnata all'inizio e viene modificata chiamando il su id
  });
}
 function aggiungiContatore(){
  contatore.textContent =myTask.length //alla costante contatore dichiarata prima che targetta nel html id contatore, aggiungi un testo che è uguale alla lunghezza(n elementi) dell'array myTask che si aggiorna ogni volta che chiami la funzione aggiungiTask
 }

aggiungiTask();
aggiungiContatore();
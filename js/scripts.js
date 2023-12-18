/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.


MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

*/
// Dati da inserire
/*

name            role                    image
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

*/

// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.

const ourTeams = [];
ourTeams.push(createTeamObject('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'));
ourTeams.push(createTeamObject('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'));
ourTeams.push(createTeamObject('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'));
ourTeams.push(createTeamObject('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'));
ourTeams.push(createTeamObject('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'));
ourTeams.push(createTeamObject('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'));

const myContainer = document.querySelector('.my-container');
const row = document.createElement('div');
row.classList.add('row', 'g-3');

myContainer.append(row);



for (let i = 0; i < ourTeams.length; i++) {
    console.log(ourTeams[i])
    const col = document.createElement('div');
    col.classList.add('col-4');
    const card = document.createElement('div');
    card.classList.add('card', 'text-center');
    col.append(card);
    row.append(col);
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-fluid');
    imageContainer.innerHTML = `<img src = "img/${ourTeams[i].image}" alt = "Foto ${i + 1}" class = "card-img-top">`
    console.log(imageContainer);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.innerHTML = `
                        <h5>${ourTeams[i].name}</h5>
                        <p>${ourTeams[i].role}</p>`
    card.append(imageContainer);
    card.append(cardBody);
    console.log('Nome : ' + ourTeams[i].name);
    console.log('Ruolo : ' + ourTeams[i].role);
    console.log('Immagine : ' + ourTeams[i].image);    
}



function createTeamObject(name, role, image) {
    const newMember = {
        name: name,
        role: role,
        image: image,
    };

    return newMember;
}
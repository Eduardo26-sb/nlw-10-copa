function createGame(playar1, hour, playar2) {
  return `
    <li>
              <img src="./assets/icon-${playar1}.svg" 
              alt="Bandeira do ${playar1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${playar2}.svg" 
              alt="Bandeira da ${playar2}" />
            
        </li>
  `
}

let deley = -0.4
function createCard(date, day, games) {
  deley = deley + 0.4
  return `
 <div class="card" style="animation-delay: ${deley}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div> 
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20,21/11",
    "Dom/Seg",
    createGame("catar", "13:00", "ecuador") +
      createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "holanda") +
      createGame("unitedstates", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arabiasaudita") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costarica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "southkorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "13:00", "iran") +
      createGame("catar", "10:00", "senegal") +
      createGame("holanda", "13:00", "ecuador") +
      createGame("england", "16:00", "unitedstates")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "arabiasaudita") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costarica") +
      createGame("belgium", "10:00", "marocco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("southkorea", "10:00", "ghana") +
      createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "07:00", "senegal") +
      createGame("holanda", "10:00", "catar") +
      createGame("iran", "13:00", "unitedstates") +
      createGame("gales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "07:00", "france") +
      createGame("australia", "10:00", "denmark") +
      createGame("poland", "13:00", "argentina") +
      createGame("arabiasaudita", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "07:00", "belgium") +
      createGame("canada", "10:00", "marocco") +
      createGame("japan", "13:00", "spain") +
      createGame("costarica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southkorea", "07:00", "portugal") +
      createGame("ghana", "10:00", "uruguay") +
      createGame("serbia", "13:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  )

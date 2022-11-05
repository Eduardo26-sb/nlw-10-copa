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
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("southkorea", "10:00", "ghana") +
      createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("uruguay", "10:00", "ghana") +
      createGame("uruguay", "13:00", "ghana") +
      createGame("brazil", "16:00", "cameroon")
  )

  
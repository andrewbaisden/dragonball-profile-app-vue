<template>
<div>
    <div>
        <h1>Character Selector</h1>
    </div>
    <div>
        <ul>
            <li v-for="(dragonBallFighters) of dragonBallFighter" @click="toggleClass(dragonBallFighters.id)" :key=dragonBallFighters.id :class="{hover: dragonBallFighters.active}">
                <div class="dragonball-container">
                    <div class="dragonball-stats">
                    <h1>{{dragonBallFighters.name}}</h1>
                    <p>Race: {{dragonBallFighters.race}}</p>
                    <p>Special Attack: {{dragonBallFighters.specialAttack}}</p>
                </div>
                <div class="dragonball-image">
                    <img :src="dragonBallFighters.img" :alt="dragonBallFighters.name" />
                </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      dragonBallFighter: [
        {
          id: 1,
          name: 'Goku',
          race: 'Saiyan',
          specialAttack: 'Kamehameha Wave',
          img: require('../assets/goku.png')
        },
        {
          id: 2,
          name: 'Vegeta',
          race: 'Saiyan',
          specialAttack: 'Final Flash',
          img: require('../assets/vegeta.jpg')
        },
        {
          id: 3,
          name: 'Brolly',
          race: 'Saiyan',
          specialAttack: 'Crusher Blast',
          img: require('../assets/brolly.png')
        },
        {
          id: 4,
          name: 'Majin Buu',
          race: 'Unknown',
          specialAttack: 'Absorbtion',
          img: require('../assets/buu.jpg')
        },
        {
          id: 5,
          name: 'Janemba',
          race: 'Unknown',
          specialAttack: 'Teleportation Warp',
          img: require('../assets/janemba.png')
        },
        {
          id: 6,
          name: 'Tien',
          race: 'Human',
          specialAttack: 'Tri Beam',
          img: require('../assets/tien.png')
        },
        {
          id: 7,
          name: 'Vegito SSJB',
          race: 'Saiyan',
          specialAttack: 'Final kamehameha',
          img: require('../assets/vegito.png')
        },
        {
          id: 8,
          name: 'Toppo',
          race: 'Unknown',
          specialAttack: 'Finger Blasters',
          img: require('../assets/toppo.jpg')
        },
        {
          id: 9,
          name: 'Dyspo',
          race: 'Unknown',
          specialAttack: 'Super Hyper Lightspeed Mode',
          img: require('../assets/dyspo.jpg')
        },
        {
          id: 10,
          name: 'Future Trunks',
          race: 'Human',
          specialAttack: 'Galick Gun',
          img: require('../assets/futureTrunks.png')
        }
      ]
    };
  },
  methods: {
    toggleClass(id) {
      console.log(`You clicked ${id}`);
      // Create variable for all fighters (name takes up less space)
      let allFigthers = this.dragonBallFighter;
      // Get the clicked fighter
      let fighter = allFigthers.find(e => e.id === id);
      // Set all fighters to have a active key of false so that they "loose focus"
      // Comment out this line of code if you want to highlight and select, toggle on and off multiple content boxes
      allFigthers = allFigthers.map(e => Vue.set(e, 'active', false));
      // Use Vue.set to tell vue that we updated the object and it needs to be re-rendered
      Vue.set(fighter, 'active', !fighter.active);
    }
  }
};
</script>

<style lang="scss" scoped>
.dragonball-container {
  cursor: pointer;
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr 1fr;
  //background: #666;
  border: 2px solid #666;
  grid-gap: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(240, 240, 240, 1);
  -moz-box-shadow: 10px 10px 5px 0px rgba(240, 240, 240, 1);
  box-shadow: 10px 10px 5px 0px rgba(240, 240, 240, 1);
}

.dragonball-image img {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border-radius: 100%;
}

ul li {
  list-style: none;
}
.hover {
  background: rgb(244, 244, 244);
  border-radius: 10px;
}
</style>

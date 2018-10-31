new Vue({
  el: "#app",
  data: {
    inProgress: false,
    scoreMe: 100,
    scoreMonster: 100,
    logs: []
  },
  watch: {
    scoreMonster: function(val) {
      if (val <= 0) {
        if (confirm("You Win! New Game?")) {
          this.resetGame();
        }
      }
    }
  },
  methods: {
    attack: function() {
      this.scoreMe -= 5;
      this.scoreMonster -= 7;
      this.logs.push([
        { txt: "Monster Hits Player for", score: 5 },
        { txt: "Player Hits Monster for", score: 7 }
      ]);
    },
    specialAttack: function() {
      this.scoreMe -= 10;
      this.scoreMonster -= 25;
      this.logs.push([
        { txt: "Monster Hits Player for", score: 10 },
        { txt: "Player Hits Monster for", score: 25 }
      ]);
    },
    heal: function() {
      if (this.scoreMe < 100) {
        this.scoreMe += 10;
        this.scoreMonster -= 5;
        this.logs.push([
          { txt: "Player Hits Monster for", score: 5 },
          { txt: "Player Heals Himself for", score: 10 }
        ]);
      }
    },
    giveUp: function() {
      this.inProgress = false;
      this.resetGame();
    },
    resetGame: function() {
      this.scoreMe = 100;
      this.scoreMonster = 100;
      this.logs.length = 0;
    }
  }
});

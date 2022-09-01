
    let intervalTime = 500;
    var players = [];

    setInterval("updateBoard();", intervalTime);

    function reposition() {
      var height = document.querySelectorAll("#leaderboard .player")[0].offsetHeight;
      var y = 0;

      for (var i = 0; i < players.length; i++) {
        document.querySelectorAll("#leaderboard .player").forEach(p => {
          if (p.firstChild.innerText == (i + 1)){
            p.style.position = 'absolute';
            p.style.top = y + 'px';
          }
        })
        y += height;
      }
    }

    function updateBoard() {
      if (document.querySelectorAll("#leaderboard .player")[0] != undefined) {
        if(document.querySelectorAll("#leaderboard .player")[0])
        players = document.querySelectorAll("#leaderboard .player");
        var player = Math.floor(Math.random() * players.length);
        let item = players[player].lastChild;
        let score = parseInt(item.innerText);
        score += Math.floor(Math.random() * 2500) + 50;;
        let listArray = Array.prototype.slice.call(players, 0);

        animateValue(item, parseInt(item.innerText), score, 500)
        //descending
        listArray.sort((a, b) => {
          let ascore = parseInt(a.lastChild.innerText);
          let bscore = parseInt(b.lastChild.innerText);
          return ascore < bscore ? 1 : -1;
        })

        for (var i = 0; i < players.length; i++) {
          let id = listArray[i].id;
          document.querySelector(`#${id}`).firstChild.innerText = i + 1;
        }
        reposition();
      }
    }

    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

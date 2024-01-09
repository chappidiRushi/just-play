window.onload = function () {
  setTimeout(function () {
  try {
    let url = window.location.href;
    if (!url) return;
    const season = document.getElementsByClassName("ipc-link ipc-link--baseAlt ipc-link--touch-target ipc-link--inherit-color sc-2a168135-1 oyCml")[0]?.href;
    if (season) url = season;
    const splitUrl = url.split("/");
    if (splitUrl.length < 3) ('Wrong Url');
    const id = splitUrl[4];
    if (!id) throw Error('id not found');
    const parent = document.getElementsByClassName("sc-cbc7ae81-6 eYDEtr")[0];
    if (!parent) throw Error('parent not found');
    const newDiv = document.createElement("a");
    newDiv.href = `https://vidsrc.xyz/embed/movie?imdb=${id}`;
    const episodeContext = document.getElementsByClassName("sc-2f031e4e-0 kGqXN")[0]?.innerHTML?.split('\x3C!-- -->.\x3C!-- -->');
    if (episodeContext) {
      const season = episodeContext[0]?.replace(/S/g, '');
      const episode = episodeContext[1]?.replace(/E/g, '');
      if (season && episode) {
        newDiv.href = `https://vidsrc.xyz/embed/tv?imdb=${id}&season=${season}&episode=${episode}`;
      }
    }
    newDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="background: white;border-radius: 40px; margin-bottom: 15px;" color="white" width="60" height="60" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    newDiv.target = "_blank";
    parent.appendChild(newDiv);
  } catch (error) {
    console.log('justPlayError', error);
  }
},2000)
};
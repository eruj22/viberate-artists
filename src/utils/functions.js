export const tooltipContent = (input, subgenres) => {
  if (input === "info") {
    return `<h3 class="tooltip__title">GOT MORE INFO?</h3>
                <p>Add Place's links so everyone can<br />
                see their social 
                media highlights.</p>
                <button class="btn btn--reverseColor">ADD LINKS</button>`;
  }

  const blah = (num) => {
    return `<h4>${subgenres[num].name}</h4>
            <progress class="progress" value=${subgenres[num].score} max="100">
              32%
            </progress>`;
  };

  if (input === "vote") {
    return `<h3 class="tooltip__title">VOTE FOR SUBGENRES</h3>
                <p>Don’t agree with the subgenres? <br />
                Add the ones you think are <br />
                missing or vote for existing to get <br />
                yours on top!</p><br />
                ${subgenres
                  .map((_, index) => {
                    return blah(index);
                  })
                  .join("")}
                <button class="btn btn--reverseColor">VOTE NOW</button>`;
  }
};

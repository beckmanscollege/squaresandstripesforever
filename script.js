


const registerVideo = (bound, video) => {
  bound = document.querySelector(bound);
  video = document.querySelector(video);

  const scrollVideo = () => {
    
    if (video.duration) {
      const distanceFromTop =
        window.scrollY + bound.getBoundingClientRect().top;
      const rawPercentScrolled =
        (window.scrollY - distanceFromTop) /
        (bound.scrollHeight - window.innerHeight);
      const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

      //console.log(percentScrolled);
      
      
      video.currentTime = (video.duration * percentScrolled);

      
    }
    requestAnimationFrame(scrollVideo);
  };
  requestAnimationFrame(scrollVideo);
};

registerVideo("#bound-one", "#bound-one video");
registerVideo("#bound-two", "#bound-two video");
registerVideo("#bound-tree", "#bound-tree video");
registerVideo("#bound-four", "#bound-four video");
registerVideo("#bound-five", "#bound-five video");
registerVideo("#bound-six", "#bound-six video");
registerVideo("#bound-seven", "#bound-seven video");
registerVideo("#bound-eight", "#bound-eight video");
registerVideo("#bound-nine", "#bound-nine video");
registerVideo("#bound-ten", "#bound-ten video");
registerVideo("#bound-tenone", "#bound-tenone video");
registerVideo("#bound-eleven", "#bound-eleven video");
registerVideo("#bound-twelve", "#bound-twelve video");
registerVideo("#bound-thirteen", "#bound-thirteen video");
registerVideo("#bound-fourteen", "#bound-fourteen video");
registerVideo("#bound-fiveteen", "#bound-fiveteen video");
registerVideo("#bound-sixteen", "#bound-sixteen video");
registerVideo("#bound-seventeen", "#bound-seventeen video");
registerVideo("#bound-eighteen", "#bound-eighteen video");
registerVideo("#bound-nineteen", "#bound-nineteen video");
registerVideo("#bound-twenty", "#bound-twenty video");
registerVideo("#bound-twentyone", "#bound-twentyone video");
registerVideo("#bound-twentytwo", "#bound-twentytwo video");
registerVideo("#bound-twentythree", "#bound-twentythree video");
registerVideo("#bound-twentyfour", "#bound-twentyfour video");
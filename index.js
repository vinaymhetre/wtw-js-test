window.addEventListener('DOMContentLoaded', () => {
  const els = document.getElementsByClassName('wtw');
  Array.prototype.map.call(els, async (e) => {
    // create a container
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '0.5rem';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    //get event id
    const eventId = e.dataset.wtwId;
    //fetch broadcasters of the event

    const data = await fetch(
      `https://test2.vinayam.workers.dev/api/events/${eventId}`
    );
    if (!data.ok) {
      console.error('WTW-Invalid request');
      return;
    }
    const currentEvent = await data.json();
    //render broadcasters
    currentEvent.broadcasters.map((b) => {
      const broadcaster = document.createElement('span');
      broadcaster.style.padding = '0.5rem';
      broadcaster.style.borderRadius = '0.5rem';
      broadcaster.style.backgroundColor = 'green';
      broadcaster.style.color = 'white';
      broadcaster.innerText = b.name;
      container.appendChild(broadcaster);
    });
    e.appendChild(container);
  });
});

import React from 'react';

function Musica() {
  const items = [
{title: 'Thriller', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3S2R0EVwBSAVMd5UMgKTL0?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:' Michael Jackson '},

{title: 'love me not', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1UNEuG9DYOWiikf00ayr52?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'ravyn lenae'},

{title: 'ma meilleur', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4lriIG2vNqwDWzOj2I9rtj?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:' enemin'},

{title: 'ojos color sol', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1RIhd7jjWDQwSKsbxxGArN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'calle 13'},

{title: 'en algún lugar', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3UIENhLRdFIOuRan92cAQu?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Duncan du'},

{title: 'solo soy una persona', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7s22hbQoH9SvoQBj7DmX9t?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Mecano'},

{title: 'chiquititas', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/762B4bOcXF7I2Y8UlKTyTy?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:' ABBA'},

{title: 'song2 ', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3GfOAdcoc3X5GPiiXmpBjK?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Blur'},

{title: `say it ain't son`, Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/56MEbUIvvfEEkLIl51wxGD?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'wezeer'},

{title: 'Creep ', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/70LcF31zb1H0PyJoS1Sx1r?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Radiohead'},

{title: 'Tiny dancer', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2TVxnKdb3tqe1nhQWwwZCO?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Elton John'},


{title: '花になって - Be a flower', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2EmkTBTh964LQen4Vz0svg?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Ryokuoushoku Shakai'},

{title: '終点の先が在るとするならば。', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/79ehMuj41ltTUqpS2c2yix?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',Artista:'Tuyu'},

{title: 'Impossible', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0aJglfKKlSuhwws0EU6Q5v?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'I am King'},

{title: 'Dance, Dance', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0a7BloCiNzLDD9qSQHh5m7?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Fall Out Boy'},

{title: 'Time of Dying', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7piw04hPQZ1OHZ9Fq9JOXR?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Three Days Grace'},

{title: 'Alone', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3LlmKSHR3Rs0Y3KHQLAYDk?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Alan Walker'},

{title: 'Propuestas Indesentes', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5PycBIeabfvX3n9ILG7Vrv?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Romeo sanos'},

{title: 'Mariposa Traicionera', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0Pjsm4AaJGPOXHoB6xCgJB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Maná'},

{title: 'Monster', Song:'<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2UREu1Y8CO4jXkbvqAtP7g?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>', Artista:'Skillet'},
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-11 py-9 w-screen h-screen'>
      {items.map((item, index) => (
        <div key={index} className='' >
          <h1 className=' text-xl bg-[rgba(0,0,0,0.535)] text-white rounded-lg px-2'>
            {item.title}
          </h1>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: item.Song }} />
        </div>
      ))}
    </div>
  );
}

export default Musica;

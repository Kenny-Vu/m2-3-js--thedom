// Paths to existing elements
let headTag = document.head;
let bodyTag = document.body;

//created elements
let linkTag = document.createElement('link');
let mainTag = document.createElement('main');
let h1Tag = document.createElement('h1');
let firstParagraph = document.createElement('p');


//link tag
linkTag.type = 'text/css';
linkTag.rel = 'stylesheet';
linkTag.href = 'styles.css';

mainTag.innerHTML = `<h1>
The best How I Met Your Mother episode (according to
fans)
</h1>
<p>
As impossible as it seems to name just 1 of the 208
legendary episodes as the “best”, the fans have
spoken and the highest rated episode is… wait for
it…
</p>
<h2>The Slap Bet (Season 2, Episode 9)</h2>
<p>IMDB Rating: 9.5</p>
<img
src="images/robin-sparkles.jpg"
alt="Robin Sparkles"
/>
<p>
In this episode, Ted is learning a few secrets about
Robin, namely that she has an unexplained aversion
to the mall. Robin refuses to tell Ted and the
others why she won’t go to the mall, so the gang
forms their own theories. Marshall believes it’s
because she got married in a mall and is still
married. Barney believes it has something to do with
Robin having performed in a porn video. The two of
them make a slap bet with each other: whoever is
right gets to slap the other across the face as hard
as he can. Lily is named the Slap Bet Commissioner,
as long as she promises to be unbiased.
</p>
<p>
In the end, Robin’s big secret was revealed- she was
a Canadian, teen pop sensation named Robin Sparkles.
Barney finds the music video for her hit single
“Lets Go To The Mall”. The slap bet takes a few
turns throughout the episode, but ends with Marshall
having the right to slap Barney 5 times- available
for all of eternity (horrible call Barney).
</p>
<a
href="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"
>Source</a
>`

headTag.appendChild(linkTag);
bodyTag.appendChild(mainTag);


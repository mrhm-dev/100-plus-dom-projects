const defaultQuotes = [
	'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
	'The way to get started is to quit talking and begin doing. -Walt Disney',
	"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
	'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
	"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
	"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
	"Life is what happens when you're busy making other plans. -John Lennon",
	'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa',
	'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt',
	'Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead',
	"Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
	'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
	'Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin',
	'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller',
	'It is during our darkest moments that we must focus to see the light. -Aristotle',
	'Whoever is happy will make others happy too. -Anne Frank',
	'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson',
];

window.onload = function () {
	main();
};

function main() {
	const newQuoteBtn = document.getElementById('new-quote-btn');
	const quoteBody = document.getElementById('quote-body');

	newQuoteBtn.addEventListener('click', function () {
		const index = Math.floor(Math.random() * defaultQuotes.length);
		const quote = defaultQuotes[index];
		quoteBody.innerText = quote;
	});
}

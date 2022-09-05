/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */

// Steps

// Step 1 - create onload handler
const root = document.querySelector('#root');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');


window.onload = () => {
    main();
}


function main() {

    const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;

}


btn.addEventListener('click', () => {
        main()
})

// step 2 - random color generator function
function generateHexColor() {
	// #000000 #ffffff
	// 255, 255, 255 -> #FFFFFF
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// step 3 - collect all necessary references

// step 4 - handle the click event

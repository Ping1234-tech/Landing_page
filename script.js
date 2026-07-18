let whisper1 = "The owls believe in your patience.";

let whisper2 = "Walk slowly today, Answers dislike rushing.";

let whisper3 = "A forgotten dream still remembers you.";

let whisper4 = "The wind has already carried your worries away.";

let whisper5 = "The oldest tree thinks you are stronger than you think.";


function generateWhisper() {
    // Implementation for generating a whisper //
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    
    let selectedWhisper;

    if (randomNumber === 1) {
        selectedWhisper = whisper1;
    } else if (randomNumber === 2) {
        selectedWhisper = whisper2;
    } else if (randomNumber === 3) {
        selectedWhisper = whisper3;
    } else if (randomNumber === 4) {
        selectedWhisper = whisper4;
    } else if (randomNumber === 5) {
        selectedWhisper = whisper5;
    }

    // Display the selected whisper in the paragraph element
    const whisperParagraph = document.querySelector('#whisper-output');
    whisperParagraph.textContent = selectedWhisper;

}

generateWhisper(); // Call the function to display a whisper when the page loads

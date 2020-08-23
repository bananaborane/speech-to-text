let speechRecognition = window.webkitSpeechRecognition

let recognition = new speechRecognition()

let textbox = $('#textbox')

let instructions = $('#instructions')

let content = ''

let recording = false;

recognition.continuous = true

// recognition is started

recognition.onstart = function (){
    instructions.text("Voice Recognition is on")
}

recognition.onspeechend = function(){
    instructions.text("No Activity")
}

recognition.onerror = function (){
    instructions.text("Try Again")
}

recognition.onresult = function (event){
    let current = event.resultIndex;

    let transcript = event.results[current][0].transcript

    content += transcript

    textbox.val(content)
}

recognition

$('#start-btn').click(function(event){
    if (content.length){
        content += ''
    }

    // Button toggling funcionality below

    if (recording){
        content += ' '
        $(this).removeClass('btn-danger')
        $(this).text("Start")
        recognition.stop()
        recording = false
        return
    }
    
    recording = true;
    $(this).addClass('btn-danger')
    $(this).text("Stop")
    recognition.start()
})

// JQuery ".on" method below

textbox.on('input', function(){
    content = $(this).val()
})
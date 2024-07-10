$(document).ready(function() {
    let currentRoom = 1;
    let score = 0;

    function updateScore(points) {
        score += points;
        $('#score').text(score);
        $('#score').addClass('score-update');
        setTimeout(function() {
            $('#score').removeClass('score-update');
        }, 500);
    }

    function randomizeCharacterPosition(characterId) {
        const character = $(characterId);
        const room = $('#room' + currentRoom);
        const roomWidth = room.width();
        const roomHeight = room.height();
        const maxX = roomWidth - character.width();
        const maxY = roomHeight - character.height();

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        character.css({ top: randomY + 'px', left: randomX + 'px' });
    }

    function showCharacterMessage() {
        alert('˗ˏˋ ★ ˎˊ˗ Congratulations! You found Nova ˗ˏˋ ★ ˎˊ˗');
        updateScore(1);
    }

    function showTryAgainMessage() {
        alert('˗ˏˋ ★ ˎˊ˗ Nova is not there. Try again ˗ˏˋ ★ ˎˊ˗');
        $('.room-container').addClass('shake');
        setTimeout(function() {
            $('.room-container').removeClass('shake');
        }, 500);
        updateScore(-1);
    }

    $('.room').on('click', function(event) {
        if ($(event.target).hasClass('character')) {
            showCharacterMessage();
        } else {
            showTryAgainMessage();
        }
    });

    $('.room-btn').on('click', function() {
        currentRoom = $(this).data('room');
        $('.room-container').hide();
        $('.room').hide();
        $('#room' + currentRoom).show();
        $('.room-container').show();
        randomizeCharacterPosition('#character' + currentRoom);
        $('.character').hide(); 
        $('#character' + currentRoom).show(); 
    });

    $('#playAgainBtn').on('click', function() {
        randomizeCharacterPosition('#character' + currentRoom);
    });

    // Instructions Button functionality
    $('#instructionsBtn').on('click', function() {
        alert(`Game Instructions:
1. Select a room using the buttons at the top.
2. Click around the room to find the hidden character, Nova.
3. If you find Nova, you will score a point.
4. If you click in the wrong place, you will lose a point.
5. Use the "Play Again" button to reset the character's position and try again.`);
    });

    $('.character').hide();
});

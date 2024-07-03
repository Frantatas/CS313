$(document).ready(function() {
    let currentRoom = 1;

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
        alert('Congratulations! You found the character!');
    }

    function showTryAgainMessage() {
        alert('The character is not there. Try again!');
        $('.room-container').addClass('shake');
        setTimeout(function() {
            $('.room-container').removeClass('shake');
        }, 500);
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
        $('.character').hide(); // Hide all characters initially
        $('#character' + currentRoom).show(); // Show character in the current room
    });

    // Hide all characters initially
    $('.character').hide();
});

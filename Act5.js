var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

library.forEach(function(book) {
    console.log('Book: ' + book.title + ', Author: ' + book.author + ', Reading Status: ' + (book.readingStatus ? 'Already Read' : 'Not Read Yet'));
});

//bubble sort

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var sampleData = [6, 4, 0, 3, -2, 1];
console.log('Sorted Array: ', bubbleSort(sampleData));

var button = document
.querySelectorAll('.btn');

for(var i = 0; i < button.length; i++ ) {
    button[i].addEventListener('click', function() {
        this.disabled = true;
    });
}
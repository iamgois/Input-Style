document.addEventListener('DOMContentLoaded', function () {
    var spans1 = document.getElementById('spans-1')
    var spans2 = document.getElementById('spans-2') 
    const spanOne = document.getElementById('span-1')
    const spanTwo = document.getElementById('span-2')
    const spanThree = document.getElementById('span-3')
    const spanFour = document.getElementById('span-4')

    spans1.addEventListener('click', () => {
        spanOne.classList.toggle('active')
        spanTwo.classList.toggle('active')
    });

    spans2.addEventListener('click', () => {
        spanThree.classList.toggle('active')
        spanFour.classList.toggle('active')
    });
});

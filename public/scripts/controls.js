



// snake case controls

var positionX = 0;
var positionY = 0;

window.addEventListener('keypress', (e) =>
{
    // div snake DOM
    var snake = document.querySelector('#snake');

    var tokenRecent = 'r';

    setInterval(() =>
    {
        snake.style.marginTop = positionY + "%";
        snake.style.marginLeft = positionX + "%";
    }, 100);

    if (e.key === 'w')
    {
       for(i = 0; i < 3; i++ )
       {
        positionY--;
       };

       var tokenRecent = 'w';
       
    };
    if (e.key === 'a')
    {
        for(i = 0; i < 3; i++ )
       {
        positionX--;
       };

       var tokenRecent = 'l';
    };
    if (e.key === 's')
    {
        for(i = 0; i < 3; i++ )
       {
        positionY++;
       };  

       var tokenRecent = 'b';

    };
    if (e.key === 'd')
    {
        for(i = 0; i < 3; i++ )
       {
        positionX++;
       };

       var tokenRecent = 'r';

    };

    clearInterval()

    //tecla recent
    if (tokenRecent === 'w')
    {
         setInterval(() => {
            for(i = 0; i < 3; i++ )
            {
                positionY--;
            };
        }, 100);
    };    
    if (tokenRecent === 'l')
    {
        setInterval(() => {
            for(i = 0; i < 3; i++ )
            {
                positionX--;
            };
        }, 100);
    };
    if (tokenRecent === 'b')
    {
        setInterval(() => {
            for(i = 0; i < 3; i++ )
            {
                positionY++;
            };
        }, 100);
    };
    if (tokenRecent === 'r')
    {
        setInterval(() => {
            for(i = 0; i < 3; i++ )
            {
                positionX++;
            };
        }, 100);
    };

});
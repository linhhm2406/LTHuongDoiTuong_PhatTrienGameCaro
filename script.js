let html = '';
let game = [];

function creatTable(size) {
    for (let i = 0; i < size; i++) {
        html += '<tr>';
        game[i] = [];
        for (let j = 0; j < size; j++) {
            html += '<td onclick="changeStatus(this, ' + i + ', ' + j + ')">';
            html += '&nbsp';
            html += '</td>';
            game[i][j] = -1;
        }
        html += '</tr>';
    }
    console.log(html);
    document.getElementById('table').innerHTML = html;
}

creatTable(20);


let status = 'X';

function changeStatus(ovuong, XPos, YPos) {
    ovuong.innerHTML = status;
    if (status === 'X') {
        game[XPos][YPos] = 0;
        status = 'O';
    } else {
        game[XPos][YPos] = 1;
        status = 'X';
    }
    checkWin(XPos, YPos,5);
}

function checkWin(XPos, YPos, condition) {
    let count = 1;
    let i = XPos;
    let j = YPos;
    let value = game[XPos][YPos];

    while (game[i][j + 1] === value) {
        count++;
        if (count === condition) {
            alert('Win');
        }
        j++;
    }

    i = XPos;
    j = YPos;

    while (game[i][j - 1] === value) {
        count++;
        if (count === condition) {
            alert('Win');
        }
        j--;
    }

    i = XPos;
    j = YPos;

    while (game[i+1][j] === value) {
        count++;
        if (count === condition) {
            alert('Win');
        }
        i++;
    }

    i = XPos;
    j = YPos;

    while (game[i-1][j] === value) {
        count++;
        if (count === condition) {
            alert('Win');
        }
        i--;
    }

    i = XPos;
    j = YPos;

    while (game[i+1][j+1] === value) {
        count++;
        if (count === condition) {
            alert('Win');
        }
        i++;
        j++;
    }

    i = XPos;
    j = YPos;

    while (game[i-1][j-1] === value) {
        count++;
        if (count === condition) {
            alert('Win');
        }
        i--;
        j--;
    }

    i = XPos;
    j = YPos;

    while (game[i+1][j-1] === value) {
        count++;
        if (count === condition) {
            alert('Win');
        }
        i++;
        j--;
    }
    i = XPos;
    j = YPos;

    while (game[i-1][j+1] === value) {
        count++;
        if (count === condition) {
            alert('Win');
        }
        i--;
        j++;
    }
}
mydict = {
    '0': ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    '1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    'length': 3
};
site = {
    'q': 'www.dyxia.com/',
    'd': 'www.dytt8.net/'
};
for(var i=0; i<mydict.length; i++){
    var my_div = document.createElement('div');
    var button1 = document.getElementById('myButton').appendChild(my_div);
    for(var j=0; j<mydict[i].length; j++){
        var my_div1 = document.createElement('kbd');
        var button2 = button1.appendChild(my_div1);
        button2.textContent = mydict[i][j];
        var my_div2 = document.createElement('button');
        my_div2.textContent = '编辑';
        my_div2.id = mydict[i][j];
        my_div2.onclick = function (ths) {
            // console.log(ths['target']['id']);
            k = prompt('输入一个网址');
            console.log(k);
            site[ths['target']['id']] = k;
        };
        var button3 = my_div1.appendChild(my_div2);
        }
    }
document.onkeypress = function(ths){
    // console.log(ths['key']);
    window.open('http://' + site[ths['key']], '_blank');
};



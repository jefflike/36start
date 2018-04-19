// 初始化数据
var data = init();
var mydict = data['mydict'];
var site = data['site'];

// 生成键盘
create_keyboard(mydict, site);

// 监听操作
document.onkeypress = function(ths){
    window.open('http://' + site[ths['key']], '_blank');
};


function init() {
    var mydict = {
        '0': ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        '1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        'length': 3
    };
    var site = {
        'b': 'www.qq.com',
        'd': 'www.dytt8.net'
        // 'q': 'www.dyxia.com/'
    };

    // 取出site
    var sit_result = getFormLocalStorage('save');
    if(sit_result){
        site = sit_result
    }
    return {
        'mydict': mydict,
        'site': site
    }
}
function creat_tag(tag) {
    return document.createElement(tag);
}

function create_keyboard(mydict, site) {
    for(var i=0; i<mydict.length; i++){
        var my_div = creat_tag('div');
        var button1 = document.getElementById('myButton').appendChild(my_div);
        for(var j=0; j<mydict[i].length; j++){
            // 生成kbd按键
            var my_div1 = creat_tag('kbd');
            var button2 = button1.appendChild(my_div1);

            // 生成按键上的字的span
            var words = creat_tag('span');
            words.className = 'word';
            add_word = my_div1.appendChild(words);
            add_word.textContent = mydict[i][j];

            // 按键的图标
            var icon = creat_tag('img');
            icon.className = 'icon';
            my_div1.appendChild(icon);
            domain = 'http://' + site[mydict[i][j]] + '/favicon.ico';
            if(domain){
                icon.src = domain;
            }else{
                icon.src = '';
            }


            // 编辑的按钮
            var my_div2 = creat_tag('button');
            my_div2.textContent = 'Edit';
            my_div2.id = mydict[i][j];

            my_div2.onclick = function (ths) {
                // console.log(ths['target']['id']);
                k = prompt('输入一个网址');
                site[ths['target']['id']] = k;
                var img =ths['target'].previousSibling;
                img.src = 'http://' + k + '/favicon.ico';
                img.onerror = function (defalt) {
                    defalt.target.src = ''
                };
                localStorage.setItem('save', JSON.stringify(site))
            };
            var button3 = my_div1.appendChild(my_div2);
        }
    }
}

function getFormLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')

}
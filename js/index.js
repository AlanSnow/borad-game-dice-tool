//储存骰子数量和类型的全局变量；
var diceNumber = 2, diceType=[1,2,3,4,5,6];
//储存游戏类型数据的对象；
var catanType = {
        number: 2,
        type:[1,2,3,4,5,6]
    },
    houseType = {
        number: 8,
        type:[0,1,2]
    };
//设置设置开关默认值
var settingFlag = false;


//设置里改变参数的函数
function catan(val){
    //删除已选择的选项并选择自己
    document.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")});
    val.classList.add("active");
    //拷贝数据
    diceType = catanType.type.slice();
    diceNumber = catanType.number;
    //设置骰子数量
    document.getElementById("setDiceNumber").value = diceNumber;
    document.getElementById("diceNumber").innerHTML=diceNumber;
}

function house(val){
    document.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")});
    val.classList.add("active");
    diceType = houseType.type.slice();
    diceNumber = houseType.number;
    //设置骰子数量
    document.getElementById("setDiceNumber").value = diceNumber;
    document.getElementById("diceNumber").innerHTML=diceNumber;
}

function six(val){
    document.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")});
    val.classList.add("active");
    diceType = [1,2,3,4,5,6];
}

function four(val){
    document.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")});
    val.classList.add("active");
    diceType = [1,2,3,4];
}

function three(val){
    document.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")});
    val.classList.add("active");
    diceType = [0,1,2];
}

function numchange(value){
    var div;
    if(div = document.querySelector(".game-type .active")){
        div.classList.remove("active");
    }
    diceNumber = value;
    document.getElementById("diceNumber").innerHTML=value;
}


//切换设置菜单显示；
function toggleSettings() {
    var set = document.getElementById('set');
    var black = document.getElementById('black');
    if (settingFlag){
        set.style.cssText = "transform: rotateX(90deg) translate(-50%,-50%);-webkit-transform: rotateX(90deg)translate(-50%,-50%);";
        black.style.display = "none";
        settingFlag = false;
    }else{
        set.style.cssText = "transform: rotateX(0deg) translate(-50%,-50%);-webkit-transform: rotateX(0deg)translate(-50%,-50%);";
        black.style.display = "block";
        settingFlag = true;
    }
}

//创建骰子函数；
function create(num) {
    var flag = true;
    var container = document.getElementById("dice-container");
    container.innerHTML = ''
    for (var i = 0; i< num; i++) {
        var newDice = document.createElement('div');
        newDice.classList.add("dice");
        if(i >= parseInt(num/2) && flag && num > 2){
            container.appendChild(document.createElement('br'));
            flag = false;
        }
        container.appendChild(newDice);
    }
}

//骰子随机数保存数组并传值；
function diceRandom(){
    var len = diceType.length;
    var result = [];
    for (var i = 0; i< diceNumber; i++) {
        result[i] = diceType[Math.floor((Math.random()*len))];
    }
    diceChange(result);
}

//修改骰子显示图片
function diceChange(arr){
    var list = document.querySelectorAll(".dice");
    for (var i = 0; i< diceNumber; i++){
        list[i].style.cssText = "background-position : -" + arr[i]*6/10 + "rem;";
    }
}

//渲染骰子类型和选择函数；
function save() {
    create(diceNumber);
    return toggleSettings()
}

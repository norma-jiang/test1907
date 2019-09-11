class Index{
    constructor(){
        this.url = "http://localhost/ciyuancang/data/goods.json";
        this.ul = document.querySelectorAll("#main ul");
        // console.log(this.ul);
        this.load();
        // 1.准备绑定点击事件
        // this.addEvent();
    }
    load(){
        var that = this;
        ajax({
            url:this.url,
            success:function(res){
                that.res = JSON.parse(res);
                that.display();
            }
        })
    }
    display(){
        // console.log(this.res);
        for(var j=0;j<this.ul.length;j++){
            var str = "";
            for(var i=0;i<this.res.length;i++){
                str += `<li class="goods" index="${this.res[i].goodsId}">
                            <a href="information.html" target="_blank">
                            <img src="${this.res[i].url}" />
                            <p class="product_name">${this.res[i].name}</p>
                            <p class="prduct_price">￥${this.res[i].price}</p>
                            </a>
                        </li>`
            }
            this.ul[j].innerHTML = str;
            var that = this;
        
            this.ul[j].addEventListener("click",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                console.log(target);
                if(target.parentNode.parentNode.className == "goods"){
                    console.log(2);
                    // 2.提前找到点击商品的唯一的id
                    that.id = target.parentNode.parentNode.getAttribute("index");
                    console.log(that.id);
                    // 3.准备存储localstorage
                    this.onlyId = [];

                    this.onlyId.push({
                        id:that.id,
                    })
                    localStorage.setItem("onlyId",JSON.stringify(this.onlyId));
                }
            })
        }
    }
}

new Index();
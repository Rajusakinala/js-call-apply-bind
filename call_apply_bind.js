let object = {
    pi: 3.14,
    e : 10,

}

function Area(r){
    console.log(this.pi * r *r);
}

Area.call(object, 10);
Area.apply(object, [10]);
let a = Area.bind(object, [10]);
a();

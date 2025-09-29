//q1
var a="258.90";
a=parseInt(a);
console.log(a);
var b="258.90";
b=parseFloat(b);
console.log(b);

//q2
var c=7.45678;
console.log(c.toFixed(2))
var ca="7.45678"
ca=Number(ca)

//q3

var t="abc";
console.log(isNaN(t))
var v="12";
console.log(isNaN(v))

//q4
var as=0.1;
var ar=0.2;
res=as+ar
console.log(as+ar);
console.log(res.toFixed(1));

//q5
c=function(item){
    
    if (isNaN(parseInt(item))){
        return null
    }else{
        return parseInt(item)
    }
}

console.log(c("120ap"))


//q6
cb=function(item){
        if (typeof item !== 'number') return false;
  
        return item === item && item !== Infinity && item !== -Infinity;
}

        
console.log(cb(12))
console.log(cb(3.14))
console.log(cb(0))
console.log(cb(-12))
console.log(cb(NaN))
console.log(cb(Infinity))
console.log(cb("12"))
console.log(cb(null))


//q7
yt="   hello world  "
console.log(yt.trim())
//q8

oo="javascript"
console.log(oo.slice(4,10))
console.log(oo.substring(4,10))
//9-
st="Banana Mania"
count=0;
for(let i=0;i<st.length;i++){
    if(st[i]=="a"){
        count+=1
        
        
    }
    
}
console.log(count)
//10-

t=function(s){
        var count='';
        for(let i=s.length-1;i>=0;i--){
            count+=s[i]
        } 
        return count;

}
console.log(t("ahmed"))

//q11

uu=function(s){
    var ret=''
    for(i=0;i<s.length;i++){
        ret+=s[i]
        console.log(ret.toLocaleUpperCase())
    }
    return s
}

console.log(uu("hello there friend"))




let a = new Array(1,2,3,4,5)

function rotate(n,d){
    for (let i=0;i<d;i++){
        newNumber=n[0]
        for(let j=0;j<n.length;j++){
            n[j]=n[j+1]   
        }
        n[n.length-1]=newNumber
    }
    console.log('Final Array:',n)
}
console.log('Initial Array:',a)
rotate(a,2)


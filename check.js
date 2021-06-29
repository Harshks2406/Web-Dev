let a = new Array(2,3,4,5,1,2)
let count;
//p = largest number in array
//n = size of array

function check(a,p,n){
    for (var i=1; i<=p; i++){
        count=0
        {
            for(let j=0;j<n;j++){
                if(i== a[j]){
                    count++
                }  
            }
        }
        console.log(i,'occurs',count,'times.')
    }
}

check(a,5,6)

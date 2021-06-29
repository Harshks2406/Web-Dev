let a = new Array(1,3,2,6,4,8,5)

function finds(a,n){
    let j=1    
    let temp=0 
    let flag = 0
outer:                                        
        for(i=0;i<=n;i++){
            console.log('i:',i,'j"',j)
            if(j!=a[i]){
                console.log("inside j: ",j,'array number:',a[i])
                temp++
                console.log('temp:',temp)
            }
            if(temp == n){
                console.log(temp)
                console.log('i',i)
                break
            }
            else if(j>n){
                console.log('j:',j,'n:',n)
                break
            }
            else if(i==a.length-1){
                console.log('here')
                j++
                i=-1
                temp=0
                continue outer
            }
        }
    if(temp==n){
        console.log("Smallest Positive Number Absent:",j)
        flag++
    }
    if(flag!=1){
        console.log("No number is missing")
    }
}    

console.log('------------------------------------------')
finds(a,7)


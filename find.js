let a = new Array(11,-10,5,7,9)

//n = number of element in array

function find(a,n){
    for(i=1;i<=n;i++){
        let temp=0
        for(j=0;j<n;j++){
            if(i!=a[j]){
                temp++
            }
        }
        if(temp == n){
            console.log("Smallest Positive Number Absent:",i)
            break
        }
    }    
}
find(a,5)

// function finds(a,n){
//     let j=1    
//     let temp=0 
//     let flag = 0
// outer:                                        
//         for(i=0;i<=n;i++){
//             //console.log('i:',i,'j:',j)
//             if(j!=a[i]){
//                 //console.log("inside j: ",j,'array number:',a[i])
//                 temp++
//                 //console.log('temp:',temp)
//             }
//             if(temp == n){
//                 //console.log(temp)
//                 break
//             }
//             else if(j>n){
//                 break
//             }
//             else if(i==a.length-1){
//                 //console.log('here')
//                 j++
//                 i=-1
//                 temp=0
//                 continue outer
//             }
//         }
//     if(temp==n){
//         console.log("Smallest Positive Number Absent:",j)
//         flag++
//     }
//     if(flag!=1){
//         console.log("No number is missing")
//     }
// }    2 0 0 3 0 4


// console.log('------------------------------------------')
// finds(a,7)



let a = new Array(6,5,4,3,2,1)
 let max=0

function maxDifference(a){
    for (let i=0;i<a.length;i++){
        let temp=0
        console.log('outer i:',i)
        for(let j=0;j<a.length;j++){
            console.log('j:',j)
            if(a[j]>a[i]){
                temp=j-i
                console.log('difference:',temp)
                if(temp>=max){
                    console.log(j,i)
                    max=temp
                    console.log('max',max)
                }
            }
        }
    }
    console.log('Output:',max)
}

maxDifference(a)

// let i=0

// function difference(a){
//     for(let j=0;j<a.length;j++){
//         let temp=0
//         console.log('j:',j)
//         if(a[j]>=a[i]){
//             temp=j-i
//             console.log('j:',j,'i:',i)
//             if(temp>max){
//                 console.log(j,i)
//                 max=temp                    
//             }
//         }
//         console.log('now j and a.length-1:',j,a.length-1)
//         if(j==a.length-1){
//             i++
//             j=-1
//             continue
//         }
//         if(i>a.length-1){
//             break
//         }
//     }
//     console.log('Output:',max)
// }

// difference(a)
// import React, { useEffect, useState } from 'react'

// const PercentBar = (props) => {

//     const {
//         votes_count,
//         option1_count,
//         option2_count
//     } = props

    
    
//     const [option1Percentage, setOption1Percentage] = useState(0.5)

//     useEffect(() => {
//         const calculateOption1Percentage = (option1_count, votes_count) => {
//             if (option1_count / votes_count === Infinity) {
//                 setOption1Percentage(0.5)
//             } else if (option1_count === 0 && votes_count !== 0) {
//                 setOption1Percentage(0)
//             } else {
//                 setOption1Percentage((option1_count / votes_count))
//             }
//         }
//         calculateOption1Percentage()
//     }, [option1_count, votes_count])

//     console.log(option1Percentage)

  

//   return (
//     <>
//         <div><span>{votes_count}</span><span>{option1_count}</span><span>{option2_count}</span></div>
//         <div>{option1Percentage}</div>
//     </>
    
//   )
// }

// export default PercentBar
let numbers=[10, 1, 3, 5]

numbers[0] // 10
numbers[-1] // undefined

numbers.length // 4 -> 길이

numbers.reverse() // return + 원본 변경
numbers.push(1) // 마지막 원소에 추가 + return (길이)
numbers.pop() // 마지막 원소에 제거 + return (원소)
numbers.unshift(3) // 가장 첫번째 원소에 추가 + return (길이)
numbers.shift() // 가장 첫번재 원소 제거 + return (원소)

numbers.includes(1) // 포함여부 확인
numbers.indexOf(10) // 가장 먼저 존재하는 원소의 위치 확인

numbers.join() // 기본이 ','
numbers.join('-') // '-' 로 연결
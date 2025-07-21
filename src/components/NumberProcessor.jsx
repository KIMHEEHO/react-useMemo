import { useState, useMemo } from 'react';

const NumberProcessor = () => {
    const [numbers, setNumbers] = useState([1,2,3,4,5]);

    const [showEven, setShowEven] = useState(false);

    // useMemo 계산을 메모이제이션한다 = 결과를 잠깐 다른 곳에 적어 놓는다/메모해 놓는다
    // 첫 번째 파라미터는 비용이 큰 연산을 수행하는 콜백함수, 두 번째 파라미터는 의존성 배열
    // 수학적 계산, 데이터 필터링, 정렬 등의 작업을 처리
    // useMemo 훅을 사용하면 이 컴포넌트가 처음 렌더링 될 때 실행되고 의존성 배열에 포함된 요소의 값이 변경되어야만 재실행=>불필요한 계산을 줄이고 성능을 향상
    // 의존성배열은 useMemo가 다시 계산을 수행할 시점을 결정,
    // 변수나 상태 값을 포함, 값이 변경되지 않으면 이전에 계산된 값을 그대로 재사용
    const sum = useMemo(()=>{
        console.log('합계 계산중...');
        return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    const displayNumbers = showEven 
        ? numbers.filter((num) => num % 2 === 0) 
        : numbers.filter((num) => num % 2 === 1);

    const addNumber = () => {
        setNumbers([...numbers, numbers.length + 1]);
    };

    return (
        <div>
            <h2>숫자 계산기</h2>
            <p>전체 숫자: {numbers.join(', ')}</p>
            <p>보여지는 숫자들: {displayNumbers.join(', ')}</p>
            <p>전체 합계: { sum }</p>
            <button onClick={addNumber}>숫자 추가</button>
            <button onClick={() => setShowEven(!showEven)}>{showEven ? '홀수만' : '짝수만'}보기</button>
        </div>
    )
}

export default NumberProcessor;
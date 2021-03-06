import React from 'react';
import './assets/css/question.css';
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';

function Question() {
    
    const history = useHistory();
    const data = useSelector(state=>({
        userInfo: state.userInfo,
        ans1 : state.ans1
    }));
    const dispatch = useDispatch();

    const doNextBtn = () => {
        let select = document.querySelector('input[name="answer01"]:checked');
        if(select!==null){
            let ans = select.value; 

            dispatch({type:'ans1',ans : ans});
            history.push('./question2');

        }else{
            alert("1개의 항목을 선택해주시기 바랍니다.");
        }
    }

    return (
        <div className="question">
            <div className="quesSet">
                <input type="checkbox" id="question01" name="question"/>
                <label htmlFor="question01">
                    <span>1. New 근무복이 ‘두꺼운(중량) 타입 -단독형’일 경우 가장 원하는 스타일은?</span><span>(1개만 선택)</span>
                </label>
                <div className="answer">
                    <input type="radio"id="answer01_1" name="answer01" value="1"/>
                    <label htmlFor="answer01_1">바람막이재킷</label>
                    <input type="radio"id="answer01_2" name="answer01" value="2"/>
                    <label htmlFor="answer01_2">다운패딩점퍼</label>
                    <input type="radio"id="answer01_3" name="answer01" value="3"/>
                    <label htmlFor="answer01_3">플리스재킷</label>
                </div>
            </div>
            <div className="buttonSet">
                <button onClick={doNextBtn}>다음</button>
            </div>
        </div>
    );
}
export default Question;

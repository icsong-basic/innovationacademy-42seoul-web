import React, { useState, useEffect } from 'react';
import update from 'immutability-helper';
import apis from '../apis';

interface IFaq { categories: string[], qnas: { category: string, q: string, a: string }[] }
const Faq: React.FC = () => {
    const [faq, setfaq] = useState<IFaq>({
        categories: ["42 SEOUL이란?",
            "지원 및 선발",
            "커리큘럼",
            "학습과정",
            "졸업과 졸업 후 진로",
            "현실적인 질문들",
            "기타"],
        qnas: []
    });

    const [selectedCategory, setselectedCategory] = useState('');
    const [openedQuestionIndexes, setopenedQuestionIndexes] = useState<number[]>([])

    useEffect(() => {
        apis.getFaq().then(response => {
            setfaq(response.data)
        }).catch(error => {
            console.error(error)
            alert('FAQ를 불러올 수 없습니다.')
        })
        return () => { };
    }, [])

    const qnas = faq.qnas.filter(item => !selectedCategory || item.category === selectedCategory);

    return <div className="faq default-page-padding max-width-section">
        <h1 className="only-pc">FAQ</h1>
        <div className="categories">
            <span onClick={() => {
                if (selectedCategory) {
                    setselectedCategory('');
                    setopenedQuestionIndexes([]);
                }
            }} className={!selectedCategory ? "on" : ""}>전체</span>
            {
                faq && faq.categories ? faq.categories.map((item, key) => {
                    return <span key={key} className={item === selectedCategory ? "on" : ""} onClick={() => { setselectedCategory(item); setopenedQuestionIndexes([]); }}>{item}</span>
                }) : undefined
            }
        </div>
        <div className="qnas">
            {qnas.map((item, key) => {
                const opened = openedQuestionIndexes.findIndex(index => index === key) >= 0;
                return <div key={key} className={opened ? "open" : ""} >
                    <div className="q" onClick={(e) => {
                        if (opened) {
                            setopenedQuestionIndexes(update(openedQuestionIndexes, { $splice: [[openedQuestionIndexes.findIndex(index => index === key), 1]] }))
                        } else {
                            setopenedQuestionIndexes(update(openedQuestionIndexes, { $push: [key] }))
                        }
                    }}>{item.q}</div>
                    {
                        Array.isArray(item.a) ?
                            <div className="a" >
                                {item.a.map((item, key) => {
                                    return <p key={key} dangerouslySetInnerHTML={{ __html: item }} />
                                })}
                            </div> :
                            <div className="a" dangerouslySetInnerHTML={{ __html: item.a }} />
                    }
                </div>;
            })}
        </div>
    </div>
}

export default Faq;
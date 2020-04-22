import React, { useState } from 'react';
import update from 'immutability-helper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import ApplyTimeline from '../ApplyTimeline';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Noto Sans KR',
            'Montserrat',
            'sans-serif'
        ].join(','),
        fontSize: 24
    },
    palette: {
        type: 'dark',
        primary: {
            main: "rgb(1, 186, 188)"
        }
    },
    overrides: {
        MuiFormControlLabel: {
            root: {
                marginBottom: '1.5rem',
                alignItems: 'start'
            },
            label: {
                padding: 9
            }
        }
    }
});

const checkboxTexts = [
    <p>인터넷 익스플로러 브라우저 환경에서는 서비스 제공이 불안정할 수 있습니다.<br />
        구글 크롬 브라우저 사용을 권장합니다.
    </p>,
    <p>온라인 테스트는 약 2시간 정도 소요되며 중간에 멈출 수 없습니다.<br />
        온라인 테스트는 1회 응시만 가능합니다.</p>,
    <p>온라인 테스트 합격 여부는 테스트 종료 시점으로부터 48시간 내에 이메일로 알려드립니다.</p>,
    <p>체크인 미팅에 반드시 참석해야만 이후 선발 과정에 참여할 수 있습니다.<br />
        체크인 미팅은 참석 신청을 한 사람에 한 해 선착순(400여명)으로 접수를 마감합니다.<br />
        온라인 테스트를 통과하신 분은 서둘러 체크인 미팅 '등록' 버튼을 클릭해주세요.<br />
        <small>* 체크인 미팅은 대면 확인 및 교육과정 설명회로, 서울에서 진행됩니다.</small>
    </p>
]

export default function ApplyForm() {
    const [checked, setchecked] = useState([false, false, false, false])
    const linkEnabled = checked.every(item => item);
    return (
        <div className="max-width-section apply-form">
            <ThemeProvider theme={theme}>
                <ApplyTimeline />
                <FormGroup className="form">
                    {
                        checkboxTexts.map((item, key) => (
                            <>
                                <FormControlLabel
                                    key={key}
                                    control={
                                        <Checkbox color="primary" checked={checked[key]} onChange={e => { setchecked(update(checked, { [key]: { $set: e.target.checked } })) }} />
                                    }
                                    label={item}
                                />
                            </>
                        ))
                    }
                    <a className={`apply-btn ${linkEnabled ? '' : 'disabled'}`} onClick={() => {
                        if (!linkEnabled) {
                            alert('안내 사항을 꼼꼼히 읽고, 체크박스를 모두 클릭해주세요.')
                        }
                    }} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }} href={linkEnabled ? url : undefined}>42 SEOUL 지원하기</a>
                </FormGroup>
            </ThemeProvider>
        </div>
    )
}

const url = "https://apply.42seoul.kr/"
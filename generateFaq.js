var Axios = require("axios");
var fs = require('fs');
var path = require("path");

var url = "https://raw.githubusercontent.com/innovationacademy-kr/FAQ/master/README.md"

function generate() {
    return new Promise((resolve, reject) => {
        Axios.get(url).then(response => {
            var mdText = response.data;
            var lines = mdText.split('\n')
            var line = ""
            var lineIndex = 0;
            var qnas = [];
            var categories = [];
            var currentCategory = null;
            var currentQuestion = null;
            do {
                line = lines[lineIndex];
                if (line.startsWith("### ")) {
                    var question = line.substr(4)
                    currentQuestion = { category: currentCategory, q: question, a: [] }
                    qnas.push(currentQuestion)
                } else {
                    if (line.startsWith("## ")) {
                        if (line.startsWith("## 이 문서의 저작권")) {
                            // 문서 종료
                            break;
                        } else {
                            currentCategory = getCategoryName(line.substr(3))
                            if (categories.findIndex(item => item === currentCategory) < 0) {
                                categories.push(currentCategory);
                            }

                            // 카테고리 자체가 질문인 경우
                            if (lines[lineIndex + 2] && lines[lineIndex + 2].startsWith("* ")) {
                                currentQuestion = { category: currentCategory, q: line.substr(3), a: [] }
                                qnas.push(currentQuestion)
                            }
                        }
                    } else if (line.startsWith("* ")) {
                        if (currentQuestion) {
                            currentQuestion.a.push(line.substr(2))
                        }
                    }
                }

                lineIndex++;
            } while (lineIndex < lines.length);

            var json = JSON.stringify({ categories, qnas });
            fs.writeFileSync(path.join(__dirname, "build/faq.json"), json);
            resolve(json);
        }).catch(error => {
            reject(error);
        })
    })
}

function getCategoryName(category) {
    switch (category) {
        case "선발 자격, 모집 규모와 절차":
            return "지원 및 선발";
    }
    return category;
}

module.exports = generate
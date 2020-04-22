import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppBarGlobalConfig } from '../components/AppBar';
import apis from '../apis';

interface News {
    title: string | undefined
    summary: string | undefined
    thumbnail: string | undefined
    author: string | undefined
    link: string | undefined
}

const slickSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    centerMode: false,
    responsive: [{
        breakpoint: 769,
        settings: {
            variableWidth: false,
            dots: true
        }
    }]
};

const onNewsPageScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const storiesElements = document.getElementsByClassName("stories");
    if (storiesElements.length > 0) {
        const offsetTop = (storiesElements[0] as any).offsetTop
        AppBarGlobalConfig.setColor(offsetTop <= scrollTop ? "default" : "invert");
    } else {
        AppBarGlobalConfig.setColor("invert")
    }
}

function insertBr(text?: string) {
    return text ? text.replace(/\n/gi, "<br>") : ""
}

const News: React.FC = () => {
    const [newsData, setNewsData] = useState<News[] | null>(null);
    const [storiesData, setStoriesData] = useState<News[] | null>(null);
    useEffect(() => {
        fetchData();
        return () => { };
    }, [])

    useEffect(() => {
        onNewsPageScroll()
        window.addEventListener('scroll', onNewsPageScroll)
        return () => {
            window.removeEventListener('scroll', onNewsPageScroll)
            AppBarGlobalConfig.setColor('default');
        };
    }, [])

    const fetchData = async () => {
        let newsData = [], storiesData = [];
        let errorMessage = null;
        try {
            const response = await apis.getBoardPosts(1);
            storiesData = response.data.content;
        } catch (error) {
            errorMessage = '뉴스를 불러오는 데 실패했습니다.'
        }
        try {
            const response = await apis.getBoardPosts(2);
            newsData = response.data.content;
        } catch (error) {
            errorMessage = '뉴스를 불러오는 데 실패했습니다.'
        }
        setNewsData(newsData)
        setStoriesData(storiesData)
        if (errorMessage) {
            alert(errorMessage)
        }
    }

    return (
        <div className="news-page">
            <section className="title default-page-padding-top">
                <h1 className="max-width-section">42 SEOUL에 대한<br />새로운 소식을 만나보세요.</h1>
            </section>
            {storiesData && <section className="stories max-width-section">
                <h2>42 SEOUL 뉴스</h2>
                {/* <p>42 SEOUL이 만든 이야기들입니다.</p> */}
                <Slider {...slickSettings}>
                    {storiesData.map((item, key) => {
                        return <div className="story" key={key}>
                            <a target="_blank" rel="noopener noreferrer" href={item.link}>
                                <img src={item.thumbnail} alt="" />
                                <div>
                                    <p className="title">{item.title}</p>
                                    <p className="desc" dangerouslySetInnerHTML={{ __html: insertBr(item.summary) || "" }}></p>
                                </div>
                            </a>
                        </div>
                    })}
                </Slider>
            </section>}
            {
                newsData && <section className="news max-width-section">
                    {/* <h2>42 SEOUL에 대한 여러 소식들</h2>
                    <p>42 SEOUL에 대해 외부에서 만들어진 소식들입니다.</p> */}
                    <div className="grid">
                        {newsData.map((item, key) => {
                            return <div key={key}>
                                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                                    <div className="img" style={{ backgroundImage: `url(${item.thumbnail})` }} />
                                    <p className="title">{item.title}</p>
                                    <p className="desc" dangerouslySetInnerHTML={{ __html: insertBr(item.summary) || "" }}></p>
                                    <span className="from">{item.author}</span>
                                </a>
                            </div>
                        })}
                    </div>
                </section>
            }
        </div >
    )
}

export default News;
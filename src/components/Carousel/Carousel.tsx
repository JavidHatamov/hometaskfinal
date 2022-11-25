import "../Carousel/Carousel.css";
import { PersonalBlog } from "../PersonalBlog/PersonalBlog";
import image1 from "../../assets/images/Anton.png";
import image2 from "../../assets/images/Aleksandr.png";
import image3 from "../../assets/images/Vasili.png";
import { useState } from "react";
interface ICarouselProps {
    title: string;
}


export const Carousel = (props: ICarouselProps) => {
    const { title } = props;
    const persons = [
        {
            text: 'Рассказать могу много, но это будет субъективный рассказ, потому что я учился на профиле, который все почему-то обходят) Ты собираешься поступать на бакалавриат или уже в магистратуру?<br>Вообще не было ощущения, что тебе просто дали доступ к материалу и ты сидишь один дома и просто самостоятельно все изучаешь.<span className="desktop-only">Спринты, дедлайны... даже не знаю как все описать, но это было совсем по другому. В slack постоянно была какая-то активность. От всех чувствовалась поддержка, как от команды практикума, так и от ребят.</span>',
            imageSrc: image1,
            name: 'Антон Пабаловец',
            University: 'Technical University',
        },
        {
            text: 'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
            imageSrc: image2,
            name: 'Александр Никоноров',
            University: 'Law University',
        },
        {
            text: 'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
            imageSrc: image3,
            name: 'Василий Скворцов',
            University: 'Chemical University',
        },
        {
            text: 'Рассказать могу много, но это будет субъективный рассказ, потому что я учился на профиле, который все почему-то обходят) Ты собираешься поступать на бакалавриат или уже в магистратуру?<br>Вообще не было ощущения, что тебе просто дали доступ к материалу и ты сидишь один дома и просто самостоятельно все изучаешь.<span className="desktop-only">Спринты, дедлайны... даже не знаю как все описать, но это было совсем по другому. В slack постоянно была какая-то активность. От всех чувствовалась поддержка, как от команды практикума, так и от ребят.</span>',
            imageSrc: image1,
            name: 'Антон Пабаловец',
            University: 'Physical University',
        },
        {
            text: 'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
            imageSrc: image2,
            name: 'Александр Никоноров',
            University: 'Technical University',
        },
        {
            text: 'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
            imageSrc: image3,
            name: 'Василий Скворцов',
            University: 'Law University',
        },
        {
            text: 'Рассказать могу много, но это будет субъективный рассказ, потому что я учился на профиле, который все почему-то обходят) Ты собираешься поступать на бакалавриат или уже в магистратуру?<br>Вообще не было ощущения, что тебе просто дали доступ к материалу и ты сидишь один дома и просто самостоятельно все изучаешь.<span className="desktop-only">Спринты, дедлайны... даже не знаю как все описать, но это было совсем по другому. В slack постоянно была какая-то активность. От всех чувствовалась поддержка, как от команды практикума, так и от ребят.</span>',
            imageSrc: image1,
            name: 'Антон Пабаловец',
            University: 'Chemical University',
        },
        {
            text: 'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
            imageSrc: image2,
            name: 'Александр Никоноров',
            University: 'Physical University',
        }
    ];
    const PersonalBlogWidth=520;
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    const leftButtonClickHandler = () => {
        setCurrentSlideNumber(currentSlideNumber-1);
    }

    const rightButtonClickHandler = () => {
        setCurrentSlideNumber(currentSlideNumber+1);
    }




    return (
        <div className="commentBlog ">
            <div className="abovePart">
                <h2>Отзывы реальных<br />студентов</h2>
                <div className="scroll1">
                    <button className="firstBtn btn" disabled={currentSlideNumber===0} onClick={leftButtonClickHandler}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none" className="arrow left">
                        <path d="M22 9L3.83 9L9.42 14.59L8 16L3.49691e-07 8L8 -3.49691e-07L9.41 1.41L3.83 7L22 7L22 9Z" fill="black" />
                    </svg></button>
                    <div className="linescroll">
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    <button className="secondBtn btn"disabled={currentSlideNumber===persons.length-3} onClick={rightButtonClickHandler}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none" className="arrow right">
                        <path d="M-3.93403e-07 9L18.17 9L12.58 14.59L14 16L22 8L14 -3.49691e-07L12.59 1.41L18.17 7L-3.0598e-07 7L-3.93403e-07 9Z" fill="black" />
                    </svg></button>
                </div>
            </div>
            <div className="belowPart">
                {
                    persons.map((person, index) =>(
                    <PersonalBlog 
                            text={person.text}
                            imageSrc={person.imageSrc}
                            name={person.name}
                            University={person.University}
                            marginLeft={index===0 ? `${-PersonalBlogWidth * currentSlideNumber}px` : ""}                    />
                    ))}
            </div>
        </div>
    );
}
import { Carousel } from "../../../../../../components/Carousel/Carousel";
import "../FifthBlock/FifthBlock.css";

const persons=[
    {
        text:'Рассказать могу много, но это будет субъективный рассказ, потому что я учился на профиле, который все почему-то обходят) Ты собираешься поступать на бакалавриат или уже в магистратуру?<br>Вообще не было ощущения, что тебе просто дали доступ к материалу и ты сидишь один дома и просто самостоятельно все изучаешь.<span class="desktop-only">Спринты, дедлайны... даже не знаю как все описать, но это было совсем по другому. В slack постоянно была какая-то активность. От всех чувствовалась поддержка, как от команды практикума, так и от ребят.</span>',
        imageSrc:"assets/Anton.png",
        name:'Антон Пабаловец',
        University:'Technical University',
    },
    {
        text:'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
        imageSrc:"assets/Aleksandr.png",
        name:'Александр Никоноров',
        University:'Law University',
    },
    {
        text:'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
        imageSrc:"assets/Vasili.png",
        name:'Василий Скворцов',
        University:'Chemical University',
    },
    {    text:'Рассказать могу много, но это будет субъективный рассказ, потому что я учился на профиле, который все почему-то обходят) Ты собираешься поступать на бакалавриат или уже в магистратуру?<br>Вообще не было ощущения, что тебе просто дали доступ к материалу и ты сидишь один дома и просто самостоятельно все изучаешь.<span class="desktop-only">Спринты, дедлайны... даже не знаю как все описать, но это было совсем по другому. В slack постоянно была какая-то активность. От всех чувствовалась поддержка, как от команды практикума, так и от ребят.</span>',
        imageSrc:"assets/Anton.png",
        name:'Антон Пабаловец',
        University:'Physical University',
    },
     {
        text:'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
        imageSrc:"assets/Aleksandr.png",
        name:'Александр Никоноров',
        University:'Technical University',
    },
    {
        text:'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
        imageSrc:"assets/Vasili.png",
        name:'Василий Скворцов',
        University:'Law University',
    },
    {
        text:'Рассказать могу много, но это будет субъективный рассказ, потому что я учился на профиле, который все почему-то обходят) Ты собираешься поступать на бакалавриат или уже в магистратуру?<br>Вообще не было ощущения, что тебе просто дали доступ к материалу и ты сидишь один дома и просто самостоятельно все изучаешь.<span class="desktop-only">Спринты, дедлайны... даже не знаю как все описать, но это было совсем по другому. В slack постоянно была какая-то активность. От всех чувствовалась поддержка, как от команды практикума, так и от ребят.</span>',
        imageSrc:"assets/Anton.png",
        name:'Антон Пабаловец',
        University:'Chemical University',
    },
    {
        text:'Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с проектом, Марина Левушкина, напоминающая о дедлайне)))! Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)',
        imageSrc:"assets/Aleksandr.png",
        name:'Александр Никоноров',
        University:'Physical University',
    }
]


export const FifthBlock = () => {
    return(
        <div className="fifth-block container">
        <Carousel title={"Отзывы реальных студентов"} />
    </div>
    );
}
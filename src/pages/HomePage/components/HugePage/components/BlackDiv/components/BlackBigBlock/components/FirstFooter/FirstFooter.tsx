import "../FirstFooter/FirstFooter.css";

export const FirstFooter = () => {
    return(
        <div id="firstfooter">
        <div id="onlyone">
            <h2>Вопрос-ответ:</h2>
            <p className="desktop-only">Мы отобрали вопросы, которые задают<br />нашим менеджерам каждый день</p>
        </div>
        <div><p className="margin-35">Где учиться по удаленной специальности?</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="padding-46">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H9V9H0V11H9V20H11V11H20V9H11V0Z" fill="white" />
            </svg>
        </div>
        <div><p className="margin-35">Как проходит дистанционное обучение?</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="padding-46">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H9V9H0V11H9V20H11V11H20V9H11V0Z" fill="white" />
            </svg>
        </div>
        <div><p className="margin-35">Какой документ об образовании выдается после дистанционной учебы<br />в колледже или вузе?</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="padding-46">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H9V9H0V11H9V20H11V11H20V9H11V0Z" fill="white" />
            </svg>
        </div>
        <div><p className="margin-35">Я решил поступать. Что дальше делать?</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="padding-46">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H9V9H0V11H9V20H11V11H20V9H11V0Z" fill="white" />
            </svg>
        </div>
    </div>
    );
}
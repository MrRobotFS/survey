import React from 'react';

const Poll = () => {

    const hideTitle = document.querySelector('.title');

    return (
    <section className="surveys">
        <div className="surveys__container">
            <iframe width="100%" height="800" overflow="hidden" src="https://strawpoll.com/embed/p1qd1pzcs" className="surveys__poll" frameborder="0" allowfullscreen></iframe>
        </div>
    </section>);
}

export default Poll;
const EventDemo = () => {
    const clickEvent = () => {
        console.log("Button clicked");
    }

    const copyEvent = () => {
        console.log("Content Copied");
    }

    const hoverEvent = () => {
        console.log("Hovered");
    }

    return (
        <div>
            <button onClick={clickEvent}>Click</button>
            <p onCopy={copyEvent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores cumque distinctio dolor
                esse, fugiat, ipsa nemo nihil optio quod repellendus sunt! Dolore hic nesciunt odio quo tempora tempore
                ut.</p>
            <p onMouseMove={hoverEvent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at blanditiis dolor ducimus enim
                fuga harum inventore, ipsum iure iusto laborum maiores officia quisquam quo reiciendis rem repudiandae
                suscipit. Sint.</p>
        </div>
    )
};
export default EventDemo;
const InlineStyle = () => {
    const styleInline = {color:'green'};
    return (
        <div>
            {/*Style will take an object */}
            <h1 style={{
                color: 'red',
                fontSize: '2rem',
                fontWeight: 'bold',
                backgroundColor: 'gray',
            }}>Hello</h1>

            <h2 style={styleInline}>Inline Style</h2>
        </div>
    )
};
export default InlineStyle;
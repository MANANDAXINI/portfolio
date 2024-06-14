function Football() {
    const shoot = (a) => {
        alert(a);
    }

    return (
        React.createElement('button', { onClick: () => shoot("GOAL") }, 'Take the shot')
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Football));

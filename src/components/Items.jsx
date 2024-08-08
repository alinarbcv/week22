function Items(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.imgLink} alt={props.title}/>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <button className="card-add">Выбрать героя</button>
            </div>
        </div>
    );
}

export default Items;
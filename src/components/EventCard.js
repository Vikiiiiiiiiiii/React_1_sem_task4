function EventCard(props){
    const now = new Date().toLocaleTimeString();
    return(
        <div>
            <h1 className = "heading">Событие: {props.name} состоится: {props.data} в {props.place}.</h1>
        </div>
    )
}

export default EventCard;

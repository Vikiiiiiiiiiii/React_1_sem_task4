function CurrentTime(){
    const now = new Date().toLocaleTimeString();
    return(
        <div>
            <h1 className = "heading">Текущее время: {now} </h1>
        </div>
    )
}

export default CurrentTime;
// style={{color: 'white'}}
function GoalForm(props) {

    return (
        <form action="submit">
            <label htmlFor="goalTitle">What's your habit goal?</label>
            <input id="goalTitle" type="text" onChange={props.handleNameChange}/>
            <label htmlFor="goalLength">How long will your goal be in days?</label>
            <input id="goalLength" type="number" onChange={props.handleNumChange}/>
            <button onClick={props.handleSubmit}>Add goal</button>
        </form>
    )
}

export default GoalForm;
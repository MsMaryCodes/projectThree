function GoalForm() {

    return (
        <form>
            <label htmlFor="goalTitle">What's your habit goal?</label>
            <input id="goalTitle" type="text" />
            <label htmlFor="goalLength">How long will your goal be?</label>
            <input id="goalLength" type="number"/>
            <button>Add goal</button>
        </form>
    )
}

export default GoalForm;
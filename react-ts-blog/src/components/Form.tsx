const Form = () => {
    const [inputValues, setInputValues] = ({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })
 const handleSubmit = () => {

 }  

 const handleChange = e => {
    setInputValues({
        ...inputValues, [e.target.name]: e.target.value
    })
 }
 return (
    <div>
        <form action="
        ">
            <input value={inputValues.nick} type="text" name="nick" placeholder="nick"/>
            <input value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonths"/>
            <input value={inputValues.avatar} type="text" name="avatar" placeholder="avatar"/>
            <input value={inputValues.description} type="text" name="description" placeholder="description"/>
            <button>Save new sub!</button>
        </form>
    </div>
 ) 
}

export default Form;
const Description = () => {
    const [descriptions, setDescriptions] = useState([])
    const addDescription = () => {
        const newDescription = "random"
        setDescriptions(n => [...notes, newDescription])
    }

    return(
        <div>
            <h1>Button:</h1>
            {descriptions.map((description, index)=> (
                <p key={index}>{description}</p>
            ))}
        </div>
    )

}
const WorkingWithListObjVal = () => {
    const persons = [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            age: 28,
            city: "New York"
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            age: 32,
            city: "London"
        },
        {
            id: 3,
            firstName: "Michael",
            lastName: "Johnson",
            age: 24,
            city: "Toronto"
        },
        {
            id: 4,
            firstName: "Emily",
            lastName: "Brown",
            age: 29,
            city: "Sydney"
        },
        {
            id: 5,
            firstName: "David",
            lastName: "Wilson",
            age: 35,
            city: "Berlin"
        }
    ];

    return (
        <div>
            {
                persons.map(
                    (
                        {
                            id,
                            firstName,
                            lastName,
                            city,
                            age
                        }
                    ) => {
                        return (
                            <ul key={id}>
                                <li>{firstName}</li>
                                <li>{lastName}</li>
                                <li>{age}</li>
                                <li>{city}</li>
                            </ul>
                        )
                    })
            }
        </div>
    );
};
export default WorkingWithListObjVal;